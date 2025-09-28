"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "ed715dff-bc3d-423e-90df-82b7ca10848f"); // Your Web3Forms Access Key
    formData.append("subject", "New Contact Form Message");

    // Combine client info in the email body
    const messageBody = `
      Name: ${formData.get("name")}
      Email: ${formData.get("email")}
      Message: ${formData.get("message")}
    `;
    formData.set("message", messageBody); // overwrite message field

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus(`❌ Failed to send: ${data.message || "Unknown error"}`);
        console.error("Web3Forms Error:", data);
      }
    } catch (err) {
      setStatus("❌ Failed to send: Network or CORS error");
      console.error(err);
    }

    setLoading(false);
  };

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
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="text-gray-300">+92 305 4365091</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span className="text-gray-300">Lahore, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
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
              name="name"
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
              name="email"
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
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-center mt-4">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
