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
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is Wevise exclusively for the tech industry?",
            answer: "No, Wevise connects experts and researchers from various industries, not just tech.",
        },
        {
            question: "What’s the commitment?",
            answer: "The commitment varies depending on the researcher and the project, allowing flexibility.",
        },
        {
            question: "Who can be a researcher?",
            answer: "Any expert with a proven background in research can become a researcher on Wevise.",
        },
        {
            question: "Can I stop at any time?",
            answer: "Yes, you can stop or pause your involvement at any time without penalty.",
        },
        {
            question: "How do I make sure I get good matches?",
            answer: "By completing your profile thoroughly and specifying your areas of expertise and interest.",
        },
        {
            question: "How many researchers can I collaborate with at once?",
            answer: "You can collaborate with multiple researchers, depending on your availability and capacity.",
        },
        {
            question: "How will I know when I have a new match?",
            answer: "You will receive a notification whenever a new match is made based on your preferences.",
        },
        {
            question: "Will the researchers know that I’ve declined their request?",
            answer: "Yes, they will be notified if their request is declined, with a message explaining your decision.",
        },
    ];

    const handleToggle = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
            <div className="h-screen flex grid-cols-2">
                <div className="flex-1 w-1/2 flex justify-center items-center bg-gray-200">
                    <video src="/Pay-it-forward.mp4" controls className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 w-1/2 flex flex-col justify-between p-5 bg-[#070B20]">
                    <div className="flex-1 flex justify-center items-center">
                        <h1 className="text-center md:text-5xl tracking-wide font-bold mt-16 text-2xl">
                            Shape the future<br />through Research.
                        </h1>
                    </div>
                    <div className='items-end justify-items-end'>
                        <img src="/plug-md.png" alt="Plug" className="max-w-full h-32 -mb-32 -mr-4" />
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
                        <a href='/sign-up' className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                            Become a Researcher
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-end">
                    <div className="flex justify-center mb-4">
                        <img src="/lamp.png" alt="Lamp" className="max-w-full h-32 md:h-48" />
                    </div>
                    <img src="/new-comp.png" alt="New Component" className="max-w-full h-72 md:h-96 mb-auto" />
                </div>
            </div>
            <div className="px-8 sm:px-16 lg:px-72 bg-[#050818] py-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-12 sm:mb-16 lg:mb-24">
                    Cultivate meaningful<br />connections and expand<br />your network.
                </h2>
                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center text-center">
                            <div className="w-full flex justify-center mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                                />
                            </div>
                            <p className="text-white text-sm sm:text-md lg:text-lg mb-4 px-4 max-w-sm">
                                {item.quote}
                            </p>
                            <p className="text-[#987DD9] text-lg sm:text-xl font-semibold mb-2 italic">
                                {item.name}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">{item.position}</p>
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
            <div className="bg-white px-8 sm:px-12 lg:px-72 py-36">
                {/* Header */}
                <h2 className="text-4xl lg:text-4xl font-bold text-black mb-6">
                    Flexible mentorship tailored to your <br /> preferences.
                </h2>

                {/* Button */}
                <div className="mb-12">
                    <a href="/sign-up"
                        className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
                    >
                        Become a Researcher
                    </a>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col">
                        <img
                            src="/inhouse.jpg"
                            alt="Card 1"
                            className="w-full sm:w-[300px] lg:w-[378px] h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="font-bold text-2xl text-black mb-2">Flexible commitment</p>
                        <p className="text-gray-600">
                            Choose your commitment—from a little to as much as you like—and go
                            inactive with a single click.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col">
                        <img
                            src="/house.jpg"
                            alt="Card 2"
                            className="w-full sm:w-[300px] lg:w-[378px] h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="font-bold text-2xl text-black mb-2">Complete privacy</p>
                        <p className="text-gray-600">
                            We do not list your profile publicly. Your profile is only shown when
                            you offer mentorship to a mentee(s).
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col">
                        <img
                            src="/matches-1.jpg"
                            alt="Card 3"
                            className="w-full sm:w-[300px] lg:w-[378px] h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="font-bold text-2xl text-black mb-2">Curated matches</p>
                        <p className="text-gray-600">
                            Receive curated matches based on your expertise and lived experiences,
                            choosing who to mentor.
                        </p>
                    </div>
                </div>
            </div>
<div className="h-[66vh] bg-gradient-to-b from-[#01030C] to-[#042735] relative">
    <div className="h-full flex items-center justify-end pr-6 sm:pr-12 lg:pr-24 bg-[url('/city.png')] bg-cover bg-left-bottom">
        <div className="w-full sm:w-2/3 lg:w-1/3 text-white px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                You know more<br />than you think.
            </h2>

            <p className="text-md sm:text-lg lg:text-xl mb-6">
                As someone who has overcome challenges in the tech industry, you are uniquely qualified to guide others through similar obstacles.
            </p>

            <a href="sign-up" className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600">
                Become a Researcher
            </a>
        </div>
    </div>
</div>

<div className="h-auto flex items-center justify-center bg-white py-12">
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-6 sm:px-12 md:px-24 bg-white">
        <h2 className="text-3xl text-black text-center font-bold mb-8">Researcher FAQ's</h2>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b">
                    <button
                        className="w-full text-left py-4 text-xl font-semibold text-gray-800 flex items-center justify-between hover:text-blue-600 focus:outline-none"
                        onClick={() => handleToggle(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <p className="text-gray-600 text-lg mt-2">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
</div>



        </div>
    );
}
