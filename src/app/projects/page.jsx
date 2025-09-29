"use client";

import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "GradGurus",
    desc: "Frontend for a student services website.",
    images: ["assets/gd-1.png"],
    url: "https://www.gradgurus.co.uk/",
  },
  {
    name: "ADTIYA GOLD",
    desc: "Complete frontend for a gold trading website.",
    images: ["assets/ag-1.png"],
    url: "https://adityagold.co.in/index.html",
  },
];

export default function Projects() {
  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-blue-500 mb-16">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-lg hover:shadow-blue-500/40 transition flex flex-col items-center text-center"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-300 text-sm mt-1">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
