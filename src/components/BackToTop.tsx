import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      title="Back to Top"
      className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#0F3D2E] text-[#C7A44D] border border-[#C7A44D]/50 shadow-2xl hover:scale-110 hover:bg-[#17523F] transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
