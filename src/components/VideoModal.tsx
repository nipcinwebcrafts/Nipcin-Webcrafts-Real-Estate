import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        
        {/* Header */}
        <div className="bg-[#0F3D2E] p-4 text-white flex items-center justify-between border-b border-[#C7A44D]/30">
          <span className="font-['Playfair_Display',serif] text-sm font-bold text-[#C7A44D]">
            Nipcin Webcrafts — Company Showcase Video
          </span>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-600 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="aspect-video w-full bg-black flex items-center justify-center">
          <iframe
            src={videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
            title="Nipcin Webcrafts Luxury Real Estate Showcase"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>

    </div>
  );
};
