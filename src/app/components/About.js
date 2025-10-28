"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiAngular } from "react-icons/si";

export default function About() {
  const techStack = [
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiAngular className="text-gray-300" />, name: "Angular" },
    { icon: <FaGithub className="text-gray-400" />, name: "GitHub" },
    { icon: <FaAws className="text-gray-400" />, name: "AWS" },
    { icon: <FaDatabase className="text-gray-400" />, name: "MySql" },
  ];

  return (
    <section
      id="about"
      className="relative z-10 max-w-5xl mx-auto py-24 px-6 text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-slate-400 via-gray-400 to-slate-600"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
      >
        I’m <span className="text-white font-semibold">Asutosh Kumar Shukla</span>, 
        a passionate <span className="text-white">Full Stack Developer</span> who loves 
        crafting modern, scalable, and visually appealing web applications. My core stack 
        includes <span className="text-white">React, Next.js, Node.js, MongoDB,</span> and 
        <span className="text-white"> Tailwind CSS.</span> I enjoy blending design with 
        logic — turning complex ideas into elegant, functional products.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-300 mt-6 leading-relaxed max-w-2xl mx-auto mb-10"
      >
        I’m currently focused on building projects that combine 
        <span className="text-white"> AI</span> and the 
        <span className="text-white"> Web</span>, while expanding my expertise 
        in full-stack architecture, performance optimization, and user experience.
      </motion.p>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-10 justify-items-center"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
