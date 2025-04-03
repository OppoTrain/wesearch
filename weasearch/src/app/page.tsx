'use client'
import { FaGlobe, FaUsers, FaBalanceScale, FaCheckCircle, FaHandshake } from "react-icons/fa";
import HomePageCard from "./components/Card";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import NewsLetter from "./components/NewsLetter";
export default function HomePage() {
  const cards = [
    {
      cardTitle: 'Donate today',
      cardDesription:
        'WeSearch needs help upgrading our free research platform to beta in order to launch careers of even more aspiring technologists.',
      buttonText: 'Donate now',
      imgUrl: '/donate.png',
    },
    {
      cardTitle: 'Nonprofit partnership',
      cardDesription:
        'WeSearch has partnered with Ada Developers Academy to expand research opportunities to more underserved communities.',
      buttonText: 'Press release',
      imgUrl: '/ada-1.png',
    },
    {
      cardTitle: 'Corporate partners',
      cardDesription:
        'WeSearch is seeking funding from founding partners to expand our service and level the playing field in tech through mentorship.',
      buttonText: 'Learn more',
      imgUrl: '/match.png',
    },
  ];
  const { data: session } = useSession();

  console.log(session?.user?.email)
  return (
    <SessionProvider>
      <div className="bg-gradient-to-r from-[#104547] via-[#021125] to-[#021125]">
      <section className="bg-[url(/mobile-home.png)] md:bg-[url(/bg-4.png)] bg-no-repeat bg-cover bg-bottom lg:h-[80vh] h-screen relative ">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto  relative z-10 flex flex-col justify-center h-full items-start text-center sm:text-left">
          <h1 className="text-white text-3xl sm:text-5xl md:text-5xl">
            Empower research, connect <span className="text-purple-800">Minds</span>.
            <br />
          </h1>
          <p className="text-white w-full max-w-2xl my-8 mx-auto sm:mx-0">
            We’re on a mission to make research accessible and impactful by connecting researchers with global audiences.
          </p>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start"> {/* Center button on mobile */}
            <a
              href=""
              className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block">
              Sign Up
            </a>
          </div>
        </div>
      </section>
      </div>

      <section className="flex justify-center items-center h-auto bg-[#D1FCFE] py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {cards.map((card, index) => (
            <HomePageCard key={index} params={card} />
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row bg-white min-h-[52vh]">
        <div className="flex flex-col bg-[url('/footer.png')] md:w-1/2 w-full justify-center items-center h-full md:h-auto">
          <div className="h-40 md:h-[40vh] relative flex justify-center items-center">
            <img src="/square-frame.png" className="h-full object-contain z-10" />
            <img
              src="/main.gif"
              className="absolute z-20 h-[70%]"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 bg-white py-8 px-6 md:py-12 md:px-20 justify-center items-center">
          <div className="text-center">
            <h1 className="text-black py-4 font-bold text-4xl md:text-start">
              Why partner with us?
            </h1>
            <p className="text-black mt-2 text-base md:text-start">
              Wesearch levels the playing field in tech, ensuring that all people have access to researchers from people who have similar lived experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="md:h-[50vh] h-screen bg-cover bg-center relative md:bg-[url('/rocket-desktop.png')] bg-[url('/mobile-rocket.jpg')]">
        <div className="absolute inset-0 md:bg-[linear-gradient(108deg,_#104547_56%,_#00000000_74%)]"></div>
        <div className="absolute md:top-1/2 top-1/4 transform -translate-y-1/2 text-white z-10 px-2 sm:px-4 md:px-64">
          <h2 className="text-4xl font-semibold mb-4 sm:text-3xl">Join our newsletter</h2>
          <p className="text-lg mb-6 sm:text-base">Not a mentor or mentee? Stay updated with exciting news.</p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="p-4 rounded-l-md border border-gray-300 text-lg sm:p-2 sm:text-base text-black mb-4 sm:mb-0 sm:rounded-l-md w-full sm:w-auto md:w-[400px]"
            />
            <button className="bg-blue-600 text-white p-4 rounded-r-md hover:bg-blue-700 text-lg sm:p-2 sm:text-base sm:ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-[60vh] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 py-12 text-black">
        <h2 className="text-4xl font-semibold mb-8 text-center">What makes us different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src="/free.jpg" alt="Image 1" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">100% Free</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/nonprofit.jpg" alt="Image 2" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">Nonprofit</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/equitable.jpg" alt="Image 3" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">Equitable Access</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/nonbias.jpg" alt="Image 4" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">Bias-Free</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/mentor.jpg" alt="Image 5" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">Researcher Initiated</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/curated.jpg" alt="Image 6" className="w-full md:w-32 h-auto mb-4" />
            <p className="text-lg font-medium">Curated Matches</p>
          </div>
        </div>
      </div>
      <div className="relative grid md:bg-[url('/image-1.png')] bg-[url('/tree-mobile.jpg')] bg-cover bg-center h-screen md:h-[52vh]">
        <div className="absolute inset-0 "></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
          <div></div>

          <div className="justify-center px-8 sm:px-16 text-black flex flex-col items-start relative z-10 text-center sm:text-left">
            <h1 className="text-black text-3xl sm:text-4xl font-sans font-bold">
              Contribute to research
              <br />
            </h1>
            <p className="text-black py-4 font-sans">
              Share your expertise, findings, or ideas. Wesearch enables researchers to publish their work while reaching a wider audience.
            </p>
            <a href="" className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-8 space-y-10 sm:space-y-0">
          <div className="flex-1 flex justify-center">
            <img src="team.jpg" className="rotate-6 h-80 md:h-64 xl:h-96" alt="" />
          </div>
          <div className="flex-1 text-center sm:text-left justify-items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Collaborate with Us
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We’re more than just a team – we’re a community. We value collaboration, creativity, and inclusivity, and we’re always looking for like-minded individuals to join us. Explore our open volunteer positions.
            </p>
            <a
              href="/sign-up"
              className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block"
            >
              Join Us
            </a>
          </div>
        </div>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-8 space-y-10 sm:space-y-0">

          <div className="flex-1 text-center sm:text-left justify-items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              WevSearch was born out of a desire to create a more equitable career landscape, one where mentorship is accessible to all. Our team of dedicated volunteers spans the globe, working together to make this vision a reality.

            </p>
            <a
              href="/sign-up"
              className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block"
            >
              Join Us
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="book.jpg" className="rotate-6 h-80 md:h-64 xl:h-96" alt="" />
          </div>
        </div>
      </section>
      {/* <div className="md:h-[50vh] h-screen bg-cover bg-center relative bg-gradient-to-r from-[#104547] via-[#021125] to-[#021125]">
  <div className="absolute md:top-1/2 top-1/4 transform -translate-y-1/2 text-white z-10 px-2 sm:px-4 md:px-64 flex flex-col md:flex-row items-center justify-center w-full">
    <div className="md:w-2/3 text-center md:text-left">
      <h2 className="text-5xl font-semibold mb-4 sm:text-3xl sm:w-full">
        Make the connections you need to succeed.
      </h2>
      <button className="bg-[#A586E8] text-white p-4 rounded-r-md hover:bg-blue-700 text-lg sm:p-2 sm:text-base sm:w-full sm:ml-0">
        Begin My Journey
      </button>
    </div>
    <img
      src="earth.png"
      className="h-72 mb-4 md:mb-0 md:h-auto md:ml-8 animate-spin-slow sm:h-48"
    />
  </div>
</div> */}


    </SessionProvider>
  );
}
