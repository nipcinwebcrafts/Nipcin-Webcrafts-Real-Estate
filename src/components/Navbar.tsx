import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Calendar, 
  Search,
  MessageCircle,
  Crown,
  ChevronDown
} from 'lucide-react';
import { Currency, ThemeMode } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenInspectionModal: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyChange,
  theme,
  onThemeToggle,
  wishlistCount,
  onOpenWishlist,
  onOpenInspectionModal,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Categories', href: '#categories' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      
      {/* Top Bar - Company Contact & Info */}
      <div className={`text-xs py-2 px-4 transition-all duration-300 border-b border-white/10 ${
        theme === 'dark' 
          ? 'bg-[#0F3D2E]/95 text-[#F8F7F3]' 
          : 'bg-[#0F3D2E] text-white'
      } ${isScrolled ? 'hidden md:block py-1.5 opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-light text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-[#C7A44D]" />
              {COMPANY_INFO.location}
            </span>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#C7A44D] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C7A44D]" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden lg:flex items-center gap-1.5 hover:text-[#C7A44D] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#C7A44D]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nipcin%20Webcrafts,%20I%20would%20like%20to%20inquire%20about%20luxury%20properties%20in%20Accra.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
            <span className="text-emerald-700">|</span>
            <span className="text-[#C7A44D] font-medium tracking-wide">
              {COMPANY_INFO.socialHandle}
            </span>
          </div>

        </div>
      </div>

      {/* Main Transparent / Glassmorphism Sticky Navbar */}
      <nav 
        id="main-navbar"
        className={`transition-all duration-300 ${
          isScrolled 
            ? theme === 'dark'
              ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
              : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-lg py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F3D2E] via-[#17523F] to-[#C7A44D] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
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
              <span className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                Nipcin <span className="text-[#C7A44D] italic font-normal">Webcrafts</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-emerald-400/90 -mt-1">
                Luxury Real Estate
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-['Inter',sans-serif]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 hover:text-[#C7A44D] relative py-1 font-medium ${
                  isScrolled && theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Utilities & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="relative group">
              <button 
                onClick={() => onCurrencyChange(currency === 'USD' ? 'GHS' : 'USD')}
                type="button"
                title="Click to toggle currency or select from dropdown"
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  theme === 'dark' 
                    ? 'border-[#C7A44D]/40 text-white bg-white/5 hover:bg-[#C7A44D]/10 hover:border-[#C7A44D]' 
                    : 'border-slate-300 text-slate-800 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <span className="text-[#C7A44D] font-bold">{currency === 'USD' ? '$' : '₵'}</span>
                <span>{currency === 'USD' ? 'USD' : 'GHS'}</span>
                <ChevronDown className="w-3 h-3 text-[#C7A44D]" />
              </button>
              <div className="absolute right-0 mt-1 w-32 bg-[#1A1D1A] border border-[#C7A44D]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCurrencyChange('USD');
                  }}
                  className={`w-full text-left px-3.5 py-2.5 text-xs hover:bg-[#C7A44D]/20 transition-colors flex items-center justify-between cursor-pointer ${
                    currency === 'USD' ? 'text-[#C7A44D] font-bold bg-[#C7A44D]/10' : 'text-slate-300'
                  }`}
                >
                  <span>USD ($)</span>
                  {currency === 'USD' && <span className="text-[10px] text-[#C7A44D]">✓</span>}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCurrencyChange('GHS');
                  }}
                  className={`w-full text-left px-3.5 py-2.5 text-xs hover:bg-[#C7A44D]/20 transition-colors flex items-center justify-between cursor-pointer ${
                    currency === 'GHS' ? 'text-[#C7A44D] font-bold bg-[#C7A44D]/10' : 'text-slate-300'
                  }`}
                >
                  <span>GHS (₵)</span>
                  {currency === 'GHS' && <span className="text-[10px] text-[#C7A44D]">✓</span>}
                </button>
              </div>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onThemeToggle}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-white/15 text-amber-300 hover:bg-white/10'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Property Search Modal Trigger */}
            <button
              onClick={onOpenSearch}
              title="Search Properties"
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-white/15 text-slate-200 hover:bg-white/10 hover:text-[#C7A44D]'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-[#0F3D2E]'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Drawer Button */}
            <button
              onClick={onOpenWishlist}
              title="Saved Properties"
              className={`relative p-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-white/15 text-slate-200 hover:bg-white/10'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C7A44D] text-[#0F3D2E] rounded-full text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Book Inspection CTA */}
            <button
              onClick={onOpenInspectionModal}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] rounded-xl transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative px-4 py-2 rounded-[11px] bg-[#0F3D2E] group-hover:bg-[#0F3D2E]/80 text-white font-medium text-xs flex items-center gap-1.5 transition-colors">
                <Calendar className="w-3.5 h-3.5 text-[#C7A44D]" />
                <span>Book Inspection</span>
              </span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-white"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-400 fill-rose-400' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#C7A44D] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:text-[#C7A44D] hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Display Currency:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onCurrencyChange('USD')}
                    className={`px-3 py-1 rounded text-xs font-semibold ${currency === 'USD' ? 'bg-[#C7A44D] text-[#0F3D2E]' : 'bg-white/10 text-slate-300'}`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => onCurrencyChange('GHS')}
                    className={`px-3 py-1 rounded text-xs font-semibold ${currency === 'GHS' ? 'bg-[#C7A44D] text-[#0F3D2E]' : 'bg-white/10 text-slate-300'}`}
                  >
                    GHS (₵)
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Theme Preference:</span>
                <button
                  onClick={onThemeToggle}
                  className="px-3 py-1 rounded bg-white/10 text-xs text-white flex items-center gap-1.5"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
                  <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInspectionModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Property Inspection</span>
              </button>
            </div>
          </div>
        )}

      </nav>

    </header>
  );
};
