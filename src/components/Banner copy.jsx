import banneri from '../assets/Iniciobanner.png'
import laptop from '../assets/Laptop.png'
import { TypeAnimation } from 'react-type-animation';



export default function Banner() {
    return(
        <section className=" relative text-center flex flex-col items-center">
 <h1 className="uppercase gradienttext font-semibold text-4xl">andrey nagata</h1>
 <h2 className="text-neutral-600 mb-8">We're creating a project that will set new standards</h2>
 <img className='max-w-screen-lg' src={banneri} alt="" />
 <img className='-mt-14' src={laptop} alt="" />
<div className='absolute top-[10.76rem] left-6 w-80 text-3xl text-left
text-neutral-100 font-bold '>
    <span>Sou </span>
    <span className='text-[#8997C9]'>Andrey</span>
 <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Desenvolvedor de Front-end',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Nagata Desenvolvedor de Front-End </>',
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      />
      </div>
      
      
 </section>
    );
}
