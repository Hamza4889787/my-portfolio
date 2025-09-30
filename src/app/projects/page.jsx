"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    name: "GradGurus",
    desc: "Frontend for a student services website.",
    skills: ["HTML", "CSS", "Bootstrap", "Font-Awesome", "JavaScript"],
    images: ["assets/gd-1.png", "assets/gd-2.png", "assets/gd-3.png"],
    url: "https://www.gradgurus.co.uk/",
  },
  {
    name: "ADTIYA GOLD",
    desc: "Complete frontend for a gold trading website.",
    skills: ["HTML", "CSS", "Javascript", "React", "API Integration"],
    images: ["assets/ag-1.png", "assets/ag-2.png"],
    url: "https://adityagold.co.in/index.html",
  },
  {
    name: "Dentist Appointment",
    desc: "I created a Dentist Appointment Booking app with an easy to use design and smooth booking flow. Patients can schedule weekday and weekend visits, access routine and emergency care, and explore treatments like whitening, veneers, implants and orthodontics for a better dental experience.",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Bootstrap",
      "Material UI",
      "Node",
      "Express",
      "MongoDB",
    ],
    images: ["assets/d-1.png", "assets/d-2.png", "assets/d-3.png"],
    url: "https://dentist-usa.vercel.app/",
  },
  {
    name: "Car Wrapping & Custom Vehicle Styling",
    desc: "Delivered professional car wrapping services using premium vinyl materials, including full wraps, color changes, custom graphics, and protective designs. Enhanced vehicles with unique styles that combine aesthetics, durability, and client-specific customization.",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Bootstrap",
      "Node",
      "Express",
      "MongoDB",
    ],
    images: ["assets/c-1.png", "assets/c2.png", "assets/c-3.png"],
    url: "https://carwrap-usa.vercel.app/#home",
  },
  {
    name: "Organic Oils E-Commerce Platform",
    desc: "Developed an online store for organic oils, featuring cold-pressed, essential, and carrier oils. Focused on eco-friendly sourcing, detailed product insights, and a seamless shopping experience to promote wellness and sustainability.",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Bootstrap",
      "Node",
      "Express",
      "MongoDB",
    ],
    images: ["assets/ec-1.png", "assets/ec-2.png", "assets/ec-3.png"],
    url: "https://organicoo.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };
  const prevImage = () => {
    if (selectedProject) {
      setImgIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-blue-500 mb-16">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-lg hover:shadow-blue-500/40 transition flex flex-col items-center text-center"
            onClick={() => {
              setSelectedProject(project);
              setImgIndex(0);
            }}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-300 text-sm mt-1">{project.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-[90%] md:w-[700px] relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-gray-400 mb-4">{selectedProject.desc}</p>

              {/* Skills */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Skills Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Carousel */}
              <div className="relative mb-4">
                <img
                  src={selectedProject.images[imgIndex]}
                  alt="project"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-700"
                  onClick={prevImage}
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-700"
                  onClick={nextImage}
                >
                  ›
                </button>
              </div>

              {/* Visit Website */}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
              >
                Visit Website
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
