import { motion } from 'framer-motion';
import { ceoImage } from '../assets/img/placeholder';

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§07</span>
            <span className="h-px w-8 bg-white/20" />
            <span>FOUNDER</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            ALIYU M. BABANGIDA / GHUNAGHOST
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              VISION & HERITAGE
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              BUILDING
              <br />
              <span className="text-zinc-500">AFRICA'S</span>
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
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              A founder's journey from the heart of Nigeria to the forefront of digital innovation.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Aliyu Muhammadu Babangida leads Ghunaghost Tech Ltd with a vision 
              that bridges heritage and technology — creating secure, scalable 
              solutions for Africa's digital transformation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="border border-white/10">
          <div className="grid lg:grid-cols-12">
            <div className="flex min-h-[70px] items-center border-b border-white/10 px-5 lg:col-span-1 lg:border-r lg:border-b-0 md:px-6">
              <span className="font-mono text-[10px] text-zinc-600">01</span>
            </div>

            <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 lg:col-span-4 lg:border-r lg:border-b-0 md:min-h-[400px]">
              <img
                src={ceoImage}
                alt="Aliyu Muhammadu Babangida"
                className="h-full w-full object-cover grayscale transition duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 transition hover:bg-transparent" />
              <div className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                CEO & FOUNDER
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 lg:col-span-7 md:p-10">
              <div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      PROFILE / 01
                    </span>
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
                      Aliyu Muhammadu Babangida
                    </h3>
                  </div>
                  <span className="hidden font-mono text-xs text-zinc-700 sm:block">→</span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                  Born in Maiduguri and raised in Abuja, Aliyu is a visionary 
                  software developer, UI/UX designer, and cybersecurity professional. 
                  He founded Ghunaghost Tech Ltd with the mission to empower Africa's 
                  digital transformation through innovation, security, and education.
                </p>

                <div className="mt-8 border-l-2 border-white/20 pl-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    The Name Behind the Vision
                  </span>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    <span className="font-medium text-white">"Ghunaghost"</span> carries deep meaning — 
                    <span className="font-medium text-white">"Ghuna"</span> represents his ancestral clan 
                    from the Dghwede Tribe of Gwoza LGA, Borno state, while 
                    <span className="font-medium text-white">"Ghost"</span> symbolizes the invisible yet 
                    powerful nature of technology and cybersecurity. Together, the name stands 
                    for a blend of heritage and high-tech innovation — the unseen power that drives 
                    progress in the digital age.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-5">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                      CORE EXPERTISE
                    </span>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        [SOFTWARE DEV]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        [UI/UX]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        [CYBERSECURITY]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        [TECH EDUCATION]
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    <span>ABUJA</span>
                    <span className="text-zinc-700">/</span>
                    <span>NIGERIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            GHUNAGHOST TECH LTD / LEADERSHIP
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            MISSION DRIVEN / SINCE 2025
          </div>
        </div>
      </div>
    </section>
  );
}