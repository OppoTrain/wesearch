import React from 'react';
import { FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[url('/footer.png')] object-contain shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col items-center space-y-6">
                    <a href="#" className="flex items-center space-x-3">
                        <img src="./wesearch.jpg" className="h-8" alt="WeSearch Logo" />
                        <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                            WeSearch
                        </span>
                    </a>

                    <div className="flex space-x-4">
                        <a href="#" className="bg-[#23383F] rounded-full p-2 hover:bg-opacity-80">
                            <FaDiscord className="h-6 w-6 text-white" />
                        </a>
                        <a href="#" className="bg-[#23383F] rounded-full p-2 hover:bg-opacity-80">
                            <FaLinkedin className="h-6 w-6 text-white" />
                        </a>
                        <a href="#" className="bg-[#23383F] rounded-full p-2 hover:bg-opacity-80">
                            <FaEnvelope className="h-6 w-6 text-white" />
                        </a>
                    </div>

                    <hr className="w-full border-white " />

                    <div className="w-full flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0 text-sm text-gray-700 dark:text-gray-300">
                        <span>© 2025 WeSearch, All rights reserved.</span>
                        <span>WeSearch is a 501(c)3 nonprofit (EIN: 92-2591102).</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
