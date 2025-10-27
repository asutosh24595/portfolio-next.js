"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Headline */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Asutosh Kumar Shukla
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Turning complex ideas into elegant digital products.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-linear-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transform transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
