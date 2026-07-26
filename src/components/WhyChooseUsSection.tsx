import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  Compass, 
  Lock, 
  BarChart3, 
  CreditCard, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { ThemeMode } from '../types';

interface WhyChooseUsSectionProps {
  theme: ThemeMode;
  onBookInspectionClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ theme, onBookInspectionClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C7A44D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C7A44D]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C7A44D]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C7A44D]" />;
      case 'Lock': return <Lock className="w-6 h-6 text-[#C7A44D]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#C7A44D]" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-[#C7A44D]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#C7A44D]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C7A44D]" />;
    }
  };

  return (
    <section 
      id="why-us" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#121212] text-white border-white/10' : 'bg-[#F8F7F3] text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Nipcin Distinction</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Choose Nipcin Webcrafts
          </h2>
          <p className="text-slate-400 text-sm font-light">
            We redefine Ghana’s real estate standards through verified titles, institutional-grade escrow, and bespoke diaspora client care.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                theme === 'dark'
                  ? 'bg-[#1A1D1A]/80 border-white/10 hover:border-[#C7A44D] hover:shadow-[0_10px_30px_rgba(199,164,77,0.15)]'
                  : 'bg-white border-slate-200 hover:border-[#C7A44D] shadow-sm hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E] border border-[#C7A44D]/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-slate-100 group-hover:text-[#C7A44D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C7A44D]">
                <span className="font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Standard
                </span>
                <span className="text-slate-500 font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0F3D2E] via-[#17523F] to-[#0F3D2E] border border-[#C7A44D]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-white">
              Ready to Explore Verified Properties in Ghana?
            </h3>
            <p className="text-xs text-emerald-100 font-light">
              Schedule a physical site visit in Newtown/East Legon or a live 4K virtual inspection with our team.
            </p>
          </div>
          <button
            onClick={onBookInspectionClick}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs shadow-xl hover:brightness-110 transition-all"
          >
            Schedule Inspection Now
          </button>
        </div>

      </div>
    </section>
  );
};
