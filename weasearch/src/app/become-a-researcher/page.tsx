import React from 'react';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-theme styles

export default function Home() {
    return (
        <div>
            <div className="h-screen flex">
                <div className="flex-1 flex justify-center items-center bg-gray-200">
                    <video src="/Pay-it-forward.mp4" controls className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-between p-5 bg-[#070B20]">
                    <div className="flex-1 flex justify-center items-center">
                        <h1 className="text-center text-5xl tracking-wide font-bold mt-16">
                            Shape the future<br />through Research.
                        </h1>
                    </div>
                    <div className='items-end justify-items-end'>
                        <img src="/plug-md.png" alt="Plug" className="max-w-full h-32 -mb-32 -mr-6" />
                    </div>
                    <div className="flex justify-center items-end">
                        <img src="/hammer-gif.gif" alt="Hammer GIF" className="max-w-full h-40 -mb-4 -ml-6" />
                    </div>
                </div>

            </div>
            <div className="h-screen flex flex-col md:flex-row justify-between bg-gradient-to-b from-[#0B1C1C] to-[#050818] p-6">
                <div className="flex-1 text-center md:text-left flex items-center justify-center md:justify-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Connect with your younger self and offer the guidance you wish you had.
                        </h2>
                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                            Become a Researcher
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-end">
                    <div className="flex justify-center mb-4">
                        <img src="/lamp.png" alt="Lamp" className="max-w-full h-32 md:h-48" />
                    </div>
                    <img src="/new-comp.png" alt="New Component" className="max-w-full h-72 md:h-96 mb-auto" />
                </div>
            </div>

        </div>
    );
}
