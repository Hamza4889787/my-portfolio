import React from "react";

function page() {
  return (
    <div>
      <main className="bg-gray-950 text-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-blue-600/30 blur-3xl"></div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              About <span className="text-blue-500">Me</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Full Stack (MERN) Developer with 2+ years of experience building
              scalable and user-focused web applications.
            </p>
          </motion.div>
        </section>

        {/* My Story */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-blue-400"
          >
            My Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            I started my journey as a curious learner in software development
            and grew into a Full Stack Developer specializing in the{" "}
            <span className="text-blue-400">MERN stack</span>. Over the years,
            I’ve built e-commerce platforms, real-time chat applications, and
            business solutions that help clients grow online. My freelance and
            company projects taught me not just how to code, but how to deliver{" "}
            <span className="text-purple-400">
              scalable, secure, and user-friendly
            </span>{" "}
            applications.
          </motion.p>
        </section>

        {/* Why Me */}
        <section className="py-20 px-6 bg-gray-900">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-blue-400 text-center"
          >
            Why Me?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                Full Stack Expertise
              </h3>
              <p className="text-gray-400 text-sm">
                Skilled in React, Node.js, Express, and MongoDB with hands-on
                experience in developing complete web solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                Proven Projects
              </h3>
              <p className="text-gray-400 text-sm">
                Delivered e-commerce websites, chat systems, and custom
                platforms for businesses, achieving 100% client satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                Client-Centric Approach
              </h3>
              <p className="text-gray-400 text-sm">
                I focus on understanding your business goals to build solutions
                that are not just functional, but impactful and user-friendly.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
