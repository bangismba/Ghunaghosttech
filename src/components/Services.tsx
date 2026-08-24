import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  ShieldCheck,
  Rocket,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "We build fast, scalable web platforms and mobile applications that combine modern architecture with intuitive user experiences.",
    icon: Smartphone,
    tech: ["REACT", "NEXT.JS", "NATIVE", "NODE"],
    category: "DEVELOPMENT",
  },
  {
    title: "UI / UX Design",
    description:
      "We craft visually refined and user-centered interfaces that transform complex ideas into simple, elegant digital experiences.",
    icon: Palette,
    tech: ["FIGMA", "ADOBE XD", "PROTOTYPING"],
    category: "DESIGN",
  },
  {
    title: "Cybersecurity",
    description:
      "From vulnerability assessments to secure authentication systems, we help protect businesses against modern cyber threats.",
    icon: ShieldCheck,
    tech: ["PEN TESTING", "AUTH", "MONITORING"],
    category: "SECURITY",
  },
  {
    title: "Startup Acceleration",
    description:
      "We help startups turn ideas into real products by building MVPs, refining product strategy, and preparing them for market growth.",
    icon: Rocket,
    tech: ["MVP", "STRATEGY", "SCALING"],
    category: "CONSULTING",
  },
  {
    title: "Custom Web Platforms",
    description:
      "We develop advanced web solutions, dashboards, and digital platforms designed to automate processes and scale business operations.",
    icon: Code,
    tech: ["DASHBOARDS", "APIs", "AUTOMATION"],
    category: "PLATFORMS",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§06</span>
            <span className="h-px w-8 bg-white/20" />
            <span>OUR SERVICES</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            {services.length.toString().padStart(2, "0")} SERVICES / EXPERTISE
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
              CAPABILITIES
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              WHAT WE
              <br />
              <span className="text-zinc-500">DELIVER.</span>
              <br />
              EVERY DAY.
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
              From code to strategy, we design and build technology solutions that move businesses forward.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Our expertise spans the full spectrum of digital innovation — 
              engineering, design, security, and strategy. Every service is delivered with 
              the same technical rigor and attention to detail.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="border border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group border-b border-white/10 last:border-b-0"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="flex min-h-[70px] items-center border-b border-white/10 px-5 lg:col-span-1 lg:border-r lg:border-b-0 md:px-6">
                    <span className="font-mono text-[10px] text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative min-h-[200px] overflow-hidden border-b border-white/10 lg:col-span-4 lg:border-r lg:border-b-0 md:min-h-[240px]">
                    <div className="flex h-full w-full items-center justify-center bg-zinc-900/50 transition duration-700 ease-out group-hover:bg-zinc-800/50">
                      <Icon className="h-20 w-20 text-zinc-600 transition duration-700 ease-out group-hover:scale-110 group-hover:text-zinc-400" />
                    </div>
                    <div className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                      {service.category}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 lg:col-span-7 md:p-10">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                            SERVICE / {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
                            {service.title}
                          </h3>
                        </div>
                        <span className="hidden font-mono text-xs text-zinc-700 sm:block">→</span>
                      </div>
                      <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-5">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                            TECHNOLOGIES & METHODS
                          </span>
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                            {service.tech.map((tech) => (
                              <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                                [{tech}]
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-white/30">
                          <span>LEARN MORE</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            FULL SERVICE ARCHIVE
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            {services.length} CORE CAPABILITIES / READY
          </div>
        </div>
      </div>
    </section>
  );
}