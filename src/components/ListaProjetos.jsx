import React from "react";
import LifeOcean from "../assets/LifeOcean.png";
import bookMSImage from "../assets/portfolio.png";

const projects = [
  {
    id: 2,
    name: "Life Ocean",
    image: LifeOcean,
    github: "https://pedroggutierre.github.io/LifeOceanFront/",
  },
  {
    id: 1,
    name: "Antigo Portfolio",
    image: bookMSImage,
    github: "https://andreyportifolio.web.app/",
  },
];

const ListaProjetos = () => {
  return (
    <section className="flex flex-col  items-center mt-14">
    <h1 className=" items-center te uppercase gradienttext font-semibold text-4xl">SERVIÇOS</h1>
      <div className="container mx-auto px-8 mt-16 md:px-16 lg:px-24">
       
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#272727] p-4  hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105 w-full max-w-xs">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-36 object-cover" />
              <h3 className="text-2xl text-neutral-200 font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-black to-gray-800 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">CONHEÇA</a>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
};

export default ListaProjetos;