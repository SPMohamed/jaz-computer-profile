import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-full transition-all duration-300 border bg-[#1A0A2E]/80 border-neon-magenta/30 hover:border-neon-cyan hover:shadow-glow-cyan text-neon-grey hover:text-white ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-neon-cyan transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neon-magenta transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
