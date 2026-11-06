import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../../data/company';
import { PageId, NAV_ITEMS } from './Header';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ExternalLink,
  MessageSquare
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
    <footer className="bg-brand-navy-dark text-brand-silver border-t border-slate-800/80 transition-colors">
      {/* Top Banner Ribbon */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy-card to-brand-navy border-b border-slate-800/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm tracking-wide uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              <ShieldCheck className="w-4 h-4" />
              <span>{COMPANY_INFO.distributorshipBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready to upgrade your home, business or security infrastructure?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Consult our certified hardware and CCTV engineers in Tenkasi for genuine components and prompt support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-all border border-slate-700"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry('Footer Quick Consultation') : handleNav('contact')}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-brand-blue hover:bg-brand-blue-hover text-white transition-all shadow-glow-blue"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              JAZ COMPUTER is Tenkasi&apos;s leading technology partner, offering authentic desktop and laptop solutions, certified chip-level repairs, high-resolution CCTV surveillance architecture, and enterprise IT maintenance.
            </p>
            <div className="pt-2 text-xs text-brand-silver/80 space-y-1 border-l-2 border-brand-blue pl-3">
              <p className="font-semibold text-white">Hikvision Sub-Regional Distribution Center</p>
              <p className="text-slate-400">Serving Tenkasi, Kadayanallur, Shenkottai, Alangulam, Surandai & Tirunelveli regions.</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    type="button"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-brand-blue transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-blue transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              Products & CCTV
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('products')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Branded & Custom Desktop Rigs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Commercial Laptops & Spares
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cctv')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Hikvision ColorVu & AcuSense Cameras
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cctv')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Solar & 4G Remote Farm Cameras
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cctv')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  CP Plus, TrueView & TVT DVR/NVRs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Smart LED TVs (24&quot; to 100&quot;)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} type="button" className="hover:text-brand-blue transition-colors text-left">
                  Quick Heal, McAfee & Licensed Windows
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              Store & Service Center
            </h4>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">JAZ COMPUTER</strong>
                  <span>{COMPANY_INFO.address}, Tenkasi - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}, India.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p>{COMPANY_INFO.workingHours.weekdays}</p>
                  <p className="text-slate-500 mt-0.5">{COMPANY_INFO.workingHours.sunday}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-slate-800/80 py-6 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p>© {currentYear} JAZ COMPUTER. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Technology, Built Around You · Tenkasi, Tamil Nadu, India.
            </p>
          </div>

          <div className="text-[11px] text-slate-500 max-w-md sm:text-right">
            <span>Corporate profile and product showcase portal (Phase 1). Non-transactional site. All brand names and trademarks belong to their respective holders.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
