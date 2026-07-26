import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  Calendar,
  Building2,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { Property, Currency, FilterState, ThemeMode } from '../types';
import { USD_TO_GHS_RATE } from '../data/propertiesData';

interface FeaturedPropertiesSectionProps {
  properties: Property[];
  currency: Currency;
  theme: ThemeMode;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onBookInspectionForProperty: (property: Property) => void;
  activeFilter: FilterState;
  onFilterChange: (newFilter: Partial<FilterState>) => void;
}

export const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({
  properties,
  currency,
  theme,
  wishlistIds,
  onToggleWishlist,
  onSelectProperty,
  onBookInspectionForProperty,
  activeFilter,
  onFilterChange,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Buy' | 'Rent' | 'Featured' | 'Penthouses'>('All');

  // Format Price based on active currency
  const formatPrice = (prop: Property) => {
    if (currency === 'GHS') {
      return `₵ ${prop.priceGHS.toLocaleString()}`;
    }
    return `$ ${prop.priceUSD.toLocaleString()}`;
  };

  // Filter properties according to tab & active filter
  const filteredProperties = properties.filter((prop) => {
    // Tab Filter
    if (activeTab === 'Buy' && prop.type !== 'Buy') return false;
    if (activeTab === 'Rent' && prop.type !== 'Rent') return false;
    if (activeTab === 'Featured' && !prop.featured) return false;
    if (activeTab === 'Penthouses' && prop.category !== 'Penthouses') return false;

    // Search Bar Filters
    if (activeFilter?.location && (!prop.location || !prop.location.toLowerCase().includes(activeFilter.location.toLowerCase()))) {
      return false;
    }
    if (activeFilter?.category && prop.category !== activeFilter.category) {
      return false;
    }
    if (activeFilter?.type && activeFilter.type !== 'All' && prop.type !== activeFilter.type) {
      return false;
    }
    if (activeFilter?.keyword) {
      const kw = activeFilter.keyword.toLowerCase();
      const matchTitle = prop.title ? prop.title.toLowerCase().includes(kw) : false;
      const matchDesc = prop.description ? prop.description.toLowerCase().includes(kw) : false;
      const matchLoc = prop.location ? prop.location.toLowerCase().includes(kw) : false;
      if (!matchTitle && !matchDesc && !matchLoc) return false;
    }

    return true;
  });

  return (
    <section 
      id="properties" 
      className={`py-20 transition-colors duration-300 relative ${
        theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-[#F8F7F3] text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A44D]" />
              <span>Exclusive Portfolio</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Luxury Properties
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl font-light">
              Handpicked, verified architectural mansions, skyline penthouses, and prime commercial plots across Newtown, East Legon, Cantonments, and Airport Residential Area.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0F3D2E]/20 border border-white/10">
            {(['All', 'Buy', 'Rent', 'Featured', 'Penthouses'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#C7A44D] text-[#0F3D2E] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'All' ? 'All Listings' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white/5 border border-white/10 p-8 space-y-4">
            <SlidersHorizontal className="w-12 h-12 text-[#C7A44D] mx-auto opacity-60" />
            <h3 className="text-xl font-semibold text-slate-300">No properties matched your search criteria</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your location, budget, or property category filters to explore more listings.
            </p>
            <button
              onClick={() => onFilterChange({ keyword: '', location: '', category: '', type: 'All' })}
              className="px-5 py-2.5 rounded-xl bg-[#C7A44D] text-[#0F3D2E] text-xs font-bold shadow-md hover:brightness-110 transition-all"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => {
              const isWishlisted = wishlistIds.includes(prop.id);

              return (
                <div
                  key={prop.id}
                  className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                    theme === 'dark'
                      ? 'bg-[#1A1D1A]/90 border-white/10 hover:border-[#C7A44D]/50 hover:shadow-[0_20px_50px_rgba(15,61,46,0.4)]'
                      : 'bg-white border-slate-200 shadow-md hover:border-[#C7A44D]/60 hover:shadow-2xl'
                  }`}
                >
                  
                  {/* Top Image Box */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={prop.heroImage}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                    {/* Badges Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md ${
                        prop.type === 'Buy' ? 'bg-[#0F3D2E] text-[#C7A44D] border border-[#C7A44D]/30' : 'bg-emerald-600 text-white'
                      }`}>
                        For {prop.type}
                      </span>
                      {prop.featured && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#C7A44D] text-[#0F3D2E] shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => onToggleWishlist(prop.id)}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:scale-110 transition-all shadow-xl"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : 'text-white'}`} />
                    </button>

                    {/* Verified Title Status Pill */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-emerald-300 font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Title Verified</span>
                      </span>
                      <span className="text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px]">
                        {prop.category}
                      </span>
                    </div>

                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Price Tag */}
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="font-['Playfair_Display',serif] text-2xl font-bold text-[#C7A44D]">
                          {formatPrice(prop)}
                          {prop.type === 'Rent' && <span className="text-xs font-normal text-slate-400"> / month</span>}
                        </div>
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                          {currency === 'USD' ? 'USD Dollar Rate' : 'Ghanaian Cedi'}
                        </span>
                      </div>

                      {/* Property Title */}
                      <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-slate-100 group-hover:text-[#C7A44D] transition-colors line-clamp-1">
                        {prop.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C7A44D] shrink-0" />
                        <span className="line-clamp-1">{prop.address}</span>
                      </div>
                    </div>

                    {/* Key Specifications Row */}
                    <div className="py-3 px-3 rounded-xl bg-white/5 border border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                      {prop.bedrooms > 0 ? (
                        <div className="flex flex-col items-center">
                          <span className="text-slate-400 flex items-center gap-1 text-[11px]"><Bed className="w-3.5 h-3.5 text-[#C7A44D]" /> Beds</span>
                          <span className="font-bold text-slate-200">{prop.bedrooms}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <span className="text-slate-400 text-[11px]">Category</span>
                          <span className="font-bold text-slate-200">{prop.category}</span>
                        </div>
                      )}

                      {prop.bathrooms > 0 ? (
                        <div className="flex flex-col items-center border-x border-white/10">
                          <span className="text-slate-400 flex items-center gap-1 text-[11px]"><Bath className="w-3.5 h-3.5 text-[#C7A44D]" /> Baths</span>
                          <span className="font-bold text-slate-200">{prop.bathrooms}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center border-x border-white/10">
                          <span className="text-slate-400 text-[11px]">Type</span>
                          <span className="font-bold text-slate-200">{prop.type}</span>
                        </div>
                      )}

                      <div className="flex flex-col items-center">
                        <span className="text-slate-400 flex items-center gap-1 text-[11px]"><Maximize2 className="w-3.5 h-3.5 text-[#C7A44D]" /> Area</span>
                        <span className="font-bold text-slate-200">{prop.sqm} m²</span>
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#0F3D2E] hover:bg-[#17523F] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-[#C7A44D]/30"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C7A44D]" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onBookInspectionForProperty(prop)}
                        title="Book Inspection for this property"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
