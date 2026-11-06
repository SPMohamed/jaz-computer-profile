import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryItem } from '../data/gallery';
import { 
  Camera, 
  MapPin, 
  X, 
  Maximize2, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="Project & Installation Gallery"
        subtitle="Explore our CCTV deployments, custom PC workstation builds, chip-level service lab, and structured networking racks in Tenkasi."
        tamilSubtitle="எங்கள் திட்டங்கள் மற்றும் சாதனங்களின் புகைப்பட தொகுப்பு."
        badge="Field Work & Lab"
        currentPage="gallery"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('Gallery Project Inquiry')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white dark:bg-brand-navy-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver hover:bg-slate-200 dark:hover:bg-slate-700'
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
              onClick={() => setActiveLightbox(item)}
              className="group bg-white dark:bg-brand-navy-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-brand-blue/90 text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-brand-navy/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-brand-blue/30 shadow-sm">
                  <MapPin className="w-3 h-3 text-brand-blue" />
                  <span>{item.locationTag}</span>
                </div>

                {/* Category Badge */}
                <span className="absolute bottom-3 right-3 bg-white/90 dark:bg-brand-navy-dark/90 backdrop-blur-sm text-slate-800 dark:text-brand-silver text-[10px] font-semibold px-2 py-0.5 rounded">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Caption */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-brand-blue font-semibold">
                  <span>View Project Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveLightbox(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-brand-navy-card text-white rounded-2xl overflow-hidden border border-slate-700 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 w-full bg-black">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                  aria-label="Close image lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-brand-blue font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeLightbox.locationTag} · {activeLightbox.categoryLabel}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {activeLightbox.title}
                </h3>
                <p className="text-sm text-brand-silver leading-relaxed">
                  {activeLightbox.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-700/80">
                  <button
                    onClick={() => {
                      const item = activeLightbox;
                      setActiveLightbox(null);
                      onOpenEnquiry(`Similar Project Enquiry: ${item.title}`);
                    }}
                    type="button"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-blue hover:bg-brand-blue-hover text-white shadow-glow-blue transition-all"
                  >
                    Request Similar Installation
                  </button>
                  <button
                    onClick={() => setActiveLightbox(null)}
                    type="button"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Close
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
