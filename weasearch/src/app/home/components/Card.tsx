import React from 'react';

export default function HomePageCard({
  params,
}: {
  params: { cardTitle: string; cardDesription: string; buttonText: string; imgUrl: string };
}) {
  return (
    <div className="bg-transparent w-[24rem] h-[32rem] flex flex-col text-center items-center">
      {/* Fixed image size */}
      <img
        src={params.imgUrl}
        alt={params.cardTitle}
        className="w-[24rem] h-[24rem] object-fit rounded-md"
      />
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">{params.cardTitle}</h2>
        <p className="text-gray-600 mt-4">{params.cardDesription}</p>
        <button className="bg-purple-500 text-white px-8 py-3 rounded-full mt-6 hover:bg-purple-600">
          {params.buttonText}
        </button>
      </div>
    </div>
  );
}
