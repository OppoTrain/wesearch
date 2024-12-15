'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedIn: string;
  bio: string;
}

export default function MeetTheTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Janice Levenhagen',
      position: 'CEO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Janice is the CEO and leads the vision of our company with over 20 years of experience in tech.',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'John has a passion for technology and is responsible for the technical direction of the company.',
    },
    {
      name: 'Jane Smith',
      position: 'CMO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Jane leads our marketing efforts and ensures our brand resonates with our audience.',
    },{
      name: 'Jane Smith',
      position: 'CMO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Jane leads our marketing efforts and ensures our brand resonates with our audience.',
    },{
      name: 'Jane Smith',
      position: 'CMO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Jane leads our marketing efforts and ensures our brand resonates with our audience.',
    },{
      name: 'Jane Smith',
      position: 'CMO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Jane leads our marketing efforts and ensures our brand resonates with our audience.',
    },{
      name: 'Jane Smith',
      position: 'CMO',
      image: '/Jon.png',
      linkedIn: 'https://linkedin.com',
      bio: 'Jane leads our marketing efforts and ensures our brand resonates with our audience.',
    },
  ];

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="px-8 md:px-72 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet the team</h1>
        <p className="text-lg text-gray-600">
          We’re a team of committed volunteers from diverse backgrounds who are
          passionate about leveling the playing field in tech (and beyond). We’re
          excited to continue to bring on skilled and passionate people to help
          us grow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 justify-items-center">
        {teamMembers.map((member, index) => (
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
                  className="w-10 h-10 flex justify-center items-center rounded-full border-2 bg-gray-100 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300 "
                >
                  <FaLinkedin size={20} className="text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal popup */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[80vw] h-[80vh] p-12 overflow-auto">
            <div className="flex items-start mb-6">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={120}
                height={120}
                className="w-32 h-32 object-contain rounded-full mr-6"
              />
              <div>
                <h3 className="text-3xl font-semibold">{selectedMember.name}</h3>
                <p className="text-xl text-gray-500">{selectedMember.position}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">{selectedMember.bio}</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg"
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
