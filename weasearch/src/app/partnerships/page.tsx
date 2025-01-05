import React from 'react';

export default function PageName() {
  return (
    <div>
      <div className="h-[45vh] bg-gradient-to-t from-[#0F4345] to-[#061F37] flex flex-col items-center justify-center text-white text-center py-20">
        <h1 className="text-5xl font-semibold mb-6">Partner with WeSearch</h1>
        <p className="text-sm max-w-xl mb-8">
          Join us in revolutionizing research in the tech industry and making tech careers more accessible to everyone.
        </p>
        <button className="px-4 py-2 bg-[#A586E8] text-white rounded-lg shadow-md hover:bg-purple-600">
          Contact Us
        </button>
      </div>

      <div className="flex flex-wrap justify-center px-2 sm:px-32 py-20 gap-x-16">
        {/* NGOs Section */}
        <div className="w-full sm:w-2/5 text-left mb-12 sm:mb-0">
          <img src="/help.jpg" alt="NGOs" className="w-[124px] h-[124px] mb-6 mx-auto sm:mx-0" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">NGOs</h2>
          <p className="text-lg text-gray-600 mb-6">
            Do you support underserved individuals in the tech industry? Are you struggling to find the right mentors for them? Help them find mentorship through us with custom organizational tags!
          </p>
          <p className="text-lg text-gray-600 mb-6">
            WeSearch targets small-to-medium-sized non-profit partners focused on education, training, and career support for disadvantaged populations that offer or would like to offer mentoring programs.
          </p>
          <button className="px-6 py-3 bg-[#A586E8] text-white rounded-lg shadow-md hover:bg-purple-600">
            Learn More
          </button>
        </div>

        {/* Corporations Section */}
        <div className="w-full sm:w-2/5 text-left">
          <img src="/tree.jpg" alt="Corporations" className="w-[124px] h-[124px] mb-6 mx-auto sm:mx-0" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Corporations</h2>
          <p className="text-lg text-gray-600 mb-6">
            Help the next generation of diverse talent to find the right career path and company for them. Encourage your employees to become mentors and support our mission through donations.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            These contributions showcase corporate social responsibility, while employee volunteer mentorship programs promote leadership development and enhance professional skills.
          </p>
          <button className="px-6 py-3 bg-[#A586E8] text-white rounded-lg shadow-md hover:bg-purple-600">
            Learn More
          </button>
        </div>
      </div>





      <div className="h-auto md:h-[40vh] bg-gradient-to-r from-[#062037] to-[#0F4446] flex flex-col md:flex-row">
        {/* First Section */}
        <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white px-12 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">56%</h2>
          <p className="text-lg text-center">
            Women following a researcher had a 56% higher rate of career progression than women not following one.
          </p>
        </div>

        {/* Second Section */}
        <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white px-4 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">5x</h2>
          <p className="text-lg text-center">
            Mentored employees are promoted 5 times more often and earn 20% more than non-mentored employees.
          </p>
        </div>

        {/* Third Section */}
        <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white px-4 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">52%</h2>
          <p className="text-lg text-center">
            Mentored students have a 52% greater chance of staying in college.
          </p>
        </div>

        {/* Fourth Section (Image with frame) */}
        <div className="w-full md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
          <div className="border-8 border-[#A586E8] w-full h-full p-2 flex justify-center items-center">
            <img
              src="/clay-frame.jpg"
              alt="Clay Frame"
              className="w-full h-full sm:w-1/2 md:w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white h-auto px-6 py-8 text-black flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our unique platform...</h2>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-20 place-items-center">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 flex justify-center items-center">
        <img
          loading="lazy"
          decoding="async"
          src="equitable.jpg"
          alt="Supports equitable access"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">Supports equitable access</h3>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 flex justify-center items-center">
        <img
          loading="lazy"
          decoding="async"
          src="nonbias.jpg"
          alt="Removes potential biases"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg  font-semibold">Removes potential biases</h3>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 flex justify-center items-center">
        <img
          loading="lazy"
          decoding="async"
          src="mentor.jpg"
          alt="Provides full privacy and autonomy"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">Provides full privacy and autonomy</h3>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 flex justify-center items-center">
        <img
          loading="lazy"
          decoding="async"
          src="curated.jpg"
          alt="Matches based on lived experiences"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">Matches based on lived experiences</h3>
    </div>
  </div>
</div>



      <div className="flex flex-col md:flex-row bg-white h-auto py-4">
        <div className="flex flex-col bg-[url('/footer.png')] md:w-1/2 w-full justify-center items-center">
          <div className="h-40 md:h-[40vh] relative flex justify-center items-center">
            <img src="/square-frame.png" className="h-full object-contain z-10" />
            <img
              src="/main.gif"
              className="absolute z-20"
              style={{ height: '70%' }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 bg-neutral-100 py-8 px-6 md:py-12 md:px-20">
          <h1 className="text-black text-2xl md:text-4xl py-4 font-bold">
            Why partner with us?
          </h1>
          <p className="text-black mt-2 text-sm md:text-base">
            Wesearch levels the playing field in tech, ensuring that all people have access to researchers from people who have similar lived experiences.
          </p>
          <p className="text-black mt-4 text-sm md:text-base">
            Our algorithm instantly curates matches based on specific needs, interests, background, and experience.
          </p>
          <p className="text-black mt-6 text-sm md:text-base">
            We’ve earned the <span className="font-bold">Candid Gold Seal of Transparency!</span>
          </p>
          <p className="text-black mt-4 text-sm md:text-base flex items-center">
            This recognition underscores our commitment to openness and accountability. We pursued this seal to further strengthen our supporters’ and partners’ trust and confidence in us. This is just another great reason to support us in our mission!
            <img
              src="/candid.svg"
              alt="Candid Seal"
              className="ml-4 w-16 h-16 md:w-24 md:h-24"
            />
          </p>

        </div>
      </div>
      <div className="bg-white text-[#193334] h-[40vh] flex flex-col justify-center items-center text-center mb-12 md:mb-0 px-6 sm:px-16 md:px-40">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to partner with WeSearch?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Contact us to discuss partnership opportunities and create a more inclusive and accessible tech industry together.
        </p>
        <a href='/about-us' className="bg-[#A586E8] text-white font-semibold py-2 px-6 sm:px-8 rounded-lg transition duration-200">
          Contact us
        </a>
      </div>

    </div>
  );
}
