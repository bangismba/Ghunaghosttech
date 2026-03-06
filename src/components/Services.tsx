// src/components/Services.tsx
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  ShieldCheck,
  Rocket,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "We build fast, scalable web platforms and mobile applications that combine modern architecture with intuitive user experiences.",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "UI / UX Design",
    description:
      "We craft visually refined and user-centered interfaces that transform complex ideas into simple, elegant digital experiences.",
    icon: Palette,
    gradient: "from-pink-500 to-purple-400",
  },
  {
    title: "Cybersecurity",
    description:
      "From vulnerability assessments to secure authentication systems, we help protect businesses against modern cyber threats.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-green-400",
  },
  {
    title: "Startup Acceleration",
    description:
      "We help startups turn ideas into real products by building MVPs, refining product strategy, and preparing them for market growth.",
    icon: Rocket,
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    title: "Custom Web Platforms",
    description:
      "We develop advanced web solutions, dashboards, and digital platforms designed to automate processes and scale business operations.",
    icon: Code,
    gradient: "from-cyan-500 to-blue-400",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#070b14_0%,#0b1220_100%)] px-6 py-24 text-white"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[12%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[8%] left-[35%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_18px_rgba(56,189,248,.35)]"></span>
            Our Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
            At <span className="font-semibold text-white">Ghunaghost Tech Ltd</span>,
            we deliver intelligent digital solutions designed to help
            startups, businesses, and organizations succeed in an
            increasingly technology-driven world.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)] hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.5)] transition duration-300"
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${service.gradient}`}
                />

                {/* Icon */}
                <div className="mb-5">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient}`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}