"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <main className="bg-gray-950 text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-600/20 to-pink-500/20 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have a project in mind or just want to say hello? Let’s get in touch
            and build something amazing together.
          </p>
        </motion.div>
      </section>

      {/* ✅ Contact Info Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <Mail className="w-10 h-10 text-blue-400 mx-auto mb-4" />,
            title: "Email",
            desc: "hamza@example.com",
          },
          {
            icon: <Phone className="w-10 h-10 text-green-400 mx-auto mb-4" />,
            title: "Phone",
            desc: "+92 300 1234567",
          },
          {
            icon: <MapPin className="w-10 h-10 text-pink-400 mx-auto mb-4" />,
            title: "Location",
            desc: "Lahore, Pakistan",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-500/30 transition"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ✅ Contact Form */}
      <section className="py-20 px-6 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-blue-400"
        >
          Send Me a Message
        </motion.h2>

        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 w-full bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 w-full bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Your Message"
            className="p-4 w-full bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition mx-auto"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </form>
      </section>

      {/* ✅ Map Section (Optional) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-800">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13623.921187081343!2d74.3236742!3d31.5203695"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Contact;
