import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";
import introVideo from "../assets/img/intro.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* ==== BACKGROUND VIDEO ==== */}
      <motion.video
        autoPlay
        playsInline
        // 🔥 Removed loop & muted
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={introVideo} type="video/mp4" />
      </motion.video>

      {/* ==== GRADIENT + GLASS OVERLAY ==== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      {/* ==== CONTENT CONTAINER ==== */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
        
        {/* === LOGO SIDE === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start md:w-1/2 space-y-6"
        >
          <div className="relative">
            <motion.img
              src={ghunaghostLogo}
              alt="Ghunaghost Tech Logo"
              className="w-36 sm:w-48 md:w-64 drop-shadow-2xl select-none"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-blue-500/25"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <p className="italic text-gray-300 text-sm sm:text-lg">
            “Invisible Power, Lasting Impact.”
          </p>
        </motion.div>

        {/* === TEXT SIDE === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="max-w-xl md:w-1/2 space-y-5"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Ghunaghost Tech Ltd
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            We’re a digital powerhouse delivering{" "}
            <span className="font-semibold text-white">innovation, design</span> and{" "}
            <span className="font-semibold text-white">security</span> — 
            transforming ideas into scalable{" "}
            <span className="text-blue-400 font-medium">digital experiences</span>.
          </p>

          {/* === BUTTONS === */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-7 rounded-xl shadow-lg transition-all"
            >
              Explore Services
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-blue-400 text-blue-300 hover:bg-blue-600/40 font-semibold py-3 px-7 rounded-xl shadow-lg transition-all"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* === SCROLL INDICATOR === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center text-gray-400"
      >
        <ArrowDown className="w-6 h-6" />
        <span className="text-xs mt-1 tracking-wider">Scroll</span>
      </motion.div>
    </section>
  );
}
