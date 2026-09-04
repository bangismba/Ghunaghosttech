import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@utils/constants';
import ThemeToggle from '@components/ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-color)]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo only - No text */}
          <a href="/" className="flex items-center group">
            <img 
              src="/logo1.png" 
              alt="Ghunaghost Tech" 
              className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105 md:h-14 md:w-14"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/admin"
              className="font-mono text-[10px] uppercase tracking-[0.2em] border border-[var(--border-color)] px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]/30 transition"
            >
              Admin
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
          <div className="px-5 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] border border-[var(--border-color)] px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]/30 transition inline-block"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}