import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { submitToFormspree } from '../utils/formspree';
import { 
  Crown, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ShieldCheck,
  X
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Policy Modals State
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubmitting(true);
      await submitToFormspree({
        _subject: `New Newsletter Subscription (${newsletterEmail})`,
        form_type: 'Newsletter Subscription',
        email: newsletterEmail,
        submitted_at: new Date().toISOString()
      });
      setIsSubmitting(false);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0A0D0B] text-[#F8F7F3] border-t border-white/10 pt-16 pb-8 relative z-10 font-['Poppins',sans-serif]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F3D2E] via-[#17523F] to-[#C7A44D] p-0.5 shadow-lg overflow-hidden">
                <div className="w-full h-full bg-[#121212] rounded-[10px] flex items-center justify-center overflow-hidden p-0.5">
                  <img 
                    src={COMPANY_INFO.logoUrl} 
                    alt={COMPANY_INFO.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-white">
                  Nipcin <span className="text-[#C7A44D] italic">Webcrafts</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-emerald-400 -mt-1">
                  Luxury Real Estate
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Ghana's premier luxury real estate agency and investment advisory. Delivering verified, unencumbered homes, penthouses, and commercial plots across Newtown, East Legon, Cantonments, and Airport Residential Area.
            </p>

            <div className="space-y-2 text-xs font-light text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C7A44D] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C7A44D] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#C7A44D] transition-colors">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C7A44D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C7A44D] transition-colors">{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Playfair_Display',serif] text-sm font-bold text-[#C7A44D] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Luxury Properties</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Property Categories</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Nipcin</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Agency</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">Book Inspection</a></li>
            </ul>
          </div>

          {/* Col 3: Experience & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Playfair_Display',serif] text-sm font-bold text-[#C7A44D] uppercase tracking-wider">
              Client Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#calculator" className="hover:text-white transition-colors">Mortgage & ROI Calc</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Acquisition Process</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Architectural Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Title & Legal FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Accra Contact Hub</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Playfair_Display',serif] text-sm font-bold text-[#C7A44D] uppercase tracking-wider">
              Exclusive Newsletter
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Subscribe to receive off-market luxury property releases and Ghana market intelligence reports.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are now subscribed to Nipcin Webcrafts Private Digest.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A44D]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 rounded-xl bg-[#C7A44D] text-[#0F3D2E] font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-1 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? '...' : 'Join'}</span>
                </button>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-2">
                Social Media {COMPANY_INFO.socialHandle}
              </span>
              <div className="flex items-center gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-[#C7A44D] hover:bg-white/10 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-[#C7A44D] hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-[#C7A44D] hover:bg-white/10 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-[#C7A44D] hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            © 2026 <strong className="text-white font-semibold">Nipcin Webcrafts</strong>. Newtown, Accra, Ghana. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setTermsModalOpen(true)}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Lands Commission Certified</span>
            </span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl bg-[#121212] border border-white/20 rounded-2xl p-6 text-slate-200 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#C7A44D]">Privacy Policy</h3>
              <button onClick={() => setPrivacyModalOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="text-xs space-y-3 font-light text-slate-300 leading-relaxed">
              <p>Nipcin Webcrafts values client confidentiality and data security. All personal information collected through our inspection booking forms, mortgage calculators, and direct inquiries is strictly utilized for property advisory, title verification, and client communications.</p>
              <p>We do not share, sell, or disclose client financial records or contact information to third-party marketing entities. Escrow details and passport copy submissions for overseas diaspora buyers are handled through encrypted secure storage in full compliance with data protection laws.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {termsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl bg-[#121212] border border-white/20 rounded-2xl p-6 text-slate-200 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#C7A44D]">Terms of Service</h3>
              <button onClick={() => setTermsModalOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="text-xs space-y-3 font-light text-slate-300 leading-relaxed">
              <p>All property listings represented on Nipcin Webcrafts are subject to availability and title deed confirmation. Currency conversion rates ($ USD to ₵ GHS) are provided as guidance based on prevailing Bank of Ghana official interbank rates.</p>
              <p>Property inspections in Accra are arranged through assigned Nipcin Webcrafts licensed property advisors. Final sales agreements, deeds of conveyance, and escrow payments are executed through official legal contracts.</p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
