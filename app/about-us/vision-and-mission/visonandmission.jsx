"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';
import MobileSlideOne from './MobileSlideOne';
import MobileSlideTwo from './MobileSlideTwo';
import MobileSlideThree from './MobileSlideThree';

export default function VisionAndMissionPage() {
  // State to control the animation trigger
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Refs for each section
  const visionRef = useRef(null);
  const missionTitleRef = useRef(null);
  const firstCardsRef = useRef(null);
  const secondCardsRef = useRef(null);
  
  // Split vision text into words for animation
  const visionText = "To build an inclusive, compassionate, and empowered society where every individual—regardless of gender, ability, or geography—has the opportunity to thrive with dignity.";
  const visionWords = visionText.split(" ");
  
  // Trigger animation on component mount
  useEffect(() => {
    // Small delay for vision text animation - appear after logo reveal
    const timer = setTimeout(() => {
      setIsVisionVisible(true);
    }, 1800);
    
    const animTimer = setTimeout(() => {
      setAnimationReady(true);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
    };
  }, []);
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform values for sliding animations
  const missionTitleY = useTransform(
    scrollYProgress,
    [0.15, 0.25],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );
  
  // Mobile slides animations with proper timing and sequence
  const firstSlideY = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ["0vh", "0vh"]
  );
  
  const secondSlideY = useTransform(
    scrollYProgress,
    [0.0, 0.3, 0.4, 1.0],
    ["100vh", "100vh", "0vh", "0vh"]
  );
  
  const thirdSlideY = useTransform(
    scrollYProgress,
    [0.0, 0.6, 0.7, .8],
    ["100vh", "100vh", "0vh", "0vh"]
  );
  
  // Desktop card animations
  const firstCardsY = useTransform(
    scrollYProgress,
    [0.35, 0.55],
    ["100vh", "0vh"]
  );
  
  const secondCardsY = useTransform(
    scrollYProgress,
    [0.65, 0.85],
    ["100vh", "0vh"]
  );
  
  // Card data with logos
  const firstCardsData = [
    { 
      title: "Accessibility",
      content: "To advance social equity through inclusive development and accessible infrastructure for persons with disabilities.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="7" r="4" strokeWidth="2" />
            <path strokeWidth="2" d="M15 20v-4h4" />
            <path strokeWidth="2" d="M16 16l-4-4-4 4" />
            <path strokeWidth="2" d="M12 12v8" />
            <path strokeWidth="2" d="M6 16h4" />
          </svg>
        </div>
      )
    },
    { 
      title: "Empower",
      content: "To empower women and girls, especially in underserved areas, through education, sustainability, and leadership initiatives.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    { 
      title: "Mental Wellness",
      content: "To foster mental well-being by breaking stigma and promoting mindful, community-based support.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      )
    }
  ];
  
  const secondCardsData = [
    { 
      title: "Healthcare Access",
      content: "To bridge healthcare disparities by delivering state-of-the-art medical diagnostics and services to rural regions, free of cost.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      )
    },
    { 
      title: "Crisis Relief",
      content: "To respond swiftly to crises with humanitarian aid and long-term rehabilitation support.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
          </svg>
        </div>
      )
    },
    { 
      title: "Heritage",
      content: "To honour legacies of national importance by preserving and promoting the stories of exemplary individuals through commemorative stamps, coins, and publications.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Vision Section - 100vh */}
        <section ref={visionRef} className="h-screen relative bg-gradient-to-r from-[#FF6309] to-[#FF8E16] flex items-center justify-center sticky top-0">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
              <img src="https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="vision-bg" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          <div className="max-w-4xl mx-auto z-[50] text-center p-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb] mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Vision
            </motion.h1>
            
            <div className="text-xl font-paragraph md:text-2xl text-[#fbfbfb] overflow-hidden">
              <div className="flex flex-wrap justify-center">
                {visionWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="mx-1 inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisionVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.06,
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

        {/* Mission Title Section - slides in from bottom */}
        <section className="h-screen relative flex bg-gradient-to-r from-[#FF6309] to-[#FF8E16] items-center justify-center sticky top-0">
          {/* <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <img src="https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="vision-bg" className="w-full h-full md:hidden object-cover" />
          </div> */}
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-0"></div>
          <motion.div 
            ref={missionTitleRef}
            style={{ y: missionTitleY }}
            className="text-center z-10"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.h2>
          </motion.div>
        </section>

        {/* First Cards Section - First 2 cards for mobile */}
        <div className="md:hidden sticky top-0 left-0 w-full h-full" style={{ zIndex: 10 }}>
          <MobileSlideOne 
            firstCardsData={firstCardsData} 
            animationReady={animationReady}
            scrollY={firstSlideY}
          />
        </div>
        
        <div className="md:hidden sticky top-0 left-0 w-full h-full" style={{ zIndex: 20 }}>
          <MobileSlideTwo 
            firstCardsData={firstCardsData} 
            secondCardsData={secondCardsData} 
            animationReady={animationReady}
            scrollY={secondSlideY}
          />
        </div>
        
        <div className="md:hidden sticky top-0 left-0 w-full h-full" style={{ zIndex: 30 }}>
          <MobileSlideThree 
            secondCardsData={secondCardsData} 
            animationReady={animationReady}
            scrollY={thirdSlideY}
          />
        </div>
          
        {/* Desktop: All first cards */}
        <section className="h-screen relative hidden md:flex items-center justify-center sticky top-0">
          <motion.div 
            ref={firstCardsRef}
            style={{ y: firstCardsY }}
            className="max-w-6xl w-full mx-auto md:flex md:flex-row items-center justify-center gap-8 px-6 z-10"
          >
            {firstCardsData.map((card, index) => (
              <motion.div 
                whileHover={{scale: 1.02, transition: {duration: 0.3}}}
                key={`desktop-first-${index}`}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.35, 0.45 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className="bg-[#fbfbfb] min-w-[250px] max-w-[350px] p-8 rounded-lg shadow-lg relative overflow-hidden min-h-[380px]"
              >
                <div className="flex flex-col items-center h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="mb-6 transform -translate-y-2">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-medium text-gray-900 mb-2 text-center">{card.title}</h3>
                    <div className="w-16 h-1 bg-[#FF6309] mb-6"></div>
                  </div>
                  <p className="text-gray-700 font-paragraph text-[18px] text-center">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Second Cards Section - Desktop only */}
        <section className="h-screen relative hidden md:flex items-center justify-center sticky top-0">
          {/* Desktop: All second cards */}
          <motion.div 
            ref={secondCardsRef}
            style={{ y: secondCardsY }}
            className="hidden md:flex md:justify-around max-w-6xl w-full mx-auto gap-8 px-6 z-10"
          >
            {secondCardsData.map((card, index) => (
              <motion.div 
                whileHover={{scale: 1.02, transition: {duration: 0.3}}}
                key={`desktop-second-${index}`}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.65, 0.75 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className="bg-white min-w-[350px] max-w-[350px] p-8 rounded-lg shadow-lg relative overflow-hidden min-h-[380px]"
              >
                <div className="flex flex-col items-center h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="mb-6 transform -translate-y-2">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-medium text-gray-900 mb-2 text-center">{card.title}</h3>
                    <div className="w-16 h-1 bg-[#FF6309] mb-6"></div>
                  </div>
                  <p className="text-gray-700 text-[18px] font-paragraph text-center">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Extra height to ensure scrolling works properly */}
        <div className="h-screen bg-transparent">
        </div>
      </div>
    </LogoRevealWrapper>
  );
}