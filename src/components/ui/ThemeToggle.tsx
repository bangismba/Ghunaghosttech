import { useTheme } from '@contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2  hover:border-[var(--text-primary)]/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-50'
          }`}
          style={{ color: 'var(--text-primary)' }}
          size={20}
        />
        <Moon 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-50'
          }`}
          style={{ color: 'var(--text-primary)' }}
          size={20}
        />
      </div>
    </button>
  );
}