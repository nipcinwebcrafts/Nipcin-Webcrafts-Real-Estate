import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { ThemeMode } from '../types';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  theme: ThemeMode;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#121212] text-white border-white/10' : 'bg-[#F8F7F3] text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Clear Answers For Buyers & Investors
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-lg mx-auto">
            Everything you need to know about purchasing real estate in Ghana, remote diaspora transactions, and title verification.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  theme === 'dark'
                    ? isOpen 
                      ? 'bg-[#1A1D1A] border-[#C7A44D]' 
                      : 'bg-[#121212] border-white/10 hover:border-white/20'
                    : isOpen 
                      ? 'bg-white border-[#C7A44D] shadow-lg' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Playfair_Display',serif] font-bold text-base sm:text-lg text-slate-100 focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#0F3D2E] text-[#C7A44D] font-mono shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#C7A44D] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 animate-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
