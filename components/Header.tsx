'use client';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? 'bg-[#0a0f1f]/90 shadow-xl backdrop-blur-md' : 'bg-[#0a0f1f]/70'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Name */}
        <div
          className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-400 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => scrollToSection('home')}
        >
          Portfolio.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="relative px-1 py-1 hover:text-purple-400 transition group"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0'
        } bg-[#0a0f1f]/90`}
      >
        <nav className="flex flex-col gap-4 px-6 text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="hover:text-purple-400 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
