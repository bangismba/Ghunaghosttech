import { motion } from 'framer-motion';
import { COMPANY_RC } from '@utils/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] text-white flex items-center overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-8">
              <span className="h-px w-8 bg-white/20" />
              <span>GHUNAGHOST TECH LTD</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.05em]">
              BUILDING
              <br />
              <span className="text-zinc-500">AFRICA'S</span>
              <br />
              DIGITAL FUTURE.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              We design and build secure, scalable digital solutions — 
              from web platforms and mobile apps to cybersecurity and 
              tech education.
            </p>

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

            <div className="mt-16 flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="border border-white/10 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl text-zinc-600">01</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Expertise</p>
                    <p className="font-mono text-sm text-zinc-300">Full-stack Development</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl text-zinc-600">02</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Security</p>
                    <p className="font-mono text-sm text-zinc-300">Cybersecurity & Compliance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl text-zinc-600">03</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Innovation</p>
                    <p className="font-mono text-sm text-zinc-300">Web3 & Digital Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}