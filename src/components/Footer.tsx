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
  Building2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_RC, COMPANY_TIN, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-secondary)] text-[var(--text-primary)] border-t border-[var(--border-color)]">
      
      {/* Ambient Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="border-y border-[var(--border-color)] relative">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            <span>§08</span>
            <span className="h-px w-8 bg-[var(--border-color)]" />
            <span>FOOTER</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20">
        <div className="border border-[var(--border-color)] rounded-2xl overflow-hidden">
          
          {/* Top Row - Brand & Navigation */}
          <div className="grid border-b border-[var(--border-color)] lg:grid-cols-12">
            
            {/* Brand Section */}
            <div className="flex flex-col justify-center border-b border-[var(--border-color)] p-6 lg:col-span-5 lg:border-r lg:border-b-0 md:p-8">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00d4ff]/20 blur-xl rounded-full group-hover:bg-[#00d4ff]/30 transition-all duration-500" />
                  <img 
                    src="/logo1.png" 
                    alt="Ghunaghost Tech" 
                    className="relative h-12 w-12 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
                <span className="font-mono text-xl font-medium tracking-tight text-[var(--text-primary)]">
                  GHUNAGHOST
                </span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                Building Africa's digital future through innovative technology solutions.
              </p>

              {/* Registration Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-2 border border-[var(--border-color)] px-3 py-1.5 rounded-lg hover:border-[#00d4ff]/30 transition-all duration-300">
                  <FileCheck className="h-3 w-3 text-[#00d4ff]" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    RC: {COMPANY_RC}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-[var(--border-color)] px-3 py-1.5 rounded-lg hover:border-[#00d4ff]/30 transition-all duration-300">
                  <Award className="h-3 w-3 text-[#00d4ff]" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    TIN: {COMPANY_TIN}
                  </span>
                </div>
                <div className="flex items-center gap-2 border border-[var(--border-color)] px-3 py-1.5 rounded-lg hover:border-[#00d4ff]/30 transition-all duration-300">
                  <Building2 className="h-3 w-3 text-[#00d4ff]" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Nigeria
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-2">
                <a
                  href="https://web.facebook.com/itzbangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] transition-all duration-300 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/10"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/itz_bangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] transition-all duration-300 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/10"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadu-aliyu-babangida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] transition-all duration-300 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/10"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/bangismba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] transition-all duration-300 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/10"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-8 p-6 lg:col-span-7 md:p-8">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  NAVIGATION
                </span>
                <ul className="mt-4 space-y-2.5">
                  {["About", "Projects", "Services", "Founder", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  EXPERTISE
                </span>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Web Development",
                    "Cybersecurity",
                    "UI/UX Design",
                    "IT Consulting",
                    "Tech Education",
                  ].map((item) => (
                    <li key={item}>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Row - Contact & Legal */}
          <div className="grid lg:grid-cols-12">
            {/* Contact Info */}
            <div className="flex flex-col justify-center border-b border-[var(--border-color)] p-6 lg:col-span-5 lg:border-r lg:border-b-0 md:p-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                CONTACT
              </span>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 group">
                  <Mail className="mt-0.5 h-4 w-4 text-[#00d4ff] transition-transform group-hover:scale-110" />
                  <span className="font-mono text-[10px] tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {COMPANY_EMAIL}
                  </span>
                </div>

                <div className="flex items-start gap-3 group">
                  <Phone className="mt-0.5 h-4 w-4 text-[#00d4ff] transition-transform group-hover:scale-110" />
                  <span className="font-mono text-[10px] tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {COMPANY_PHONE}
                  </span>
                </div>

                <div className="flex items-start gap-3 group">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#00d4ff] transition-transform group-hover:scale-110" />
                  <span className="max-w-xs font-mono text-[10px] leading-relaxed tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {COMPANY_ADDRESS}
                  </span>
                </div>
              </div>
            </div>

            {/* Legal & Status */}
            <div className="flex flex-col justify-center p-6 lg:col-span-7 md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    SYSTEM STATUS
                  </span>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                      Operational / v2.0
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    LEGAL
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                      © {currentYear}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                      Ghunaghost Tech Ltd
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      All rights reserved.
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider with Brand Mark */}
              <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-[#00d4ff]"></span>
                      Built with precision
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-[#7c3aed]"></span>
                      Secured by design
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3 w-3 text-[#00d4ff]" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      § GHUNAGHOST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)] relative">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-3 px-5 py-4 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center gap-3">
            <span>Ghunaghost Tech Ltd</span>
            <span className="hidden sm:inline">/</span>
            <span className="hidden sm:inline">Incorporated in Nigeria</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">RC: {COMPANY_RC}</span>
          </div>

          <div className="flex items-center gap-4 text-[8px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span>TIN: {COMPANY_TIN}</span>
            <span className="h-3 w-px bg-[var(--border-color)]" />
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}