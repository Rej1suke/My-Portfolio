'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,

  SiGit,
  SiPostman,
} from 'react-icons/si';

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "REST APIs", icon: <SiPostman className="text-orange-400" /> },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto">

      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-3 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-400">
        Skills & Expertise
      </h2>

      <p className="text-center text-slate-300 mb-12">
        Technologies I work with.
      </p>

      {/* Skills Grid */}
      <div className="
        grid grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-10
      ">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="
              p-6 rounded-xl
              bg-white/5 
              backdrop-blur-xl
              border border-white/10
              shadow-lg
              hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {group.category}
            </h3>

            <ul className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="
                    flex items-center gap-2 px-3 py-2
                    rounded-lg
                    bg-white/5 
                    border border-white/10
                    text-sm text-slate-200
                    hover:bg-white/10
                    hover:scale-[1.03]
                    transition-all duration-300
                    shadow-lg
                  "
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>

          </div>  
        ))}
      </div>
    </div>
  );
}
