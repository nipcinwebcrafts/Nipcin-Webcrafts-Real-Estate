import React from 'react';
import { 
  Home, 
  Building2, 
  Crown, 
  Building, 
  Trees, 
  KeyRound, 
  Briefcase, 
  TrendingUp, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/companyData';
import { FilterState, ThemeMode } from '../types';

interface PropertyCategoriesSectionProps {
  theme: ThemeMode;
  onSelectCategory: (categoryName: string) => void;
}

export const PropertyCategoriesSection: React.FC<PropertyCategoriesSectionProps> = ({
  theme,
  onSelectCategory,
}) => {

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-[#C7A44D]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#C7A44D]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#C7A44D]" />;
      case 'Building': return <Building className="w-6 h-6 text-[#C7A44D]" />;
      case 'Trees': return <Trees className="w-6 h-6 text-[#C7A44D]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#C7A44D]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C7A44D]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#C7A44D]" />;
      default: return <Home className="w-6 h-6 text-[#C7A44D]" />;
    }
  };

  return (
    <section 
      id="categories" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#0E110F] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Market Segments</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Explore By Property Category
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Discover tailored real estate offerings designed for private homeowners, diaspora investors, and multinational corporate entities in Ghana.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`group relative rounded-2xl overflow-hidden p-6 cursor-pointer border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-64 ${
                theme === 'dark' 
                  ? 'bg-[#121212]/90 border-white/10 hover:border-[#C7A44D]' 
                  : 'bg-white border-slate-200 hover:border-[#C7A44D] shadow-sm hover:shadow-xl'
              }`}
            >
              
              {/* Card Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.bgImage}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover object-center opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>

              {/* Top Row: Icon & Count Pill */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E] border border-[#C7A44D]/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[#C7A44D] text-xs font-bold border border-white/10">
                  {cat.count}+ Available
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white group-hover:text-[#C7A44D] transition-colors">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A44D] group-hover:text-[#0F3D2E] text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-light line-clamp-2">
                  {cat.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
