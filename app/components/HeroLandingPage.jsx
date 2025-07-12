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
    className="relative min-h-screen flex items-center bg-white"
  >
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
          className="w-full md:w-1/2 md:order-last mb-8 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
          <h2 className="font-title text-4xl md:text-5xl lg:text-[] font-light leading-tight tracking-tight mb-6">
            <span className="text-[#F4720B]">Dignity.</span> <span className="text-[#2D76CC]">Impact.</span> <span className="text-[#4D9F45]">Change.</span><br/>
            <span className="block mt-2">Together, we reimagine what's possible.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-paragraph text-gray-700 mb-8">
            At JKBF, we don't just talk about change—we build it. We unite visionaries, communities, and institutions to create a world where every person's dignity is honored and every action sparks real, lasting impact. Join us. Let's set a new standard for what humanity can achieve.
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