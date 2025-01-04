import Image from 'next/image';

const JoinTeamPage = () => {
  const positions = [
    {
      title: 'Chief Development Officer',
      description: 'We are looking for a motivated Chief Development Officer to lead our fundraising and earned income strategy and team. This role is a unique opportunity to operate within a startup-like environment in the nonprofit tech sector. Your contribution will not only accelerate your professional development but also offer profound satisfaction as you directly impact lives. You’ll build and lead a dedicated fundraising (development) team, guiding them towards fulfilling our mission through finding the partnerships and funds we need to increase our impact sustainably.',
      learnMoreLink: '#',
      applyLink: '#',
    },
    {
      title: 'Chief Development Officer',
      description: 'We are looking for a motivated Chief Development Officer to lead our fundraising and earned income strategy and team. This role is a unique opportunity to operate within a startup-like environment in the nonprofit tech sector. Your contribution will not only accelerate your professional development but also offer profound satisfaction as you directly impact lives. You’ll build and lead a dedicated fundraising (development) team, guiding them towards fulfilling our mission through finding the partnerships and funds we need to increase our impact sustainably.',
      learnMoreLink: '#',
      applyLink: '#',
    },{
      title: 'Chief Development Officer',
      description: 'We are looking fustainably.',
      learnMoreLink: '#',
      applyLink: '#',
    },
  ];

  return (
    <>
            <div className="bg-white h-auto min-h-[50vh] px-6 sm:px-12 md:px-8 lg:px-16 xl:px-24 2xl:px-96 py-12 flex flex-col md:flex-row items-center md:space-x-4 lg:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/team.jpg"
            alt="Join the team"
            className="object-cover h-96 w-96 md:h-80 md:w-80 lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] rotate-6"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8 lg:pl-12  md:text-left">
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold text-black mb-4">Join the founding team</h2>
          <p className="text-bg  lg:text-lg text-gray-700 mb-6">
            We’re a US-based nonprofit founded in 2022, dedicated to creating inclusive tech communities through equitable access to mentorship, education, and career opportunities.
            As passionate volunteers from diverse backgrounds, we strive to level the tech playing field.
          </p>
          <p className="text-bg lg:text-lg text-gray-700 mb-6">
            This unpaid opportunity allows you to work alongside talented professionals in a collaborative, learning-focused environment.
          </p>
          <a
            href="sign-up"
            className="px-4 md:px-6 lg:px-8 py-2 bg-[#A586E8] text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Apply
          </a>
        </div>
      </div>



      <div className="bg-[#F5F5F5] px-6 sm:px-12 lg:px-72 py-12">
        <h3 className="text-3xl font-bold text-center text-black mb-8">Volunteer positions available</h3>

        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <div key={index} className="p-6 bg-[#F4FBFF] rounded-xl min-h-72 hover:bg-white transition duration-1500 shadow-md">
              <h4 className="text-xl font-semibold text-black mb-4">{position.title}</h4>
              <p className="text-gray-700 mb-6 text-md font-medium">{position.description}</p>
              <div className="flex space-x-4">
                <a
                  href={position.learnMoreLink}
                  className="px-8 py-2 bg-[#A586E8] text-white rounded-lg text-sm font-bold justify-self-center"
                >
                  Learn More
                </a>
                <a
                  href={position.applyLink}
                  className="px-8 py-2 bg-[#A586E8] text-white rounded-lg font-bold text-sm"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinTeamPage;
