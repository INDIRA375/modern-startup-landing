"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Briefcase,
  Sparkles,
  Quote,
  Users,
  Code,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">

      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-200" />

      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-400">Sammunat LLC</span>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#services" className="hover:text-indigo-400">Services</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
            <a href="/login" className="px-4 py-1 rounded-full bg-indigo-600 hover:bg-indigo-700">
              Login
            </a>
          </div>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-44 pb-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-6">
            <Sparkles size={16} /> AI‑Powered Innovation
          </span>

          <h1 className="text-5xl font-extrabold leading-tight">
            Empowering Innovation <br />
            <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Through Technology
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Real‑world internships, live projects, and mentorship for career success.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-indigo-600 rounded-lg"
          >
            Explore Internships
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6">Why Sammunat?</h3>
          <ul className="space-y-5 text-slate-300">
            <li className="flex gap-4"><Globe className="text-indigo-400" /> Global exposure</li>
            <li className="flex gap-4"><Rocket className="text-purple-400" /> Real‑time projects</li>
            <li className="flex gap-4"><Briefcase className="text-pink-400" /> Career growth</li>
          </ul>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-indigo-400">Sammunat LLC</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Users />, title: "Industry Mentors", text: "Learn from professionals." },
              { icon: <Code />, title: "Live Projects", text: "Production‑level work." },
              { icon: <GraduationCap />, title: "Career Ready", text: "Internships recruiters love." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/10 p-8 rounded-2xl border border-white/10"
              >
                <div className="text-indigo-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Internships", desc: "Structured learning.", bg: "bg-indigo-400/10" },
              { title: "Live Projects", desc: "Industry‑grade projects.", bg: "bg-purple-400/10" },
              { title: "Mentorship", desc: "1‑on‑1 guidance.", bg: "bg-pink-400/10" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`${s.bg} p-8 rounded-2xl border border-white/10`}
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-slate-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-32 bg-slate-900 text-center">
        <Quote size={40} className="mx-auto text-indigo-400 mb-6" />
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          “Sammunat gave me real experience and confidence.”
        </p>
        <p className="mt-4 text-indigo-400">— Former Intern</p>
      </section>

      {/* ===== CONTACT (SUBTLE & CLEAN) ===== */}
      <section id="contact" className="py-32 bg-slate-100 text-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-slate-600 mb-10">
              Let’s discuss internships, projects, or partnerships.
            </p>
            <ul className="space-y-6 text-slate-600">
              <li className="flex gap-4"><Mail /> contact@sammunat.com</li>
              <li className="flex gap-4"><Phone /> +91 98765 43210</li>
              <li className="flex gap-4"><MapPin /> India · Remote</li>
            </ul>
          </div>

          {/* FORM – SHUTTLE COLORS */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl p-8 space-y-5
                       shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          >
            <input
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg
                         border border-slate-300
                         focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200
                         outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg
                         border border-slate-300
                         focus:border-purple-400 focus:ring-2 focus:ring-purple-200
                         outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg
                         border border-slate-300
                         focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200
                         outline-none"
            />
            <button
              className="w-full py-3 rounded-lg font-semibold text-white
                         bg-linear-to-r from-indigo-500 to-purple-500
                         hover:from-indigo-600 hover:to-purple-600 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-sm text-slate-400 bg-slate-950">
        © 2025 Sammunat LLC. All rights reserved.
      </footer>

    </div>
  );
}
