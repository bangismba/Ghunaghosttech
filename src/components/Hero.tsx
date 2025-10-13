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

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 text-center md:text-left">
        
        {/* Left: Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start space-y-4 md:w-1/2"
        >
          <div className="relative">
            <motion.img
              src={ghunaghostLogo}
              alt="Ghunaghost Tech Logo"
              className="w-48 sm:w-56 md:w-64 drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            {/* Blue Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-blue-500/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <p className="italic text-gray-300 text-base sm:text-lg">
            “Invisible Power, Lasting Impact.”
          </p>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl md:w-1/2 space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-blue-500">Ghunaghost Tech Ltd</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            We deliver <span className="text-white font-semibold">innovative digital solutions</span> in{" "}
            <span className="text-blue-400 font-medium">Web Design</span>,{" "}
            <span className="text-blue-400 font-medium">Cybersecurity</span>, and{" "}
            <span className="text-blue-400 font-medium">Tech Education</span> —
            empowering individuals and businesses across Africa and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
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

      {/* Scroll Indicator */}
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
