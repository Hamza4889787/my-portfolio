"use client";

import React from "react";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link"; // 👈 import Link

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left">
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
              <Link href="/home" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} className="text-blue-500" /> hamzadev@email.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-blue-500" /> +92 300 1234567
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-blue-500" /> Lahore, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe to get latest updates.</p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-gray-900 text-sm text-white focus:outline-none border border-gray-700 focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center md:justify-center gap-4 mt-10">
        <a
          href="https://facebook.com/share/17EFci53q4/"
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
          href="https://www.linkedin.com/in/hamza-ali-360777312/"
          target="_blank"
          className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-white transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Hamza4889787"
          target="_blank"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white transition"
        >
          <Github size={20} />
        </a>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hamza Ali. All rights reserved.
      </div>
    </footer>
  );
}
