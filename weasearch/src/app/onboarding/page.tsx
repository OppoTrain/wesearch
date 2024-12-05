"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaUserGraduate, FaUser } from "react-icons/fa";
import Card from "../components/RoleCard";

export default function PageName() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait until session is loaded
    if (!session) {
      // If no session, redirect to the sign-in page
      router.push("/sign-in");
      return;
    }

    // Fetch user information to check role
    const checkRole = async () => {
      try {
        const response = await fetch("/api/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: session?.user?.email }),
        });

        const user = await response.json();
        if (response.status !== 200 || !user) {
          console.error("Error fetching user role");
          router.push("/sign-in");
          return;
        }

        // Redirect if the user already has a role
        if (user.role) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        router.push("/sign-in");
      }
    };

    checkRole();
  }, [session, status, router]);

  const handleSelectRole = (role: string) => {
    console.log(`${role} selected`);
    router.push(`/onboarding/${role}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading indicator while the session is being checked
  }

  return (
    <div className="h-[100vh] bg-gray-500 flex flex-col items-center">
      <h1 className="text-white text-4xl mt-40 font-serif uppercase">
        Select Your Role
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card
          title={"Student"}
          description="As a student, you’re seeking guidance and mentorship to navigate your educational and career journey."
          onSelect={() => handleSelectRole("student")}
          icon={<FaUser />}
        />
        <Card
          title="Researcher"
          description="As a researcher, you’ll be contributing to advancing knowledge and finding innovative solutions to real-world problems."
          onSelect={() => handleSelectRole("researcher")}
          icon={<FaUserGraduate />}
        />
      </div>
    </div>
  );
}
