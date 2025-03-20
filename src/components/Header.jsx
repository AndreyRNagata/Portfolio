import { Link } from 'react-router-dom';
import logo from '../assets/Andreylogo.png'; // Ajuste o caminho conforme necessário
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="text-neutral-600 flex justify-between w-full max-w-screen-xl items-center p-6" >
     <div className='flex items-center gap-14'>
      <div>
      <a href="/" target="" rel="noopener noreferrer">
       <img src={logo} alt="Logo" /> 
      </a>
       </div>

      <nav>
        <ul className="flex uppercase gap-6">
          <li className="mr-4">
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className="mr-4">
            <a href="/Sobremim">Sobre mim</a>
          </li>
          <li>
            <a href="/Servico">Serviços</a>
          </li>
          <li>
            <a href="/Contato">CONTATO</a>
          </li>
        </ul>
      </nav>
      </div>
      <ul className="flex gap-4">
        <li className="mr-4">
          <a href="https://www.linkedin.com/in/andrey-nagata-853151280/">
            <FaLinkedin size={40} />
          </a>
        </li>
        <li>
          <a href="https://github.com/AndreyRNag">
            <FaGithub size={40} />
          </a>
        </li>
      </ul>
    </header>
  );
}
