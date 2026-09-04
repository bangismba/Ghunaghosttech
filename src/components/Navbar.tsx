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
      isScrolled 
        ? 'bg-gradient-to-r from-[#080808] via-[#0a0a0a] to-[#0f0f0f] border-b border-[var(--border-color)]' 
        : 'bg-gradient-to-r from-[#080808] via-[#0a0a0a] to-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group relative">
            <img 
              src="/logo1.png" 
              alt="Ghunaghost Tech" 
              className="relative h-12 w-auto object-contain transition duration-300 group-hover:scale-105 md:h-14 z-10"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/admin"
              className="font-mono text-[10px] uppercase tracking-[0.2em] border border-white/20 px-4 py-2 text-white/60 hover:text-white hover:border-white/40 transition"
            >
              Admin
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white transition"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-gradient-to-r from-[#080808] to-[#0f0f0f]">
          <div className="px-5 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] border border-white/20 px-4 py-2 text-white/60 hover:text-white hover:border-white/40 transition inline-block"
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