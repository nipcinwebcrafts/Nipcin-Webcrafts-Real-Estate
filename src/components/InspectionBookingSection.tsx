import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Building, 
  DollarSign, 
  Send, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { InspectionBooking, ThemeMode, Property } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { submitToFormspree } from '../utils/formspree';

interface InspectionBookingSectionProps {
  theme: ThemeMode;
  preSelectedProperty?: Property | null;
  onBookingSubmitted: (booking: InspectionBooking) => void;
}

export const InspectionBookingSection: React.FC<InspectionBookingSectionProps> = ({
  theme,
  preSelectedProperty,
  onBookingSubmitted,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [propertyType, setPropertyType] = useState(preSelectedProperty ? preSelectedProperty.category : 'Luxury Villas');
  const [propertyLocation, setPropertyLocation] = useState(preSelectedProperty ? preSelectedProperty.location : 'East Legon, Accra');
  const [budgetRange, setBudgetRange] = useState('$500,000 - $1,000,000');
  const [specialMessage, setSpecialMessage] = useState('');

  const [submittedBooking, setSubmittedBooking] = useState<InspectionBooking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refCode = `NW-INSP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    await submitToFormspree({
      _subject: `New Property Inspection Booking (${refCode}) - ${fullName}`,
      form_type: 'Property Inspection Booking',
      reference_code: refCode,
      full_name: fullName,
      phone_number: phoneNumber,
      email_address: emailAddress,
      preferred_date: preferredDate || new Date().toISOString().split('T')[0],
      preferred_time: preferredTime,
      property_type: propertyType,
      property_location: propertyLocation,
      budget_range: budgetRange,
      property_title: preSelectedProperty ? preSelectedProperty.title : 'General Listing',
      special_message: specialMessage,
      submitted_at: new Date().toISOString()
    });

    const newBooking: InspectionBooking = {
      id: `insp-${Date.now()}`,
      fullName,
      phone: phoneNumber,
      email: emailAddress,
      preferredDate: preferredDate || new Date().toISOString().split('T')[0],
      preferredTime,
      propertyType,
      propertyLocation,
      budget: budgetRange,
      message: specialMessage,
      status: 'Confirmed',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      propertyTitle: preSelectedProperty ? preSelectedProperty.title : undefined,
      referenceCode: refCode
    };

    setSubmittedBooking(newBooking);
    onBookingSubmitted(newBooking);
    setIsSubmitting(false);
  };

  return (
    <section 
      id="inspection" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#121212] text-white border-white/10' : 'bg-[#F8F7F3] text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>VIP Site Visit & Virtual Tour</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Book Property Inspection
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
            Schedule a private chauffeured tour in Accra or a live 4K interactive virtual walkthrough with our Newtown real estate consultants.
          </p>
        </div>

        {/* Card Box */}
        <div className={`rounded-2xl p-6 sm:p-10 border shadow-2xl ${
          theme === 'dark' ? 'bg-[#1A1D1A] border-white/15' : 'bg-white border-slate-200'
        }`}>

          {submittedBooking ? (
            <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#C7A44D]">
                  Inspection Request Sent Successfully
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
                  Thank you, <strong className="text-white">{submittedBooking.fullName}</strong>! Your property inspection request has been logged under Reference Code <span className="font-mono text-[#C7A44D] font-bold">{submittedBooking.referenceCode}</span>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">{submittedBooking.propertyLocation}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-semibold text-white">{submittedBooking.preferredDate} at {submittedBooking.preferredTime}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Property Type:</span>
                  <span className="font-semibold text-white">{submittedBooking.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Consultant Desk:</span>
                  <span className="font-semibold text-emerald-400">Newtown, Accra HQ</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nipcin%20Webcrafts,%20I%20just%20submitted%20an%20Inspection%20Request%20(Ref:%20${submittedBooking.referenceCode}).%20Please%20confirm%20my%20schedule.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm On WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmittedBooking(null)}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-xs transition-all border border-white/10"
                >
                  Book Another Inspection
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {preSelectedProperty && (
                <div className="p-3 rounded-xl bg-[#0F3D2E]/80 border border-[#C7A44D]/40 text-xs text-slate-200 flex items-center justify-between">
                  <span>Inspecting: <strong className="text-[#C7A44D]">{preSelectedProperty.title}</strong></span>
                  <span className="text-[10px] uppercase font-bold text-emerald-300">{preSelectedProperty.location}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C7A44D]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C7A44D]" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +233 24 123 4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C7A44D]" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. kwame@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C7A44D]" /> Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C7A44D]" /> Preferred Time *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  >
                    <option value="09:00 AM" className="bg-[#121212]">09:00 AM GMT</option>
                    <option value="11:00 AM" className="bg-[#121212]">11:00 AM GMT</option>
                    <option value="02:00 PM" className="bg-[#121212]">02:00 PM GMT</option>
                    <option value="04:00 PM" className="bg-[#121212]">04:00 PM GMT</option>
                  </select>
                </div>

                {/* Property Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#C7A44D]" /> Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  >
                    <option value="Luxury Villas" className="bg-[#121212]">Luxury Villas</option>
                    <option value="Apartments" className="bg-[#121212]">Apartments</option>
                    <option value="Penthouses" className="bg-[#121212]">Penthouses</option>
                    <option value="Commercial Buildings" className="bg-[#121212]">Commercial Buildings</option>
                    <option value="Lands" className="bg-[#121212]">Lands</option>
                    <option value="Short Stay Apartments" className="bg-[#121212]">Short Stay Apartments</option>
                  </select>
                </div>

                {/* Property Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C7A44D]" /> Location Preference
                  </label>
                  <select
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  >
                    <option value="East Legon, Accra" className="bg-[#121212]">East Legon, Accra</option>
                    <option value="Cantonments, Accra" className="bg-[#121212]">Cantonments, Accra</option>
                    <option value="Airport Residential Area" className="bg-[#121212]">Airport Residential Area</option>
                    <option value="Trasacco Valley" className="bg-[#121212]">Trasacco Valley</option>
                    <option value="Labone, Accra" className="bg-[#121212]">Labone, Accra</option>
                    <option value="Aburi Ridge" className="bg-[#121212]">Aburi Ridge</option>
                    <option value="Newtown, Accra" className="bg-[#121212]">Newtown, Accra</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5 sm:col-span-2 lg:col-span-2">
                  <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#C7A44D]" /> Target Investment Budget
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  >
                    <option value="Under $250,000" className="bg-[#121212]">Under $250,000 USD</option>
                    <option value="$250,000 - $500,000" className="bg-[#121212]">$250,000 - $500,000 USD</option>
                    <option value="$500,000 - $1,000,000" className="bg-[#121212]">$500,000 - $1,000,000 USD</option>
                    <option value="$1,000,000 - $3,000,000" className="bg-[#121212]">$1,000,000 - $3,000,000 USD</option>
                    <option value="$3,000,000+" className="bg-[#121212]">$3,000,000+ USD (Commercial/Enclave)</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C7A44D]" /> Special Requests / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention if you require chauffeured airport pickup, 4K virtual tour link, or specific land search reports..."
                  value={specialMessage}
                  onChange={(e) => setSpecialMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-sm tracking-wide shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Inspection Request...' : 'Submit Inspection Booking Request'}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
