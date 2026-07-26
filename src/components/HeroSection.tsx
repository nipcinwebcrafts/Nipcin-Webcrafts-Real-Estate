import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Home, 
  DollarSign, 
  Search,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Currency, FilterState } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface HeroSectionProps {
  currency: Currency;
  onExploreClick: () => void;
  onBookInspectionClick: () => void;
  onWatchVideoClick: () => void;
  onApplyFilter: (filter: Partial<FilterState>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currency,
  onExploreClick,
  onBookInspectionClick,
  onWatchVideoClick,
  onApplyFilter,
}) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [keywordInput, setKeywordInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyFilter({
      location: selectedLocation,
      category: selectedCategory,
      type: selectedType,
      keyword: keywordInput,
    });
    onExploreClick();
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 flex flex-col justify-between overflow-hidden bg-[#121212]">
      
      {/* Background Image with Zoom/Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/images/luxury_ghana_mansion_1784955497389.jpg"
          alt="Luxury Ghana Mansion Estate"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multilayer Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/70"></div>
      </div>

      {/* Decorative Floating Geometric Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0F3D2E]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7A44D]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/90 border border-[#C7A44D]/40 backdrop-blur-md shadow-xl text-xs font-semibold text-[#C7A44D] animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A44D]" />
            <span>Accra & Greater Ghana's Premier Luxury Real Estate Brand</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Discover Luxury Living <br />
            <span className="bg-gradient-to-r from-[#F8F7F3] via-[#E2C172] to-[#C7A44D] bg-clip-text text-transparent italic">
              Without Compromise
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Helping individuals, families, and diaspora investors find verified, high-value luxury homes, penthouses, and prime commercial real estate across Ghana.
          </p>

          {/* CTA Buttons Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            
            <button
              onClick={onExploreClick}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-sm tracking-wide shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBookInspectionClick}
              className="px-7 py-4 rounded-xl bg-[#0F3D2E] text-white font-semibold text-sm border border-[#C7A44D]/40 hover:bg-[#17523F] transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C7A44D]" />
              <span>Book Inspection</span>
            </button>

            <button
              onClick={onWatchVideoClick}
              className="px-5 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-sm transition-all duration-300 flex items-center gap-2.5 border border-white/20 group"
            >
              <div className="w-7 h-7 rounded-full bg-[#C7A44D] text-[#0F3D2E] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Company Video</span>
            </button>

          </div>

        </div>

        {/* Quick Search & Filter Glass Box */}
        <div className="mt-10 lg:mt-14 max-w-5xl">
          <form 
            onSubmit={handleSearchSubmit}
            className="p-4 sm:p-6 rounded-2xl bg-[#121212]/80 backdrop-blur-xl border border-white/15 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#C7A44D]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Property Finder</span>
              </div>
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedType('All')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${selectedType === 'All' ? 'bg-[#C7A44D] text-[#0F3D2E]' : 'text-slate-300'}`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('Buy')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${selectedType === 'Buy' ? 'bg-[#C7A44D] text-[#0F3D2E]' : 'text-slate-300'}`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('Rent')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${selectedType === 'Rent' ? 'bg-[#C7A44D] text-[#0F3D2E]' : 'text-slate-300'}`}
                >
                  Rent
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              {/* Location Select */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C7A44D]" /> Location in Accra
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                >
                  <option value="" className="bg-[#121212]">All Locations</option>
                  <option value="East Legon" className="bg-[#121212]">East Legon, Accra</option>
                  <option value="Cantonments" className="bg-[#121212]">Cantonments, Accra</option>
                  <option value="Airport Residential Area" className="bg-[#121212]">Airport Residential Area</option>
                  <option value="Trasacco Valley" className="bg-[#121212]">Trasacco Valley</option>
                  <option value="Labone" className="bg-[#121212]">Labone, Accra</option>
                  <option value="Aburi Ridge" className="bg-[#121212]">Aburi Ridge</option>
                  <option value="Ridge" className="bg-[#121212]">Ridge Financial District</option>
                </select>
              </div>

              {/* Category Select */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <Home className="w-3 h-3 text-[#C7A44D]" /> Property Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                >
                  <option value="" className="bg-[#121212]">All Categories</option>
                  <option value="Luxury Villas" className="bg-[#121212]">Luxury Villas</option>
                  <option value="Apartments" className="bg-[#121212]">Apartments</option>
                  <option value="Penthouses" className="bg-[#121212]">Penthouses</option>
                  <option value="Commercial Buildings" className="bg-[#121212]">Commercial Buildings</option>
                  <option value="Lands" className="bg-[#121212]">Lands</option>
                  <option value="Short Stay Apartments" className="bg-[#121212]">Short Stay Apartments</option>
                </select>
              </div>

              {/* Keyword Search */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <Building className="w-3 h-3 text-[#C7A44D]" /> Keyword / Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pool, Garden, Manor"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs tracking-wide shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Listings</span>
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>

      {/* Floating Animated Statistics Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0F3D2E]/60 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          <div className="p-3 text-center border-r border-white/10 last:border-0">
            <div className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#C7A44D]">
              {COMPANY_INFO.stats.propertiesSold}
            </div>
            <div className="text-[11px] font-medium text-slate-300 mt-0.5">
              Luxury Properties Sold
            </div>
          </div>

          <div className="p-3 text-center border-r border-white/10 last:border-0">
            <div className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#C7A44D]">
              {COMPANY_INFO.stats.happyClients}
            </div>
            <div className="text-[11px] font-medium text-slate-300 mt-0.5">
              Satisfied High-Net-Worth Clients
            </div>
          </div>

          <div className="p-3 text-center border-r border-white/10 last:border-0">
            <div className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#C7A44D]">
              {COMPANY_INFO.stats.yearsExperience}
            </div>
            <div className="text-[11px] font-medium text-slate-300 mt-0.5">
              Years Ghana Market Excellence
            </div>
          </div>

          <div className="p-3 text-center">
            <div className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#C7A44D]">
              {COMPANY_INFO.stats.customerSatisfaction}
            </div>
            <div className="text-[11px] font-medium text-slate-300 mt-0.5">
              Verified Title & Client Rating
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
