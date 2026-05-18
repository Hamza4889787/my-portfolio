"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-blue-400"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12 max-w-xl mx-auto"
        >
          Have a project in mind or just want to say hello? Let's connect!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />,
              title: "Email",
              desc: "hamza4889787@gmail.com",
            },
            {
              icon: <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />,
              title: "Phone",
              desc: "+92 305 4365091",
            },
            {
              icon: <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />,
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
              className="p-6 rounded-xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-500/30 transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            Send Me a Message
          </Link>
        </motion.div>
      </div>
    </section>
  );
}