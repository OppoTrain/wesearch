export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex py-12 text-black h-[66vh] justify-center bg-[url('/image-1.png')] bg-cover bg-[right_-40%_top_-10%]">
        <div className="px-6 sm:px-12 md:px-40 lg:px-72">
          <div className="text-center sm:text-left mt-12 sm:mt-28">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans">About Us</h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              WeSearch is a Palestine-based platform that connects researchers with experts. It allows researchers to share their work and enables experts to access valuable research, fostering collaboration and knowledge exchange.
            </p>
            <a href='/our-team' className="mt-6 inline-block px-6 py-2 bg-purple-500 text-white text-sm rounded-lg shadow-md hover:bg-purple-600">
              Our Team
            </a>
          </div>
        </div>
      </div>





      {/* What We Do Section */}
      <div className="h-auto flex px-6 sm:px-12 md:px-40 py-20 flex-col md:flex-row">
        <div className="w-full md:w-7/12 pr-10 mb-10 md:mb-0">
          <h1 className="text-3xl sm:text-4xl text-gray-600 font-semibold font-sans mb-6">What we do</h1>
          <p className="text-lg text-gray-700 mb-4 ml-2">
            Launched in 2024, WeSearch is a platform designed to connect researchers with experts across various fields. It aims to foster collaboration, knowledge exchange, and professional growth by making valuable research accessible to experts.
          </p>
          <p className="text-lg text-gray-700 mb-4 ml-2">
            We offer researchers the opportunity to get insights and guidance from experienced professionals. While the platform is open to all, its primary goal is to support those who may face challenges in accessing expert advice.
          </p>
          <p className="text-lg text-gray-700 ml-2">
            WeSearch allows users to connect based on specific needs, interests, and research areas. The platform supports both short-term and long-term engagements, providing flexible mentorship opportunities for a diverse research community.
          </p>
        </div>
        <div className="w-full md:w-5/12 mt-16 md:mt-0">
          <img src="/book.jpg" alt="WeSearch Platform" className="object-contain rounded-lg w-full h-auto" />
        </div>
      </div>

      {/* Who We Work With Section */}
      <div className="bg-neutral-100 h-auto flex px-6 sm:px-12 md:px-40 py-12 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <img src="/hands.png" alt="Who We Work With" className="object-cover rounded-lg w-full h-auto" />
        </div>

        <div className="w-full md:w-2/3 text-gray-700 px-6 md:px-32">
          <h1 className="text-3xl sm:text-4xl text-gray-600 font-semibold font-sans mb-6">Who we work with</h1>

          <p className="text-lg mb-6">
            We’re partnering with organizations that require mentorship and career placement programs to complement their primary programming so that they can better serve their beneficiaries. We also aim to support companies in finding the right candidates, often from diverse backgrounds.
          </p>

          <div className="mb-4 flex items-start">
            <span className="text-green-500 mr-4">✔</span>
            <p className="text-md">Other nonprofits serving disadvantaged communities to connect their emerging technologists to mentors.</p>
          </div>

          <div className="mb-4 flex items-start">
            <span className="text-green-500 mr-4">✔</span>
            <p className="text-md">Companies who are passionate about mentorship who both sponsor and encourage their employees to mentor.</p>
          </div>

          <div className="mt-4 flex items-start">
            <span className="text-green-500 mr-4">✔</span>
            <p className="text-md">Universities and community colleges who would like to engage both their alumni as mentors and students as mentees.</p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white h-auto flex px-6 sm:px-12 md:px-40 py-12 items-center flex-col md:flex-row">
        <div className="w-full md:w-9/12 text-slate-600 px-6 md:px-32">
          <h1 className="text-3xl sm:text-4xl text-slate-600 font-semibold font-sans mb-6">How we work</h1>

          {/* First Paragraph */}
          <p className="text-lg mb-6">
            Wevise is grounded in transparency, collaboration, and impact. Here’s how we work to make a difference:
          </p>

          {/* First Checkpoint */}
          <div className="mb-4 flex items-start">
            <span className="text-green-500 mr-4">✔</span>
            <p className="text-md">
              <span className="font-bold">Transparency and Accountability</span>: We believe in being open and honest about our operations, financials, and outcomes. Our recent Candid Gold Seal of Transparency is a testament to this commitment.
            </p>
          </div>

          {/* Second Checkpoint */}
          <div className="mb-4 flex items-start">
            <span className="text-green-500 mr-4">✔</span>
            <p className="text-md">
              <span className="font-bold">Collaborative Partnerships</span>: We understand that meaningful change requires collective effort. We actively seek to collaborate with like-minded organizations, community leaders, and stakeholders. By leveraging the strengths and resources of our partners, we can achieve greater impact and sustainability in our projects.
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/12 mt-8 md:mt-0">
          <img src="/candid.png" alt="How We Work" className="object-cover rounded-lg w-full h-auto" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#193334] py-20 px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl text-white font-semibold mb-10">Interested in learning more?</h1>

        <div className="w-full max-w-4xl">
          <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full sm:w-1/2 p-3 border border-gray-300 mb-4 sm:mb-0"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full sm:w-1/2 p-3 border border-gray-300"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="w-full px-6 py-3 bg-[#A586E8] text-white rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
