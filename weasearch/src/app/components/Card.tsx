import React from 'react';

export default function HomePageCard({
  params,
}: {
  params: { cardTitle: string; cardDesription: string; buttonText: string; imgUrl: string };
}) {
  return (
    <div className="bg-transparent w-full sm:w-[24rem] lg:w-[24rem] min-h-[32rem] flex flex-col text-left items-start mx-auto">
      <img
        src={params.imgUrl}
        alt={params.cardTitle}
        className="w-full h-[18rem] sm:h-[24rem] object-contain rounded-md"
      />
      <div className="mt-2 justify-items-center md:justify-items-start">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">{params.cardTitle}</h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base text-center md:text-start">{params.cardDesription}</p>
        <button className="bg-[#A586E8] text-white font-bold px-4 text-sm py-2 rounded-lg mt-6">
          {params.buttonText}
        </button>
      </div>
    </div>
  );
}
