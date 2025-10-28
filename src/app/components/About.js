"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-4xl mx-auto py-24 px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-slate-500 to-gray-200"
      >
        About Me
      </motion.h2>

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
        <span className="text-white"> Web</span>, while also expanding my expertise 
        in full-stack architecture, performance optimization, and user experience.
      </motion.p>
    </section>
  );
}
