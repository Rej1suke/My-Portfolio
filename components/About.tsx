import React from 'react';

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-16">

      {/* About Text */}
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-400">
          About Me
        </h2>

        <p className="text-slate-300 leading-relaxed">
          I'm Reggie Manero, a computer science student in Central Philippine University. I specialize in building full-stack web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. My passion lies in creating seamless user experiences through clean, efficient code and thoughtful design.
        </p>

        <p className="text-slate-300 leading-relaxed">
          My journey into web development began with small personal projects and gradually grew as I contributed to open-source and built production apps. I've completed coursework in computer science fundamentals and regularly study modern frontend patterns and performance optimization.
        </p>

        <p className="text-slate-300 leading-relaxed">
          My development philosophy centers on clarity: clean code, clear UX, and predictable behavior. I believe in testing assumptions early, iterating quickly, and keeping performance and accessibility top-of-mind.
        </p>

        <p className="text-slate-300 leading-relaxed">
          Outside of coding, I enjoy gaming, hanging out with friends, and exploring new coffee shops. I love things that keep my creative energy flowing and help me approach problems from different perspectives.
        </p>
      </div>

      {/* Profile Aside */}
<aside className="p-6 bg-white/5 backdrop-blur-md rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
  <h3 className="font-semibold text-lg text-white mb-4 border-b border-slate-700 pb-2">
    Profile
  </h3>

  <div className="space-y-4">
    {/* Location */}
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <div className="p-2 rounded-lg bg-purple-500/20">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10c0 7.5-7.5 12-7.5 12S4.5 17.5 4.5 10a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      <div>
        <p className="text-sm text-slate-400">Location</p>
        <p className="text-slate-200 font-medium">Iloilo City, Philippines</p>
      </div>
    </div>

    {/* Education */}
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <div className="p-2 rounded-lg bg-blue-500/20">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      </div>
      <div>
        <p className="text-sm text-slate-400">Education</p>
        <p className="text-slate-200 font-medium">BSCS - Central Philippine University</p>
      </div>
    </div>

    {/* Availability */}
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <div className="p-2 rounded-lg bg-green-500/20">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-sm text-slate-400">Availability</p>
        <p className="text-slate-200 font-medium">Open to Opportunities</p>
      </div>
    </div>

    {/* Contact */}
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition">
      <div className="p-2 rounded-lg bg-red-500/20">
        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12v4l-4 2-4-2v-4m8-4a4 4 0 10-8 0 4 4 0 008 0z" />
        </svg>
      </div>
      <div>
        <p className="text-sm text-slate-400">Contact</p>
        <p className="text-slate-200 font-medium">reggiemanero25@gmail.com</p>
      </div>
    </div>
  </div>
</aside>

    </div>
  );
};

export default About;
