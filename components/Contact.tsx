'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Status {
  ok: boolean;
  msg: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Please fill in name, email, and message.' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ ok: true, msg: 'Thanks — your message was sent.' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ ok: false, msg: 'Something went wrong. Please try again later.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Network error. Try again later.' });
    }
    setLoading(false);
  };

  const contactCards = [
    { icon: <FaEnvelope size={20} className="text-white" />, title: 'Email', value: 'reggiemanero25@gmail.com', link: 'mailto:reggiemanero25@gmail.com', bg: 'bg-violet-500/20' },
    { icon: <FaGithub size={20} className="text-white" />, title: 'GitHub', value: 'github.com/Rej1suke', link: 'https://github.com/Rej1suke', bg: 'bg-gray-800/40' },
    { icon: <FaLinkedin size={20} className="text-white" />, title: 'LinkedIn', value: 'linkedin.com/in/Rej1suke', link: 'https://linkedin.com/in/Rej1suke', bg: 'bg-blue-600/20' },
    { icon: <FaFacebookF size={20} className="text-white" />, title: 'Facebook', value: 'facebook.com/rej1suke', link: 'https://facebook.com/rej1suke', bg: 'bg-blue-700/20' },
    { icon: <FaInstagram size={20} className="text-white" />, title: 'Instagram', value: 'instagram.com/25th_rej', link: 'https://instagram.com/25th_rej', bg: 'bg-pink-500/20' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
      {/* Contact Form */}
      <div className="lg:col-span-2 p-6 bg-white/5 rounded-2xl shadow-lg flex flex-col h-full">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-400">
          Contact Me
        </h2>
        <p className="text-slate-300 mb-6">
          Send me a message — I reply within a few days. Or connect with me on social media.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <input
            type="text"
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            placeholder="Subject (optional)"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <textarea
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[140px] flex-1"
          />

          <div className="flex items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-linear-to-r from-violet-500 to-cyan-400 text-white font-medium rounded-xl hover:opacity-90 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={status.ok ? 'text-green-400' : 'text-rose-400'}>
                {status.msg}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 gap-4 h-full">
        {contactCards.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${c.bg} flex-1`}
          >
            <div className="p-3 rounded-lg bg-white/10">{c.icon}</div>
            <div>
              <p className="text-sm text-slate-400">{c.title}</p>
              <p className="text-white font-medium">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
