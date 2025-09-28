"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react OR replace with Heroicons
import Link from "next/link"; // 👈 import Link

const NAVLINKS = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-500">
          Hamza<span className="text-white">Dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAVLINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-6 space-y-4">
          {NAVLINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
