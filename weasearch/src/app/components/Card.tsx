import React from 'react';

export default function HomePageCard({
  params,
}: {
  params: { cardTitle: string; cardDesription: string; buttonText: string; imgUrl: string };
}) {
  return (
    <div className="bg-transparent w-full sm:w-[24rem] lg:w-[24rem] min-h-[32rem] flex flex-col text-center items-center mx-auto">
      <img
        src={params.imgUrl}
        alt={params.cardTitle}
        className="w-full h-[18rem] sm:h-[24rem] object-cover rounded-md"
      />
      <div className="mt-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">{params.cardTitle}</h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">{params.cardDesription}</p>
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-purple-600">
          {params.buttonText}
        </button>
      </div>
    </div>
  );
}
