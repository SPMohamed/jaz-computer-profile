import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { COMPANY_INFO } from '../data/company';
import { 
  Cpu, 
  Laptop, 
  Printer, 
  Camera, 
  Network, 
  Tv, 
  ScreenShare, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Phone, 
  ChevronRight,
  Wrench,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Cpu className="w-6 h-6" />;
      case 'Laptop': return <Laptop className="w-6 h-6" />;
      case 'Printer': return <Printer className="w-6 h-6" />;
      case 'Camera': return <Camera className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'Tv': return <Tv className="w-6 h-6" />;
      case 'ScreenShare': return <ScreenShare className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  const handleWhatsAppService = (srv: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I need assistance with *${srv.title}*. Please let me know technician availability in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="Professional Technical Services"
        subtitle="Desktop & Laptop Chip-Level Repairs, Printer Care, LED TV Service, CCTV Maintenance, Structured Cabling & Corporate IT Support."
        tamilSubtitle="கணினி பழுதுநீக்கம், லேப்டாப் சிப் சர்வீஸ், CCTV மற்றும் நெட்வொர்க் சேவைகள்."
        badge="Technical Expertise"
        currentPage="services"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('General Service Booking')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-brand-navy-card rounded-2xl p-7 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center p-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                        {srv.serviceType}
                      </span>
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mt-1">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {srv.turnaroundTime}
                  </span>
                </div>

                {/* Descriptions */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-brand-silver leading-relaxed">
                  {srv.detailedDesc}
                </p>

                {srv.tamilDesc && (
                  <p className="text-xs text-brand-blue/90 font-medium">
                    {srv.tamilDesc}
                  </p>
                )}

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Service Scope & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular For */}
                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-200">Recommended For: </strong>
                  <span>{srv.popularFor}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleWhatsAppService(srv)}
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Query</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Book Service: ${srv.title}`)}
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors shadow-glow-blue"
                >
                  <span>Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Transparent Repair Workflow */}
        <div className="bg-slate-100 dark:bg-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Transparent & Reliable
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Our 5-Step Service Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-brand-silver">
              Every computer, laptop, printer, and CCTV recorder handled by JAZ COMPUTER follows an unbending standard of honesty, transparent billing, and rigorous component-level testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white dark:bg-brand-navy-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-black text-brand-blue">STEP 01</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Intake & Diagnostics
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thorough hardware inspection with diagnostic meters to pinpoint the exact failing chip, capacitor, or drive.
              </p>
            </div>

            <div className="bg-white dark:bg-brand-navy-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-black text-brand-blue">STEP 02</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Transparent Estimate
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We inform you of the exact fault and repair estimate before touching a single solder joint. No surprise bills.
              </p>
            </div>

            <div className="bg-white dark:bg-brand-navy-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-black text-brand-blue">STEP 03</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Precision Lab Repair
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Micro-soldering, authentic replacement parts, internal heatsink re-pasting, and firmware recalibration.
              </p>
            </div>

            <div className="bg-white dark:bg-brand-navy-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-black text-brand-blue">STEP 04</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Burn-In Stress Testing
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Continuous load benchmarking, thermal stability checks, and memory testing to verify rock-solid longevity.
              </p>
            </div>

            <div className="bg-white dark:bg-brand-navy-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-black text-brand-blue">STEP 05</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Delivery & Warranty
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Safe packaging, live functional demonstration upon collection, and repair service warranty coverage.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency On-Site Service Banner */}
        <div className="rounded-3xl bg-brand-navy text-white p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Urgent Service Call?
            </span>
            <h3 className="text-2xl font-bold font-display">
              Have an urgent office downtime or CCTV recording failure?
            </h3>
            <p className="text-brand-silver text-sm max-w-xl">
              Our on-site field engineers service offices, commercial warehouses, schools, and residences across Tenkasi and surrounding towns.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-brand-blue hover:bg-brand-blue-hover text-white shadow-glow-blue transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
