'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturedNewsCard from './FeaturedNewsCard';

export default function FeaturedNewsCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Create infinite loop by duplicating items
  const infiniteItems = [...items, ...items, ...items];
  const totalItems = items.length;
  
  // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlay) {
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 5000); // Change slide every 5 seconds
//     }
    
//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isAutoPlay, currentIndex]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);
  
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => {
      const next = prev + 1;
      // Reset to beginning when reaching the end of original items
      return next >= totalItems ? 0 : next;
    });
  }, [totalItems]);
  
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => {
      const next = prev - 1;
      // Loop to end when going before beginning
      return next < 0 ? totalItems - 1 : next;
    });
  }, [totalItems]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);
  
  // Go to specific slide
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
  };
  
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  
  return (
    <div 
      className="relative w-screen h-[75vh] md:h-[75vh] overflow-hidden bg-[#fbfbfb]  flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            
            if (swipe < -swipeConfidenceThreshold) {
              handleNext();
            } else if (swipe > swipeConfidenceThreshold) {
              handlePrev();
            }
          }}
          className="absolute inset-0 md:py-[50px] flex items-center md:items-start justify-center"
        >
          <FeaturedNewsCard
            date={items[currentIndex]?.date}
            location={items[currentIndex]?.location}
            title={items[currentIndex]?.title}
            description={items[currentIndex]?.description}
            video={items[currentIndex]?.video}
            image={items[currentIndex]?.image}
            href={items[currentIndex]?.href}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <motion.button 
        className="absolute top-1/2 -translate-y-1/2 left-[5vw] z-20 h-14 w-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg focus:outline-none hover:bg-white hover:scale-110 transition-all duration-200"
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button 
        className="absolute top-1/2 -translate-y-1/2 right-[5vw] z-20 h-14 w-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg focus:outline-none hover:bg-white hover:scale-110 transition-all duration-200"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Progress bar */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-black/10 z-20">
        <motion.div
          className="h-full bg-green-600"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div> */}
      
      {/* Slide counter */}
      {/* <div className="absolute top-[15vh] right-[5vw] z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-sm">
        {currentIndex + 1} / {totalItems}
      </div> */}
      
      {/* Auto-play indicator */}
      {/* <motion.div 
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-200 ${
            isAutoPlay 
              ? 'bg-green-600/90 text-white hover:bg-green-700' 
              : 'bg-white/90 text-gray-800 hover:bg-white'
          }`}
          aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlay ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </motion.div> */}
    </div>
  );
}