"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

export default function FactsAndFigures() {
  // State to control the animation trigger
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Refs for each section
  const heroRef = useRef(null);
  const lifelinesHeaderRef = useRef(null);
  const cardsRef = useRef(null);
  const humanityHeaderRef = useRef(null);
  const humanityCardsRef = useRef(null);
  
  // Split hero text into words for animation
  const heroText = "Every initiative we take is more than a gesture — it's a lifeline. Backed by data and driven by compassion, the Jaskaran Bothra Foundation transforms impact into measurable change. These numbers aren't just statistics — they are stories of survival, strength, and self-reliance.";
  const heroWords = heroText.split(" ");

  // Trigger animation on component mount
  useEffect(() => {
    // Small delay for text animation - appear after page load
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform values for sliding animations - updated timing to ensure coordinated movement
  const lifelinesHeaderY = useTransform(
    scrollYProgress,
    [0.10, 0.25],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );
  
  // Cards animation timing - from 40% to 60% of scroll
  const cardsY = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["100vh", "10vh"]
  );

  // Image receding effect transforms - now synchronized with cards (40% to 60%)
  const imageScale = useTransform(
    scrollYProgress,
    [0.5, 0.6],  // Matching cards timing
    [1, 0.85]  // Original size to smaller size
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6],  // Matching cards timing
    [1, 0.85]  // Full opacity to half opacity
  );

  const imageTranslateY = useTransform(
    scrollYProgress,
    [0.5, 0.6],  // Matching cards timing
    ["0vh", "5vh"]  // No translation to downward translation
  );

  // Humanity section animations
  const humanityHeaderY = useTransform(
    scrollYProgress,
    [0.60, 0.70],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );

  // Humanity cards animation timing - from 75% to 95% of scroll
  const humanityCardsY = useTransform(
    scrollYProgress,
    [0.70, 0.80],
    ["100vh", "10vh"]  // Using same offset as first set of cards
  );

  // Humanity image receding effect
  const humanityImageScale = useTransform(
    scrollYProgress,
    [0.80, 0.85],  // Synchronized with humanity cards
    [1, 0.85]  // Original size to smaller size
  );

  const humanityImageOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.85],  // Synchronized with humanity cards
    [1, 0.85]  // Full opacity to half opacity
  );

  const humanityImageTranslateY = useTransform(
    scrollYProgress,
    [0.80, 0.85],  // Synchronized with humanity cards
    ["0vh", "5vh"]  // No translation to downward translation
  );

  const cardData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "25 Infant Warmers + 5 Phototherapy Machines",
      location: "Donated to Sardar Patel Medical College, Bikaner",
      points: [
        "Guardians of life – stabilizing newborns when seconds count.",
        "From fragile to fighting – giving babies a shot at survival.",
        "Built for care – top-tier tech for life's earliest battles."
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "1 Neonatal Ward",
      location: "Established at PBM Hospital, Bikaner",
      points: [
        "Hope starts here – a safe space for newborn emergencies.",
        "Equipped to heal – tools that empower doctors to save.",
        "More than treatment – a lifeline where none existed."
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "2 Diagnostic Machines",
      location: "Donated to Ganganagar Satellite Hospital",
      points: [
        "Sonography + Digital X-Ray → Zero-cost, high-tech diagnostics.",
        "Care that moves – tech brought to rural doorsteps.",
        "Not just machines – access, dignity, second chances."
      ]
    }
  ];

  const humanityCardData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "500,000+ Lives Touched",
      location: "COVID-19 Relief Across Mumbai",
      points: [
        "Half a million meals delivered when the city stood still.",
        "In partnership with Mumbai Police — unity in action.",
        "Food became survival. Distribution became hope."
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: "6,000+ Differently-Abled Empowered",
      location: "In collaboration with IIT-Chennai",
      points: [
        "5,000 visually impaired received smart assistive tools.",
        "1,000 mobility-challenged gained renewed freedom.",
        "Engineered empathy that sees ability, not limits."
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "500 Motion Sticks + 100 Modular Chairs",
      location: "Distributed with Rajasthan Patrika",
      points: [
        "Every stick, a path forward.",
        "Every chair, a seat at life's table.",
        "Mobility isn't luxury — it's dignity, returned."
      ]
    }
  ];

  // Card hover variants for animation
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconContainerVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - 100vh */}
        <section ref={heroRef} className="h-screen relative flex items-center justify-center sticky top-0">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Rural healthcare" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          
          <div className="max-w-4xl mx-auto z-10 text-center p-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb] mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Facts and Figures
            </motion.h1>
            
            <div className="text-xl font-paragraph md:text-2xl text-[#fbfbfb] overflow-hidden">
              <div className="flex flex-wrap justify-center">
                {heroWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="mx-1 inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isTextVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: "easeOut" 
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lifelines Title Section - slides in from bottom */}
        <section className="h-screen w-full relative flex items-center justify-center sticky top-0">
          {/* Background elements */}
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2732&q=80" 
              alt="healthcare impact" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          
          {/* Content that moves together */}
          <motion.div 
            ref={lifelinesHeaderRef}
            style={{ y: lifelinesHeaderY }}
            className="text-center z-10 w-full max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb] mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lifelines Delivered
            </motion.h2>
            
            <motion.div
              className="w-full mx-auto overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ 
                scale: imageScale,
                opacity: imageOpacity,
                y: imageTranslateY,
                zIndex: 5 // Explicitly set lower z-index
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Medical equipment" 
                className="w-full h-64 md:h-[60vh] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Cards Section - grid layout for all cards in viewport */}
        <section className="min-h-screen relative flex items-center justify-center sticky top-0 py-16">
          <div className="absolute inset-0 left-0 top-10 w-full h-full bg-transparent"></div>
          
          <motion.div 
            ref={cardsRef}
            style={{ y: cardsY }}
            className="max-w-6xl w-full mx-auto px-6 z-20" // Higher z-index than the image
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardData.map((card, index) => (
                <motion.div 
                  key={index}
                  whileHover="hover"
                  variants={cardVariants}
                  style={{ 
                    translateY: useTransform(
                      scrollYProgress,
                      [0.20, 0.4 + (index * 0.02)],
                      ["50vh", "0vh"]
                    ),
                    zIndex: 30 // Ensure cards stay above the image
                  }}
                  className="bg-gradient-to-br from-[#151419] to-black md:min-w-[342px] p-5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] relative overflow-hidden h-[380px] md:h-[450px] flex flex-col justify-between transform-gpu"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6309] to-transparent"></div>
                  
                  <div className="flex flex-col rounded-xl border border-[#222] backdrop-blur-sm px-5 py-4 justify-between h-full items-center gap-4">
                    <motion.div 
                      className="flex flex-col items-center mb-2"
                      variants={iconContainerVariants}
                    >
                      <div className="p-3 rounded-full bg-black/30 backdrop-blur-sm mb-1">
                        {card.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-2 text-center leading-tight">
                      {card.title}
                    </h3>
                    
                    <p className="text-[#FF6309]/80 text-sm font-medium mb-3 text-center px-3 py-1 rounded-full border border-[#FF6309]/20">
                      {card.location}
                    </p>
                    
                    <div className="text-[#fbfbfb] font-paragraph min-w-[266px] text-center relative z-10 flex-grow overflow-y-auto space-y-2 px-1">
                      {card.points.map((point, i) => (
                        <p key={i} className="leading-snug mb-2">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className='h-[300vh]'/>

        {/* Humanity in Numbers Section - slides in from bottom */}
        <section className="h-screen w-full relative flex items-center justify-center sticky top-0">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="humanity impact" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          
          <motion.div 
            ref={humanityHeaderRef}
            style={{ y: humanityHeaderY }}
            className="text-center z-10 w-full max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb] mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Humanity in Numbers
            </motion.h2>
            
            <motion.div
              className="w-full mx-auto overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ 
                scale: humanityImageScale,
                opacity: humanityImageOpacity,
                y: humanityImageTranslateY,
                zIndex: 5 // Lower z-index for receding effect
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Community impact" 
                className="w-full h-64 md:h-[60vh] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Humanity Cards Section */}
        <section className="min-h-screen relative flex items-center justify-center sticky top-0 py-16">
          <div className="absolute inset-0 left-0 top-10 w-full h-full bg-transparent"></div>
          
          <motion.div 
            ref={humanityCardsRef}
            style={{ y: humanityCardsY }}
            className="max-w-6xl w-full mx-auto px-6 z-20" // Higher z-index than the image
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {humanityCardData.map((card, index) => (
                <motion.div 
                  key={index}
                  whileHover="hover"
                  variants={cardVariants}
                  style={{ 
                    translateY: useTransform(
                      scrollYProgress,
                      [0.75, 0.85 + (index * 0.02)],
                      ["50vh", "0vh"]
                    ),
                    zIndex: 30 // Ensure cards stay above the image
                  }}
                  className="bg-gradient-to-br from-[#151419] to-black md:min-w-[342px] p-5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] relative overflow-hidden h-[380px] md:h-[450px] flex flex-col justify-between transform-gpu"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6309] to-transparent"></div>
                  
                  <div className="flex flex-col rounded-xl border border-[#222] backdrop-blur-sm px-5 py-4 justify-between h-full items-center gap-4">
                    <motion.div 
                      className="flex flex-col items-center mb-2"
                      variants={iconContainerVariants}
                    >
                      <div className="p-3 rounded-full bg-black/30 backdrop-blur-sm mb-1">
                        {card.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-2 text-center leading-tight">
                      {card.title}
                    </h3>
                    
                    <p className="text-[#FF6309]/80 text-sm font-medium mb-3 text-center px-3 py-1 rounded-full border border-[#FF6309]/20">
                      {card.location}
                    </p>
                    
                    <div className="text-[#fbfbfb] font-paragraph min-w-[266px] text-left relative z-10 flex-grow overflow-y-auto space-y-2 px-1">
                      {card.points.map((point, i) => (
                        <p key={i} className="leading-snug mb-2">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Extra height to ensure scrolling works properly */}
        <div className="h-[50vh]"></div>
      </div>
    </LogoRevealWrapper>
  );
} 