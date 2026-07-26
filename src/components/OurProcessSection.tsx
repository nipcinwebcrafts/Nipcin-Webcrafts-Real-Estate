import React from 'react';
import { 
  Search, 
  CalendarCheck, 
  Users, 
  FileText, 
  Key, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';
import { ThemeMode } from '../types';

interface OurProcessSectionProps {
  theme: ThemeMode;
  onBookInspectionClick: () => void;
}

export const OurProcessSection: React.FC<OurProcessSectionProps> = ({ theme, onBookInspectionClick }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-[#C7A44D]" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-[#C7A44D]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#C7A44D]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#C7A44D]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#C7A44D]" />;
      default: return <Search className="w-5 h-5 text-[#C7A44D]" />;
    }
  };

  return (
    <section 
      id="process" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#121212] text-white border-white/10' : 'bg-[#F8F7F3] text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Acquisition</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Our 5-Step Process
          </h2>
          <p className="text-slate-400 text-sm font-light">
            From initial property discovery to key hand-over, our Newtown team guides you with total legal clarity and VIP service.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative group ${
                theme === 'dark'
                  ? 'bg-[#1A1D1A]/90 border-white/10 hover:border-[#C7A44D]'
                  : 'bg-white border-slate-200 hover:border-[#C7A44D] shadow-sm hover:shadow-xl'
              }`}
            >
              
              {/* Top Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Playfair_Display',serif] text-3xl font-bold text-[#C7A44D]">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] border border-[#C7A44D]/30 flex items-center justify-center">
                  {getStepIcon(step.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1">
                <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-slate-100 group-hover:text-[#C7A44D] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector for Desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#C7A44D]">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Bottom Process Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookInspectionClick}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs tracking-wider shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Start Step 1: Browse Listings & Book Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
