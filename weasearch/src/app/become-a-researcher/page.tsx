'use client'
import React, { useState, useEffect } from "react";
import Slider from 'react-slick';

const carouselItems = [
    {
        image: "/circ2.png",
        quote: "“I understand the profound influence a mentor can have on one’s career, and I believe in paying it forward.”",
        name: "John Doe",
        position: "Director of Solution Engineering @ Twilio"
    },
    {
        image: "/circ2.png",
        quote: "“A great mentor is someone who pushes you to be the best version of yourself.”",
        name: "Jane Smith",
        position: "VP of Engineering @ Google"
    },
    {
        image: "/circ2.png",
        quote: "“Mentorship is not just about career guidance, but about shaping the future.”",
        name: "Tom Brown",
        position: "Head of Product @ Microsoft"
    },
];

export default function Home() {
    const [textIndex, setTextIndex] = useState(0);

    const changingTexts = [
        "44.2% of our researchers are first-generation college students.",
        "65.8% of our researchers come from underrepresented communities.",
        "34.1% of our researchers are international students.",
        "72.4% of our researchers are pursuing STEM degrees.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
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
            <div className="px-72 bg-[#050818] ">
                <h2 className="text-3xl text-white text-center mb-24">
                    Cultivate meaningful<br />connections and expand<br />your network.
                </h2>
                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex flex-col justify-items-center items-center ">
                            <div className="w-full flex justify-center mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-48 h-48 object-cover rounded-full"
                                />
                            </div>
                            <p className="text-white text-lg justify-items-center text-center mb-4 w-full md:w-80 px-4">{item.quote}</p>
                            <p className="text-[#987DD9] text-xl font-semibold mb-2 text-center italic">{item.name}</p>
                            <p className="text-gray-400 text-sm text-center">{item.position}</p>
                        </div>
                    ))}
                </Slider>

            </div>
            <div className="bg-gradient-to-b from-[#050818] via-[#050818] to-[#18383E] flex items-center justify-between ">
                <div className="w-4/12">
                    <img src="/land-left.png" alt="Land Left" className="w-full h-auto" />
                </div>

                <div className="flex-1 text-center -ml-28">
                    <h2 className="text-[#987DD9] text-4xl font-bold mb-6">Bridge the gap</h2>
                    <div className="relative inline-block">
                        <div
                            className="flip-text text-white text-xl transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `rotateX(${textIndex % 2 === 0 ? 0 : 180}deg)`,
                                opacity: textIndex % 2 === 0 ? 1 : 0,
                            }}
                        >
                            {changingTexts[textIndex]}
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-1/4">
                    <img src="/land-right.png" alt="Land Right" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}
