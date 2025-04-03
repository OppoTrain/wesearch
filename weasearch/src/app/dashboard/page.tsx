'use client';
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaHome, FaUsers, FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("home");
    const [user, setUser] = useState<{ firstName: string | null, linkedIn:string | null,email: string | null, lastName: string | null, role?: string, city?: string, phone?: string, bio?: string } | null>(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.user?.email) {
            const fetchUser = async () => {
                try {
                    const response = await fetch("/api/getUser", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: session?.user?.email }),
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        setUser(userData);
                    } else {
                        console.error("Error fetching user:", await response.json());
                    }
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            };

            fetchUser();
        }
    }, [status, session]);

    if (status === "loading") {
        return <div className="bg-black text-white h-[100vh]">Loading...</div>;
    }

    if (!session) {
        return <div className="bg-black text-white h-[100vh]">Please log in to view this page.</div>;
    }

    return (
        <div className="bg-zinc-700 h-[100vh]">
            <div className="px-48 h-[100vh] flex">
                {/* Sidebar */}
                <div className="bg-white w-1/3 border-r-2 border-gray-200">
                    <div className="p-8">
                        {/* Profile Section */}
                        <div className="flex items-center mb-12">
                            <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                                {user?.firstName?.[0]?.toLowerCase() + ' ' + user?.lastName?.[0]?.toLowerCase() || "?"}
                            </div>
                            <div className="ml-6">
                                <p className="mt-4 font-bold text-xl text-black">
                                    {user?.firstName + ' ' + user?.lastName || "Loading..."}
                                </p>
                                <button
                                    onClick={() => setActiveTab("profile")}
                                    className="text-purple-500 text-sm font-medium hover:underline"
                                >
                                    View profile
                                </button>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-6">
                            <div
                                onClick={() => setActiveTab("home")}
                                className={`flex items-center text-lg w-full px-6 py-4 cursor-pointer ${activeTab === "home"
                                    ? "text-white bg-gradient-to-r from-[#D3C5FA] to-[#FCFBFF]"
                                    : "text-gray-700 hover:text-purple-500"
                                    }`}
                            >
                                <FaHome className="mr-4 text-xl" />
                                Home
                            </div>
                            <div
                                onClick={() => setActiveTab("connectedResearchers")}
                                className={`flex items-center text-lg w-full px-6 py-4 cursor-pointer ${activeTab === "connectedResearchers"
                                    ? "text-white bg-gradient-to-r from-[#D3C5FA] to-[#FCFBFF]"
                                    : "text-gray-700 hover:text-purple-500"
                                    }`}
                            >
                                <FaUsers className="mr-4 text-xl" />
                                Connected Researchers
                            </div>
                            <div
                                onClick={() => setActiveTab("connections")}
                                className={`flex items-center text-lg w-full px-6 py-4 cursor-pointer ${activeTab === "connections"
                                    ? "text-white bg-gradient-to-r from-[#D3C5FA] to-[#FCFBFF]"
                                    : "text-gray-700 hover:text-purple-500"
                                    }`}
                            >
                                <FaUserCircle className="mr-4 text-xl" />
                                Connections
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white flex-1 p-10">
                {activeTab === "home" && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-800">Hello, <span className="text-orange-500">{user?.firstName || "Guest"}</span></h1> 
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-base"> 
                                    + New Mentorship Request
                                </button>
                            </div>
                            <h2 className=" text-black mt-12">Overview</h2>
                            <div className="grid grid-cols-2 gap-6 mt-4">
                                <div className="bg-white border rounded-lg p-6 shadow-sm"> 
                                    <h2 className="text-gray-700 font-semibold text-lg mb-1">Current Connections</h2>
                                    <p className="text-4xl font-bold text-gray-800">0</p>
                                </div>
                                <div className="bg-white border rounded-lg p-6 shadow-sm"> 
                                    <h2 className="text-gray-700 font-semibold text-lg mb-1">Mentorship Requests</h2>
                                    <p className="text-4xl font-bold text-gray-800">0</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "connectedResearchers" && (
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                Connected Researchers
                            </h1>
                            <p className="mt-4 text-gray-700">
                                No connected researchers at the moment.
                            </p>
                        </div>
                    )}
                    {activeTab === "connections" && (
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Connections</h1>
                            <p className="mt-4 text-gray-700">
                                No connections found at the moment.
                            </p>
                        </div>
                    )}

{activeTab === "profile" && (
    <div className="mt-20 flex flex-col items-start w-full">
        <div className="flex items-center mb-12 w-full">
            <div className="bg-orange-500 text-white rounded-full w-36 h-36 flex items-center justify-center text-5xl font-bold mr-10">
                {user?.firstName?.[0]?.toUpperCase() || "?"}
            </div>
            <div>
                <h1 className="text-4xl font-bold text-gray-800">{user?.firstName} {user?.lastName}</h1>
                <p className="text-xl text-gray-600">{user?.role || "Role not available"}</p>
                <p className="flex items-center text-gray-800 mt-4 text-xl">
                    <FaMapMarkerAlt className="mr-3 text-lg" />
                    {user?.city || 'Not Set'}
                </p>
            </div>
            <div className="ml-auto">
                <button className="bg-purple-100 text-purple-600 px-5 py-3 rounded-md text-lg">Edit Profile</button>
            </div>
        </div>

        <div className="flex w-full mb-10">
            <div className="flex items-center mr-16 text-xl text-black">
                <FaEnvelope className="mr-4 text-lg" />
                <span>{user?.email || 'Not Set'}</span>
            </div>
            {user?.linkedIn && ( // Conditionally render LinkedIn icon
                <a href={user.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center mr-16 text-xl text-blue-500 hover:text-blue-700"> {/* Added link styling */}
                    <FaLinkedin className="mr-4 text-lg" />
                    <span>LinkedIn</span> {/* Optional LinkedIn text */}
                </a>
            )}
            <div className="flex items-center text-xl text-black">
                <FaPhone className="mr-4 text-lg" />
                <span>{user?.phone || 'Not Set'}</span>
            </div>
        </div>

        <div className="w-full">
            <p className="text-gray-600 font-bold mb-4 text-xl">About</p>
            <p className="text-gray-800 text-lg">{user?.bio || 'Not Set'}</p>
        </div>
    </div>
)}
                </div>
            </div>
        </div>
    );
}
