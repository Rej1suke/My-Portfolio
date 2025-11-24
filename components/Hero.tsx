'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-24">

        {/* Text Column */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Reggie Manero — Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            I build modern, accessible web applications with performant UI and delightful UX.
            I love solving problems with elegant code and pixel-perfect design.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#7c3aed,#06b6d4)] rounded-md shadow-md font-medium
              transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#7c3aed,#06b6d4)] rounded-md shadow-md font-medium
              transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Avatar + Info Column */}
        <div className="md:col-span-5 flex flex-col items-center gap-4">

          {/* Avatar (Bigger) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/20 transition-all duration-300"
          >
            <Image
              src="/avatar.jpg"
              alt="Reggie's avatar"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>

          {/* Info Boxes (Smaller) */}
          <div className="flex flex-col gap-3 w-full max-w-[220px]">
            <div className="px-4 py-2 rounded-md shadow-md font-medium text-center
                            bg-linear-to-r from-purple-700 to-blue-400
                            hover:scale-105 transition-transform duration-300 text-sm">
              🇵🇭 Located: Manila, Philippines
            </div>
            <div className="px-4 py-2 rounded-md shadow-md font-medium text-center
                            bg-linear-to-r from-purple-700 to-blue-400
                            hover:scale-105 transition-transform duration-300 text-sm">
              📧 reggiemanero25@gmail.com
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
