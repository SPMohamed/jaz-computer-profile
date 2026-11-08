import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * REUSABLE NEON FUTURISTIC LOGO COMPONENT
 * Features Space Grotesk typography, neon magenta & electric cyan chromatic styling.
 * Isolated so that swapping to an SVG/PNG later does not change any layout.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showTagline = true,
  className = '',
  size = 'md',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Futuristic Neon Cyber Emblem */}
      <div className={`relative flex-shrink-0 rounded-xl bg-gradient-to-br from-[#10051F] via-[#241035] to-[#10051F] p-[1.5px] shadow-glow-magenta group-hover:shadow-glow-cyan transition-all duration-300 ${
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
      }`}>
        <div className="w-full h-full rounded-[10px] bg-[#0E031B] flex items-center justify-center relative overflow-hidden">
          {/* Subtle neon edge trace */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <span className="font-display font-black text-white text-base tracking-tighter relative z-10">
            J<span className="text-neon-cyan">.</span>
          </span>
          {/* Neon Magenta Dot Accent */}
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neon-magenta animate-ping" />
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display font-black tracking-tight transition-colors ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            } text-white dark:text-white drop-shadow-[0_0_8px_rgba(217,0,255,0.35)]`}
          >
            JAZ
          </span>
          <span
            className={`font-display font-bold tracking-widest text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
            }`}
          >
            COMPUTER
          </span>
        </div>

        {showTagline && (
          <span className="text-[9px] font-mono tracking-widest text-neon-grey uppercase mt-1 transition-colors">
            Technology, Built Around You
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
