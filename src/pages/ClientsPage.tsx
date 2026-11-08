import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { CLIENTS_DATA, CLIENT_CATEGORIES, SCROLLING_CLIENTS, ClientCategory, ClientRecord } from '../data/clients';
import { Search, MapPin, Building, ArrowUpRight, Shield, Sparkles } from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<ClientCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredClients = useMemo(() => {
    return CLIENTS_DATA.filter((client) => {
      const matchesCategory = selectedCategory === 'All' || client.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.category.toLowerCase().includes(q) ||
        (client.location && client.location.toLowerCase().includes(q)) ||
        (client.location && `${client.name} – ${client.location}`.toLowerCase().includes(q)) ||
        (client.location && `${client.name} - ${client.location}`.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="Our Valuable Clients"
        subtitle="Trusted by 2,000+ clients with 100 verified institutional enterprises, medical clinics, educational institutions, textile establishments and professionals across Tenkasi."
        label="Official Client Directory"
        currentPage="clients"
        onNavigate={onNavigate}
        actionText="Corporate IT Consultation"
        onAction={() => onOpenEnquiry('Corporate IT Partnership Enquiry')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Animated Cyber Marquee Ticker */}
        <div className="relative overflow-hidden py-4 border-y border-white/10 bg-[#160826]/80 rounded-2xl">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {SCROLLING_CLIENTS.concat(SCROLLING_CLIENTS).map((name, i) => (
              <span
                key={i}
                className="text-sm font-display font-medium text-neon-grey tracking-wide flex items-center"
              >
                <span>{name}</span>
                <span className="text-neon-cyan/50 mx-3">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Cyber Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-neon-grey/70 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search verified clients, location, Local Vendor Support..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-white/10 bg-[#160826]/90 text-white placeholder-neon-grey/50 text-xs focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-neon-grey hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-neon-grey font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neon-magenta" />
              <span>Showing {filteredClients.length} of {CLIENTS_DATA.length} verified accounts</span>
            </div>
          </div>

          {/* Futuristic Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {CLIENT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === 'All' 
                ? CLIENTS_DATA.length 
                : CLIENTS_DATA.filter(c => c.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan text-black font-bold shadow-glow-combo'
                      : 'bg-[#160826]/80 text-neon-grey border border-white/10 hover:border-neon-cyan/40 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-neon-grey'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Elegant Typographic Client Name Wall (Cyber Matrix Layout) */}
        <div className="border border-white/10 rounded-3xl divide-y divide-white/5 bg-[#160826]/70 backdrop-blur-md overflow-hidden shadow-2xl">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#241035]/50 transition-colors group"
            >
              <div className="flex items-start sm:items-center gap-5">
                <span className="font-mono text-xs text-neon-cyan/60 group-hover:text-neon-cyan w-8 flex-shrink-0 font-bold transition-colors">
                  {client.id < 10 ? `0${client.id}` : client.id}
                </span>

                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-neon-cyan transition-colors">
                    {client.name}
                  </h3>
                  {client.location && (
                    <span className="text-xs text-neon-grey/70 flex items-center gap-1.5 mt-0.5 font-light">
                      <MapPin className="w-3.5 h-3.5 text-neon-magenta" />
                      <span>{client.location}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto pl-13 sm:pl-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neon-grey bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-neon-magenta/30 transition-colors">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Invitation Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#241035] via-[#160826] to-[#10051F] border border-neon-magenta/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(217,0,255,0.15)]">
          <div className="space-y-2">
            <h3 className="text-2xl font-black font-display text-white">
              Institutional IT Architecture & CCTV Support
            </h3>
            <p className="text-xs sm:text-sm text-neon-grey max-w-xl font-light">
              Are you setting up commercial workstations, campus surveillance or structured server racks in Tenkasi? Connect with our technical engineers.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('Corporate IT Partnership Inquiry')}
            type="button"
            className="px-6 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-all flex items-center gap-2 shadow-glow-combo flex-shrink-0"
          >
            <span>Initiate Enterprise Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
