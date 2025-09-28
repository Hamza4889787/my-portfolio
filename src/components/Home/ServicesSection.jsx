"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  MessageCircle,
  Newspaper,
  Utensils,
  Laptop, // example extra icon
} from "lucide-react";

const SERVICES = [
  {
    title: "Custom Website Development",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    desc: "Tailored websites built with modern technologies to fit your unique business needs.",
  },
  {
    title: "E-Commerce Website & Online Store",
    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    desc: "Scalable online stores with secure payments, product listings, and smooth checkout.",
  },
  {
    title: "Real-Time Chat & Messaging Website",
    icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
    desc: "Interactive chat apps with live messaging, Socket.IO, and push notifications.",
  },
  {
    title: "Blog or News Website",
    icon: <Newspaper className="w-8 h-8 text-red-500" />,
    desc: "SEO-friendly blogs and news portals with CMS integration for easy content updates.",
  },
  {
    title: "Online Food Ordering System",
    icon: <Utensils className="w-8 h-8 text-orange-500" />,
    desc: "User-friendly platforms for restaurants to handle orders, menus, and deliveries.",
  },
  {
    title: "Portfolio & Business Websites",
    icon: <Laptop className="w-8 h-8 text-yellow-500" />,
    desc: "Professional websites to showcase portfolios, businesses, and personal brands.",
  },
  // add more services below if needed
];

export default function ServicesSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-500">Services</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Here are the solutions I provide to help businesses grow online.
        </p>
      </div>
      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.slice(0, showMore ? SERVICES.length : 6).map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-2xl shadow-md border border-white/5 hover:border-blue-500 transition group"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
        >
          {showMore ? "Show Less" : "Show More Services"}
        </button>
      </div>
      )
    </section>
  );
}
