import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] flex flex-col items-center justify-center text-white transition-opacity duration-500">
      <div className="relative space-y-4 text-center animate-pulse">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0F3D2E] via-[#17523F] to-[#C7A44D] p-0.5 shadow-2xl mx-auto flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center p-1.5 overflow-hidden">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt={COMPANY_INFO.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight">
            Nipcin <span className="text-[#C7A44D] italic">Webcrafts</span>
          </h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-medium mt-1">
            Luxury Real Estate • Newtown, Accra
          </p>
        </div>

        <div className="w-32 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div className="w-1/2 h-full bg-[#C7A44D] rounded-full animate-in slide-in-from-left duration-1000 repeat-infinite"></div>
        </div>
      </div>
    </div>
  );
};
