"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  GraduationCap,
  MessageCircle,
  LayoutDashboard,
  Briefcase,
  Calendar,
  Utensils,
  Users,
  CheckSquare,
  Database,
  BriefcaseBusiness,
  FileText,
  Stethoscope,
  BookOpen,
  Code,
} from "lucide-react";
import React from "react";

// ✅ Updated Tech Stack with all skills & working logos
const techStack = [
  // Frontend
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "REST APIs",
    logo: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
  },

  // Database
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  // Tools
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-400" />,
      title: "E-Commerce Applications",
      desc: "Online stores with product management, shopping carts, and secure payment systems.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-400" />,
      title: "Learning Management Systems",
      desc: "Education platforms with courses, quizzes, progress tracking, and student dashboards.",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-400" />,
      title: "Real-Time Chat Applications",
      desc: "Messaging apps like WhatsApp/Slack with live communication and notifications.",
    },
    {
      icon: <LayoutDashboard className="w-12 h-12 text-pink-400" />,
      title: "Admin Dashboards & Analytics Panels",
      desc: "Data visualization dashboards with charts, KPIs, and business management tools.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-yellow-400" />,
      title: "Portfolio & Business Websites",
      desc: "Modern, responsive websites to showcase personal brands or business services.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-teal-400" />,
      title: "Booking & Reservation Systems",
      desc: "Applications for hotels, salons, and events with calendar & booking features.",
    },
    {
      icon: <Utensils className="w-12 h-12 text-red-400" />,
      title: "Food Delivery & Order Tracking Apps",
      desc: "End-to-end ordering systems with real-time delivery tracking.",
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-400" />,
      title: "Social Media Platforms",
      desc: "Platforms with posts, comments, likes, user profiles, and community features.",
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-orange-400" />,
      title: "Project & Task Management Tools",
      desc: "Collaboration tools like Trello/Asana for teams to organize and track work.",
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "CRM & ERP Systems",
      desc: "Customer management and enterprise solutions to streamline operations.",
    },
    {
      icon: <BriefcaseBusiness className="w-12 h-12 text-purple-500" />,
      title: "Job Portals & Recruitment Platforms",
      desc: "Applications for job postings, candidate profiles, and recruitment workflows.",
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: "Financial & Payment Apps",
      desc: "Wallets, invoicing systems, and secure subscription/payment apps.",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-pink-500" />,
      title: "Healthcare Systems",
      desc: "Doctor appointment booking, patient records, and hospital dashboards.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
      title: "Blogs & CMS",
      desc: "CMS solutions like WordPress with content publishing and management features.",
    },
    {
      icon: <Code className="w-12 h-12 text-cyan-400" />,
      title: "Custom API Development",
      desc: "Integration with payment gateways, Google Maps, or third-party services.",
    },
  ];

  return (
    <main className="bg-gray-950 text-white overflow-hidden">
      {/* ✅ Services Grid */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-blue-400"
        >
          What I Can Build
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Technologies Infinite Slider */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          Technologies I Work With
        </motion.h2>

        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-16 animate-marquee"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[120px]"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 mb-3"
                />
                <p className="text-gray-300">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Infinite Loop CSS */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
          }
        `}</style>
      </section>
    </main>
  );
}

export default Services;
