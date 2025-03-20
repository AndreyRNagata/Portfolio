import Github from "../assets/Github.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contato() {
  return (
    <section className=" flex flex-col items-center">
        
      <h1 className="  items-center mt-14 uppercase gradienttext font-semibold text-4xl">
        contato
      </h1>
    <div className="flex flex-row gap-32 items-center">
      <div className="">
      <img src={Github} alt="" />
    </div> 
      <div className="flex flex-col mt-12 text-neutral-500 gap-4">
      <h2 className=" uppercase text-neutral-300 font-semibold text-4xl ">
        {" "}
        CONTATE ME{" "}
      </h2>
      <p>
        Estou disponível para conversar sobre projetos de desenvolvimento web ou
        possibilidades de parceria.
      </p>
      <div className="flex gap-3 items-center">
      <FaPhoneAlt />
      <p>(11) 97175-9237</p>
      </div>
      <div className="flex gap-3 items-center">
      <IoMdMail /> 
      <p>andreyrodriguesnagata@gmail.com</p>
      </div>
      </div>
      </div>
    </section> 
  );
}
