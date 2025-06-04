'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function NewspaperModal({ isOpen, onClose, newspaper }) {
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!newspaper) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 md:top-[100px] z-[250] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-transparent rounded-lg max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed position buttons to ensure they're always visible */}
            <div className="sticky top-0 z-50 w-full flex justify-between p-4">
              {/* Zoom button */}
              <button
                className="bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                {isZoomed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10h-4v4" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10v4m0 0h4m-4 0l5-5" />
                  </svg>
                )}
              </button>
              
              {/* Close button */}
              <button
                className="bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Newspaper image container */}
            <div className={`overflow-auto flex-1 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
              <div 
                className={`bg-white rounded-lg ${isZoomed ? 'transform scale-150 origin-top-left min-w-max' : 'w-full'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={newspaper.image}
                  alt={newspaper.title || "Newspaper"}
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: isZoomed ? 'none' : '70vh' }}
                />
              </div>
            </div>
            
            {/* Caption/info (optional) */}
            {newspaper.title && (
              <div className="bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-xl font-medium">{newspaper.title}</h3>
                {newspaper.date && <p className="text-sm opacity-80">{newspaper.date}</p>}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 