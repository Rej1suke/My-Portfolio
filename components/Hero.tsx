'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center justify-center px-6 bg-[#0a0f1f] relative overflow-hidden text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-16 w-full max-w-7xl mx-auto px-4">

        {/* Left: Text Column */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-400"
          >
            Reggie Manero — Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-slate-300 max-w-md"
          >
            I build modern, accessible web applications with performant UI and delightful UX.
            I love solving problems with elegant code and pixel-perfect design.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md font-medium 
                         bg-linear-to-r from-purple-700 to-blue-500 
                         shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md font-medium 
                         bg-linear-to-r from-purple-700 to-blue-500 
                         shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 transition-all duration-300"
          >
            <Image
              src="/avatar.jpg"
              alt="Reggie Avatar"
              width={800}
              height={800}
              className="object-cover w-full h-full rounded-3xl"
            />
          </motion.div>
        </div>
      </div>

      
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-700/20 rounded-full -translate-x-1/2 -translate-y-1/3 blur-3xl animate-pulse pointer-events-none" />
    </section>
  );
}
