import React from 'react';
import { InspectionBooking } from '../types';
import { X, Printer, Crown, CheckCircle2, Calendar, MapPin, User, Phone, Mail, QrCode } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface InspectionSlipModalProps {
  booking: InspectionBooking | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InspectionSlipModal: React.FC<InspectionSlipModalProps> = ({ booking, isOpen, onClose }) => {
  if (!isOpen || !booking) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-amber-300">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-[#0F3D2E] px-6 py-3 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-[#C7A44D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#C7A44D]">Official Inspection Confirmation Slip</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#C7A44D] hover:text-[#0F3D2E] text-white text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>
            <button onClick={onClose} className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600 text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Slip Container */}
        <div className="p-8 space-y-6 bg-[#FAF8F5]">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#0F3D2E] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E] text-[#C7A44D] flex items-center justify-center font-bold shadow-md p-1 overflow-hidden">
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt={COMPANY_INFO.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-['Playfair_Display',serif] text-xl font-bold text-[#0F3D2E]">
                  Nipcin Webcrafts
                </h2>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#C7A44D]">
                  Luxury Real Estate • Newtown, Accra
                </div>
              </div>
            </div>

            <div className="text-right font-mono text-xs">
              <div className="text-[10px] text-slate-500 uppercase">REF NUMBER</div>
              <div className="font-bold text-[#0F3D2E] text-sm">{booking.referenceCode}</div>
            </div>
          </div>

          {/* Status Banner */}
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>STATUS: CONFIRMED FOR VIP SITE INSPECTION</span>
            </span>
            <span className="text-[10px] text-slate-500">Issued: {booking.createdAt}</span>
          </div>

          {/* Details Table */}
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">CLIENT NAME</div>
                <div className="font-bold text-slate-800">{booking.fullName}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">PHONE</div>
                <div className="font-semibold text-slate-800">{booking.phone}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-white border border-slate-200">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">SCHEDULED DATE</div>
                <div className="font-bold text-slate-800">{booking.preferredDate}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">SCHEDULED TIME</div>
                <div className="font-bold text-slate-800">{booking.preferredTime} GMT</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">PROPERTY / LOCATION</div>
              <div className="font-bold text-[#0F3D2E]">
                {booking.propertyTitle ? booking.propertyTitle : `${booking.propertyType} in ${booking.propertyLocation}`}
              </div>
            </div>
          </div>

          {/* QR Code & Authority Stamp */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-slate-100 border border-slate-300 rounded-lg p-1.5 flex items-center justify-center shrink-0">
                <QrCode className="w-12 h-12 text-[#0F3D2E]" />
              </div>
              <div className="space-y-0.5 text-[11px]">
                <div className="font-bold text-slate-800">Scan to Verify Ticket</div>
                <div className="text-slate-500">{COMPANY_INFO.address}</div>
                <div className="text-[#C7A44D] font-medium">{COMPANY_INFO.phone}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-serif italic text-slate-400 text-sm">Nipcin Legal Desk</div>
              <div className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Authorized Stamp</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
