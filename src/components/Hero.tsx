// src/components/Hero.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";
import introVideo from "../assets/img/intro.mp4";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // If user prefers reduced motion, avoid autoplay video (still shows poster-like frame)
  useEffect(() => {
    if (!videoRef.current) return;
    if (reduceMotion) {
      videoRef.current.pause();
    } else {
      // try autoplay
      videoRef.current.play().catch(() => {});
    }
  }, [reduceMotion]);

  // lock scroll when modal open
  useEffect(() => {
    if (!videoOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [videoOpen]);

  // ESC closes modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
      },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
      aria-label="Hero section"
    >

      {/* =========================
          Content
          ========================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12"
        >
          {/* ===== Left (brand) ===== */}
          <motion.div variants={item} className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_18px_rgba(56,189,248,.35)]" />
              Digital • Design • Security • Innovation
            </div>

            <div className="mt-7">
              <div className="relative inline-block">
                {/* Glow halo */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.25), rgba(34,211,238,0.12), rgba(168,85,247,0.18), transparent 70%)",
                  }}
                  animate={
                    reduceMotion
                      ? { opacity: 0.8 }
                      : { opacity: [0.55, 0.9, 0.55], scale: [0.98, 1.08, 0.98] }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 4.6, repeat: Infinity, ease: "easeInOut" }
                  }
                />

                <motion.img
                  src={ghunaghostLogo}
                  alt="Ghunaghost Tech Logo"
                  className="relative w-44 select-none drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)] sm:w-56 md:w-72"
                  whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: 1.5 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  draggable={false}
                />
              </div>

              <p className="mt-5 text-base italic text-white/75 sm:text-lg">
                “Invisible Power, Lasting Impact.”
              </p>
            </div>

            {/* Mini trust pills */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap gap-2"
              aria-label="Highlights"
            >
              {["UI/UX Design", "Web Development", "Cyber Security", "Brand Systems"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== Right (headline + CTA) ===== */}
          <motion.div variants={item} className="md:col-span-7 md:pl-6">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Ghunaghost Tech Ltd
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
              We’re a digital powerhouse delivering{" "}
              <span className="font-semibold text-white">innovation</span>,{" "}
              <span className="font-semibold text-white">design</span> and{" "}
              <span className="font-semibold text-white">security</span> — turning ideas into scalable{" "}
              <span className="font-medium text-cyan-300">digital experiences</span>.
            </p>

            {/* CTA row */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.a
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.22)] transition hover:from-blue-700 hover:to-cyan-600"
              >
                Explore Services
                <span className="opacity-80 transition group-hover:translate-x-0.5">→</span>
              </motion.a>

              <motion.a
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-blue-300/35 bg-white/5 px-7 py-3 font-semibold text-blue-200 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/10"
              >
                Contact Us
              </motion.a>

              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/10"
                aria-haspopup="dialog"
                aria-expanded={videoOpen}
              >
                <Play className="h-5 w-5" />
                Watch Intro
              </motion.button>
            </motion.div>

            {/* Glass stats cards */}
            <motion.div
              variants={item}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
              aria-label="Quick stats"
            >
              {[
                { k: "Fast Delivery", v: "Agile builds" },
                { k: "Secure by Design", v: "Best practices" },
                { k: "Modern UI", v: "Clean systems" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-xs font-semibold text-white/70">{s.k}</p>
                  <p className="mt-1 text-sm font-bold text-white">{s.v}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================
          Video Modal (local MP4)
          ========================= */}
      {videoOpen && (
        <>
          <div
            className="fixed inset-0 z-[80] bg-black/65 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Intro video"
          >
            <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-[0_25px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_18px_rgba(56,189,248,.35)]" />
                  <p className="text-sm font-semibold text-white">Intro Video</p>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="rounded-lg border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative">
                <video
                  controls
                  autoPlay
                  className="w-full"
                  src={introVideo}
                />
              </div>

              <div className="border-t border-white/10 px-4 py-3">
                <p className="text-xs text-white/60">
                  Tip: Press <span className="font-semibold text-white/80">Esc</span> to close.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}