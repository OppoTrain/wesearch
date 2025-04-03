'use client'
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import NewsLetter from '../components/NewsLetter';
import { Metadata } from 'next';
const metadata: Metadata = {
  title: { absolute: 'Our Stories' },
  description: 'Read the latest stories and updates',
};

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: 'https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png',
      title: 'Volunteer of the Month',
      date: 'November 1, 2024',
      description: 'Congratulations to Ashton for his incredible efforts in the tech team this month!',
    },
    {
      image: 'https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png',
      title: 'New Website Launch',
      date: 'October 20, 2024',
      description: 'We are thrilled to announce the launch of our new website with improved features.',
    },
    {
      image: 'https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png',
      title: 'Community Meetup',
      date: 'October 15, 2024',
      description: 'Join us for our upcoming community meetup where we connect and share ideas!',
    },
    {
      image: 'https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png',
      title: 'Community Meetup',
      date: 'October 15, 2024',
      description: 'Join us for our upcoming community meetup where we connect and share ideas!',
    }, {
      image: 'https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png',
      title: 'Community Meetup',
      date: 'October 15, 2024',
      description: 'Join us for our upcoming community meetup where we connect and share ideas!',
    },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : (prevIndex - 3 + cards.length) % cards.length
    );
  };

  return (
    <div className="font-sans">
      <div className="relative h-[38vh] bg-gradient-to-t from-[#001F33] via-[#023B4D] to-[#001F33] flex items-center justify-center font-semibold">
  <h1 className="text-white z-10 mt-20 text-3xl sm:text-4xl md:text-5xl font-bold relative">
    Our news & stories
  </h1>
  <img
    src="bg-3-2.png"
    alt="Background image"
    className="absolute inset-0 w-full h-[28vh] object-contain z-0"
  />
</div>




      <div className="px-8 md:px-72 h-20 bg-white text-black flex items-center gap-4">
        <div className="text-xl uppercase font-semibold">Share</div>
        <div className="flex items-center gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-sky-400 text-white rounded-full hover:bg-sky-500 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white rounded-full hover:bg-blue-900 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:?subject=Check this out!&body=Check out this news article!"
            className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-full hover:bg-gray-600 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <div className="bg-gray-100 px-8 md:px-72 py-12">
        <div className="text-black">
          <h1 className="mb-12 font-semibold text-3xl sm:text-4xl md:text-5xl">Latest News</h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <div className="bg-white shadow-md rounded-xl w-full sm:w-1/2 md:w-6/12 flex flex-col h-[500px]">
              <img
                src="https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured.png"
                alt="Profile"
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 text-left">
                  October 2024 Volunteer of the Month
                </h2>
                <p className="text-sm mt-4 text-left text-blue-500">November 1, 2024</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-1/2">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white shadow-md rounded-xl flex w-full h-[160px] items-center p-4">
                  <div className="flex flex-col justify-start w-3/4">
                    <h2 className="font-semibold text-xl mb-1">Volunteer of the Month</h2>
                    <p className="text-blue-500 text-sm mb-1">November 1, 2024</p>
                    <p className="text-gray-600 text-sm">
                      Congratulations to Ashton for his incredible efforts in the tech team this month!
                    </p>
                  </div>
                  <img
                    src="https://wevise.org/wp-content/uploads/2024/11/ASHTONVOM-Blog-Featured-300x150.png"
                    alt="Profile"
                    className="w-1/4 h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-12 border-t-2 border-gray-300" />
          <div className="text-black">
            <h1 className="mb-8 font-semibold text-3xl sm:text-4xl">Older News</h1>
            <div className="flex flex-col items-center">
              <div className="flex flex-col md:flex-row items-center w-full">
                {cards.slice(currentIndex, currentIndex + 3).map((card, idx) => (
                  <div key={idx} className="bg-white shadow-md rounded-xl w-full sm:w-1/2 md:w-1/3 mx-2 flex flex-col h-[350px] mb-4 md:mb-0">
                    <img
                      src={card.image}
                      alt="News"
                      className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h2 className="font-semibold text-lg mb-2">{card.title}</h2>
                      <p className="text-sm mb-2 text-blue-500">{card.date}</p>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex mt-6 mb-6 gap-4 flex-col sm:flex-row">
                <button
                  onClick={prevSlide}
                  className="hover:bg-gray-400 text-black px-4 py-2 rounded shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={nextSlide}
                  className="hover:bg-gray-400 text-black px-4 py-2 rounded shadow-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
