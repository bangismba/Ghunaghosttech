import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  FileCheck,
  Award,
  Building2
} from 'lucide-react';
import { logoImage } from '../assets/img/placeholder';
import { COMPANY_RC, COMPANY_TIN, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§08</span>
            <span className="h-px w-8 bg-white/20" />
            <span>FOOTER</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 transition hover:text-zinc-400"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="border border-white/10">
          <div className="grid border-b border-white/10 lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-white/10 p-6 lg:col-span-5 lg:border-r lg:border-b-0 md:p-10">
              <img
                src={logoImage}
                alt="Ghunaghost Tech Logo"
                className="h-12 w-auto grayscale brightness-200 transition duration-300 hover:grayscale-0 hover:brightness-100"
              />

              <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-500">
                Ghunaghost Tech Ltd is a leading provider of digital solutions, 
                offering services in web and mobile app development, cybersecurity, 
                UI/UX design, and technology consulting to empower businesses 
                across Africa and beyond.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5">
                  <FileCheck className="h-3 w-3 text-zinc-500" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                    RC: {COMPANY_RC}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5">
                  <Award className="h-3 w-3 text-zinc-500" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                    TIN: {COMPANY_TIN}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5">
                  <Building2 className="h-3 w-3 text-zinc-500" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                    Nigeria
                  </span>
                </div>
              </div>

              <div className="mt-8 flex gap-2">
                <a
                  href="https://web.facebook.com/itzbangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 p-2 text-zinc-500 transition hover:border-white/30 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/itz_bangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 p-2 text-zinc-500 transition hover:border-white/30 hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadu-aliyu-babangida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 p-2 text-zinc-500 transition hover:border-white/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/bangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 p-2 text-zinc-500 transition hover:border-white/30 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 p-6 lg:col-span-7 md:p-10">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  NAVIGATION
                </span>
                <ul className="mt-4 space-y-3">
                  {["About", "Projects", "Services", "Founder", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 transition hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  EXPERTISE
                </span>
                <ul className="mt-4 space-y-3">
                  {[
                    "Web Development",
                    "Cybersecurity",
                    "UI/UX Design",
                    "IT Consulting",
                    "Tech Education",
                  ].map((item) => (
                    <li key={item}>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-center border-b border-white/10 p-6 lg:col-span-5 lg:border-r lg:border-b-0 md:p-10">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                CONTACT
              </span>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-zinc-600" />
                  <span className="font-mono text-[10px] tracking-wide text-zinc-400">
                    {COMPANY_EMAIL}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-zinc-600" />
                  <span className="font-mono text-[10px] tracking-wide text-zinc-400">
                    {COMPANY_PHONE}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-zinc-600" />
                  <span className="max-w-xs font-mono text-[10px] leading-relaxed tracking-wide text-zinc-500">
                    {COMPANY_ADDRESS}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 lg:col-span-7 md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    SYSTEM STATUS
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-emerald-500/70"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                      Operational / v2.0
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    LEGAL
                  </span>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                      © {new Date().getFullYear()}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                      Ghunaghost Tech Ltd
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                      All rights reserved.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/5 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-6">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      Built with precision
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      Secured by design
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse bg-zinc-600"></span>
                    </span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                    § GHUNAGHOST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-4 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
            Ghunaghost Tech Ltd / Incorporated in Nigeria / RC: {COMPANY_RC}
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
              TIN: {COMPANY_TIN}
            </span>
            <span className="h-3 w-px bg-white/10"></span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
              All Systems Go
            </span>
            <span className="h-3 w-px bg-white/10"></span>
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                Online
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}