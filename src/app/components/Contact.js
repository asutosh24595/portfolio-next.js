"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-slate-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <button className="px-6 py-3 bg-linear-to-r from-slate-400 to-gray-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all mt-2">
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-8 text-2xl text-slate-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
}
