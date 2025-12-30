"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-indigo-700">Sammunat</h1>
        <div className="space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/internships">Internships</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
