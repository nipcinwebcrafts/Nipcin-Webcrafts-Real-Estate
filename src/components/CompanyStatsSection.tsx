import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ThemeMode } from '../types';
import { Building2, Home, Users, MapPin, Building, Sparkles } from 'lucide-react';

interface CompanyStatsSectionProps {
  theme: ThemeMode;
}

export const CompanyStatsSection: React.FC<CompanyStatsSectionProps> = ({ theme }) => {
  const statsList = [
    { label: 'Properties Sold', value: COMPANY_INFO.stats.propertiesSold, icon: Home },
    { label: 'Properties Available', value: COMPANY_INFO.stats.propertiesAvailable, icon: Building2 },
    { label: 'Happy Clients', value: COMPANY_INFO.stats.happyClients, icon: Users },
    { label: 'Cities & Regions Covered', value: COMPANY_INFO.stats.citiesCovered, icon: MapPin },
    { label: 'Luxury Apartments', value: COMPANY_INFO.stats.luxuryApartments, icon: Sparkles },
    { label: 'Commercial Properties', value: COMPANY_INFO.stats.commercialProperties, icon: Building },
  ];

  return (
    <section className={`py-16 transition-colors duration-300 relative border-t ${
      theme === 'dark' ? 'bg-[#0F3D2E] text-white border-white/10' : 'bg-[#0F3D2E] text-white border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {statsList.map((st) => {
            const IconComp = st.icon;
            return (
              <div 
                key={st.label} 
                className="p-5 rounded-2xl bg-black/20 border border-[#C7A44D]/30 backdrop-blur-md space-y-2 hover:border-[#C7A44D] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C7A44D]/20 text-[#C7A44D] flex items-center justify-center mx-auto">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="font-['Playfair_Display',serif] text-3xl font-bold text-[#C7A44D]">
                  {st.value}
                </div>
                <div className="text-[11px] font-medium text-emerald-100 uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
