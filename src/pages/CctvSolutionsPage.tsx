import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { CCTV_PRODUCTS, CCTV_BRANDS, CctvProduct } from '../data/cctv';
import { COMPANY_INFO } from '../data/company';
import { 
  Shield, 
  ArrowUpRight, 
  MessageSquare, 
  Check, 
  CheckCircle2, 
  Camera,
  Eye,
  Crosshair,
  Radio,
  Sun,
  HardDrive
} from 'lucide-react';

interface CctvSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const CctvSolutionsPage: React.FC<CctvSolutionsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleWhatsApp = (item: CctvProduct) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I am inquiring about *${item.name}* (${item.type}). Please provide technical details and quote for installation in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const getCameraIcon = (type: string) => {
    if (type.includes('Solar')) return <Sun className="w-4 h-4 text-amber-400" />;
    if (type.includes('Wi-Fi')) return <Radio className="w-4 h-4 text-neon-cyan" />;
    if (type.includes('DVR') || type.includes('NVR')) return <HardDrive className="w-4 h-4 text-neon-magenta" />;
    if (type.includes('Networking')) return <Radio className="w-4 h-4 text-neon-magenta" />;
    if (type.includes('Accessories')) return <Shield className="w-4 h-4 text-emerald-400" />;
    return <Eye className="w-4 h-4 text-neon-cyan" />;
  };

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="CCTV & Security Solutions"
        subtitle="Bullet, Dome, 360° Wi-Fi, Solar 4G, DVR, NVR & Networking Infrastructure. Hikvision, CP Plus, TrueView, Unicam, TVT, HiFocus, Maxxion, Cofe, D-Link & TP-Link in Tenkasi."
        label="Surveillance Architecture"
        currentPage="cctv"
        onNavigate={onNavigate}
        actionText="Request CCTV Site Survey"
        onAction={() => onOpenEnquiry('CCTV Site Survey Request')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Turnkey Surveillance & Security Showcase */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#241035] via-[#10051F] to-[#0A0214] p-8 sm:p-14 border border-neon-cyan/40 shadow-[0_0_50px_rgba(0,229,255,0.15)] group">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-neon-cyan/15 rounded-full blur-[140px] pointer-events-none group-hover:bg-neon-cyan/25 transition-all duration-700" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-neon-magenta/15 rounded-full blur-[130px] pointer-events-none" />

          {/* Futuristic HUD Grid Line Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-neon-cyan/20 border border-neon-cyan/40 text-neon-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <Shield className="w-3.5 h-3.5" />
              <span>Surveillance Engineering Hub</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neon-magenta block font-bold">
                Tenkasi & Regional Security Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Advanced CCTV & Smart Security Deployments
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neon-grey leading-relaxed font-light">
              Comprehensive surveillance technology for commercial establishments, textile centers, healthcare facilities, and residences across Tenkasi. Multi-brand security options, ColorVu 24/7 full-color low-light optics, and AcuSense AI human and vehicle perimeter filtration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-neon-grey font-mono">
              <div className="flex items-center gap-2 bg-white/[0.04] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Genuine Hardware Warranties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.04] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Multi-Brand Selection</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.04] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>On-Site Installation & RMA</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenEnquiry('CCTV Surveillance Project Inquiry')}
                type="button"
                className="px-6 py-3 rounded-full text-xs font-bold text-black bg-neon-cyan hover:bg-white transition-all flex items-center gap-2 shadow-glow-cyan"
              >
                <span>Request CCTV Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    `Hello JAZ COMPUTER, I need CCTV surveillance consultation and pricing for Tenkasi.`
                  );
                  window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
                }}
                type="button"
                className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-500/50 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security Brands Showcase Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan font-bold block">
              Supported Surveillance Brands
            </span>
            <span className="text-xs font-mono text-neon-grey/70">
              Hikvision · CP Plus · TrueView · Unicam · TVT · HiFocus · Maxxion · Cofe · D-Link · TP-Link
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CCTV_BRANDS.map((b) => (
              <div
                key={b.name}
                className="p-6 rounded-2xl bg-[#160826]/80 border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
                    {b.name}
                  </h4>
                  <span className="text-[10px] font-mono text-neon-magenta uppercase bg-neon-magenta/10 px-2 py-0.5 rounded-full border border-neon-magenta/30">
                    {b.badge}
                  </span>
                </div>
                <p className="text-xs text-neon-grey leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Camera Models & Surveillance Hardware */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neon-magenta font-bold block">
              Camera Deployments & Storage Units
            </span>
            <span className="text-xs font-mono text-neon-grey">
              Bullet · Dome · Wi-Fi · Solar · DVR · NVR · CCTV Accessories · Networking
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CCTV_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group rounded-3xl overflow-hidden bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Container with Cyber Viewport */}
                  <div className="relative h-60 overflow-hidden bg-black/60">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/cctv/bullet-camera.jpg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160826] via-transparent to-transparent opacity-80" />

                    {/* Cyber Tag */}
                    <span className="absolute top-4 left-4 bg-[#10051F]/90 backdrop-blur-md text-neon-cyan text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-neon-cyan/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      {getCameraIcon(prod.type)}
                      <span>{prod.type}</span>
                    </span>

                    {/* HUD Crosshair on hover */}
                    <div className="absolute top-4 right-4 text-neon-magenta/60 group-hover:text-neon-magenta transition-colors">
                      <Crosshair className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-neon-cyan transition-colors leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-neon-grey mt-1.5 leading-relaxed font-light">
                        {prod.description}
                      </p>
                    </div>

                    {/* Spec Bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-white/5 font-mono">
                      {prod.specs.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-neon-grey">
                          <Check className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brand Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {prod.brands.map((b) => (
                        <span
                          key={b}
                          className="text-[10px] font-mono bg-white/[0.04] text-neon-grey px-2.5 py-0.5 rounded-full border border-white/5"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-7 pt-0 border-t border-white/5 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => handleWhatsApp(prod)}
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-500/50 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`CCTV System Enquiry: ${prod.name}`)}
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-black bg-neon-cyan hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CctvSolutionsPage;
