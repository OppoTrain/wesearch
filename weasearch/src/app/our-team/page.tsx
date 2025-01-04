"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedIn: string;
  bio: string;
  role:string;
}

const filterCategories = ["Board", "Tech", "UI/UX", "Marketing", "Operations", "Product", "Programs"];

export default function MeetTheTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    { name: "Janice Levenhagen", position: "CEO", image: "/Jon.png", linkedIn: "https://linkedin.com", bio: "Janice is the CEO and leads the vision of our company with over 20 years of experience in tech.",role:'Board' },
    { name: "John Doe", position: "CTO", image: "/Jon.png", linkedIn: "https://linkedin.com", bio: "John has a passion for technology and is responsible for the technical direction of the company.", role:'Tech' },
    { name: "Jane Smith", position: "CMO", image: "/Jon.png", linkedIn: "https://linkedin.com", bio: "Jane leads our marketing efforts and ensures our brand resonates with our audience.", role:'UI/UX' },
  ];

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const filteredMembers = activeFilter
    ? teamMembers.filter((member) => member.role.includes(activeFilter))
    : teamMembers;

  return (
    <div className="px-8 md:px-72 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet the team</h1>
        <p className="text-lg text-gray-600">
          We’re a team of committed volunteers from diverse backgrounds who are passionate about leveling the playing field in tech (and beyond). We’re excited to continue to bring on skilled and passionate people to help us grow.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-12">
  {filterCategories.map((category) => (
    <div key={category} className="text-center">
      <button
        className={`px-8 py-1 rounded-full border-2 transition-all font-bold w-full md:w-auto ${
          activeFilter === category
            ? "bg-[#E7E2F3] text-[#3E384C]"
            : "bg-[#EEEFF2] text-[#765D7F]"
        } `}
        onClick={() => setActiveFilter(activeFilter === category ? null : category)}
      >
        <span className="underline">{category}</span>
      </button>
    </div>
  ))}
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 justify-items-center">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="relative text-left transform transition-all duration-300 hover:shadow-lg hover:translate-y-1 hover:border hover:border-white rounded-lg w-full max-w-md cursor-pointer"
            onClick={() => handleCardClick(member)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-72 object-contain rounded-t-lg"
            />
            <hr className="border-t border-gray-300 my-2" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
              <div className="mt-4 mb-4 flex justify-start items-center space-x-2 group">
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-full border-2 bg-gray-100 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300"
                >
                  <FaLinkedin size={20} className="text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row mb-6">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={128}
                height={128}
                className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMember.name}</h3>
                <p className="text-lg text-gray-500 mb-4">{selectedMember.position}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">{selectedMember.bio}</p>
                <a
                  href={selectedMember.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-all flex items-center"
                >
                  <FaLinkedin size={20} className="text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>



  );
}
