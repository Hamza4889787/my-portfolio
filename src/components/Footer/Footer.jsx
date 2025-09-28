"use client";

import React from "react";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hamza<span className="text-blue-500">Dev</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer (MERN) passionate about building modern,
            scalable, and user-friendly applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 text-white transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hamza Ali. All rights reserved.
      </div>
    </footer>
  );
}
