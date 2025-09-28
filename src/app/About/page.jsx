"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Rocket, Users, Lightbulb, Globe } from "lucide-react";
import React from "react";

function Page() {
  return (
    <main className="bg-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            About <span className="text-blue-500">Me</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            My journey as a developer started with curiosity and a desire to
            solve problems. Over the years, I evolved into a{" "}
            <span className="text-blue-400">Full Stack MERN Developer</span> who
            can transform business ideas into working solutions. I have
            developed projects ranging from{" "}
            <span className="text-purple-400">real-time chat apps</span> to{" "}
            <span className="text-green-400">
              scalable e-commerce platforms
            </span>
            .
            <br />
            <br />
            What excites me most is building solutions that{" "}
            <span className="text-pink-400">add real value</span> for businesses
            and users. My focus is on performance, security, and delivering a
            seamless user experience. Every line of code I write contributes to
            building products that inspire trust and make an impact.
          </motion.p>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      {/* Experience Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-blue-400"
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {[
            {
              year: "2022",
              text: "Started my development journey, learning MERN stack basics.",
            },
            {
              year: "2023",
              text: "Built freelance projects including e-commerce and chat apps.",
            },
            {
              year: "2024",
              text: "Worked with startups, focusing on scalable web solutions.",
            },
            {
              year: "2025",
              text: "Developing advanced full-stack apps with focus on performance and UX.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-20 flex items-center"
            >
              {/* Year Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/60 hover:shadow-blue-400/90 transition duration-300">
                  <span className="animate-pulse">{item.year}</span>
                </div>
              </div>

              {/* Text + Connector Dot */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "pr-20 text-right" : "pl-20 text-left"
                }`}
              >
                <div className="relative">
                  {/* Dot connector */}
                  <span
                    className={`absolute top-2 ${
                      index % 2 === 0 ? "right-[-12px]" : "left-[-12px]"
                    } w-4 h-4 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 shadow-md`}
                  ></span>

                  {/* Text box */}
                  <p className="bg-gray-900/70 inline-block px-5 py-3 rounded-lg shadow-md text-gray-300 max-w-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-blue-400"
        >
          What I Value
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Briefcase className="w-12 h-12 text-blue-400 mb-4" />,
              title: "Professionalism",
              desc: "Delivering clean, maintainable code with client-focused collaboration.",
            },
            {
              icon: <Code className="w-12 h-12 text-purple-400 mb-4" />,
              title: "Innovation",
              desc: "Exploring new tech to create scalable, future-proof applications.",
            },
            {
              icon: <Rocket className="w-12 h-12 text-green-400 mb-4" />,
              title: "Growth",
              desc: "Always learning, adapting, and pushing boundaries in development.",
            },
            {
              icon: <Users className="w-12 h-12 text-pink-400 mb-4" />,
              title: "Collaboration",
              desc: "Strong believer in teamwork, ensuring smooth communication & results.",
            },
            {
              icon: <Lightbulb className="w-12 h-12 text-yellow-400 mb-4" />,
              title: "Creativity",
              desc: "Thinking outside the box to bring fresh solutions to complex problems.",
            },
            {
              icon: <Globe className="w-12 h-12 text-teal-400 mb-4" />,
              title: "Global Mindset",
              desc: "Building apps with scalability and international reach in mind.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:rotate-3 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
