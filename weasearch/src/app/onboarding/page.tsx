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
    return <div>Loading...</div>; 
  }

  return (
  <div className="h-[100vh] bg-[#0F4547] flex flex-col items-center">
       <div className="absolute w-10/12 h-8 bg-white"></div>

      <h1 className="text-white text-4xl mt-20 font-serif uppercase font-bold">
        Select Your Role
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card
          title={"Expert"}
          description="As a expert, you’re seeking guidance and mentorship to navigate your educational and career journey."
          onSelect={() => handleSelectRole("expert")}
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
