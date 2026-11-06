import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { COMPANY_INFO } from '../data/company';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Users, 
  Clock, 
  Target, 
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="About JAZ COMPUTER"
        subtitle="Technology, Built Around You — Your trusted computing sales, chip-level service and surveillance partner in Tenkasi, Tamil Nadu."
        tamilSubtitle="எங்களைப் பற்றி · உங்கள் தொழில்நுட்பத் தேவைகளுக்கு நம்பகமான உதவி."
        badge="Company Overview"
        currentPage="about"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('About Page Consultation')}
      />

      {/* Main Story & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
              <Building2 className="w-4 h-4" />
              <span>Our Story & Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white leading-tight">
              Pioneering Dependable IT Hardware & Surveillance in Tenkasi
            </h2>

            <p className="text-slate-600 dark:text-brand-silver text-base leading-relaxed">
              Founded on West Car Street in Tenkasi, <strong>JAZ COMPUTER</strong> emerged from a clear local need: providing residents, schools, commercial businesses, and agricultural estates with genuine computing hardware, transparent advice, and dependable on-site technical support.
            </p>

            <p className="text-slate-600 dark:text-brand-silver text-base leading-relaxed">
              Instead of pushing generic hardware, our philosophy has always been simple: <em>Technology, Built Around You</em>. Whether a student requires a reliable budget study laptop, an accounting firm needs licensed multi-user tax software, or a textile mill requires 64-channel continuous video surveillance, we tailor each deployment specifically to the user&apos;s real-world operational demands.
            </p>

            {/* Quick Distinctions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Hikvision Authorised Sub-Regional Distributor</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Dedicated In-House Chip-Level Repair Lab</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Over 43+ Valued Commercial & School Clients</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>100% Genuine Branded Hardware & Licenses</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-brand-blue/20 blur-xl" />
              <div className="relative bg-white dark:bg-brand-navy-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      Authorized Credentials
                    </h3>
                    <p className="text-xs text-brand-blue font-semibold">
                      Tenkasi & Regional Distribution
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600 dark:text-brand-silver">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-brand-navy border border-slate-100 dark:border-slate-700/60">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">
                      Sub-Regional Distributorship
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Authorised Sub-Regional Distributor for Hikvision surveillance systems and security equipment.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-brand-navy border border-slate-100 dark:border-slate-700/60">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">
                      Cybersecurity Authorized Dealer
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Genuine licenses for Quick Heal, McAfee, eScan, and VibraNium antivirus solutions.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-brand-navy border border-slate-100 dark:border-slate-700/60">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">
                      Service Lab & Spares Depot
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Equipped with high-precision hot air rework stations, digital oscilloscopes, and testing benches.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hikvision Distributorship Showcase Section */}
      <section className="bg-brand-navy-dark text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Sub-Regional Distributorship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Why Our Sub-Regional Status Benefits You
            </h2>
            <p className="text-brand-silver text-sm sm:text-base leading-relaxed">
              As Hikvision&apos;s Authorised Sub-Regional Distributor in Tenkasi, we eliminate third-party reseller markups and ensure every camera, DVR, NVR and cable run meets verified factory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-navy-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Direct Genuine Stock
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct access to authentic serial numbers, ColorVu 24/7 vision technology, and AcuSense artificial intelligence models directly backed by the manufacturer.
              </p>
            </div>

            <div className="bg-brand-navy-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Warranty & RMA Support
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hassle-free replacement and factory repair handling. If any unit exhibits manufacturing anomalies, we handle warranty claims directly through official channels.
              </p>
            </div>

            <div className="bg-brand-navy-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Installer & Bulk Supply
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We supply independent electricians, CCTV contractors, and IT integrators throughout Tenkasi, Tirunelveli, and neighboring taluks with distributor-grade pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars of Excellence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Our Commitments
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            Built On Four Core Principles
          </h2>
          <p className="text-sm text-slate-600 dark:text-brand-silver">
            The foundation of our enduring relationship with businesses and families throughout Tenkasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Need-Based Recommendation
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We never push higher-cost components when a cost-effective, dependable solution accomplishes the user&apos;s goal.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Uncompromising Authenticity
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every ink cartridge, antivirus activation key, desktop motherboard, and CCTV DVR carries verified genuine lineage.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Deep Technical Mastery
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our technicians perform chip-level BGA rework and IC soldering in-house, significantly cutting turnaround times and repair costs.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Rapid Local Turnaround
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Conveniently located on West Car Street in Tenkasi, we provide same-day diagnostics and prompt on-site technician visits.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap Architecture Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-100 to-white dark:from-brand-navy-card dark:to-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Technology Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              The Digital Evolution of JAZ COMPUTER
            </h2>
            <p className="text-sm text-slate-600 dark:text-brand-silver">
              Our modern web architecture is systematically structured across four distinct phases to support long-term business scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-brand-navy border-2 border-brand-blue shadow-md space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-brand-blue text-white">
                Phase 1 · Active Now
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Corporate Profile & Showcase
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Premium digital branding, complete product & CCTV showcase, client trust registry, and instant WhatsApp/Call enquiries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-brand-navy/60 border border-slate-200 dark:border-slate-800 space-y-2 opacity-80">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Phase 2 · Planned
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Admin Dashboard & CMS
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Internal portal for business owners to update price sheets, upload gallery snapshots, and maintain inventory notices.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-brand-navy/60 border border-slate-200 dark:border-slate-800 space-y-2 opacity-80">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Phase 3 · Planned
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Enquiry & Ticket CRM
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Automated customer enquiry tracking, service job sheet status lookups, and AMC renewal alerts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-brand-navy/60 border border-slate-200 dark:border-slate-800 space-y-2 opacity-80">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Phase 4 · Planned
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Online Catalogue & E-Commerce
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct online hardware purchasing, digital payment gateways, and delivery tracking across Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-brand-navy p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-display">
              Experience the JAZ COMPUTER difference today.
            </h3>
            <p className="text-brand-silver text-sm max-w-xl">
              Visit our store at West Car Street, Tenkasi or get immediate technical guidance over WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              type="button"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white transition-all shadow-glow-blue flex items-center gap-2"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
