'use client'
import { FaGlobe, FaUsers, FaBalanceScale, FaCheckCircle, FaHandshake } from "react-icons/fa";
import HomePageCard from "./components/Card";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const cards = [
    {
      cardTitle: 'Support Wesearch',
      cardDesription:
        'Wesearch aims to expand its platform to allow even more researchers to share their findings and collaborate on groundbreaking ideas.',
      buttonText: 'Donate now',
      imgUrl: '/earth.png',
    },
    {
      cardTitle: 'Academic partnerships',
      cardDesription:
        'Wesearch has partnered with leading institutions to provide publishing opportunities for researchers and foster collaboration across diverse fields.',
      buttonText: 'Press release',
      imgUrl: '/earth.png',
    },
    {
      cardTitle: 'Corporate supporters',
      cardDesription:
        'We’re seeking support from organizations and institutions to advance research access and collaboration globally.',
      buttonText: 'Learn more',
      imgUrl: '/wesearch.jpg',
    },
  ];
  const { data: session } = useSession();

  console.log(session?.user?.email)
  return (
    <SessionProvider>
      <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom lg:h-[80vh] h-[64vh] relative">
  <div className="absolute inset-0 bg-blackOverlay"></div>
  <div className="container mx-auto relative z-10 flex flex-col justify-center h-full items-start text-center sm:text-left">
    <h1 className="text-white text-3xl sm:text-5xl md:text-5xl">
      Empower research, connect minds.
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


      {/* Cards Section */}
      <section className="flex justify-center items-center h-auto bg-blue-100 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
          {cards.map((card, index) => (
            <HomePageCard key={index} params={card} />
          ))}
        </div>
      </section>

       {/* Discover and Connect Section */}
       <div className="grid bg-white h-[52vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="bg-gradient-to-r from-blue-100 via-purple-400 to-gray-400 flex justify-center items-center">
            <img
              src='/main.gif'
              className="w-[18rem] sm:w-[21rem] h-[18rem] sm:h-[21rem] object-cover rounded-md"
            />
          </div>
          <div className="justify-center px-8 sm:px-16 text-black flex flex-col text-center sm:text-left">
            <h1 className="text-black text-3xl font-sans font-bold">
              Discover and Connect
              <br />
            </h1>
            <p className="text-black py-4 font-sans">
              From publishing groundbreaking research to finding like-minded collaborators, Wesearch empowers you to showcase your work and make meaningful connections with global peers.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-12 font-sans">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <FaGlobe className="text-blue-500 text-5xl" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                  Accessible for All
                </h3>
                <p className="text-lg text-gray-600">
                  Open platform to publish research and connect.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <FaUsers className="text-green-500 text-5xl" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                  Community-Driven
                </h3>
                <p className="text-lg text-gray-600">
                  A network for researchers, institutions, and readers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <FaBalanceScale className="text-yellow-500 text-5xl" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                  Equity in Research
                </h3>
                <p className="text-lg text-gray-600">
                  Promoting underrepresented voices and fields.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <FaCheckCircle className="text-red-500 text-5xl" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                  Quality Assured
                </h3>
                <p className="text-lg text-gray-600">
                  Peer-reviewed and professionally curated publications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contribute to Research Section */}
      <div className="relative grid bg-[url('/research.webp')] bg-cover bg-center h-[52vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-40"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
          <div></div>

          <div className="justify-center px-8 sm:px-16 text-black flex flex-col items-start relative z-10 text-center sm:text-left">
            <h1 className="text-white text-3xl sm:text-4xl font-sans font-bold">
              Contribute to research
              <br />
            </h1>
            <p className="text-white py-4 font-sans">
              Share your expertise, findings, or ideas. Wesearch enables researchers to publish their work while reaching a wider audience.
            </p>
            <a href="" className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Collaborate with Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-8 space-y-10 sm:space-y-0">
          <div className="flex-1 flex justify-center">
            <FaHandshake className="text-6xl text-indigo-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Collaborate with Us
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Join a global community of passionate individuals working to advance knowledge. Explore ways to contribute as a volunteer or partner.
            </p>
            <a
              href="#"
              className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>
    </SessionProvider>
  );
}
