import React from 'react';
import { getAssetPath } from '../utils/assets';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import { 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle2, 
  Laptop, 
  Camera, 
  Network, 
  Printer, 
  Tv, 
  Cpu,
  Monitor,
  ShieldCheck,
  Zap,
  Activity,
  Wrench
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'srv-desktop': return <Cpu className="w-6 h-6" />;
      case 'srv-laptop': return <Laptop className="w-6 h-6" />;
      case 'srv-printer': return <Printer className="w-6 h-6" />;
      case 'srv-monitor': return <Monitor className="w-6 h-6" />;
      case 'srv-tv': return <Tv className="w-6 h-6" />;
      case 'srv-cctv': return <Camera className="w-6 h-6" />;
      case 'srv-networking': return <Network className="w-6 h-6" />;
      case 'srv-it-support': return <ShieldCheck className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  const handleWhatsApp = (srv: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I need technical service assistance for *${srv.title}*. Please let me know technician availability in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="Services & Support"
        subtitle="Desktop Service, Laptop Repair, Printer Service, Monitor Service, LED TV Service, CCTV Installation, Networking & IT Support in Tenkasi."
        label="Technical Capabilities"
        currentPage="services"
        onNavigate={onNavigate}
        actionText="Book a Technician"
        onAction={() => onOpenEnquiry('Service Call Booking')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Service Methodology Cyber Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#160826]/70 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-white">
              Chip-Level Diagnostics
            </h4>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              Testing benches with thermal imaging, oscilloscope checks, and component-level circuit verification.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#160826]/70 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-white">
              Genuine Spare Fitment
            </h4>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              Original display panels, manufacturer power adapters, OEM batteries, and certified Grade-A chips.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#160826]/70 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-white">
              Tenkasi Field Support
            </h4>
            <p className="text-xs text-neon-grey leading-relaxed font-light">
              On-site technician dispatch for commercial networks, surveillance cabling, and server rack installations.
            </p>
          </div>
        </div>

        {/* Modern Visual Service Showcases - Asymmetric Alternating Panels */}
        <div className="space-y-10">
          {SERVICES_DATA.map((srv, index) => {
            const isReversed = index % 2 === 1;
            const accentColor = index % 2 === 0 ? 'neon-magenta' : 'neon-cyan';
            
            return (
              <div
                key={srv.id}
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-stretch gap-8 bg-[#160826]/80 p-7 sm:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group`}
              >
                {/* Visual Imagery Block with Neon Glow Border */}
                <div className="lg:w-1/2 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-neon-cyan/40 transition-colors">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetPath('/assets/gallery/motherboard-testing.jpg');
                    }}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160826] via-transparent to-transparent opacity-80" />
                  
                  {/* Neon Floating Icon Tag */}
                  <div className="absolute top-5 left-5 p-3 rounded-2xl bg-[#10051F]/90 backdrop-blur-md text-neon-cyan border border-neon-cyan/40 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                    {getIcon(srv.id)}
                  </div>

                  {/* Cyber Index Badge */}
                  <div className="absolute bottom-5 right-5 font-mono text-xs text-neon-grey/70 bg-[#10051F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    SERVICE #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Content Block */}
                <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neon-magenta block font-bold">
                        {srv.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-neon-cyan transition-colors mt-1">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neon-grey leading-relaxed font-light">
                      {srv.shortDesc}
                    </p>

                    {/* Highlights Matrix */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-neon-grey font-mono bg-white/[0.03] p-2 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleWhatsApp(srv)}
                      type="button"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Inquiry</span>
                    </button>

                    <button
                      onClick={() => onOpenEnquiry(`Book Service: ${srv.title}`)}
                      type="button"
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-all shadow-glow-combo flex items-center gap-1.5"
                    >
                      <span>Request Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
