"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-blue-400 font-medium mb-3"
          >
            Full Stack developer
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I’m <span className="text-blue-500">Hamza Ali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              I am a <span className="text-blue-400">Web Developer </span>
              passionate about building scalable, responsive, and user-friendly
              <span className="text-purple-400"> MERN applications</span>.
              Skilled in React, Node.js, Express, and MongoDB with experience
              creating secure APIs, real-time apps, and modern web solutions
            </motion.p>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium shadow-lg transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 hover:bg-blue-600/10 rounded-xl font-medium transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600"
          >
            <img
              src="/your-image.jpg" // replace with your actual image path
              alt="Hamza Ali"
              className="w-full h-full object-cover"
            />
            {/* Glow Ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
