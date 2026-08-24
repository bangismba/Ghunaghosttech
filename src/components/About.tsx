// src/components/About.tsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  GraduationCap,
  Cloud,
  Briefcase,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    label: "WEB DEVELOPMENT",
    icon: Code2,
  },
  {
    id: "02",
    label: "CYBER SECURITY",
    icon: ShieldCheck,
  },
  {
    id: "03",
    label: "TECH EDUCATION",
    icon: GraduationCap,
  },
  {
    id: "04",
    label: "IT CONSULTING",
    icon: Briefcase,
  },
  {
    id: "05",
    label: "CLOUD SOLUTIONS",
    icon: Cloud,
  },
];

const principles = [
  {
    id: "01",
    title: "OUR VISION",
    description:
      "To be a trusted African technology brand known for building secure, innovative, and human-centered digital experiences.",
  },
  {
    id: "02",
    title: "OUR MISSION",
    description:
      "To empower businesses and communities with reliable technology solutions that combine performance, usability, and security.",
  },
  {
    id: "03",
    title: "OUR APPROACH",
    description:
      "We combine strategy, clean UI, modern engineering, and practical problem-solving to deliver solutions that feel premium and work in the real world.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* ================================
          SECTION HEADER
      ================================= */}

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§03</span>

            <span className="h-px w-8 bg-white/20" />

            <span>ABOUT THE SYSTEM</span>
          </div>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            GHUNAGHOST / 2026
          </span>

        </div>
      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">

        <div className="grid border border-white/10 lg:grid-cols-12">

          {/* ============================
              LEFT LABEL PANEL
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-b border-white/10 p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-10"
          >

            <div className="flex h-full flex-col justify-between">

              <div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  COMPANY PROFILE
                </span>

                <h2 className="mt-8 text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  BUILT FOR
                  <br />

                  <span className="text-zinc-500">
                    THE NEXT
                  </span>

                  <br />

                  SYSTEM.
                </h2>

              </div>

              <div className="mt-16 border-t border-white/10 pt-5">

                <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-zinc-600">
                  DESIGNING THE TECHNOLOGY,
                  SYSTEMS AND EXPERIENCES
                  THAT MOVE IDEAS FORWARD.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ============================
              RIGHT CONTENT
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-8"
          >

            <div className="border-b border-white/10 px-6 py-5 md:px-10">

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                WHO WE ARE
              </span>

            </div>

            <div className="px-6 py-10 md:px-10 md:py-14">

              <p className="max-w-3xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">

                Ghunaghost Tech Ltd builds modern digital
                solutions that help individuals, businesses and
                institutions grow with confidence in a
                fast-changing world.

              </p>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-zinc-500 sm:text-lg">

                <p>
                  Our work combines{" "}

                  <span className="text-white">
                    design
                  </span>

                  ,{" "}

                  <span className="text-white">
                    development
                  </span>

                  {" "}and{" "}

                  <span className="text-white">
                    security
                  </span>

                  {" "}to turn ideas into products that are
                  practical, scalable and built for impact.
                </p>

                <p>
                  From web platforms and business tools to
                  cybersecurity awareness, technology education,
                  consulting and cloud-driven systems, our mission
                  is simple: create technology that is functional,
                  secure, user-focused and built for long-term value.
                </p>

              </div>

            </div>

            {/* SYSTEM IDENTIFIER */}

            <div className="grid border-t border-white/10 sm:grid-cols-3">

              <div className="border-b border-white/10 p-6 sm:border-r sm:border-b-0 md:p-8">

                <span className="font-mono text-[10px] text-zinc-600">
                  ID
                </span>

                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-300">
                  GHUNAGHOST TECH LTD
                </p>

              </div>

              <div className="border-b border-white/10 p-6 sm:border-r sm:border-b-0 md:p-8">

                <span className="font-mono text-[10px] text-zinc-600">
                  TYPE
                </span>

                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-300">
                  DIGITAL TECHNOLOGY
                </p>

              </div>

              <div className="p-6 md:p-8">

                <span className="font-mono text-[10px] text-zinc-600">
                  STATUS
                </span>

                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-300">
                  ACTIVE / BUILDING
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================================
          PRINCIPLES
      ================================= */}

      <div className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">

        <div className="mb-6 flex items-center gap-3">

          <span className="font-mono text-[10px] text-zinc-600">
            03.01
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            CORE PRINCIPLES
          </span>

        </div>

        <div className="grid border border-white/10 lg:grid-cols-3">

          {principles.map((principle, index) => (

            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group min-h-[280px] p-6 transition hover:bg-white/[0.025] md:p-8 ${
                index !== principles.length - 1
                  ? "border-b border-white/10 lg:border-r lg:border-b-0"
                  : ""
              }`}
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[10px] text-zinc-600">
                  {principle.id}
                </span>

                <span className="text-zinc-700 transition group-hover:text-white">
                  ↗
                </span>

              </div>

              <div className="mt-16">

                <h3 className="font-mono text-sm uppercase tracking-wider text-white">
                  {principle.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                  {principle.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* ================================
          CAPABILITIES
      ================================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20">

          <div className="mb-8 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-zinc-600">
                03.02
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                CAPABILITIES
              </span>

            </div>

            <span className="font-mono text-[10px] text-zinc-600">
              {capabilities.length.toString().padStart(2, "0")} MODULES
            </span>

          </div>

          <div className="border border-white/10">

            {capabilities.map((capability) => {

              const Icon = capability.icon;

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45 }}
                  className="group flex items-center justify-between border-b border-white/10 px-5 py-5 last:border-b-0 transition hover:bg-white/[0.03] md:px-8"
                >

                  <div className="flex items-center gap-5">

                    <span className="w-6 font-mono text-[10px] text-zinc-600">
                      {capability.id}
                    </span>

                    <Icon className="h-4 w-4 text-zinc-500 transition group-hover:text-white" />

                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                      {capability.label}
                    </span>

                  </div>

                  <span className="font-mono text-xs text-zinc-700 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}