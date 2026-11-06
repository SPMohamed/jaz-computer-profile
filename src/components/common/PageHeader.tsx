import React from 'react';
import { PageId } from './Header';
import { ChevronRight, Home, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  tamilSubtitle?: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  tamilSubtitle,
  currentPage,
  onNavigate,
  onOpenEnquiry,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-card text-white py-16 sm:py-20 border-b border-slate-800/80">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1685FF0D_1px,transparent_1px),linear-gradient(to_bottom,#1685FF0D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-brand-silver/70 mb-6 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-brand-blue transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-brand-blue font-semibold capitalize">
            {currentPage === 'cctv' ? 'CCTV Solutions' : currentPage}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/15 text-brand-blue border border-brand-blue/30 shadow-sm">
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-brand-silver leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {tamilSubtitle && (
              <p className="text-sm text-brand-blue/90 font-medium">
                {tamilSubtitle}
              </p>
            )}
          </div>

          {/* Quick Header Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-slate-700/80 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all shadow-glow-blue"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
