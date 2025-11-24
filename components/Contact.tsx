'use client';
import React, { useState } from 'react';

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 p-6 bg-white/5 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-slate-300 mb-6">
          Send me a message — I reply within a few days. You can also find me on GitHub and LinkedIn.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[140px]"
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

      <aside className="p-6 bg-white/5 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li><strong>Email:</strong> reji@example.com</li>
          <li><strong>GitHub:</strong> <a href="#" className="underline hover:text-white">github.com/yourusername</a></li>
          <li><strong>LinkedIn:</strong> <a href="#" className="underline hover:text-white">linkedin.com/in/yourprofile</a></li>
        </ul>
      </aside>
    </div>
  );
}
