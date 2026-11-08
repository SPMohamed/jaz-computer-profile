import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { COMPANY_INFO } from '../../data/company';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react';

export type PageId = 
  | 'home' 
  | 'products' 
  | 'services' 
  | 'cctv' 
  | 'clients' 
  | 'gallery' 
  | 'about' 
  | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry?: (context?: string) => void;
}

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'cctv', label: 'CCTV' },
  { id: 'clients', label: 'Clients' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Floating Purple Glass Navigation */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#10051F]/90 dark:bg-[#10051F]/95 backdrop-blur-2xl border-b border-neon-magenta/25 shadow-glow-magenta/20 py-2.5' 
            : 'bg-[#10051F]/70 dark:bg-[#10051F]/80 backdrop-blur-xl border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 rounded-lg"
          >
            <Logo size="md" />
          </button>

          {/* Minimal Floating Nav Links with Neon Active Indicators */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1A0A2E]/80 border border-neon-magenta/20 px-3 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_-5px_rgba(217,0,255,0.15)]">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`relative px-4 py-1.5 rounded-full text-xs font-display tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-neon-cyan font-bold bg-white/10 shadow-[0_0_12px_rgba(0,229,255,0.35)]'
                      : 'text-neon-grey hover:text-white hover:text-glow-magenta'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Glowing CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => handleNavClick('contact')}
              type="button"
              className="relative group overflow-hidden px-5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] hover:from-[#E619FF] hover:to-neon-cyan transition-all duration-300 shadow-glow-magenta hover:shadow-glow-cyan"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Get In Touch</span>
                <Zap className="w-3.5 h-3.5 text-neon-cyan group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white bg-[#1A0A2E] border border-neon-magenta/30 hover:border-neon-cyan transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neon-magenta" /> : <Menu className="w-5 h-5 text-neon-cyan" />}
            </button>
          </div>
        </div>
      </div>

      {/* Futuristic Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[62px] bottom-0 bg-[#0E031B]/95 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto border-t border-neon-magenta/20 animate-in fade-in duration-200">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neon-magenta px-2 block mb-3">
              // Navigation System
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-display tracking-wider uppercase transition-colors text-left border ${
                    isActive
                      ? 'text-neon-cyan font-bold bg-white/[0.06] border-neon-cyan/40 shadow-glow-cyan/20'
                      : 'text-neon-grey hover:text-white border-transparent hover:border-neon-magenta/30 font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-neon-magenta opacity-70" />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-neon-magenta/20 space-y-3">
            <div className="text-xs text-neon-grey space-y-1 font-mono">
              <p className="font-bold text-white">JAZ COMPUTER · TENKASI</p>
              <p>{COMPANY_INFO.address}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/10 border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Call Now</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] shadow-glow-magenta"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
