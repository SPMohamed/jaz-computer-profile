import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PageId } from '../components/common/Header';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, ProductItem } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Check, 
  Filter, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  Info,
  Sparkles
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
        item.features.some(f => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductWhatsApp = (item: ProductItem) => {
    const text = encodeURIComponent(
      `Hello JAZ COMPUTER, I am interested in *${item.name}* (${item.categoryLabel}). Please share current pricing and availability in Tenkasi.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Hero Header */}
      <PageHeader
        title="Hardware & Software Showcase"
        subtitle="Branded Desktops, Custom High-End Rigs, Commercial Laptops, LED TVs (24&quot; to 100&quot;), Licensed Software & Peripherals in Tenkasi."
        tamilSubtitle="கணினி பாகங்கள், லேப்டாப்கள், பிரிண்டர்கள் மற்றும் அசல் மென்பொருள் உரிமங்கள்."
        badge="Catalogue Showcase"
        currentPage="products"
        onNavigate={onNavigate}
        onOpenEnquiry={() => onOpenEnquiry('Products General Catalogue')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Important Phase 1 Non-Ecommerce Notice */}
        <div className="bg-brand-blue/10 dark:bg-brand-blue/15 border border-brand-blue/30 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-brand-silver">
          <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white font-semibold block">
              Official Product Showcase (Phase 1):
            </strong>
            <p>
              To ensure customized guidance, bulk institutional discounts, and verified hardware compatibility, we do not operate an automated shopping cart. Click <strong>&quot;Enquire Now&quot;</strong> on any product to connect with our Tenkasi store for real-time pricing and delivery details.
            </p>
          </div>
        </div>

        {/* Filter Toolbar: Search Bar + Category Pills */}
        <div className="space-y-4 bg-white dark:bg-brand-navy-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, brand (Dell, HP, Quick Heal), or specs..."
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {PRODUCT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm shadow-brand-blue/30 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-silver hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>
            Showing <strong>{filteredProducts.length}</strong> product lines
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-brand-blue hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-brand-navy-card rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
            <Layers className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display">
              No matching products found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We frequently source custom components and specialized IT equipment on request. Please contact us directly for specific hardware inquiries.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/10"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-brand-navy-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Product Image Banner */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-blue/40 shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-white/95 dark:bg-brand-navy-dark/95 backdrop-blur-sm text-slate-800 dark:text-brand-silver text-[10px] font-bold px-2.5 py-0.5 rounded shadow-sm">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Product Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors leading-snug">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-brand-silver">
                          <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brands Available */}
                    {product.brands && product.brands.length > 0 && (
                      <div className="pt-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                          Verified Brands:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.brands.map((b) => (
                            <span
                              key={b}
                              className="text-[11px] font-medium bg-slate-100 dark:bg-brand-navy text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions & Enquiry Highlight */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{product.inquiryHighlight}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleProductWhatsApp(product)}
                        type="button"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        onClick={() => onOpenEnquiry(`Product Enquiry: ${product.name}`)}
                        type="button"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors shadow-glow-blue"
                      >
                        <span>Enquire</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Configuration Consultation Callout */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-card to-brand-navy text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Custom Computer Assembly
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Need a bespoke workstation configured to your exact budget?
            </h3>
            <p className="text-brand-silver text-sm max-w-xl">
              Talk directly with our system architects in Tenkasi for custom CAD, 3D animation, gaming, or corporate multi-display rigs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 border border-slate-700 text-white transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Call Technician</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('Custom Assembled PC Specification Request')}
              type="button"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue hover:bg-brand-blue-hover text-white shadow-glow-blue transition-all"
            >
              Get Custom Rig Spec
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
