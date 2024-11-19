import HomePageCard from "./components/Card";
import NavBar from "./components/NavBar";
import './home.css';
export default function HomePage() {
  const cards = [
    {
      cardTitle: 'Donate today',
      cardDesription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem ipsam fuga temporibus reiciendis blanditiis, ut ex officiis inventore facilis consequatur numquam molestiae magni dolores! Voluptatibus quod aspernatur eius amet?',
      buttonText: 'Donate now',
      imgUrl: '/earth.png',
    },
    {
      cardTitle: 'Nonprofit partnership',
      cardDesription:
        'Wesearch has partnered with Ada Developers Academy to expand mentorship opportunities to more underserved communities.',
      buttonText: 'Press release',
      imgUrl: '/wesearchinc_logo.jpg',
    },
    {
      cardTitle: 'Corporate partners',
      cardDesription:
        'Wesearch is seeking funding from founding partners to expand our service and level the playing field in tech through mentorship.',
      buttonText: 'Learn more',
      imgUrl: '/wesearchinc_logo.jpg',
    },
  ];
  return (
    <div>
      <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom h-[100vh] relative">
        <div className="absolute inset-0 bg-blackOverlay"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full items-start">
          <h1 className="text-white xl:uppercase xl:text-7xl sm:text-8xl md:text-5xl ">
            Shape your Future in Tech <br />
          </h1>
          <p className="text-white w-full max-w-2xl my-8">
            Connect with researchers across the globe for free!
          </p>
          <a
            href=""
            className="bg-purple-500 text-white uppercase font-medium px-4 py-2 rounded-md shadow-sm transition-all hover:bg-purple-600 hover:scale-105 text-sm inline-block">
            Sign Up
          </a>
        </div>
      </section>

      <section className="flex justify-center items-center h-screen bg-blue-100">
        <div className="flex space-x-12">
          {cards.map((card, index) => (
            <HomePageCard key={index} params={card} />
          ))}
        </div>
      </section>

    </div>
  );
}
