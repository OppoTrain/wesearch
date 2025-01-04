// components/Card.tsx

import { FaUserGraduate, FaUser } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  onSelect: () => void;
  icon: React.ReactNode;
};

const Card = ({ title, description, onSelect, icon }: CardProps) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto h-[420px] flex flex-col items-center justify-between hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-5xl font-bold text-center mb-4 text-gray-800 uppercase">{title}</h3>
      <div className="flex justify-center mb-6 text-8xl text-orange-600">
        {icon}
      </div>
      <p className="text-base text-center text-gray-700 mb-6 px-4">{description}</p>
      <button
        onClick={onSelect}
        className="py-3 px-6  bg-white text-black font-semibold rounded-lg border-2 transition-all duration-300 transform hover:bg-purple-100 w-36 mx-auto"
      >
        Select
      </button>
    </div>
  );
};

export default Card;
