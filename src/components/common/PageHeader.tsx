import React from 'react';
import { PageId } from './Header';
import { ChevronRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  label?: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  actionText?: string;
  onAction?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  label,
  currentPage,
  onNavigate,
  actionText,
  onAction,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#10051F] via-[#160728] to-[#0B0314] pt-16 pb-14 border-b border-neon-magenta/20 transition-colors">
      {/* Neon Atmospheric Glow Spheres */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[320px] bg-neon-magenta/[0.14] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[300px] bg-neon-cyan/[0.12] rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d900ff08_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Minimal Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-neon-grey/70 mb-6 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-neon-cyan transition-colors"
          >
            HOME
          </button>
          <ChevronRight className="w-3 h-3 text-neon-magenta opacity-60" />
          <span className="text-neon-cyan font-bold uppercase tracking-wider">
            {currentPage === 'cctv' ? 'CCTV & SECURITY' : currentPage}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            {label && (
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] block">
                // {label}
              </span>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.05] drop-shadow-[0_0_15px_rgba(217,0,255,0.25)]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-neon-grey leading-relaxed max-w-2xl font-normal pt-1">
              {subtitle}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {actionText && onAction && (
              <button
                onClick={onAction}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] hover:from-[#E619FF] hover:to-neon-cyan transition-all duration-300 shadow-glow-magenta hover:shadow-glow-cyan"
              >
                <span>{actionText}</span>
                <Zap className="w-3.5 h-3.5 text-neon-cyan" />
              </button>
            )}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider border border-neon-cyan/40 hover:border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.15)]"
            >
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
