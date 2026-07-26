import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem, ThemeMode } from '../types';
import { Maximize2, MapPin, Sparkles, X } from 'lucide-react';

interface GallerySectionProps {
  theme: ThemeMode;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Exteriors' | 'Interiors' | 'Pools' | 'Penthouses'>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section 
      id="gallery" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#0E110F] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A44D]" />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Luxury Property Gallery
            </h2>
            <p className="mt-2 text-slate-400 text-sm font-light">
              Explore high-resolution captures of Ghanaian architectural masterpieces, infinity pools, and interior design craftsmanship.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0F3D2E]/20 border border-white/10">
            {(['All', 'Exteriors', 'Interiors', 'Pools', 'Penthouses'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C7A44D] text-[#0F3D2E] shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Lightbox Icon Button */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#C7A44D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="px-2 py-0.5 rounded bg-[#C7A44D] text-[#0F3D2E] text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-base font-bold text-white group-hover:text-[#C7A44D] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-300">
                  <MapPin className="w-3 h-3 text-[#C7A44D]" />
                  <span>{item.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full space-y-4 text-center">
            <div className="max-h-[75vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
            <div>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#C7A44D] font-medium flex items-center justify-center gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{selectedImage.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
