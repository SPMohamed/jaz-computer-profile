import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
}

/**
 * REUSABLE LOGO COMPONENT
 * Implements the temporary text-based JAZ COMPUTER logo.
 * Kept isolated in this dedicated component so that a final SVG or PNG
 * can be plugged in seamlessly in the future without changing any layout structure.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showTagline = true,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Brand Mark Emblem */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy via-[#0C2449] to-brand-blue flex items-center justify-center shadow-md border border-brand-blue/30 group-hover:border-brand-blue transition-colors">
        {/* Modern Geometric Tech Glyph */}
        <span className="font-display font-black text-white text-lg tracking-wider">
          J<span className="text-brand-blue">.</span>
        </span>
        {/* Subtle accent dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold text-xl tracking-tight transition-colors ${
              variant === 'light'
                ? 'text-white'
                : variant === 'dark'
                ? 'text-brand-navy'
                : 'text-slate-900 dark:text-white'
            }`}
          >
            JAZ
          </span>
          <span className="font-display font-bold text-xl tracking-tight text-brand-blue">
            COMPUTER
          </span>
        </div>

        {showTagline && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-wider mt-1 transition-colors ${
              variant === 'light'
                ? 'text-brand-silver'
                : variant === 'dark'
                ? 'text-slate-500'
                : 'text-slate-500 dark:text-brand-silver'
            }`}
          >
            Technology, Built Around You
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
