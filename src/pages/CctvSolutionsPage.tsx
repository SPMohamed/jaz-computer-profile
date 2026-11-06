import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { CCTV_PRODUCTS, CCTV_BRANDS, CCTV_FEATURE_HIGHLIGHTS, CctvProduct } from '../data/cctv';
import { COMPANY_INFO } from '../data/company';
import { 
  ShieldCheck, 
  Camera, 
  Sun, 
  Wifi, 
  HardDrive, 
  Check, 
  Phone, 
  MessageSquare, 
  Layers, 
  ArrowRight,
  Eye,
  CheckCircle2,
  Building,
  Home,
  Store,
  Factory
} from 'lucide-react';

interface CctvSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const CctvSolutionsPage: React.FC<CctvSolutionsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCctv = selectedType === 'all' 
    ? CCTV_PRODUCTS 
    : CCTV_PRODUCTS.filter(p => p.type === selectedType);

  const handleCctvWhatsApp = (prod: CctvProduct) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I am inquiring about *${prod.name}* (${prod.type}). Please provide consultation and pricing for installation in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="CCTV Surveillance Architecture"
        subtitle="Bullet, Dome, 360° Wi-Fi, Solar 4G Cameras, DVR & NVR Solutions. Hikvision Authorised Sub-Regional Distributor in Tenkasi."
        tamilSubtitle="அதிநவீன CCTV கேமராக்கள், சோலார் கேமராக்கள் மற்றும் பாதுகாப்பு நெட்வொர்க் சேவைகள்."
        badge="Hikvision Authorised Sub-Regional Distributor"
        currentPage="cctv"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('CCTV Surveillance Project')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Sub-Regional Distributorship Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-card text-white p-8 sm:p-12 border border-brand-blue/40 shadow-2xl">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue text-white shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Regional Authority</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Hikvision Authorised Sub-Regional Distributor
              </h2>
              <p className="text-brand-silver text-sm sm:text-base leading-relaxed">
                As the official Sub-Regional Distributor for Hikvision in Tenkasi and surrounding jurisdictions, JAZ COMPUTER supplies certified surveillance equipment with official manufacturer warranty, genuine firmware updates, and direct wholesale/retail support.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  Wholesale Supply for Installers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  Turnkey Commercial Installations
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  Certified Warranty & RMA Support
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('Hikvision Sub-Regional Distributor Pricing')}
                type="button"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white transition-all shadow-glow-blue text-center"
              >
                Inquire Dealer / Project Pricing
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-slate-700 text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>Call CCTV Specialist</span>
              </a>
            </div>
          </div>
        </div>

        {/* Brands Supported Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              World-Class Surveillance Brands
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Premier Hardware Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-brand-silver">
              We engineer security solutions using top global and national surveillance brands to ensure maximum reliability and tamper-proof storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CCTV_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-white dark:bg-brand-navy-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {brand.badge}
                  </span>
                  <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    {brand.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {brand.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Types Filter & Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Surveillance Catalog
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                CCTV Camera Models & Recorders
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Equipment' },
                { id: 'Bullet', label: 'Bullet Cameras' },
                { id: 'Dome', label: 'Dome Cameras' },
                { id: 'Wi-Fi PTZ', label: '360° Wi-Fi PTZ' },
                { id: 'Solar Powered', label: 'Solar & 4G' },
                { id: 'DVR', label: 'DVRs' },
                { id: 'NVR', label: 'NVRs' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedType(pill.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedType === pill.id
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver hover:bg-slate-200'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCctv.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-brand-navy-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-blue/30">
                      {item.type}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Key Specifications:
                      </span>
                      {item.keySpecs.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-brand-silver">
                          <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <strong className="text-slate-700 dark:text-slate-200">Ideal For: </strong>
                      <span>{item.idealFor}</span>
                    </div>

                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Available Brands:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.brandsAvailable.map((b) => (
                          <span
                            key={b}
                            className="text-[10px] font-medium bg-slate-100 dark:bg-brand-navy px-2 py-0.5 rounded text-slate-700 dark:text-brand-silver"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => handleCctvWhatsApp(item)}
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`CCTV Enquiry: ${item.name}`)}
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors shadow-glow-blue"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="bg-slate-100 dark:bg-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Why Choose JAZ For Security
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              The JAZ Surveillance Standard
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CCTV_FEATURE_HIGHLIGHTS.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-brand-navy-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Request Site Survey Call to Action */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-card to-brand-navy text-white p-8 sm:p-12 border border-brand-blue/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Free On-Site Evaluation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Schedule an On-Site CCTV Security Survey in Tenkasi
            </h3>
            <p className="text-brand-silver text-sm max-w-xl">
              Our certified security engineer will inspect your premises, identify blind spots, calculate camera angles, and prepare an optimal plan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Free CCTV Site Survey Booking')}
              type="button"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white shadow-glow-blue transition-all"
            >
              Book Free Site Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CctvSolutionsPage;
