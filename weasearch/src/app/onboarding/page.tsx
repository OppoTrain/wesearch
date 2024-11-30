"use client";

import { SessionProvider, useSession } from "next-auth/react";
import React from "react";
import { FaUserGraduate, FaUser } from "react-icons/fa";
import Card from "../components/RoleCard";
import { useRouter } from "next/navigation";
export default function PageName() {
  const { data: session } = useSession();
  const router = useRouter(); 

  const handleSelectRole = (role:string) => {
    console.log(`${role} selected`);
    router.push(`/onboarding/${role}`)
  };

  return (
      <div className="h-[100vh] bg-gray-500 flex flex-col items-center">
        <h1 className="text-white text-4xl mt-40 font-sarif uppercase">Select Your Role</h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card
            title={"Student"}
            description="As a student, you’re seeking guidance and mentorship to navigate your educational and career journey."
            onSelect={() => handleSelectRole("student")}
            icon={<FaUser />}
          />
          {session?.user?.email}
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
