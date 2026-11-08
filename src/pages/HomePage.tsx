import React from 'react';
import { getAssetPath } from '../utils/assets';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS_DATA } from '../data/products';
import { SERVICES_DATA } from '../data/services';
import { CCTV_PRODUCTS, CCTV_BRANDS } from '../data/cctv';
import { CLIENTS_DATA, SCROLLING_CLIENTS } from '../data/clients';
import { PageId } from '../components/common/Header';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Shield, 
  Laptop, 
  Camera, 
  Network, 
  Printer, 
  Tv, 
  CheckCircle2, 
  Phone, 
  MessageSquare,
  Zap,
  ChevronDown,
  Cpu,
  Monitor,
  ShieldCheck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-32 pb-24 overflow-hidden bg-[#0A0214] text-white">
      {/* =========================================================================
          1. IMMERSIVE FUTURISTIC HERO EXPERIENCE
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#10051F] via-[#15072A] to-[#0A0214] pt-12 pb-20 px-4 sm:px-8">
        {/* Neon Light Flares & Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-neon-magenta/20 via-[#9A00E6]/25 to-neon-cyan/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-neon-cyan/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-neon-magenta/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Cyber Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d900ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full text-center space-y-10 z-10 pt-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-[#180B28]/80 border border-neon-cyan/40 text-neon-cyan shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-magenta animate-ping" />
            <span>Technology & Security Infrastructure · Tenkasi</span>
          </div>

          {/* Main Expressive Headline */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.02]">
              JAZ COMPUTER
            </h1>
            
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight neon-gradient-text drop-shadow-[0_0_25px_rgba(217,0,255,0.45)]">
              &ldquo;Technology Beyond Boundaries.&rdquo;
            </p>

            <p className="text-base sm:text-2xl font-mono tracking-widest text-neon-cyan uppercase pt-2 font-medium">
              Computers. Security. IT Solutions.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('products')}
              type="button"
              className="px-8 py-4 rounded-full text-xs font-display font-black uppercase tracking-widest text-white bg-gradient-to-r from-neon-magenta via-[#B500E6] to-neon-cyan hover:shadow-[0_0_35px_rgba(217,0,255,0.7)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>EXPLORE PRODUCTS</span>
              <Zap className="w-4 h-4 text-neon-cyan" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              type="button"
              className="px-8 py-4 rounded-full text-xs font-display font-black uppercase tracking-widest text-neon-cyan bg-[#180B28]/90 hover:bg-[#25103D] border border-neon-cyan/50 hover:border-neon-cyan shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.45)] transition-all duration-300"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Layered Visual Showcase Composition */}
          <div className="pt-8 max-w-5xl mx-auto relative">
            <div className="relative rounded-3xl overflow-hidden border border-neon-magenta/30 bg-[#160826]/70 shadow-glow-combo backdrop-blur-2xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Visual Card 1: Custom Workstation PC */}
                <div className="group relative rounded-2xl overflow-hidden h-56 bg-slate-950 border border-white/10 hover:border-neon-cyan/60 transition-all">
                  <img
                    src={getAssetPath('/assets/custom-workstation-tower.webp')}
                    alt="Custom Workstation Towers"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetPath('/assets/custom-gaming-pc.webp');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-left">
                    <span className="text-[10px] font-mono uppercase text-neon-cyan font-bold">Hardware</span>
                    <p className="text-sm font-display font-bold text-white">Custom Workstation Towers</p>
                  </div>
                </div>

                {/* Visual Card 2: Laptops & Displays */}
                <div className="group relative rounded-2xl overflow-hidden h-56 bg-slate-950 border border-white/10 hover:border-neon-magenta/60 transition-all">
                  <img
                    src={getAssetPath('/assets/macbook-pro-complete.webp')}
                    alt="Commercial Laptops"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetPath('/assets/macbook-pro-complete.webp');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-left">
                    <span className="text-[10px] font-mono uppercase text-neon-magenta font-bold">Computing</span>
                    <p className="text-sm font-display font-bold text-white">Commercial Laptops</p>
                  </div>
                </div>

                {/* Visual Card 3: CCTV Security */}
                <div className="group relative rounded-2xl overflow-hidden h-56 bg-slate-950 border border-white/10 hover:border-neon-cyan/60 transition-all">
                  <img
                    src={getAssetPath('/assets/hikvision-colorvu-pro-series.webp')}
                    alt="CCTV & AcuSense Systems"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetPath('/assets/hikvision-colorvu-pro-series.webp');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-left">
                    <span className="text-[10px] font-mono uppercase text-neon-cyan font-bold">Surveillance</span>
                    <p className="text-sm font-display font-bold text-white">CCTV & AcuSense Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="pt-6 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neon-grey/70">
              Scroll To Explore
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-neon-magenta/40 flex justify-center p-1 shadow-[0_0_10px_rgba(217,0,255,0.3)]">
              <span className="w-1.5 h-2 rounded-full bg-neon-cyan animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROMINENT TRUST STATEMENT BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b0833] via-[#10051F] to-[#1b0833] border border-neon-cyan/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,229,255,0.18)] group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta/15 rounded-full blur-[130px] pointer-events-none group-hover:bg-neon-magenta/25 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff06_1px,transparent_1px),linear-gradient(to_bottom,#d900ff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Regional Technology Benchmark · Tenkasi</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
                Trusted by{' '}
                <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.5)]">
                  2,000+
                </span>{' '}
                Valued Clients
              </h2>
              <p className="text-sm sm:text-base text-neon-grey max-w-2xl font-light leading-relaxed">
                Empowering businesses, healthcare clinics, institutions, textile houses, and professionals with mission-critical computing hardware, certified licensing, and enterprise surveillance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <button
                onClick={() => onNavigate('clients')}
                type="button"
                className="px-6 py-3.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-glow-combo"
              >
                <span>Explore Client Directory</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center lg:text-right text-[11px] font-mono text-neon-grey/70">
                <span>100 Verified Public Accounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRODUCT SHOWCASE (FUTURISTIC & HORIZONTAL ASYMMETRIC)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neon-magenta/20 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan block">
              // Hardware Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Product Showcase.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('products')}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-neon-cyan hover:text-white transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Featured Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feature: Custom Towers */}
          <div 
            onClick={() => onNavigate('products')}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#160826] border border-neon-magenta/30 hover:border-neon-cyan/50 shadow-glow-magenta hover:shadow-glow-cyan transition-all duration-500 cursor-pointer p-8 sm:p-10 flex flex-col justify-end min-h-[440px]"
          >
            <img
              src={PRODUCTS_DATA[1].image}
              alt={PRODUCTS_DATA[1].name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getAssetPath('/assets/custom-gaming-pc.jpg');
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-[#10051F]/60 to-transparent" />

            <div className="relative z-10 space-y-3 max-w-lg">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan bg-white/10 px-3 py-1 rounded-full border border-neon-cyan/30">
                {PRODUCTS_DATA[1].tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                {PRODUCTS_DATA[1].name}
              </h3>
              <p className="text-xs sm:text-sm text-neon-grey leading-relaxed">
                {PRODUCTS_DATA[1].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-neon-magenta uppercase tracking-wider">
                <span>Explore Configurations →</span>
              </div>
            </div>
          </div>

          {/* Two Stacked Visuals: Laptops & Displays */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div 
              onClick={() => onNavigate('products')}
              className="group relative rounded-3xl overflow-hidden bg-[#160826] border border-white/10 hover:border-neon-cyan/50 transition-all p-6 flex-1 flex flex-col justify-end min-h-[200px] cursor-pointer"
            >
              <img
                src={PRODUCTS_DATA[2].image}
                alt={PRODUCTS_DATA[2].name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-[#10051F]/60 to-transparent" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono text-neon-magenta uppercase tracking-wider block font-bold">
                  {PRODUCTS_DATA[2].categoryLabel}
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  {PRODUCTS_DATA[2].name}
                </h4>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('products')}
              className="group relative rounded-3xl overflow-hidden bg-[#160826] border border-white/10 hover:border-neon-cyan/50 transition-all p-6 flex-1 flex flex-col justify-end min-h-[200px] cursor-pointer"
            >
              <img
                src={PRODUCTS_DATA[3].image}
                alt={PRODUCTS_DATA[3].name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-[#10051F]/60 to-transparent" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-wider block font-bold">
                  {PRODUCTS_DATA[3].categoryLabel}
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  {PRODUCTS_DATA[3].name}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Category Strip */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-neon-grey/70 px-1">
            <span className="uppercase">// All Categories</span>
            <span>Scroll Right →</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {PRODUCTS_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('products')}
                className="flex-shrink-0 w-64 p-4 rounded-2xl bg-[#160826]/80 border border-white/10 hover:border-neon-magenta/60 hover:shadow-glow-magenta/30 transition-all cursor-pointer group"
              >
                <div className="h-32 rounded-xl overflow-hidden mb-3 bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-mono text-neon-cyan uppercase block font-bold">
                  {item.categoryLabel}
                </span>
                <h4 className="text-sm font-bold font-display text-white truncate mt-0.5">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. IT SERVICES (NEON LINE ICONS & INTERACTIVE MATRIX)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="space-y-2 border-b border-neon-cyan/20 pb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-magenta block">
            // Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            IT Services.
          </h2>
          <p className="text-sm sm:text-base text-neon-grey max-w-xl font-light">
            Component diagnostics, display renewal, network cabling, and commercial surveillance infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              className="p-7 rounded-3xl bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/60 hover:shadow-glow-cyan/20 transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#241035] text-neon-cyan flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-magenta group-hover:text-neon-magenta transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {srv.id === 'srv-desktop' && <Cpu className="w-6 h-6" />}
                    {srv.id === 'srv-laptop' && <Laptop className="w-6 h-6" />}
                    {srv.id === 'srv-printer' && <Printer className="w-6 h-6" />}
                    {srv.id === 'srv-monitor' && <Monitor className="w-6 h-6" />}
                    {srv.id === 'srv-tv' && <Tv className="w-6 h-6" />}
                    {srv.id === 'srv-cctv' && <Camera className="w-6 h-6" />}
                    {srv.id === 'srv-networking' && <Network className="w-6 h-6" />}
                    {srv.id === 'srv-it-support' && <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono text-neon-grey/60 font-bold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neon-grey mt-1.5 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {srv.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-white/[0.04] text-neon-grey px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenEnquiry(`Service Request: ${srv.title}`)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-neon-magenta hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Book Technician</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. CCTV & SECURITY SOLUTIONS EXPERIENCE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#180B2E] via-[#24103B] to-[#10051F] text-white p-8 sm:p-14 border border-neon-magenta/30 shadow-glow-combo space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan block">
                // Security Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
                CCTV Security Experience.
              </h2>
              <p className="text-sm sm:text-base text-neon-grey max-w-xl font-light">
                Hikvision, CP Plus, TrueView, HiFocus, Maxxion, D-Link & TP-Link. Bullet, Dome, 360° Wi-Fi, Solar & Networking.
              </p>
            </div>

            <button
              onClick={() => onNavigate('cctv')}
              type="button"
              className="px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-neon-cyan hover:text-slate-950 transition-colors self-start lg:self-auto flex items-center gap-2"
            >
              <span>Explore Security Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CCTV_PRODUCTS.slice(0, 4).map((cam) => (
              <div
                key={cam.id}
                onClick={() => onNavigate('cctv')}
                className="group p-5 rounded-2xl bg-[#10051F]/80 hover:bg-[#10051F] border border-white/10 hover:border-neon-cyan transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="h-40 rounded-xl overflow-hidden bg-black">
                    <img
                      src={cam.image}
                      alt={cam.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getAssetPath('/assets/cctv/bullet-camera.jpg');
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neon-magenta block font-bold">
                    {cam.type}
                  </span>
                  <h4 className="text-base font-bold font-display text-white">
                    {cam.name}
                  </h4>
                  <p className="text-xs text-neon-grey line-clamp-2">
                    {cam.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono font-bold text-neon-cyan flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CCTV & SURVEILLANCE SOLUTIONS SHOWCASE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#140624] text-white p-8 sm:p-14 border border-neon-magenta/40 shadow-glow-magenta">
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-neon-cyan/15 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-neon-magenta text-white shadow-glow-magenta">
                <Shield className="w-3.5 h-3.5" />
                <span>Security Solutions Hub</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
                Comprehensive CCTV & Surveillance Architecture
              </h2>

              <p className="text-sm sm:text-base text-neon-grey leading-relaxed max-w-2xl font-light">
                Enterprise surveillance systems, ColorVu full-color night vision, AcuSense AI intelligence, and off-grid 4G solar cameras supplied and installed for commercial buildings, educational campuses, and residences across Tenkasi.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-xs font-mono text-neon-grey">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                  Leading CCTV Brands
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                  Turnkey Installation Support
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                  Local Field Support in Tenkasi
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('CCTV Installation & Quote Inquiry')}
                type="button"
                className="w-full py-4 px-6 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-neon-magenta to-[#9A00E6] hover:from-[#E619FF] hover:to-neon-cyan transition-all duration-300 shadow-glow-magenta text-center"
              >
                Inquire Security Setup
              </button>
              <button
                onClick={() => onNavigate('cctv')}
                type="button"
                className="w-full py-3.5 px-6 rounded-full text-xs font-display font-bold uppercase tracking-wider text-neon-cyan bg-white/[0.06] hover:bg-white/[0.12] border border-neon-cyan/40 transition-colors text-center"
              >
                Explore CCTV Range
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TRUSTED CLIENTS (ANIMATED MARQUEE & DIRECTORY LINK)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neon-magenta/20 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-cyan block">
              // Client Relationships
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent">
                2,000+
              </span>{' '}
              Valued Clients.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('clients')}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-neon-cyan hover:text-white transition-colors group"
          >
            <span>View Full Directory (100 Accounts)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Animated Client Name Marquee */}
        <div className="relative overflow-hidden py-5 border-y border-neon-magenta/25 bg-[#140624]/60 rounded-2xl backdrop-blur-md">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {SCROLLING_CLIENTS.concat(SCROLLING_CLIENTS).map((name, idx) => (
              <span
                key={idx}
                className="text-base sm:text-lg font-display font-medium text-neon-grey tracking-wide hover:text-neon-cyan transition-colors cursor-default"
              >
                {name} <span className="text-neon-magenta mx-3">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CONTACT CTA (NEON COMMAND CONSOLE)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#140624] text-white p-10 sm:p-16 border border-neon-cyan/40 shadow-glow-cyan flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neon-magenta block">
              // Store Coordinates
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
              Ready to Upgrade Hardware or Surveillance?
            </h3>
            <p className="text-sm text-neon-grey leading-relaxed">
              Visit our store at 11/9, West Car Street in Tenkasi or get instant technical consultation over WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-8 py-4 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-neon-cyan hover:text-slate-950 transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-neon-magenta" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-gradient-to-r from-neon-magenta to-[#9A00E6] text-white transition-all flex items-center gap-2 shadow-glow-magenta"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
