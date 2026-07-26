import React, { useState } from 'react';
import { Search, X, MapPin, Home, DollarSign, SlidersHorizontal } from 'lucide-react';
import { FilterState, Currency } from '../types';

interface PropertySearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeFilter: FilterState;
  onApplyFilter: (filter: Partial<FilterState>) => void;
}

export const PropertySearchModal: React.FC<PropertySearchModalProps> = ({
  isOpen,
  onClose,
  activeFilter,
  onApplyFilter,
}) => {
  if (!isOpen) return null;

  const [keyword, setKeyword] = useState(activeFilter.keyword);
  const [location, setLocation] = useState(activeFilter.location);
  const [category, setCategory] = useState(activeFilter.category);
  const [type, setType] = useState(activeFilter.type);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyFilter({ keyword, location, category, type });
    onClose();

    const propSec = document.getElementById('properties');
    propSec?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#C7A44D]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[#C7A44D]" />
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold">Search Real Estate Database</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-300">Search Term / Keyword</label>
            <input
              type="text"
              placeholder="e.g. Infinity Pool, Cantonments Penthouse, Villa"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Listing Status</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
              >
                <option value="All" className="bg-[#121212]">All Statuses</option>
                <option value="Buy" className="bg-[#121212]">For Sale (Buy)</option>
                <option value="Rent" className="bg-[#121212]">For Rent</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Accra Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
              >
                <option value="" className="bg-[#121212]">All Locations</option>
                <option value="East Legon" className="bg-[#121212]">East Legon, Accra</option>
                <option value="Cantonments" className="bg-[#121212]">Cantonments, Accra</option>
                <option value="Airport Residential Area" className="bg-[#121212]">Airport Residential Area</option>
                <option value="Trasacco Valley" className="bg-[#121212]">Trasacco Valley</option>
                <option value="Labone" className="bg-[#121212]">Labone, Accra</option>
                <option value="Aburi Ridge" className="bg-[#121212]">Aburi Ridge</option>
              </select>
            </div>

          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-300">Property Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
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

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setKeyword('');
                setLocation('');
                setCategory('');
                setType('All');
              }}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold"
            >
              Reset
            </button>

            <button
              type="submit"
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs shadow-xl flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Filter & Show Results</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};
