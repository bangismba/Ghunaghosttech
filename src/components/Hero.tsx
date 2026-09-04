import { motion } from 'framer-motion';
import { COMPANY_RC } from '@utils/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image - Full visibility */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]/80" />
      </div>

      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-[1600px] mx-auto px-5 md:px-8 py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >

          {/* Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.05em] text-[var(--text-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              BUILDING
            </motion.span>
            <br />
            <motion.span 
              className="text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              AFRICA'S
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              DIGITAL FUTURE.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We design and build secure, scalable digital solutions — 
            from web platforms and mobile apps to cybersecurity and 
            tech education.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="relative border border-white/30 px-8 py-4 font-mono text-sm text-[var(--text-primary)] hover:bg-white hover:text-black transition overflow-hidden group dark:hover:bg-white dark:hover:text-black light:hover:bg-black light:hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VIEW OUR WORK →</span>
              <motion.span 
                className="absolute inset-0 bg-white dark:bg-white light:bg-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="border border-[var(--border-color)] px-8 py-4 font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]/30 transition"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap items-center gap-8 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.span 
              className="flex items-center gap-2"
              whileHover={{ color: '#00d4ff' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70 animate-pulse" />
              Operational
            </motion.span>
            <span className="h-4 w-px bg-[var(--border-color)]" />
            <span>RC: {COMPANY_RC}</span>
            <span className="h-4 w-px bg-[var(--border-color)]" />
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              Est. 2025
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}