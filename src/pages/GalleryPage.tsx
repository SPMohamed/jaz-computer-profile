import React, { useState } from 'react';
import { getAssetPath } from '../utils/assets';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryItem } from '../data/gallery';
import { MapPin, X, ArrowUpRight, Maximize2, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="Project & Work Showcase"
        subtitle="Visual archive of custom desktop workstation builds, CCTV security deployments, networking racks, and display installations in Tenkasi."
        label="Visual Portfolio"
        currentPage="gallery"
        onNavigate={onNavigate}
        actionText="Consult on Similar Project"
        onAction={() => onOpenEnquiry('Installation Project Consultation')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan text-black font-bold shadow-glow-combo'
                    : 'bg-[#160826]/80 text-neon-grey border border-white/10 hover:border-neon-cyan/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group rounded-3xl overflow-hidden bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-black/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getAssetPath('/assets/gallery/outdoor-cctv-installation.jpg');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160826] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#10051F]/90 backdrop-blur-md text-neon-cyan text-[10px] font-mono uppercase px-3 py-1 rounded-full border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                    <MapPin className="w-3 h-3 text-neon-cyan" />
                    <span>{item.locationTag}</span>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-full bg-[#10051F]/80 text-neon-grey opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-neon-cyan" />
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neon-magenta block font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-neon-cyan transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neon-grey leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 text-xs font-semibold text-neon-cyan flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Inspect Deployment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Futuristic Full Image Lightbox */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#160826] text-white rounded-3xl overflow-hidden border border-neon-cyan/40 shadow-[0_0_50px_rgba(0,229,255,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[420px] bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetPath('/assets/gallery/outdoor-cctv-installation.jpg');
                  }}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[#10051F]/80 hover:bg-[#10051F] text-white border border-white/10 hover:border-neon-cyan/50 transition-colors"
                  aria-label="Close image"
                >
                  <X className="w-5 h-5 text-neon-cyan" />
                </button>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase">
                  <MapPin className="w-3.5 h-3.5 text-neon-magenta" />
                  <span>{activeItem.locationTag} · {activeItem.categoryLabel}</span>
                </div>
                <h3 className="text-2xl font-black font-display text-white">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-neon-grey font-light leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const sel = activeItem;
                      setActiveItem(null);
                      onOpenEnquiry(`Consultation for ${sel.title}`);
                    }}
                    type="button"
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-all shadow-glow-combo"
                  >
                    Request Similar Setup
                  </button>
                  <button
                    onClick={() => setActiveItem(null)}
                    type="button"
                    className="text-xs font-mono text-neon-grey hover:text-white"
                  >
                    Close Preview [ESC]
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
