import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../../data/company';
import { PageId, NAV_ITEMS } from './Header';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Shield 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry?: (context?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090212] text-white border-t border-neon-magenta/20 transition-colors relative overflow-hidden">
      {/* Background Neon Subtle Lighting */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-neon-magenta/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-[400px] h-[300px] bg-neon-cyan/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="dark" size="lg" />
            <p className="text-neon-grey text-sm leading-relaxed max-w-md font-normal">
              High-performance computing systems, CCTV surveillance engineering, and technical IT infrastructure built in Tenkasi, Tamil Nadu.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-neon-magenta/30 text-neon-cyan shadow-[0_0_15px_rgba(217,0,255,0.15)]">
              <Shield className="w-3.5 h-3.5 text-neon-magenta" />
              <span>Technology, Built Around You · Tenkasi</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-magenta block">
              // System Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-display tracking-wider uppercase">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    type="button"
                    className="text-neon-grey hover:text-neon-cyan hover:text-glow-cyan transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan block">
              // Store Coordinates
            </span>

            <div className="space-y-3 text-sm text-neon-grey">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neon-magenta flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}, Tenkasi - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-neon-magenta flex-shrink-0" />
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neon-cyan hover:text-white transition-colors font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-neon-magenta/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neon-grey/70">
          <p>© {currentYear} JAZ COMPUTER. Technology Beyond Boundaries.</p>
          <p>Phase 1 Digital Platform · Tenkasi, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
