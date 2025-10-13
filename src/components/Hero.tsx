// src/components/Hero.tsx
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";
import introVideo from "../assets/img/intro.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/40 to-blue-900/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* Logo + animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <motion.img
              src={ghunaghostLogo}
              alt="Ghunaghost Tech Logo"
              className="w-56 md:w-64 drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            {/* Glow Pulse */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-blue-500/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Empowering the Future with{" "}
            <span className="text-blue-500">Invisible Power</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            <span className="font-semibold text-white">Ghunaghost Tech Ltd</span> 
            delivers <span className="text-blue-400">cutting-edge web solutions</span>, 
            <span className="text-blue-400"> cybersecurity</span>, and 
            <span className="text-blue-400"> tech education</span> — driving innovation across Africa and beyond.
          </p>

          <p className="italic text-gray-400 mb-8">
            “Invisible Power, Lasting Impact.”
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              Explore Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center text-gray-400"
      >
        <ArrowDown className="w-6 h-6" />
        <span className="text-xs mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}
