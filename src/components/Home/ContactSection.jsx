"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind or want to collaborate? Fill out the form or
            reach me directly using the details below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="text-gray-300">hamza4889787@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-500" />
              <span className="text-gray-300">+92 305 4365091</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-500" />
              <span className="text-gray-300">Lahore, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
