"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    setStatus(
      data.success
        ? "Thanks for reaching out! I'll get back to you within 24 hours :)"
        : "Something went wrong. Try again."
    );

    setTimeout(() => {
      setStatus("");
      setFormData({ name: "", email: "", message: "" });
    }, 10000);
  };

  return (
    <section id="contact" className="py-20 px-6 flex flex-col items-center">
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
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          required
          value={formData.name}
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          required
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          onChange={handleChange}
          required
          value={formData.message}
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <button className="px-6 py-3 bg-linear-to-r from-slate-400 to-gray-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all mt-2">
          Send Message
        </button>
      </motion.form>

      {/* Modal */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="bg-gray-900 border border-gray-700 text-white rounded-2xl shadow-xl p-8 max-w-sm text-center"
            >
              <p className="text-lg">{status}</p>
              <motion.button
                onClick={() => {
                  setStatus("");
                  setFormData({ name: "", email: "", message: "" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 bg-linear-to-r from-slate-500 to-gray-600 rounded-lg"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-8 text-2xl text-slate-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a
          href="https://github.com/asutosh24595"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/asutosh-shukla-033044296/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
}
