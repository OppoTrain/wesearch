"use client";
import { useState } from "react";
import { FaBook, FaUsers, FaUserTie, FaHandshake, FaEnvelope, FaHandsHelping, FaSmile } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <SessionProvider>
      <nav className="bg-[#193334] text-gray-100 w-full z-20 shadow-lg h-auto">
        <div className="w-full flex items-center justify-between px-6 py-6 h-auto">
          <a href="/" className="flex items-center text-gray-100 space-x-2 text-xl font-semibold">
            <span className="text-3xl text-purple-500 font-bold">WeSearch</span>
          </a>

          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            <a href="blogs" className="flex items-center space-x-2 hover:text-purple-500">
              <FaBook className="text-lg" />
              <span>Stories</span>
            </a>
            <div className="relative">
              <button
                className="flex items-center space-x-2 hover:text-purple-500 z-20"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <FaUsers className="text-lg" />
                <span>About Us</span>
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className={`absolute mt-2 bg-gray-900 rounded-lg shadow-md text-sm text-gray-100 ${
                  dropdownOpen ? "block z-40" : "hidden"
                }`}
              >
                <li className="px-4 py-2 hover:bg-gray-700">
                  <a href="our-team">Our Team</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <a href="about-us">Contact Us</a>
                </li>
              </ul>
            </div>

            <a href="become-a-researcher" className="flex items-center space-x-2 hover:text-purple-500">
              <FaUserTie className="text-lg" />
              <span>Become a Researcher</span>
            </a>
            <a href="#donate" className="flex items-center space-x-2 hover:text-purple-500">
              <FaEnvelope className="text-lg" />
              <span>Donate</span>
            </a>
            <a href="/volunteer" className="flex items-center space-x-2 hover:text-purple-500">
              <FaHandsHelping className="text-lg" />
              <span>Volunteer</span>
            </a>
            <a href="/partnerships" className="flex items-center space-x-2 hover:text-purple-500">
              <FaHandshake className="text-lg" />
              <span>Partnerships</span>
            </a>
            {!session ? (
              <a href="sign-in" className="flex items-center space-x-2 hover:text-purple-500">
                <FaSmile className="text-lg" />
                <span>Login</span>
              </a>
            ) : (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 hover:text-purple-500"
              >
                <FaSmile className="text-lg" />
                <span>Sign Out</span>
              </button>
            )}
          </div>

          <a
            href="sign-up"
            className="hidden lg:inline-block text-white bg-purple-500 hover:bg-purple-600 hover:scale-105 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2 shadow-md transition-all ml-6"
          >
            Sign Up
          </a>

          {/* Button for smaller screens */}
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 text-gray-100 lg:hidden hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden z-10 bg-gray-800 text-gray-100 p-4">
            <a href="blogs" className="flex items-center space-x-2 py-2 hover:text-purple-500">
              <FaBook className="text-lg" />
              <span>Stories</span>
            </a>
            <div className="relative">
              <button
                className="flex items-center space-x-2 py-2 hover:text-purple-500"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <FaUsers className="text-lg" />
                <span>About Us</span>
              </button>
              {dropdownOpen && (
                <ul className="text-sm text-gray-100 bg-gray-900 p-2 rounded-lg">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <a href="our-team">Our Team</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <a href="about-us">Contact Us</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="become-a-researcher" className="flex items-center space-x-2 py-2 hover:text-purple-500">
              <FaUserTie className="text-lg" />
              <span>Become a Researcher</span>
            </a>
            <a href="#donate" className="flex items-center space-x-2 py-2 hover:text-purple-500">
              <FaEnvelope className="text-lg" />
              <span>Donate</span>
            </a>
            <a href="/volunteer" className="flex items-center space-x-2 py-2 hover:text-purple-500">
              <FaHandsHelping className="text-lg" />
              <span>Volunteer</span>
            </a>
            <a href="/partnerships" className="flex items-center space-x-2 py-2 hover:text-purple-500">
              <FaHandshake className="text-lg" />
              <span>Partnerships</span>
            </a>
            {!session ? (
              <a href="sign-in" className="flex items-center space-x-2 py-2 hover:text-purple-500">
                <FaSmile className="text-lg" />
                <span>Login</span>
              </a>
            ) : (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 py-2 hover:text-purple-500"
              >
                <FaSmile className="text-lg" />
                <span>Sign Out</span>
              </button>
            )}
            <a
              href="sign-up"
              className="block mt-4 text-white bg-purple-500 hover:bg-purple-600 hover:scale-105 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2 shadow-md transition-all"
            >
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </SessionProvider>
  );
};

export default NavBar;
