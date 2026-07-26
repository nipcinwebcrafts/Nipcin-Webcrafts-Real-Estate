import React, { useState } from 'react';
import { Property, Currency } from '../types';
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar, 
  Share2, 
  Heart, 
  Play, 
  FileText, 
  Building2,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onBookInspection: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
  currency,
  isWishlisted,
  onToggleWishlist,
  onBookInspection,
}) => {
  if (!isOpen || !property) return null;

  const [activeTab, setActiveTab] = useState<'Overview' | 'VirtualTour' | 'FloorPlan' | 'Consultant'>('Overview');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  const formatPrice = () => {
    if (currency === 'GHS') {
      return `₵ ${property.priceGHS.toLocaleString()}`;
    }
    return `$ ${property.priceUSD.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-5xl bg-[#121212] border border-[#C7A44D]/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="bg-[#0F3D2E] px-6 py-4 border-b border-[#C7A44D]/30 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#C7A44D] text-[#0F3D2E] text-[10px] font-bold uppercase">
              {property.type}
            </span>
            <span className="text-xs font-mono text-emerald-300">
              ID: {property.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleWishlist(property.id)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Saved"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* Main Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                <MapPin className="w-4 h-4 text-[#C7A44D]" />
                <span>{property.address}</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <div className="font-['Playfair_Display',serif] text-3xl font-bold text-[#C7A44D]">
                {formatPrice()}
              </div>
              <div className="text-[11px] text-emerald-400 font-medium">
                {property.titleStatus}
              </div>
            </div>
          </div>

          {/* Gallery Image Display */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={property.gallery[selectedGalleryIdx] || property.heroImage}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {property.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    selectedGalleryIdx === idx ? 'border-[#C7A44D] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 text-xs font-semibold">
            {(['Overview', 'VirtualTour', 'FloorPlan', 'Consultant'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-[#C7A44D] text-[#C7A44D]'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab === 'Overview' && 'Property Overview'}
                {tab === 'VirtualTour' && '4K Virtual Tour'}
                {tab === 'FloorPlan' && 'Floor Plan'}
                {tab === 'Consultant' && 'Consultant & Legal'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Overview' && (
            <div className="space-y-6">
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
                <div>
                  <span className="text-slate-400">Bedrooms:</span>
                  <div className="font-bold text-white text-base mt-0.5">{property.bedrooms} Beds</div>
                </div>
                <div>
                  <span className="text-slate-400">Bathrooms:</span>
                  <div className="font-bold text-white text-base mt-0.5">{property.bathrooms} Baths</div>
                </div>
                <div>
                  <span className="text-slate-400">Built Area:</span>
                  <div className="font-bold text-white text-base mt-0.5">{property.sqm} m²</div>
                </div>
                <div>
                  <span className="text-slate-400">Garages:</span>
                  <div className="font-bold text-white text-base mt-0.5">{property.garages} Cars</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">Property Narrative</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">Luxury Amenities & Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {property.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A44D]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI & Yield */}
              <div className="p-4 rounded-xl bg-[#0F3D2E]/60 border border-[#C7A44D]/30 text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#C7A44D]">Estimated Investment ROI Yield</div>
                  <div className="text-slate-200">{property.estimatedRoiYield}</div>
                </div>
                <TrendingUp className="w-6 h-6 text-[#C7A44D]" />
              </div>

            </div>
          )}

          {activeTab === 'VirtualTour' && (
            <div className="space-y-4 text-center py-6">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
                {property.virtualTourUrl ? (
                  <iframe
                    src={property.virtualTourUrl}
                    title="Property Virtual Tour"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="space-y-2 p-6">
                    <Play className="w-12 h-12 text-[#C7A44D] mx-auto" />
                    <p className="text-xs text-slate-300">Live 4K Virtual Walkthrough Available On Request</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'FloorPlan' && (
            <div className="space-y-4 text-center py-4">
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 p-4">
                <img
                  src={property.floorPlanUrl || 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'}
                  alt="Floor Plan"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-80 object-contain mx-auto"
                />
              </div>
            </div>
          )}

          {activeTab === 'Consultant' && (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-xs">
              <div className="flex items-center gap-4">
                <img
                  src={property.consultant.avatar}
                  alt={property.consultant.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C7A44D]"
                />
                <div>
                  <h4 className="font-bold text-base text-white">{property.consultant.name}</h4>
                  <p className="text-[#C7A44D] font-medium">{property.consultant.role}</p>
                  <p className="text-slate-400">Nipcin Webcrafts Newtown HQ</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-[#C7A44D]" />
                  <span>{property.consultant.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-[#C7A44D]" />
                  <span>{property.consultant.email}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="bg-[#1A1D1A] p-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs">
            <span className="text-slate-400">Listing Title Status: </span>
            <span className="font-bold text-emerald-400">{property.titleStatus}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nipcin%20Webcrafts,%20I%20am%20interested%20in%20"${encodeURIComponent(property.title)}"%20(Ref:%20${property.id}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Agent</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookInspection(property);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Property Inspection</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
