import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const quickPrompts = [
    'I would like to schedule a property inspection.',
    'I want to inquire about East Legon Luxury Villas.',
    'I am a Diaspora investor seeking high-yield properties in Accra.',
    'Please send me details on commercial real estate options.'
  ];

  const handleSendPrompt = (promptText: string) => {
    const encoded = encodeURIComponent(`Hello Nipcin Webcrafts! ${promptText}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip Popup */}
      {showTooltip && !isOpen && (
        <div className="mb-3 px-3.5 py-2 rounded-xl bg-[#0F3D2E] text-white text-xs font-semibold shadow-2xl border border-[#C7A44D]/40 flex items-center gap-2 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-[#C7A44D]" />
          <span>Chat with our Property Consultant</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-[#121212] border border-[#C7A44D]/40 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-[#0F3D2E] p-4 text-white flex items-center justify-between border-b border-[#C7A44D]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="font-bold text-xs">Nipcin Webcrafts WhatsApp Desk</div>
                <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Online • Newtown, Accra</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#1A1D1A]">
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Welcome! How can our Newtown real estate consultants assist your property search today?
            </p>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-400">Quick Prompt Options:</span>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(p)}
                  className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-[#C7A44D]/20 hover:border-[#C7A44D] border border-white/10 text-xs text-slate-200 transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{p}</span>
                  <Send className="w-3.5 h-3.5 text-[#C7A44D] shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nipcin%20Webcrafts,%20I%20have%20an%20inquiry%20regarding%20luxury%20real%20estate%20in%20Ghana.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-colors mt-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open Direct Chat (+233 599 025 003)</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Main Launcher Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.5)] border-2 border-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
