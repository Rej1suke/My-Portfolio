"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/projects/ecommerce.png",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
  },
  {
    title: "AI Chatbot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/projects/ecommerce.png",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
  },
  {
    title: "E-commerce App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/projects/ecommerce.png",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-400">
        Projects
      </h2>
      <p className="text-slate-300 text-center mt-2">
        Some things I built recently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-7xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-60 flex items-center justify-center bg-white/10 rounded-t-xl overflow-hidden">
              <motion.div
                className="w-full h-full p-2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.description}</p>

              <Link
                href={p.url}
                target="_blank"
                className="inline-block px-4 py-2 mt-2 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors duration-300"
              >
                Visit Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
