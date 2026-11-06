import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { CLIENTS_DATA, CLIENT_SECTORS, ClientRecord } from '../data/clients';
import { COMPANY_INFO } from '../data/company';
import { 
  Users, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Briefcase, 
  CheckCircle2,
  Filter,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesSector = 
        selectedSector === 'All Sectors' || client.category === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.location.toLowerCase().includes(q) ||
        client.category.toLowerCase().includes(q) ||
        client.serviceProvided.toLowerCase().includes(q);

      return matchesSector && matchesSearch;
    });
  }, [selectedSector, searchQuery]);

  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="Our Valuable Clients"
        subtitle="Trusted by 43+ leading commercial enterprises, schools, hospitals, textile mills and retail stores across Tenkasi & Southern Tamil Nadu."
        tamilSubtitle="எங்கள் மதிப்புமிக்க வாடிக்கையாளர்கள் · நம்பிக்கையான சேவை மற்றும் தொடர் ஆதரவு."
        badge="43+ Valued Partnerships"
        currentPage="clients"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('Corporate IT Partnership Enquiry')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Professional Trust & Non-Disclosure Notice */}
        <div className="bg-brand-blue/10 dark:bg-brand-blue/15 border border-brand-blue/30 rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-brand-silver">
          <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white font-semibold block">
              Professional Trust & Transparency Commitment:
            </strong>
            <p>
              In accordance with our strict business ethics, client details are maintained in a dedicated modular data file (<code>src/data/clients.ts</code>). We represent genuine client relationships without publishing private contact numbers, unauthorized endorsements, or invented logos.
            </p>
          </div>
        </div>

        {/* Filter Toolbar: Search & Sector Pills */}
        <div className="bg-white dark:bg-brand-navy-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client name, town, or service provided..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-brand-navy text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Showing <strong>{filteredClients.length}</strong> of <strong>{CLIENTS_DATA.length}</strong> verified business clients
            </div>
          </div>

          {/* Sector Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            {CLIENT_SECTORS.map((sector) => {
              const isSelected = selectedSector === sector;
              const count = sector === 'All Sectors' 
                ? CLIENTS_DATA.length 
                : CLIENTS_DATA.filter(c => c.category === sector).length;

              return (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  type="button"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{sector}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* All 43 Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white dark:bg-brand-navy-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/20 px-2.5 py-1 rounded-md">
                    Client #{client.clientNumber}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {client.clientType}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors leading-snug">
                  {client.name}
                </h3>

                {/* Location Badge */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                  <span>{client.location}</span>
                </div>

                {/* Services Delivered */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Scope of Service:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-brand-silver font-medium leading-relaxed">
                    {client.serviceProvided}
                  </p>
                </div>
              </div>

              {/* Sector Tag */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-brand-blue">
                  {client.category}
                </span>
                <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Call to Action Banner */}
        <div className="rounded-3xl bg-brand-navy text-white p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Corporate & Institutional IT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Join Tenkasi&apos;s Growing Network of Satisfied Clients
            </h3>
            <p className="text-brand-silver text-sm max-w-xl">
              Discuss enterprise workstation procurement, campus CCTV security surveillance, or an Annual Maintenance Contract (AMC) for your business today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Corporate IT Partnership Request')}
              type="button"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white shadow-glow-blue transition-all"
            >
              Request Corporate Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
