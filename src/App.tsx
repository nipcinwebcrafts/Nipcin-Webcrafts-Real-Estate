import React, { useState } from 'react';
import { ThemeMode, Currency, Property, FilterState, InspectionBooking, ContactMessage } from './types';
import { INITIAL_PROPERTIES } from './data/propertiesData';

// Core Components
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedPropertiesSection } from './components/FeaturedPropertiesSection';
import { PropertyCategoriesSection } from './components/PropertyCategoriesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { InspectionBookingSection } from './components/InspectionBookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CompanyStatsSection } from './components/CompanyStatsSection';
import { OurProcessSection } from './components/OurProcessSection';
import { GallerySection } from './components/GallerySection';
import { InvestmentRoiCalculatorSection } from './components/InvestmentRoiCalculatorSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals & Floating Widgets
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { InspectionSlipModal } from './components/InspectionSlipModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { PropertySearchModal } from './components/PropertySearchModal';
import { VideoModal } from './components/VideoModal';

import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  // Global App Preferences State
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [currency, setCurrency] = useState<Currency>('USD');

  // Datasets
  const [properties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prop-101', 'prop-103']);

  // Filters State
  const [filter, setFilter] = useState<FilterState>({
    type: 'All',
    category: '',
    location: '',
    keyword: '',
    priceRange: [0, 10000000],
    bedrooms: 'Any'
  });

  // Modal & Selection States
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<Property | null>(null);
  const [preSelectedPropertyForBooking, setPreSelectedPropertyForBooking] = useState<Property | null>(null);
  
  const [activeBookingForSlip, setActiveBookingForSlip] = useState<InspectionBooking | null>(null);
  const [isSlipModalOpen, setIsSlipModalOpen] = useState(false);

  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Toast Notification Banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (id: string) => {
    if (wishlistIds.includes(id)) {
      setWishlistIds(wishlistIds.filter((item) => item !== id));
      showToast('Removed property from saved wishlist.');
    } else {
      setWishlistIds([...wishlistIds, id]);
      showToast('Property saved to your luxury wishlist!');
    }
  };

  // Filter Updates
  const handleUpdateFilter = (updated: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...updated }));
  };

  // Booking Submitted Handler
  const handleBookingSubmitted = (booking: InspectionBooking) => {
    setActiveBookingForSlip(booking);
    setIsSlipModalOpen(true);
    showToast(`Inspection Request Confirmed! Reference Number: ${booking.referenceCode}`);
  };

  // Contact Message Sent Handler
  const handleMessageSent = (msg: ContactMessage) => {
    showToast(`Thank you ${msg.name}! Your message has been routed to our Newtown, Accra desk.`);
  };

  const wishlistProperties = properties.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className={`min-h-screen transition-colors duration-300 font-['Poppins',sans-serif] ${
      theme === 'dark' ? 'bg-[#0E110F] text-[#F8F7F3]' : 'bg-[#F8F7F3] text-slate-900'
    }`}>
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Initial Animated Loading Screen */}
      <LoadingScreen />

      {/* Back To Top Floating Button */}
      <BackToTop />

      {/* Floating WhatsApp Chat Launcher */}
      <WhatsAppWidget />

      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-md bg-[#0F3D2E] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#C7A44D] flex items-center justify-between gap-3 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#C7A44D] shrink-0" />
            <span className="text-xs font-semibold">{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-slate-300 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navbar Header */}
      <Navbar
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        currency={currency}
        onCurrencyChange={(c) => setCurrency(c)}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistDrawerOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenInspectionModal={() => {
          setPreSelectedPropertyForBooking(null);
          const inspSec = document.getElementById('inspection');
          inspSec?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main View Flow */}
      <main className="overflow-hidden">
        
        {/* 1. Hero Section */}
        <HeroSection
          currency={currency}
          onExploreClick={() => {
            const propSec = document.getElementById('properties');
            propSec?.scrollIntoView({ behavior: 'smooth' });
          }}
          onBookInspectionClick={() => {
            const inspSec = document.getElementById('inspection');
            inspSec?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWatchVideoClick={() => setIsVideoModalOpen(true)}
          onApplyFilter={handleUpdateFilter}
        />

        {/* 2. Featured Properties Catalog */}
        <FeaturedPropertiesSection
          properties={properties}
          currency={currency}
          theme={theme}
          activeFilter={filter}
          onFilterChange={handleUpdateFilter}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectProperty={(prop) => setSelectedPropertyForModal(prop)}
          onBookInspectionForProperty={(prop) => {
            setPreSelectedPropertyForBooking(prop);
            const inspSec = document.getElementById('inspection');
            inspSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Property Categories Grid */}
        <PropertyCategoriesSection
          theme={theme}
          onSelectCategory={(catName) => {
            handleUpdateFilter({ category: catName });
            const propSec = document.getElementById('properties');
            propSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Why Choose Nipcin Webcrafts */}
        <WhyChooseUsSection theme={theme} />

        {/* 5. Company Stats Banner */}
        <CompanyStatsSection theme={theme} />

        {/* 6. About Us Section */}
        <AboutUsSection
          theme={theme}
          onBookInspectionClick={() => {
            const inspSec = document.getElementById('inspection');
            inspSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Book Property Inspection Form */}
        <InspectionBookingSection
          theme={theme}
          preSelectedProperty={preSelectedPropertyForBooking}
          onBookingSubmitted={handleBookingSubmitted}
        />

        {/* 8. Investment ROI & Mortgage Yield Calculator */}
        <InvestmentRoiCalculatorSection
          currency={currency}
          theme={theme}
          onBookInspectionClick={() => {
            const inspSec = document.getElementById('inspection');
            inspSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Seamless 5-Step Process */}
        <OurProcessSection
          theme={theme}
          onBookInspectionClick={() => {
            const inspSec = document.getElementById('inspection');
            inspSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10. Architectural Gallery Showcase */}
        <GallerySection theme={theme} />

        {/* 11. Client Testimonials */}
        <TestimonialsSection theme={theme} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection theme={theme} />

        {/* 13. Contact & Location Section */}
        <ContactSection
          theme={theme}
          onMessageSent={handleMessageSent}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-over Drawers */}
      <PropertyDetailModal
        property={selectedPropertyForModal}
        isOpen={!!selectedPropertyForModal}
        onClose={() => setSelectedPropertyForModal(null)}
        currency={currency}
        isWishlisted={selectedPropertyForModal ? wishlistIds.includes(selectedPropertyForModal.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onBookInspection={(prop) => {
          setPreSelectedPropertyForBooking(prop);
          const inspSec = document.getElementById('inspection');
          inspSec?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <InspectionSlipModal
        booking={activeBookingForSlip}
        isOpen={isSlipModalOpen}
        onClose={() => setIsSlipModalOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistDrawerOpen}
        onClose={() => setIsWishlistDrawerOpen(false)}
        wishlistProperties={wishlistProperties}
        currency={currency}
        onRemoveWishlist={handleToggleWishlist}
        onSelectProperty={(prop) => setSelectedPropertyForModal(prop)}
        onBookInspection={(prop) => {
          setPreSelectedPropertyForBooking(prop);
          const inspSec = document.getElementById('inspection');
          inspSec?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <PropertySearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        activeFilter={filter}
        onApplyFilter={handleUpdateFilter}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </div>
  );
}
