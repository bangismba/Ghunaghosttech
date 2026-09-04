import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Section Header */}
      <div className="border-y border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            <span>§07</span>
            <span className="h-px w-8 bg-[var(--border-color)]" />
            <span>FOUNDER</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
            ALIYU M. BABANGIDA / GHUNAGHOST
          </span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--bg-primary)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        {/* Intro Grid */}
        <div className="grid lg:grid-cols-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              VISION & HERITAGE
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl text-[var(--text-primary)]">
              BUILDING
              <br />
              <span className="text-[var(--text-secondary)]">AFRICA'S</span>
              <br />
              FUTURE.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0"
          >
            <p className="max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)] sm:text-2xl">
              A founder's journey from the heart of Nigeria to the forefront of digital innovation.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Aliyu Muhammadu Babangida leads Ghunaghost Tech Ltd with a vision 
              that bridges heritage and technology — creating secure, scalable 
              solutions for Africa's digital transformation.
            </p>
          </motion.div>
        </div>

        {/* Founder Profile Card */}
        <div className="border border-[var(--border-color)]">
          <div className="grid lg:grid-cols-12">
            {/* Number */}
            <div className="flex min-h-[70px] items-center border-b border-[var(--border-color)] px-5 lg:col-span-1 lg:border-r lg:border-b-0 md:px-6">
              <span className="font-mono text-[10px] text-[var(--text-muted)]">01</span>
            </div>

            {/* Image */}
            <div className="relative min-h-[300px] overflow-hidden border-b border-[var(--border-color)] lg:col-span-4 lg:border-r lg:border-b-0 md:min-h-[400px] group">
              <img
                src="/ceo.jpeg"
                alt="Aliyu Muhammadu Babangida"
                className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition duration-700" />
              <div className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                CEO & FOUNDER
              </div>
              <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/5 transition duration-700" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 lg:col-span-7 md:p-10">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      PROFILE / 01
                    </span>
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-[var(--text-primary)] sm:text-3xl md:text-4xl">
                      Aliyu Muhammadu Babangida
                    </h3>
                  </div>
                  <span className="hidden font-mono text-xs text-[var(--text-muted)] sm:block">→</span>
                </div>

                {/* Bio */}
                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  Born in Maiduguri and raised in Abuja, Aliyu is a visionary 
                  software developer, UI/UX designer, and cybersecurity professional. 
                  He founded Ghunaghost Tech Ltd with the mission to empower Africa's 
                  digital transformation through innovation, security, and education.
                </p>

                {/* The Name Story */}
                <div className="mt-8 border-l-2 border-[#00d4ff]/30 pl-4 hover:border-[#00d4ff]/60 transition duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#00d4ff]">
                    The Name Behind the Vision
                  </span>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">"Ghunaghost"</span> carries deep meaning — 
                    <span className="font-medium text-[var(--text-primary)]">"Ghuna"</span> represents his ancestral clan 
                    from the Dghwede Tribe of Gwoza LGA, Borno state, while 
                    <span className="font-medium text-[var(--text-primary)]">"Ghost"</span> symbolizes the invisible yet 
                    powerful nature of technology and cybersecurity. Together, the name stands 
                    for a blend of heritage and high-tech innovation — the unseen power that drives 
                    progress in the digital age.
                  </p>
                </div>

                {/* Stats/Quick Facts */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="border border-[var(--border-color)] p-3 text-center hover:border-[#00d4ff]/20 transition">
                    <div className="font-mono text-lg font-semibold text-[#00d4ff]">5+</div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      Years Experience
                    </div>
                  </div>
                  <div className="border border-[var(--border-color)] p-3 text-center hover:border-[#00d4ff]/20 transition">
                    <div className="font-mono text-lg font-semibold text-[#00d4ff]">50+</div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="border border-[var(--border-color)] p-3 text-center hover:border-[#00d4ff]/20 transition">
                    <div className="font-mono text-lg font-semibold text-[#00d4ff]">10+</div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      Team Members
                    </div>
                  </div>
                  <div className="border border-[var(--border-color)] p-3 text-center hover:border-[#00d4ff]/20 transition">
                    <div className="font-mono text-lg font-semibold text-[#00d4ff]">2025</div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      Founded
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta Footer */}
              <div className="mt-8 pt-5 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1.5 hover:border-[#00d4ff]/30 transition">
                      [SOFTWARE DEV]
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1.5 hover:border-[#00d4ff]/30 transition">
                      [UI/UX]
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1.5 hover:border-[#00d4ff]/30 transition">
                      [CYBERSECURITY]
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1.5 hover:border-[#00d4ff]/30 transition">
                      [TECH EDUCATION]
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 border border-[var(--border-color)] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                    <MapPin className="h-3.5 w-3.5 text-[#00d4ff]" />
                    <span>ABUJA</span>
                    <span className="text-[var(--text-muted)]">/</span>
                    <span>NIGERIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            GHUNAGHOST TECH LTD / LEADERSHIP
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              MISSION DRIVEN
            </span>
            <span className="h-3 w-px bg-[var(--border-color)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              SINCE 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}