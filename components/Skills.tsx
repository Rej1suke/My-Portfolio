'use client';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
    ],
  },
];

function ProgressBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-2 bg-linear-to-r from-violet-500 to-cyan-400"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">Skills & Expertise</h2>
      <p className="text-slate-300 mt-2">Technologies I work with and my proficiency level.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className={clsx(
              "p-6 rounded-xl bg-white/5 border border-white/10",
              "hover:border-white/20 transition"
            )}
          >
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <ul className="mt-4 space-y-4">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between text-sm text-slate-300 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
