import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, ProductItem } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { 
  Search, 
  ArrowUpRight, 
  MessageSquare, 
  Info,
  Check,
  Sparkles,
  Zap,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (context?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.brands && item.brands.some(b => b.toLowerCase().includes(q))) ||
        (item.specs && item.specs.some(s => s.toLowerCase().includes(q))) ||
        (item.softwareCategories && item.softwareCategories.some(sc => 
          sc.category.toLowerCase().includes(q) || 
          sc.items.some(it => it.toLowerCase().includes(q))
        ));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductWhatsApp = (item: ProductItem) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I am inquiring regarding *${item.name}* (${item.categoryLabel}). Please share technical details and availability in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const featuredProduct = PRODUCTS_DATA.find(p => p.id === 'prod-desktop-assembled') || PRODUCTS_DATA[0];

  return (
    <div className="space-y-16 pb-24 text-white">
      {/* Page Header */}
      <PageHeader
        title="Hardware & Systems"
        subtitle="Branded Desktops, Custom Workstation Towers, Laptops, Displays, LED TVs (24&quot;–100&quot;), Licensed Software & Peripherals."
        label="Product Showcase"
        currentPage="products"
        onNavigate={onNavigate}
        actionText="Request Hardware Quote"
        onAction={() => onOpenEnquiry('General Hardware Quote')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Futuristic Featured Spotlight Section (Asymmetric) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b0833] via-[#10051F] to-[#0A0214] border border-neon-magenta/30 p-8 sm:p-12 shadow-[0_0_50px_rgba(217,0,255,0.15)] group">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-neon-magenta/15 rounded-full blur-[140px] pointer-events-none group-hover:bg-neon-magenta/25 transition-all duration-700" />
          <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-neon-cyan/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-neon-magenta/20 border border-neon-magenta/40 text-neon-magenta">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Signature Architecture Spotlight</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan block">
                  {featuredProduct.categoryLabel}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                  {featuredProduct.name}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neon-grey leading-relaxed font-light">
                {featuredProduct.description} Hand-tuned with high-airflow cooling, zero-throttle power deliveries, and precision benchmark validation.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {featuredProduct.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-neon-grey font-mono bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <Zap className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleProductWhatsApp(featuredProduct)}
                  type="button"
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Specification</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Spotlight Quote: ${featuredProduct.name}`)}
                  type="button"
                  className="px-6 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-all flex items-center gap-2 shadow-glow-combo"
                >
                  <span>Request Custom Build Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-magenta/50 transition-colors shadow-2xl">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/custom-gaming-pc.jpg';
                  }}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10051F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-[#10051F]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-neon-cyan border border-neon-cyan/40">
                  {featuredProduct.tag}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Hardware Policy Notice */}
        <div className="flex items-center gap-3.5 text-xs text-neon-grey bg-[#160826]/70 p-4 sm:p-5 rounded-2xl border border-white/10">
          <Info className="w-4 h-4 text-neon-cyan flex-shrink-0" />
          <span className="font-light">
            Official hardware showcase. To ensure custom configuration matching exact business workflows and institutional volume tiers, pricing is tailored per system. Connect directly with our West Car Street store for quotes.
          </span>
        </div>

        {/* Filter & Live Search Bar */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Cyber Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-neon-grey/70 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hardware, brands (Dell, Apple, TVS, Seqrite, Kaspersky, RTX)..."
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

            <div className="flex items-center gap-3 text-xs text-neon-grey font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neon-magenta" />
              <span>Showing {filteredProducts.length} hardware lines</span>
            </div>
          </div>

          {/* Neon Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'all'
                ? PRODUCTS_DATA.length
                : PRODUCTS_DATA.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan text-black font-bold shadow-glow-combo'
                      : 'bg-[#160826]/80 text-neon-grey border border-white/10 hover:border-neon-cyan/40 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl overflow-hidden bg-[#160826]/80 border border-white/10 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container */}
                <div className="relative h-64 overflow-hidden bg-black/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/gallery/computer-hardware.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160826] via-transparent to-transparent opacity-80" />
                  
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-[#10051F]/90 backdrop-blur-md text-neon-cyan text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Product Meta */}
                <div className="p-7 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neon-magenta block font-bold">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-neon-cyan transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neon-grey leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-neon-grey/90 font-mono">
                        <Check className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Brand Badges */}
                  {product.brands && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {product.brands.map((b) => (
                        <span
                          key={b}
                          className="text-[10px] font-mono bg-white/[0.04] text-neon-grey px-2.5 py-0.5 rounded-full border border-white/5"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Organized Genuine Software Categorization */}
                  {product.softwareCategories && (
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan block font-bold">
                        Genuine Software Portfolio
                      </span>
                      <div className="space-y-1.5">
                        {product.softwareCategories.map((group, idx) => (
                          <div key={idx} className="bg-white/[0.02] p-2 rounded-xl border border-white/5 space-y-1">
                            <span className="text-[10px] font-mono text-neon-magenta uppercase font-bold block">
                              {group.category}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {group.items.map((item, itemIdx) => (
                                <span key={itemIdx} className="text-[10px] font-mono text-neon-grey/90 bg-white/5 px-2 py-0.5 rounded">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] font-mono text-neon-grey/60 pt-0.5 italic">
                        * Genuine licensed software supplied upon consultation. No unauthorized keys or activation tools.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-7 pt-0 border-t border-white/5 grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => handleProductWhatsApp(product)}
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-500/50 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Product Enquiry: ${product.name}`)}
                  type="button"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-black bg-neon-cyan hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
