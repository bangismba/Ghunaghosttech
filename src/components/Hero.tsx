// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Lock, Key, Cpu } from "lucide-react"; // Tech icons
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gray-950 text-white flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Animated floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-12 text-blue-500/40"
      >
        <Lock size={48} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-28 right-16 text-purple-500/40"
      >
        <Key size={50} />
      </motion.div>

      <motion.div
        animate={{ x: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/3 right-1/3 text-green-400/40"
      >
        <Cpu size={50} />
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-60 md:w-64 flex items-center justify-center shadow-2xl"
        >
          <img
            src={ghunaghostLogo}
            alt="Ghunaghost Tech Logo"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-blue-500">Ghunaghost Tech Ltd</span>
          </h1>
            <span>Invisible Power, Lasting Impact.</span>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            We specialize in{" "}
            <span className="font-semibold text-white">Website Design</span>,{" "}
            <span className="font-semibold text-white">Cybersecurity</span>,{" "}
            <span className="font-semibold text-white">Tech Education</span>, and more.  
            Our mission is to deliver world-class digital solutions that empower 
            businesses and individuals across Africa and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mb-4 gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
            >
              Explore Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-purple-800/20 pointer-events-none"></div>
    </section>
  );
}
