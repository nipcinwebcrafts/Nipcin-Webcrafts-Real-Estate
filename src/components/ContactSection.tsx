import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Sparkles,
  Globe,
  Building2,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ThemeMode, ContactMessage } from '../types';
import { submitToFormspree } from '../utils/formspree';

interface ContactSectionProps {
  theme: ThemeMode;
  onMessageSent: (msg: ContactMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme, onMessageSent }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Property Inquiry');
  const [message, setMessage] = useState('');

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Map locations in Accra
  const mapHotspots = [
    { name: 'Nipcin Webcrafts HQ', area: 'Newtown, Accra', type: 'Main Headquarters' },
    { name: 'The Royal Crest Manor', area: 'East Legon', type: 'Luxury Estate' },
    { name: 'Skyline Penthouse', area: 'Cantonments', type: 'Duplex Penthouse' },
    { name: 'The Diplomat', area: 'Airport Residential Area', type: 'Executive Suites' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitToFormspree({
      _subject: `New Contact Inquiry: ${subject} (${name})`,
      form_type: 'Contact Inquiry',
      name,
      phone,
      email,
      subject,
      message,
      submitted_at: new Date().toISOString()
    });

    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name,
      phone,
      email,
      subject,
      message,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    onMessageSent(newMsg);
    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#121212] text-white border-white/10' : 'bg-[#F8F7F3] text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Connect With Nipcin Webcrafts
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Our Newtown, Accra team of real estate advisors is at your service for private consultations, property valuations, and site visit arrangements.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details & Interactive Map Mock (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 rounded-2xl border shadow-xl space-y-6 ${
              theme === 'dark' ? 'bg-[#1A1D1A] border-white/15' : 'bg-white border-slate-200'
            }`}>
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#C7A44D] flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Accra Advisory Hub</span>
              </h3>

              <div className="space-y-4 text-xs font-light">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#C7A44D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Main Office Address</div>
                    <div className="text-slate-300">{COMPANY_INFO.address}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{COMPANY_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#C7A44D] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Telephone / WhatsApp</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#C7A44D] font-semibold hover:underline block">
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-slate-400 text-[11px]">Direct Line & WhatsApp Support</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#C7A44D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-[#C7A44D] transition-colors block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#C7A44D] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Working Hours</div>
                    <div className="text-slate-300">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className={`p-4 rounded-2xl border shadow-xl space-y-3 ${
              theme === 'dark' ? 'bg-[#1A1D1A] border-white/15' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C7A44D] uppercase tracking-wider flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" /> Accra Property Map Hub
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Live Key Locations
                </span>
              </div>

              {/* Map Canvas Visual Box */}
              <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-white/10 p-3 flex flex-col justify-between">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Accra Map View"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="relative z-10 grid grid-cols-2 gap-2 text-[10px]">
                  {mapHotspots.map((spot) => (
                    <div key={spot.name} className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-[#C7A44D]/30 space-y-0.5">
                      <div className="font-bold text-[#C7A44D] flex items-center gap-1">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{spot.area}</span>
                      </div>
                      <div className="text-slate-200 truncate">{spot.name}</div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 text-[10px] text-slate-300 text-center bg-black/80 py-1 rounded border border-white/10">
                  📍 Headquarters: Newtown, Accra | Coverage: East Legon, Cantonments & Airport
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-10 rounded-2xl border shadow-2xl ${
            theme === 'dark' ? 'bg-[#1A1D1A] border-white/15' : 'bg-white border-slate-200'
          }`}>
            
            {isSent ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#C7A44D]">
                  Message Received
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto font-light">
                  Thank you for reaching out to Nipcin Webcrafts! Our luxury property consultant in Newtown, Accra will respond to your message shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-2">
                  Send A Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+233 24 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Inquiry Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                    >
                      <option value="General Property Inquiry" className="bg-[#121212]">General Property Inquiry</option>
                      <option value="Diaspora Investment Advisory" className="bg-[#121212]">Diaspora Investment Advisory</option>
                      <option value="Commercial Real Estate Leasing" className="bg-[#121212]">Commercial Real Estate Leasing</option>
                      <option value="Land Verification Request" className="bg-[#121212]">Land Title Verification Request</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the property features or location you are interested in..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs tracking-wider shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message To Nipcin Webcrafts'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
