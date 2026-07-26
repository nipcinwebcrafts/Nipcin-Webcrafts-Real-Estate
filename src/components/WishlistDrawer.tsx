import React from 'react';
import { Property, Currency } from '../types';
import { X, Heart, Trash2, Calendar, Eye, MapPin, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProperties: Property[];
  currency: Currency;
  onRemoveWishlist: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onBookInspection: (property: Property) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProperties,
  currency,
  onRemoveWishlist,
  onSelectProperty,
  onBookInspection,
}) => {
  if (!isOpen) return null;

  const formatPrice = (prop: Property) => {
    if (currency === 'GHS') {
      return `₵ ${prop.priceGHS.toLocaleString()}`;
    }
    return `$ ${prop.priceUSD.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-300">
      
      <div className="w-full max-w-md bg-[#121212] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="bg-[#0F3D2E] p-4 text-white flex items-center justify-between border-b border-[#C7A44D]/30">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-['Playfair_Display',serif] text-lg font-bold">Saved Luxury Properties</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#C7A44D] text-[#0F3D2E] text-xs font-bold">
              {wishlistProperties.length}
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {wishlistProperties.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Heart className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-400 font-light">Your wishlist is currently empty.</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Click the heart icon on any property card to save it for quick review or group inspection.
              </p>
            </div>
          ) : (
            wishlistProperties.map((prop) => (
              <div
                key={prop.id}
                className="p-3 rounded-2xl bg-[#1A1D1A] border border-white/10 flex items-center gap-3 group hover:border-[#C7A44D] transition-all"
              >
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="font-['Playfair_Display',serif] text-sm font-bold text-white line-clamp-1">
                    {prop.title}
                  </div>
                  <div className="text-xs font-bold text-[#C7A44D]">
                    {formatPrice(prop)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-[#C7A44D]" />
                    <span className="truncate">{prop.location}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-[#0F3D2E] text-white text-[11px] font-semibold flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3 text-[#C7A44D]" />
                      <span>View</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onBookInspection(prop);
                      }}
                      className="px-2.5 py-1 rounded-md bg-[#C7A44D] text-[#0F3D2E] text-[11px] font-bold flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveWishlist(prop.id)}
                  className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistProperties.length > 0 && (
          <div className="p-4 bg-[#1A1D1A] border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                const inspSec = document.getElementById('inspection');
                inspSec?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Group Inspection For Saved Items</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
