"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import logoImg from "../../../public/portfolioLogo.png";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/20 backdrop-blur-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3 text-white font-bold text-xl">
        <Image alt="logo" src={logoImg} className="w-12 h-12 brightness-500" />
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-white">
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ y: -2, scale: 1.05 }} // the twitch animation
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-2 group"
          >
            <a
              href={item.href}
              className="flex items-center space-x-2 hover:text-slate-400 transition-colors"
            >
              <span className="text-lg group-hover:rotate-6 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
