'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen px-6 py-16 bg-[#0a0f1f] relative overflow-hidden"
    >
      {/* Hero Text */}
      <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
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
          className="text-lg md:text-xl text-slate-300 leading-relaxed"
        >
          I build modern, accessible web applications with performant UI and
          delightful UX. I love solving problems with elegant code and
          pixel-perfect design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mt-4 justify-center lg:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md font-medium bg-linear-to-r from-purple-700 to-blue-500 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:-translate-y-1 text-center"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md font-medium bg-linear-to-r from-purple-700 to-blue-500 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:-translate-y-1 text-center"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      {/* Hero Avatar */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        className="p-6 bg-white/5 backdrop-blur-md rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] mx-auto w-72 h-72 md:w-96 md:h-96"
      >
        <Image
          src="/avatar.jpg"
          alt="Reggie Avatar"
          width={800}
          height={800}
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-700/20 rounded-full -translate-x-1/2 -translate-y-1/3 blur-3xl pointer-events-none animate-pulse" />
    </section>
  );
};

export default Hero;
