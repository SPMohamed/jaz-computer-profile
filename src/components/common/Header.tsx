import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { COMPANY_INFO } from '../../data/company';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  MapPin,
  Clock
} from 'lucide-react';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'services' 
  | 'cctv' 
  | 'clients' 
  | 'gallery' 
  | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry?: (context?: string) => void;
}

export const NAV_ITEMS: { id: PageId; label: string; highlight?: boolean }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'cctv', label: 'CCTV Solutions', highlight: true },
  { id: 'clients', label: 'Our Clients' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact Us' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Corporate Information Ribbon */}
      <div className="hidden lg:block bg-brand-navy-dark text-brand-silver text-xs border-b border-slate-800/80 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-brand-blue font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.distributorshipBadge}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-silver" />
              <span>{COMPANY_INFO.address}, Tenkasi</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-silver" />
              <span>Mon - Sat: 9:30 AM - 9:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-brand-silver hover:text-brand-blue transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-brand-blue" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-brand-navy/95 shadow-lg border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md py-3' 
            : 'bg-white dark:bg-brand-navy border-b border-slate-200 dark:border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo click returns to Home */}
          <button 
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus:ring-2 focus:ring-brand-blue/30 rounded-lg group"
          >
            <Logo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-blue font-semibold bg-brand-blue/10 dark:bg-brand-blue/20'
                      : 'text-slate-700 dark:text-brand-silver hover:text-brand-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {item.highlight && (
                    <span className="absolute -top-1 right-1 w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            {/* Quick Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-blue transition-colors bg-white/50 dark:bg-slate-800/50 shadow-sm"
              title="Call JAZ COMPUTER"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Call Now</span>
            </a>

            {/* Enquire Now CTA */}
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry('General Enquiry') : handleNavClick('contact')}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white transition-all duration-200 shadow-glow-blue hover:scale-[1.02]"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle />
            
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="sm:hidden p-2 rounded-xl border border-slate-300 dark:border-slate-700 text-brand-blue"
              aria-label="Call JAZ COMPUTER"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-brand-silver hover:text-brand-blue transition-colors bg-slate-100/60 dark:bg-slate-800/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-brand-navy border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all">
          <div className="px-5 py-4 space-y-1 divide-y divide-slate-100 dark:divide-slate-800">
            <div className="pb-3 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    type="button"
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-blue font-bold bg-brand-blue/10 dark:bg-brand-blue/20'
                        : 'text-slate-800 dark:text-brand-silver hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.highlight ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full border border-brand-blue/30">
                        Distributor
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 pb-2 space-y-2.5">
              <div className="bg-brand-navy-dark/40 p-3 rounded-xl border border-slate-700/40 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-brand-blue font-semibold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>{COMPANY_INFO.distributorshipBadge}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-tight">
                  {COMPANY_INFO.address}, Tenkasi - 627811
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Now</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
