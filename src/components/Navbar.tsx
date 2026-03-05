// src/components/Navbar.tsx
import { useEffect, useMemo, useState } from "react";
import ghunaghostLogo from "../assets/img/ghunaghostlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  // Replace with your YouTube video ID
  const VIDEO_ID = "VIDEO_ID";

  const youtubeSrc = useMemo(
    () => `https://www.youtube.com/embed/${VIDEO_ID}?rel=0`,
    [VIDEO_ID]
  );

  // Lock body scroll when any overlay is open
  useEffect(() => {
    const shouldLock = menuOpen || videoOpen;
    if (!shouldLock) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen, videoOpen]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setVideoOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* =========================
          Top Bar (glass + glow + animations)
          ========================= */}
      <div className="m-2 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] relative overflow-hidden">
        {/* Subtle glow layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(700px 120px at 30% 0%, rgba(122, 92, 255, 0.29), transparent 60%), radial-gradient(700px 120px at 70% 0%, rgba(25,230,255,.18), transparent 60%)",
            filter: "blur(10px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(122, 92, 255, 0.35), transparent 60%)",
                  animation: "ggPulse 1.8s ease-in-out infinite",
                }}
              />
              <img
                src={ghunaghostLogo}
                alt="Ghunaghost Tech Logo"
                className="relative w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow"
              />
            </div>
            <span className="hidden sm:block text-white font-bold text-lg tracking-tight">
              Ghunaghost Tech Ltd
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-full text-gray-200 hover:text-white transition duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              >
                <span className="relative z-10">{item.label}</span>
                {/* animated underline */}
                <span className="absolute left-[18%] right-[18%] bottom-2 h-[2px] scale-x-0 hover:scale-x-100 transition-transform duration-200 origin-center rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* YouTube / Video Button */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              aria-haspopup="dialog"
              aria-expanded={videoOpen}
            >
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_14px_rgba(255,61,113,.45)]"
              />
              Watch Video
            </button>

            {/* Primary CTA (keeps original content: just adds, doesn’t replace) */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(123,92,255,1), rgba(25,230,255,1))",
                boxShadow: "0 10px 24px rgba(123,92,255,.25)",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-white rounded-lg border border-white/15 bg-white/5 p-2 transition hover:-translate-y-[1px] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* =========================
          Mobile Left Offcanvas (same style + same links)
          Order: Video button first, then Get Started, then links
          ========================= */}
      <aside
        id="mobileMenu"
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] text-white transform transition-transform duration-300 ease-in-out z-[60] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="h-full border-r border-white/15 bg-[rgba(10,14,28,0.82)] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img
                src={ghunaghostLogo}
                alt="Ghunaghost Tech Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold">Ghunaghost</span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-white/15 bg-white/5 p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-4">
            {/* Actions first (mobile order requirement) */}
            <div className="grid gap-2">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setVideoOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-semibold transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              >
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_14px_rgba(255,61,113,.45)]"
                />
                Watch Video
              </button>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold transition hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(123,92,255,1), rgba(25,230,255,1))",
                  boxShadow: "0 10px 24px rgba(123,92,255,.22)",
                }}
              >
                Get Started
              </a>
            </div>

            <div className="h-px bg-white/10" />

            {/* Links (original content maintained) */}
            <nav className="flex flex-col gap-1 text-base font-semibold">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-gray-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="text-xs text-gray-300/80 mt-2">
              Tip: press <span className="font-semibold">Esc</span> to close.
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* =========================
          Video Modal (YouTube)
          ========================= */}
      {videoOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={() => setVideoOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-[75] mt-3 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Watch video"
          >
            <div className="w-full max-w-4xl rounded-2xl border border-white/15 bg-[rgba(10,14,28,0.85)] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_14px_rgba(255,61,113,.45)]"
                  />
                  <p className="mb-0 text-white font-semibold">Watch Video</p>
                </div>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="rounded-lg border border-white/15 bg-white/5 p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                  aria-label="Close video"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 16:9 embed */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  key={videoOpen ? "open" : "closed"}
                  className="absolute inset-0 w-full h-full"
                  src={youtubeSrc}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="px-4 py-3 border-t border-white/10">
                <p className="text-xs text-gray-300/80">
                  Replace <span className="font-semibold">VIDEO_ID</span> in the component with your YouTube video ID.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Component-scoped keyframes */}
      <style>{`
        @keyframes ggPulse{
          0%,100%{ transform: scale(.85); opacity:.55; }
          50%{ transform: scale(1.05); opacity:.95; }
        }
      `}</style>
    </header>
  );
}