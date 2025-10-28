/* eslint-disable react/jsx-key */
"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    name: "SwiftCart - E-Commerce App",
    description: "React + Node + MongoDB online store with Stripe integration.",
    link: "#",
    tech: [<FaReact />, <FaNodeJs />, <FaDatabase />, <SiTailwindcss />],
  },
  {
    name: "AI Chatbot",
    description: "Intelligent AI web assistant using OpenAI API and Next.js.",
    link: "#",
    tech: [<FaReact />, <SiNextdotjs />],
  },
  {
    name: "Portfolio Redesign",
    description: "Modern personal portfolio with animations and 3D effects.",
    link: "#",
    tech: [<FaReact />, <SiTailwindcss />, <SiNextdotjs />],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      {/* Section title */}
      <motion.h2
        className="text-4xl font-bold text-center text-slate-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Projects grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="group bg-gray-900 rounded-xl p-6 hover:scale-105 transform transition-all shadow-lg hover:shadow-slate-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-slate-300">
              {project.name}
            </h3>
            <p className="text-gray-300">{project.description}</p>

            {/* Tech icons */}
            <div className="flex mt-4 space-x-3 text-xl text-slate-400">
              {project.tech.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
