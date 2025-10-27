import Image from "next/image";
import logoImg from "../../../public/portfolioLogo.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/20 backdrop-blur-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
      <Image alt="logo" src={logoImg} className="w-12 h-12 brightness-250"/>
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-white">
        <li>
          <a href="#hero" className="hover:text-purple-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
