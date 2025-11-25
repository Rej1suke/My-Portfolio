"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1f] text-gray-400 py-10">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" className="p-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" className="p-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="p-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* COPYRIGHT BELOW THE ICONS */}
        <div className="text-sm">
          © {new Date().getFullYear()} Reggie Manero — All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
