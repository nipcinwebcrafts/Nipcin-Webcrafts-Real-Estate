import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Crown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ThemeMode } from '../types';

interface AboutUsSectionProps {
  theme: ThemeMode;
  onBookInspectionClick: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ theme, onBookInspectionClick }) => {
  return (
    <section 
      id="about" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#0E110F] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/nipcin_luxury_office_1784955521897.jpg"
                alt="Nipcin Webcrafts Luxury Advisory Office in Newtown, Accra"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-[#C7A44D]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#C7A44D] uppercase tracking-wider">Accra Headquarters</div>
                  <div className="text-sm font-semibold text-white">{COMPANY_INFO.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Direct Line</div>
                  <div className="text-xs font-bold text-white">{COMPANY_INFO.phone}</div>
                </div>
              </div>
            </div>

            {/* Floating Gold Experience Badge */}
            <div className="absolute -top-6 -left-6 p-5 rounded-2xl bg-[#0F3D2E] border-2 border-[#C7A44D] shadow-2xl hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-[#C7A44D]" />
              <div>
                <div className="font-['Playfair_Display',serif] text-2xl font-bold text-white">10+ Years</div>
                <div className="text-[10px] text-emerald-200 uppercase tracking-widest font-semibold">Excellence in Ghana</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              <span>About Nipcin Webcrafts</span>
            </div>

            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Ghana’s Premier Agency For <span className="text-[#C7A44D] italic">Luxury Real Estate</span> & Investments
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Headquartered in Newtown, Accra, <strong className="text-white font-semibold">Nipcin Webcrafts</strong> is a distinguished real estate brand dedicated to curating Ghana’s most prestigious residential mansions, architectural penthouses, and commercial developments.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              We bridge the gap for diaspora Ghanaians, corporate executives, and international buyers seeking unencumbered, litigation-free properties backed by rigorous Lands Commission title audits and transparent escrow structures.
            </p>

            {/* Checkmark Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '100% Lands Commission Title Verified',
                'Dedicated Diaspora Investment Desk',
                'Institutional Escrow Fund Safeguards',
                'Comprehensive After-Sales Management',
                'Custom Developer Payment Structures',
                'Full Legal Indemnity Clearances'
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A44D] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Contact Details Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C7A44D]" />
                <span className="text-slate-300">{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C7A44D]" />
                <span className="text-slate-300">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C7A44D]" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C7A44D]" />
                <span className="text-slate-300">Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onBookInspectionClick}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs tracking-wide shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Book A Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
