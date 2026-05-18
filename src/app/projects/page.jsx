"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    name: "UKA Auto Trade",
    desc: "A modern Auto trading platform for buying and selling Cars online in UK Market.",
    skills: [
      "HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next JS",
      "Rest API Integration", "Redux Toolkit", "JWT Authentication & Authorization",
      "Node js", "Express JS", "SQL Database", "PHP ADMIN PANEL", "XAMPP",
      "Git & GitHub", "Hostinger",
    ],
    images: [
      "/assets/uka-1.png", "/assets/uka-1 (2).png", "/assets/uka-2.png",
      "/assets/uka-3.png", "/assets/uka-4.png", "/assets/uka-5.png",
      "/assets/uk-db-1.png", "/assets/uk-db-2.png", "/assets/uk-db-3.png",
      "/assets/uk-db-4.png", "/assets/uk-db-5.png", "/assets/uk-db-6.png",
    ],
    url: "https://ukaautotrade.co.uk/",
  },
  {
    name: "Your LifePlan Journey",
    desc: "Lifeplan is a comprehensive management application providing users with a structured roadmap for personal health, care planning, and goal tracking. I architected and built the entire frontend from scratch, ensuring a seamless bridge between complex backend data and a user-friendly interface.",
    skills: [
      "HTML", "CSS", "Tailwind CSS", "Font-Awesome", "JavaScript",
      "React", "Typescript", "Google Gemini APIs",
      "Authentication & Authorization", "Animations",
    ],
    images: [
      "/assets/lp.png", "/assets/lp-1.png", "/assets/lp-2.png",
      "/assets/lp-3.png", "/assets/lp-4.png", "/assets/lp-5.png",
    ],
    url: "https://lifeplan.staffoo.com.au/",
  },
  {
    name: "Guard & Petrol Management System",
    desc: "Guard & Manager Patrol Management System featuring patrol tracking, incident reporting, NFC scanning, face detection, voice-to-text summaries, and real-time activity monitoring. Built responsive user interfaces and integrated secure role-based management for guards, managers, and administrators.",
    skills: [
      "HTML", "CSS", "Tailwind CSS", "Font-Awesome", "JavaScript",
      "React", "Redux Toolkit", "Typescript", "Rest API Integration",
      "JWT Token Authentication & Authorization",
    ],
   images: [
      "/assets/gp-1.png", "/assets/gp-2.png", "/assets/gp-3.png",
      "/assets/gp-4.png", "/assets/gp-5.png",
    ],
    url: "https://guard-petrol.ha4889787.workers.dev/",
  },
  {
    name: "GradGurus",
    desc: "Frontend for a student services website.",
    skills: ["HTML", "CSS", "Bootstrap", "Font-Awesome", "JavaScript"],
    images: ["/assets/gd-1.png", "/assets/gd-2.png", "/assets/gd-3.png"],
    url: "https://www.gradgurus.co.uk/",
  },
  {
    name: "ADTIYA GOLD",
    desc: "Complete frontend for a gold trading website.",
    skills: ["HTML", "CSS", "Javascript", "React", "API Integration"],
    images: ["/assets/ag-1.png", "/assets/ag-2.png"],
    url: "https://adityagold.co.in/index.html",
  },
  {
    name: "Dentist Appointment",
    desc: "A Dentist Appointment Booking app with easy-to-use design and smooth booking flow. Patients can schedule weekday and weekend visits, access routine and emergency care, and explore treatments like whitening, veneers, implants and orthodontics.",
    skills: [
      "HTML5", "CSS3", "Javascript", "React", "Bootstrap",
      "Material UI", "Node", "Express", "MongoDB",
    ],
    images: ["/assets/d-1.png", "/assets/d-2.png", "/assets/d-3.png"],
    url: "https://dentist-usa.vercel.app/",
  },
  {
    name: "Car Wrapping & Custom Vehicle Styling",
    desc: "Delivered professional car wrapping services using premium vinyl materials, including full wraps, color changes, custom graphics, and protective designs.",
    skills: [
      "HTML5", "CSS3", "Javascript", "React", "Bootstrap",
      "Node", "Express", "MongoDB",
    ],
    images: ["/assets/c-1.png", "/assets/c2.png", "/assets/c-3.png"],
    url: "https://carwrap-usa.vercel.app/#home",
  },
  {
    name: "Organic Oils E-Commerce Platform",
    desc: "Developed an online store for organic oils, featuring cold-pressed, essential, and carrier oils. Focused on eco-friendly sourcing, detailed product insights, and a seamless shopping experience.",
    skills: [
      "HTML5", "CSS3", "Javascript", "React", "Bootstrap",
      "Node", "Express", "MongoDB",
    ],
    images: ["/assets/ec-1.png", "/assets/ec-2.png", "/assets/ec-3.png"],
    url: "https://organicoo.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [fullImage, setFullImage] = useState(null); // { images, index }
  const [zoom, setZoom] = useState(1);

  const images = selectedProject?.images?.filter(Boolean) ?? [];

  const nextImage = (e) => {
    e?.stopPropagation();
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setImgIndex(0);
  };

  const openFullImage = (imgs, idx) => {
    setZoom(1);
    setFullImage({ images: imgs, index: idx });
  };

  const fullNext = (e) => {
    e?.stopPropagation();
    setZoom(1);
    setFullImage((f) => ({
      ...f,
      index: (f.index + 1) % f.images.length,
    }));
  };

  const fullPrev = (e) => {
    e?.stopPropagation();
    setZoom(1);
    setFullImage((f) => ({
      ...f,
      index: (f.index - 1 + f.images.length) % f.images.length,
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (fullImage) {
        if (e.key === "ArrowRight") fullNext();
        if (e.key === "ArrowLeft") fullPrev();
        if (e.key === "Escape") setFullImage(null);
        return;
      }
      if (selectedProject && images.length > 0) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullImage, selectedProject, images]);

  return (
    <main className="bg-gray-950 text-white min-h-screen px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-blue-500 mb-16">
        My Projects
      </h1>

      {/* ── Projects Grid ── */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-lg hover:shadow-blue-500/40 transition flex flex-col items-center text-center"
            onClick={() => openProject(project)}
          >
            {project.images?.[0] ? (
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            ) : null}
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-300 text-sm mt-1 line-clamp-3">{project.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-full md:w-[750px] max-h-[90vh] overflow-y-auto relative"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl z-10"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-gray-400 mb-5">{selectedProject.desc}</p>

              {/* Skills */}
              <div className="mb-5">
                <h3 className="font-semibold mb-2 text-sm text-gray-300 uppercase tracking-wider">
                  Skills Used
                </h3>
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

              {/* Demo Video */}
              {selectedProject.video && (
                <div className="mb-5">
                  <h3 className="font-semibold mb-2 text-sm text-gray-300 uppercase tracking-wider">
                    Demo Video
                  </h3>
                  <video
                    src={selectedProject.video}
                    controls
                    className="w-full rounded-xl border border-gray-700"
                    style={{ maxHeight: "360px" }}
                  />
                </div>
              )}

              {/* Image Carousel */}
              {images.length > 0 && (
                <div className="mb-5">
                  {selectedProject.video && (
                    <h3 className="font-semibold mb-2 text-sm text-gray-300 uppercase tracking-wider">
                      Screenshots
                    </h3>
                  )}

                  {/* Main image — click to open fullscreen */}
                  <div className="relative group">
                    <img
                      src={images[imgIndex]}
                      alt={`screenshot ${imgIndex + 1}`}
                      className="w-full rounded-xl border border-gray-700 cursor-zoom-in object-contain bg-gray-800"
                      style={{ maxHeight: "360px", width: "100%" }}
                      onClick={() => openFullImage(images, imgIndex)}
                    />

                    {/* Hover zoom hint */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition rounded-xl cursor-zoom-in pointer-events-none"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition bg-black/70 text-white text-xs px-3 py-1 rounded-full select-none">
                        🔍 Click to expand
                      </span>
                    </div>

                    {/* Prev / Next arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center text-xl shadow transition"
                          onClick={prevImage}
                        >
                          ‹
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center text-xl shadow transition"
                          onClick={nextImage}
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail strip */}
                  {images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                      {images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`thumb ${idx + 1}`}
                          onClick={() => setImgIndex(idx)}
                          className={`h-14 w-20 object-cover rounded-lg flex-shrink-0 cursor-pointer border-2 transition ${
                            idx === imgIndex
                              ? "border-blue-500 opacity-100"
                              : "border-transparent opacity-50 hover:opacity-80"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Counter */}
                  {images.length > 1 && (
                    <p className="text-center text-xs text-gray-500 mt-2">
                      {imgIndex + 1} / {images.length} · Use ← → keys to navigate
                    </p>
                  )}
                </div>
              )}

              {/* Visit Website */}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-semibold transition mt-2"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Image Modal ── */}
      <AnimatePresence>
        {fullImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullImage(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-xl z-10 transition"
              onClick={() => setFullImage(null)}
            >
              ✕
            </button>

            {/* Zoom Controls inserted here */}
            <div className="absolute top-16 right-4 flex flex-col gap-2 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((prev) => Math.min(prev + 0.25, 3));
                }}
                className="bg-gray-800 hover:bg-blue-600 text-white w-10 h-10 rounded-full text-xl transition"
              >
                +
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((prev) => Math.max(prev - 0.25, 1));
                }}
                className="bg-gray-800 hover:bg-blue-600 text-white w-10 h-10 rounded-full text-xl transition"
              >
                −
              </button>
            </div>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm bg-black/60 px-4 py-1 rounded-full select-none">
              {fullImage.index + 1} / {fullImage.images.length}
            </div>

            {/* Prev */}
            {fullImage.images.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition z-10"
                onClick={fullPrev}
              >
                ‹
              </button>
            )}

            {/* Full Image */}
            <motion.img
              key={fullImage.index}
              src={fullImage.images[fullImage.index]}
              alt={`fullscreen ${fullImage.index + 1}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: zoom }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-grab"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                e.stopPropagation();
                if (e.deltaY < 0) {
                  setZoom((prev) => Math.min(prev + 0.1, 3));
                } else {
                  setZoom((prev) => Math.max(prev - 0.1, 1));
                }
              }}
            />

            {/* Next */}
            {fullImage.images.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition z-10"
                onClick={fullNext}
              >
                ›
              </button>
            )}

            {/* Bottom thumbnail strip */}
            {fullImage.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-1">
                {fullImage.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`thumb ${idx + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoom(1); // Reset zoom when thumbnail is changed
                      setFullImage((f) => ({ ...f, index: idx }));
                    }}
                    className={`h-12 w-16 object-cover rounded-md flex-shrink-0 cursor-pointer border-2 transition ${
                      idx === fullImage.index
                        ? "border-blue-500 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Keyboard hint */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-600 text-xs select-none">
              ← → to navigate · ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}