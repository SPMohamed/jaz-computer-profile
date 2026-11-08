import React from 'react';
import { getAssetPath } from '../utils/assets';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { COMPANY_INFO } from '../data/company';
import { 
  Shield, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Camera, 
  Layers,
  Sparkles,
  Zap,
  Award
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-20 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="About JAZ COMPUTER"
        subtitle="Technology, Built Around You — Your trusted computing sales, hardware engineering and surveillance partner in Tenkasi."
        label="Company Profile"
        currentPage="about"
        onNavigate={onNavigate}
        actionText="Contact Store"
        onAction={() => onNavigate('contact')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Core Narrative with Cyber Asymmetric Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-neon-magenta/20 border border-neon-magenta/40 text-neon-magenta">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technology Beyond Boundaries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Hardware Architecture Engineered for Real-World Workflows.
            </h2>

            <p className="text-sm sm:text-base text-neon-grey leading-relaxed font-light">
              Located on West Car Street in Tenkasi, <strong>JAZ COMPUTER</strong> delivers high-reliability computing hardware, custom workstation assemblies, commercial displays, licensed software, and surveillance systems for businesses, medical clinics, educational institutions, and residences.
            </p>

            <p className="text-sm sm:text-base text-neon-grey leading-relaxed font-light">
              We focus on exact requirements: recommending hardware configurations tailored to specific accounting, design, administrative, or security needs rather than pushing generic retail stock.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neon-grey font-mono">
              <div className="flex items-center gap-2.5 bg-[#160826] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Surveillance & Security Engineering</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#160826] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Original Serial Licenses & Warranties</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#160826] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Dedicated In-House Service Benches</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#160826] p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                <span>Tenkasi Field Support Across Sectors</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#241035] to-[#10051F] border border-neon-cyan/40 shadow-[0_0_40px_rgba(0,229,255,0.2)] relative min-h-[400px] group">
              <img
                src={getAssetPath('/assets/about-white-gaming-pc.webp')}
                alt="JAZ COMPUTER Custom White Gaming PC & Workstation Architecture"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = getAssetPath('/assets/about-white-gaming-pc.webp');
                }}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-[#10051F]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#160826]/90 border border-white/10 backdrop-blur-md space-y-1.5 shadow-2xl">
                <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-wider block font-bold">
                  Official Storefront
                </span>
                <h4 className="text-sm font-bold font-display text-white">
                  JAZ COMPUTER · Computing & Surveillance
                </h4>
                <p className="text-xs text-neon-grey/70 font-mono">
                  11/9, West Car Street, Tenkasi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Principles Matrix */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neon-magenta font-bold block">
              Core Principles
            </span>
            <span className="text-xs font-mono text-neon-grey">
              The JAZ Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 space-y-3 group">
              <span className="text-xs font-mono text-neon-cyan font-bold">01 // SOURCE</span>
              <h4 className="text-base font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
                Genuine Sourcing
              </h4>
              <p className="text-xs text-neon-grey leading-relaxed font-light">
                Direct procurement of authentic equipment with official manufacturer warranties and audit-compliant licensing.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 space-y-3 group">
              <span className="text-xs font-mono text-neon-magenta font-bold">02 // PRECISION</span>
              <h4 className="text-base font-bold font-display text-white group-hover:text-neon-magenta transition-colors">
                Technical Bench
              </h4>
              <p className="text-xs text-neon-grey leading-relaxed font-light">
                Hardware diagnostics, screen replacements, thermal overhauls, and structured network cabling executed with certified tools.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 space-y-3 group">
              <span className="text-xs font-mono text-neon-cyan font-bold">03 // HARDWARE</span>
              <h4 className="text-base font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
                Security Systems
              </h4>
              <p className="text-xs text-neon-grey leading-relaxed font-light">
                Comprehensive hardware solutions for Hikvision, CP Plus, TrueView, Unicam and TVT cameras, DVRs, and NVRs with local installation support.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 space-y-3 group">
              <span className="text-xs font-mono text-neon-magenta font-bold">04 // GROUND</span>
              <h4 className="text-base font-bold font-display text-white group-hover:text-neon-magenta transition-colors">
                Local Presence
              </h4>
              <p className="text-xs text-neon-grey leading-relaxed font-light">
                Accessible storefront and testing facility at West Car Street, Tenkasi for face-to-face consultations and rapid equipment pick-up.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Future Architecture Roadmap */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#160826]/80 border border-white/10 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan block font-bold">
              Engineering Architecture
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              Phased Enterprise Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-neon-cyan/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neon-cyan font-bold">Phase 1</span>
                <span className="px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan text-[10px]">Active</span>
              </div>
              <h5 className="text-sm font-bold text-white">Digital Brand & Showcase</h5>
              <p className="text-xs text-neon-grey font-light">
                Responsive showcase, client directory, WhatsApp inquiry desks, and verified hardware catalog.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 opacity-80">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neon-grey">Phase 2</span>
                <span className="text-[10px] text-neon-grey/60 font-mono">Future</span>
              </div>
              <h5 className="text-sm font-bold text-white">Admin & CMS</h5>
              <p className="text-xs text-neon-grey font-light">
                Storefront content management, real-time client management, and dynamic service catalog updates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 opacity-80">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neon-grey">Phase 3</span>
                <span className="text-[10px] text-neon-grey/60 font-mono">Future</span>
              </div>
              <h5 className="text-sm font-bold text-white">Enquiry Management</h5>
              <p className="text-xs text-neon-grey font-light">
                Automated customer ticketing, quote dispatch, and service technician scheduling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 opacity-80">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neon-grey">Phase 4</span>
                <span className="text-[10px] text-neon-grey/60 font-mono">Future</span>
              </div>
              <h5 className="text-sm font-bold text-white">Catalog & Commerce</h5>
              <p className="text-xs text-neon-grey font-light">
                Institutional ordering portals, inventory feeds, and direct order processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
