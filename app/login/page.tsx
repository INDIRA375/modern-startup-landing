"use client";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

      {/* Glass Card */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative z-10
          bg-white/80 backdrop-blur-xl
          p-8 rounded-2xl w-full max-w-sm
          border border-white/40
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
        "
      >
        {/* Extra glow ring */}
        <div className="absolute inset-0 -z-10 rounded-2xl 
          shadow-[0_0_60px_10px_rgba(99,102,241,0.25)]" />

        <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-slate-500 mb-6 text-sm">
          Login to continue your journey
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="
            w-full px-4 py-3 rounded-lg mb-4
            bg-slate-50 border border-slate-200
            focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200
            outline-none transition
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full px-4 py-3 rounded-lg mb-6
            bg-slate-50 border border-slate-200
            focus:border-purple-400 focus:ring-2 focus:ring-purple-200
            outline-none transition
          "
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            w-full py-3 rounded-lg font-semibold text-white
            bg-linear-to-r from-indigo-500 to-purple-500
            hover:from-indigo-600 hover:to-purple-600
            shadow-lg hover:shadow-xl transition
          "
        >
          Login
        </motion.button>

        <p className="text-center text-xs text-slate-500 mt-6">
          © 2025 Sammunat LLC
        </p>
      </motion.div>
    </section>
  );
}
