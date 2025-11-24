'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-24">

        <div className="md:col-span-7">
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

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#7c3aed,#06b6d4)] rounded-md shadow-md font-medium
              transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="nline-block px-6 py-3 bg-[linear-gradient(90deg,#7c3aed,#06b6d4)] rounded-md shadow-md font-medium
              transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            >
              Contact me
            </a>
          </div>
          

          <div className="mt-12 grid grid-cols-2 gap-4 max-w-lg">
            <div className="group relative px-6 py-4 rounded-md shadow-md font-medium flex items-center justify-center text-center 
                  bg-[linear-gradient(90deg,#1e3a8a,#3b82f6)] 
                  bg-size-[200%_200%] animate-gradient 
                  transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1">
                🇵🇭 Located: Manila, Philippines
            </div>
            <div className="group relative px-6 py-4 rounded-md shadow-md font-medium flex items-center justify-center text-center 
                  bg-[linear-gradient(90deg,#1e3a8a,#3b82f6)] 
                  bg-size-[200%_200%] animate-gradient 
                  transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] hover:-translate-y-1">
              📧 reggiemanero25@gmail.com
            </div>
          </div>
        </div>

        {/* ---------- AVATAR BLOCK ---------- */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 2 }}
            transition={{ delay: 0.2 }}
            className="w-56 h-56 rounded-2xl overflow-hidden ring-1 ring-white/10"
          >
            <Image
              src="/avatar.jpg"
              alt="Reggie's avatar"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        {/* ---------------------------------- */}

      </div>
    </section>
  );
}
