/* eslint-disable react/jsx-key */
"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedis,
  SiMongodb,
  SiSocketdotio,
  SiAngular,
  SiFirebase,
  SiTypescript,
  SiFramer,
  SiReact,
} from "react-icons/si";

const projects = [
  {
    name: "AI Agent for Advisors (In progress)",
    description: "Intelligent AI web assistant using OpenAI API and Next.js.",
    link: "#",
    tech: [<FaReact />, <SiNextdotjs />],
  },
  {
    name: "Job Import System",
    description:
      "Scalable system to fetch, queue, and store jobs from multiple feeds with real-time dashboard monitoring",
    github: "https://github.com/asutosh24595/job-import-system",
    live: "https://job-import-system-wine.vercel.app/",
    tech: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiRedis />,
      <SiMongodb />,
      <SiSocketdotio />,
    ],
  },

  {
    name: "SwiftCart - E-Commerce App",
    description: "React + Node + MongoDB online store with Stripe integration.",
    link: "#",
    tech: [<FaReact />, <FaNodeJs />, <FaDatabase />, <SiTailwindcss />],
  },

  {
    name: "Workshop Landing Page",
    description:
      "Landing Page for an Art workshop made using Angular, TypeScript, Firebase and TailwindCss",
    github: "https://github.com/asutosh24595/workshop-landing-angular",
    tech: [<SiAngular />, <SiTailwindcss />, <SiFirebase />, <SiTypescript />],
  },

  {
    name: "Nexcent Landing Page (Clone)",
    description:
      "Landing Page for Nexcent made using Next.js, Framer-motion, Typescript and Tailwindcss",
    github: "https://github.com/asutosh24595/responsive-spa-nextjs",
    live: "https://responsive-spa-nextjs.vercel.app/",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiFramer />, <SiTypescript />],
  },

  {
    name: "Instagram Clone",
    description:
      "Instagram clone frontend built using React.js, Firebase, Tailwind css, Material UI Icons, Framer motion.",
    github: "https://github.com/asutosh24595/insta-clone-frontend",
    live: "https://asuto-insta-clone.netlify.app/",
    tech: [<SiReact />, <SiTailwindcss />, <SiFirebase />, <SiFramer />],
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
          <motion.div
            key={index}
            className="group bg-gray-900 rounded-xl p-6 hover:scale-105 transform transition-all shadow-lg hover:shadow-slate-500/50 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-slate-300">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech icons */}
              <div className="flex mt-2 space-x-3 text-xl text-slate-400">
                {project.tech.map((icon, idx) => (
                  <span key={idx}>{icon}</span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-linear-to-r from-slate-500 to-gray-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  <span>Live</span>
                </a>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
