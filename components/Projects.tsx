"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js, TailwindCSS, and Framer Motion.",
    image: "/projects/portfolio.jpg",
    url: "https://your-portfolio-url.com",
  },
  {
    title: "AI Chatbot",
    description: "Custom AI chatbot using OpenAI API and serverless functions.",
    image: "/projects/ai-chatbot.jpg",
    url: "https://your-chatbot-demo.com",
  },
  {
    title: "E-commerce App",
    description: "Fullstack e-commerce app with Stripe + Sanity CMS.",
    image: "/projects/ecommerce.png",
    url: "https://your-ecommerce.com",
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-slate-300 mt-2">Some things I built recently.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{p.description}</p>

              <Link
                href={p.url}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-[linear-gradient(90deg,#7c3aed,#06b6d4)] text-sm font-medium"
              >
                Visit Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
