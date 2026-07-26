import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';
import { ThemeMode } from '../types';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section 
      id="testimonials" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#0E110F] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted By Investors & Executives
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Hear from Ghanaian diaspora buyers, corporate directors, and property developers who placed their trust in Nipcin Webcrafts.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative rounded-3xl p-8 sm:p-12 border shadow-2xl flex flex-col md:flex-row items-center gap-8 ${
            theme === 'dark' ? 'bg-[#121212] border-white/15' : 'bg-white border-slate-200'
          }`}>
            
            {/* Avatar & Photo */}
            <div className="shrink-0 relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#C7A44D] shadow-xl">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-[#0F3D2E] border border-[#C7A44D] flex items-center justify-center text-[#C7A44D] shadow-lg">
                <Quote className="w-5 h-5" />
              </div>
            </div>

            {/* Quote Body */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C7A44D] text-[#C7A44D]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-['Playfair_Display',serif] text-lg sm:text-xl font-normal italic text-slate-200 leading-relaxed">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Metadata */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="font-bold text-base text-white">{activeTestimonial.name}</h4>
                <div className="text-xs text-[#C7A44D] font-medium">{activeTestimonial.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{activeTestimonial.location}</div>
              </div>

            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? 'w-8 bg-[#C7A44D]' : 'w-2 bg-white/20'
                  }`}
                ></button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 hover:bg-[#C7A44D] hover:text-[#0F3D2E] text-white transition-colors border border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-[#C7A44D] hover:text-[#0F3D2E] text-white transition-colors border border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
