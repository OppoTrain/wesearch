import React from 'react';

const NewsLetter=()=>{
    return (
        <div>
        <div className="relative bg-gradient-to-r from-teal-600 to-teal-950 text-white py-28 px-8 md:px-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/2">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
              Join Our Newsletter
            </h2>
            <p className="text-xl md:text-xl text-gray-200">
              Not an Expert or Researcher? Stay updated with exciting news and updates.
            </p>
          </div>

          <form className="flex w-full md:w-7/12 max-w-2xl relative z-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-5 px-6 text-gray-800 text-lg rounded-l-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg py-5 px-8 rounded-r-lg transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div
          className="absolute inset-y-0 right-0 hidden md:block z-0"
          style={{
            backgroundImage: "url('/earth.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            width: "50%",
          }}
        ></div>
      </div>
      </div>
    )
}
export default NewsLetter;