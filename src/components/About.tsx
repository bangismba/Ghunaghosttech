// src/components/About.tsx
import { motion } from "framer-motion";
import { ShieldCheck, Code2, GraduationCap, Cloud, Briefcase } from "lucide-react";

const tags = [
  {
    label: "Web Development",
    icon: Code2,
    className:
      "border-blue-400/20 bg-blue-500/10 text-blue-200",
  },
  {
    label: "Cybersecurity",
    icon: ShieldCheck,
    className:
      "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
  },
  {
    label: "Tech Education",
    icon: GraduationCap,
    className:
      "border-purple-400/20 bg-purple-500/10 text-purple-200",
  },
  {
    label: "IT Consulting",
    icon: Briefcase,
    className:
      "border-amber-400/20 bg-amber-500/10 text-amber-200",
  },
  {
    label: "Cloud Solutions",
    icon: Cloud,
    className:
      "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#070b14_0%,#0b1220_100%)] px-6 py-24 text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[5%] left-[35%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Kicker */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_18px_rgba(56,189,248,.35)]" />
            Who We Are
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Ghunaghost Tech Ltd
            </span>
          </h2>

          {/* Main description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            At{" "}
            <span className="font-semibold text-white">
              Ghunaghost Tech Ltd
            </span>
            , we build modern digital solutions that help individuals,
            businesses, and institutions grow with confidence in a fast-changing
            world. Our work combines{" "}
            <span className="font-medium text-cyan-300">design</span>,{" "}
            <span className="font-medium text-cyan-300">development</span>, and{" "}
            <span className="font-medium text-cyan-300">security</span> to turn
            ideas into products that are practical, scalable, and impactful.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            From web platforms and business tools to cybersecurity awareness,
            tech education, consulting, and cloud-driven systems, our mission is
            simple: to create technology that is not only functional, but also
            secure, user-focused, and built for long-term value.
          </p>
        </motion.div>

        {/* Glass content cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <h3 className="text-lg font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              To be a trusted African technology brand known for building
              secure, innovative, and human-centered digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <h3 className="text-lg font-bold text-white">Our Mission</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              To empower businesses and communities with reliable technology
              solutions that combine performance, usability, and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <h3 className="text-lg font-bold text-white">Our Approach</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              We combine strategy, clean UI, modern engineering, and practical
              problem-solving to deliver solutions that feel premium and work in
              the real world.
            </p>
          </motion.div>
        </div>

        {/* Expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => {
            const Icon = tag.icon;
            return (
              <span
                key={tag.label}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md ${tag.className}`}
              >
                <Icon className="h-4 w-4" />
                {tag.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}