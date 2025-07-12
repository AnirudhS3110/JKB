'use client';
import { useState, useEffect, useRef } from 'react';
import { motion,  useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  
  // Check if sections are in view
  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.5 });
  
  // Images for the carousel - updated to use existing images
  const slides = [
    '/images/MediaCoverage/7.jpg',
    '/images/MediaCoverage/10.jpg',
    '/images/MediaCoverage/6.jpg',
    '/images/MediaCoverage/11.jpg',
  ];
  
  // Set up initial state
  useEffect(() => {
    setIsReady(true);
    
    // Automatic slide rotation for carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  return (
    <section 
      ref={heroSectionRef}
      className="relative min-h-screen flex items-center mt-[10vh] md:mt-[0px] bg-white"
    >
      {/* Orange circular elements (left side) */}
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-[#FF7322]/5 -translate-x-1/2"></div>
      <div className="absolute left-20 bottom-1/4 w-48 h-48 rounded-full bg-[#FF7322]/10"></div>
      <div className="absolute left-12 top-1/3 w-24 h-24 rounded-full bg-[#FF7322]/15"></div>
      
      <motion.div 
        className="container mx-auto px-4 py-12 md:py-24"
        initial="initial"
        animate={isReady ? "animate" : "initial"}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Mobile: Image Carousel at the top, Text Content at the bottom */}
          {/* Desktop: Left Column - Text Content, Right Column - Image Carousel */}
          
          {/* Image Carousel - Appears first on mobile, second on desktop */}
          <motion.div 
            className="w-full md:w-1/2 md:order-last mb-8 md:mb-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative circles around the carousel */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#4D9F45]/10 z-10"></div>
            <div className="absolute -bottom-4 -right-8 w-28 h-28 rounded-full bg-[#2D76CC]/10 z-10"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 rounded-full bg-[#F4720B]/15 z-10"></div>
            
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px]">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    transition: { duration: 1.5 }
                  }}
                >
                  <Image
                    src={slide}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
              
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Text Content - Appears second on mobile, first on desktop */}
          <motion.div 
            className="w-full md:w-1/2 md:order-first md:pr-8 mt-6 md:mt-0"
            variants={fadeIn}
          >
            <h2 className="font-title text-4xl md:text-5xl lg:text-[48px] font-light leading-tight tracking-tight mb-6">
              We're committed to building<br />
              a more <span className="text-[#F4720B]">just</span>, <span className="text-[#2D76CC]">verdant</span>, and<br />
              <span className="text-[#4D9F45]">peaceful</span> world.
            </h2>
            <p className="text-lg md:text-xl font-paragraph text-gray-700 mb-8 max-w-xl">
              We don’t talk change. We make it. Dignity for all. Impact that lasts. Join us—let’s raise the bar for what’s possible.
            </p>
            
            {/* <Link 
              href="/about-us"
              className="inline-flex items-center bg-[#F4720B] text-white font-paragraph px-8 py-3 rounded-md hover:bg-[#F47E28] transition-all transform hover:-translate-y-1 duration-300"
            >
              Learn more about us
              <span className="ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5L20.5 12L13.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5 12H3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link> */}
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            delay: 2
          }}
        >
          <div className="flex flex-col items-center text-[#F47E28]">
            <span className="text-sm font-paragraph mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 