import { motion } from 'framer-motion';
import { COMPANY_RC } from '@utils/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#080808_100%)]" />
      </div>

      {/* Logo Watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none">
        <img src="/logo1.png" alt="" className="w-[600px] h-[600px] object-contain" />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-5 md:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Logo Badge */}
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="/logo1.png" 
              alt="Ghunaghost Tech" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              GHUNAGHOST TECH LTD
            </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-mono mb-6">
            Building Africa's Digital Future
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.05em]">
            BUILDING
            <br />
            <span className="text-zinc-500">AFRICA'S</span>
            <br />
            DIGITAL FUTURE.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            We design and build secure, scalable digital solutions — 
            from web platforms and mobile apps to cybersecurity and 
            tech education.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border border-white/30 px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition"
            >
              VIEW OUR WORK →
            </a>
            <a
              href="#contact"
              className="border border-white/10 px-8 py-4 font-mono text-sm text-zinc-500 hover:text-white hover:border-white/30 transition"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70 animate-pulse" />
              Operational
            </span>
            <span className="h-4 w-px bg-white/10" />
            <span>RC: {COMPANY_RC}</span>
            <span className="h-4 w-px bg-white/10" />
            <span>Est. 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}