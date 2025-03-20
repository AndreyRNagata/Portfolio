import CSS from "../assets/CSS.png";
import Figma from "../assets/Figma.png";
import Html from "../assets/Html.png";
import Ilustrator from "../assets/Ilustrator.png";
import NodeJS from "../assets/NodeJS.png";
import Photoshop from "../assets/Photoshop.png";
import Python from "../assets/Python.png";
import React from "../assets/React.png";
import JavaScript from "../assets/JavaScript.png";
import Andrey from "../assets/Andrey.jpeg"
export default function Sobremim() {
  return (
    <section className="flex items-center relative flex-col gap-20">
      <h1 className="uppercase gradienttext font-semibold text-4xl mt-24 text-center">
        sobre mim
      </h1>

      <div className="grid grid-cols-5 px-28 gap-12">
        <img
          src={Andrey}
          className="w-72 aspect-square rounded"
          alt=""
        />
        <div className="col-span-4 flex flex-col gap-10">
          <p className=" text-lg  text-[#a4a4a4]">
            Sou Andrey Nagata programador de front-end e apaixonado por UX.
            Adoro criar interfaces intuitivas e funcionais, sempre priorizando a
            experiência do usuário. Estou sempre em busca de novas tecnologias e
            inovações que possam aprimorar meus projetos, combinando habilidades
            técnicas com uma sensibilidade estética que faz a diferença.
          </p>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-6 bg-[#212121] items-center justify-items-center rounded-xl">
              <img  src={Html} alt="" />
              <img src={CSS} alt="" />
              <img src={JavaScript} alt="" />
              <img src={Python} alt="" />
              <img src={React} alt="" />
              <img src={NodeJS} alt="" />
            </div>
            <div className="grid grid-cols-3 bg-[#212121] w-96 ml-20 items-center justify-items-center rounded-xl">
              <img className="w-full" src={Figma} alt="" />
              <img className="w-full" src={Ilustrator} alt="" />
              <img className="w-full" src={Photoshop} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
