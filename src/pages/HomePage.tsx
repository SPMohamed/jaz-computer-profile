import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS_DATA } from '../data/products';
import { SERVICES_DATA } from '../data/services';
import { CLIENTS_DATA } from '../data/clients';
import { PageId } from '../components/common/Header';
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  Cpu, 
  Laptop, 
  Camera, 
  Wrench, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Tv,
  Printer,
  Sparkles,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-card text-white py-16 sm:py-24 border-b border-slate-800/80">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1685FF10_1px,transparent_1px),linear-gradient(to_bottom,#1685FF10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-navy-light/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/15 text-brand-blue border border-brand-blue/30 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>{COMPANY_INFO.distributorshipBadge}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                  Technology, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-white">
                    Built Around You.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-brand-silver font-medium">
                  உங்கள் தொழில்நுட்பத் தேவைகளுக்கு நம்பகமான உதவி.
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                JAZ COMPUTER delivers premier IT infrastructure in Tenkasi: branded and custom-assembled desktops, commercial laptops, certified chip-level repairs, high-resolution CCTV surveillance, and enterprise network support.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/30 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-slate-700 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => onNavigate('products')}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-brand-blue hover:text-white transition-colors"
                >
                  <span>Explore Catalog</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-brand-silver border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Genuine Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Chip-Level Lab Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Hikvision Sub-Regional Distr.</span>
                </div>
              </div>
            </div>

            {/* Right Card Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue to-sky-500 opacity-20 blur-xl"></div>
                
                {/* Feature Showcase Glass Card */}
                <div className="relative bg-brand-navy-card/90 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-md space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                        Tenkasi Tech Hub
                      </span>
                      <h3 className="text-xl font-bold font-display text-white">
                        One-Stop Solutions
                      </h3>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>

                  <div className="space-y-3.5">
                    <div 
                      onClick={() => onNavigate('cctv')}
                      className="group flex items-center justify-between p-3 rounded-xl bg-brand-navy/60 hover:bg-brand-blue/15 border border-slate-700/50 hover:border-brand-blue/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Camera className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">
                            CCTV Security Systems
                          </h4>
                          <p className="text-xs text-slate-400">
                            Hikvision, CP Plus, TrueView & TVT
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                    </div>

                    <div 
                      onClick={() => onNavigate('products')}
                      className="group flex items-center justify-between p-3 rounded-xl bg-brand-navy/60 hover:bg-brand-blue/15 border border-slate-700/50 hover:border-brand-blue/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">
                            Desktops & Custom Rigs
                          </h4>
                          <p className="text-xs text-slate-400">
                            Intel, AMD, Dell, HP & Lenovo
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                    </div>

                    <div 
                      onClick={() => onNavigate('services')}
                      className="group flex items-center justify-between p-3 rounded-xl bg-brand-navy/60 hover:bg-brand-blue/15 border border-slate-700/50 hover:border-brand-blue/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <Wrench className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">
                            Laptop & Desktop Repairs
                          </h4>
                          <p className="text-xs text-slate-400">
                            Chip-level micro-soldering & screen repair
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                    </div>

                    <div 
                      onClick={() => onNavigate('products')}
                      className="group flex items-center justify-between p-3 rounded-xl bg-brand-navy/60 hover:bg-brand-blue/15 border border-slate-700/50 hover:border-brand-blue/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                          <Tv className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">
                            LED TVs & Software
                          </h4>
                          <p className="text-xs text-slate-400">
                            24&quot; to 100&quot; Displays & Antivirus
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                    </div>
                  </div>

                  <div className="pt-2 text-center border-t border-slate-700/80">
                    <button
                      onClick={() => onOpenEnquiry('Instant Consultation')}
                      type="button"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors shadow-glow-blue"
                    >
                      Request Free Technical Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS TICKER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black font-display text-brand-blue">
              {COMPANY_INFO.stats.yearsExperience}
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-silver">
              Years in Tenkasi
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black font-display text-brand-blue">
              {COMPANY_INFO.stats.satisfiedClients}
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-silver">
              Satisfied Clients
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black font-display text-brand-blue">
              {COMPANY_INFO.stats.camerasInstalled}
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-silver">
              Cameras Installed
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black font-display text-brand-blue">
              {COMPANY_INFO.stats.systemsServiced}
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-silver">
              Systems Serviced
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HIKVISION AUTHORISED DISTRIBUTOR SPOTLIGHT BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-card to-brand-navy text-white p-8 sm:p-12 border border-brand-blue/30 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue text-white shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Official Partner Announcement</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
                Hikvision Authorised Sub-Regional Distributor
              </h2>

              <p className="text-brand-silver text-sm sm:text-base leading-relaxed max-w-2xl">
                JAZ COMPUTER is the official Sub-Regional Distributor for Hikvision in Tenkasi and surrounding districts. Get direct access to authentic stock, official warranties, ColorVu 24/7 night vision, AcuSense AI intelligence, and factory-backed technical support.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Wholesale & Retail Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Certified System Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Local On-Site Assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onNavigate('cctv')}
                type="button"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-blue hover:bg-brand-blue-hover shadow-glow-blue transition-all flex items-center justify-center gap-2"
              >
                <span>View CCTV Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenEnquiry('Hikvision Distributor Bulk Quote')}
                type="button"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-slate-700 transition-all text-center"
              >
                Distributor Price Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PRODUCTS SHOWCASE PREVIEW
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Comprehensive Product Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Hardware, Software & Displays
            </h2>
            <p className="text-sm text-slate-600 dark:text-brand-silver max-w-xl">
              Authentic computing hardware, enterprise software licenses, and commercial surveillance devices sourced directly from verified manufacturers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-brand-navy-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-brand-navy/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-blue/30">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 bg-white/90 dark:bg-brand-navy-dark/90 backdrop-blur-sm text-slate-800 dark:text-brand-silver text-[10px] font-semibold px-2 py-0.5 rounded">
                  {product.categoryLabel}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-brand-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Brands Available */}
                {product.brands && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.brands.slice(0, 4).map((brand) => (
                      <span
                        key={brand}
                        className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-brand-silver px-2 py-0.5 rounded"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Enquiry Action */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Corporate & Retail
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(`Product Enquiry: ${product.name}`)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
                  >
                    <span>Enquire Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SERVICES SHOWCASE PREVIEW
         ========================================================================= */}
      <section className="bg-slate-100 dark:bg-brand-navy/60 py-16 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Expert Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Professional IT & Repair Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-brand-silver">
              From precision chip-level motherboard troubleshooting to campus CCTV deployments, our Tenkasi technical team has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {service.id === 'srv-desktop' && <Cpu className="w-6 h-6" />}
                    {service.id === 'srv-laptop' && <Laptop className="w-6 h-6" />}
                    {service.id === 'srv-printer' && <Printer className="w-6 h-6" />}
                    {service.id === 'srv-cctv' && <Camera className="w-6 h-6" />}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                      {service.serviceType}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {service.turnaroundTime}
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(`Service Request: ${service.title}`)}
                    type="button"
                    className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
                  >
                    Book Service →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue text-white hover:bg-brand-blue-hover transition-all shadow-glow-blue"
            >
              <span>Explore All 8 IT Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENTS SECTION SPOTLIGHT PREVIEW
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-brand-navy-card dark:to-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                <Users className="w-4 h-4" />
                <span>Trusted by 43+ Valued Regional Clients</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                Powering Tenkasi Businesses, Schools & Hospitals
              </h2>
              <p className="text-sm text-slate-600 dark:text-brand-silver max-w-xl">
                We take immense pride in supporting commercial establishments, retail showrooms, educational campuses, textile mills, and healthcare clinics across the region.
              </p>
            </div>

            <button
              onClick={() => onNavigate('clients')}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white transition-all shadow-glow-blue flex-shrink-0"
            >
              <span>View All 43 Clients Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Sample Client Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLIENTS_DATA.slice(0, 8).map((client) => (
              <div
                key={client.id}
                className="p-4 rounded-xl bg-white dark:bg-brand-navy border border-slate-200 dark:border-slate-700/60 shadow-sm space-y-1.5"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase">
                  <span>Client #{client.clientNumber}</span>
                  <span className="text-brand-blue">{client.location}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display truncate">
                  {client.name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {client.serviceProvided}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED LOCATION & CONTACT TEASER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Visit Our Tenkasi Store
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
              Conveniently Located at West Car Street
            </h2>
            <p className="text-sm text-slate-600 dark:text-brand-silver leading-relaxed">
              Drop by for hands-on laptop demonstrations, desktop configuration discussions, CCTV camera live display viewing, or quick chip-level diagnostic testing.
            </p>

            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">JAZ COMPUTER</strong>
                  <span>{COMPANY_INFO.address}, Tenkasi - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all shadow-glow-blue"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 transition-colors"
              >
                <span>Full Contact Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-xl relative bg-slate-200 dark:bg-slate-800">
              <iframe
                title="JAZ COMPUTER Tenkasi Google Map Location"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
