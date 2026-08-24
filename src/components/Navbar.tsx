import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@utils/constants';

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
      isScrolled ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-mono text-sm tracking-tight text-white">
            GHUNAGHOST
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              className="font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10 px-4 py-2 text-zinc-500 hover:text-white hover:border-white/30 transition"
            >
              Admin
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-500 hover:text-white transition"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080808]">
          <div className="px-5 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10 px-4 py-2 text-zinc-500 hover:text-white hover:border-white/30 transition inline-block"
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