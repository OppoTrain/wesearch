"use client";
import { useState } from "react";
import {
  FaBook,
  FaUsers,
  FaUserTie,
  FaHandshake,
  FaEnvelope,
  FaHandsHelping,
  FaSmile,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-100 fixed w-full z-20 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center text-gray-100 space-x-2 text-xl font-semibold">
          <span className="text-3xl text-purple-500 font-bold">WeSearch</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="#stories" className="flex items-center space-x-2 hover:text-purple-500">
              <FaBook className="text-lg" />
              <span>Stories</span>
            </a>
          </li>
          {/* About Us Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-2 hover:text-purple-500">
              <FaUsers className="text-lg" />
              <span>About Us</span>
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              className={`absolute mt-2 bg-gray-800 rounded-lg shadow-md text-sm text-gray-100 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#our-team">Our Team</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#researcher"
              className="flex items-center space-x-2 hover:text-purple-500"
            >
              <FaUserTie className="text-lg" />
              <span>Become a Researcher</span>
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="flex items-center space-x-2 hover:text-purple-500"
            >
              <FaEnvelope className="text-lg" />
              <span>Donate</span>
            </a>
          </li>
          <li>
            <a
              href="#volunteer"
              className="flex items-center space-x-2 hover:text-purple-500"
            >
              <FaHandsHelping className="text-lg" />
              <span>Volunteer</span>
            </a>
          </li>
          <li>
            <a
              href="#partnerships"
              className="flex items-center space-x-2 hover:text-purple-500"
            >
              <FaHandshake className="text-lg" />
              <span>Partnerships</span>
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="flex items-center space-x-2 hover:text-purple-500"
            >
              <FaSmile className="text-lg" />
              <span>Login</span>
            </a>
          </li>
        </ul>

        {/* Signup Button */}
        <button
          className="hidden md:inline-block text-gray-900 bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2 shadow-md transition-all"
        >
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 text-gray-100 md:hidden hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 rounded-lg"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
// import React from "react";
// import { FaBook, FaInfoCircle, FaUserPlus, FaHeart, FaHandsHelping, FaSignInAlt } from 'react-icons/fa';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <header className="header">
//       <a href="" className="logo">WeSearch</a>
//       <nav className="navbar">
//         <a href=""><FaBook /> Stories</a>
//         <a href=""><FaInfoCircle /> About Us</a>
//         <a href=""><FaUserPlus /> Become a Researcher</a>
//         <a href=""><FaHeart /> Donate</a>
//         <a href=""><FaHandsHelping /> Volunteer</a>
//         <a href=""><FaSignInAlt /> Login</a>
//         <a href=""><FaUserPlus /> Sign Up</a>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;

