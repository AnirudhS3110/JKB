"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

export default function VisionAndMissionPage() {
  // State to control the animation trigger
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Refs for each section
  const visionRef = useRef(null);
  const missionTitleRef = useRef(null);
  const firstCardsRef = useRef(null);
  const secondCardsRef = useRef(null);
  
  // Split vision text into words for animation
  const visionText = "To build a socially inclusive India by supporting holistic human development, particularly for the underprivileged, through structured initiatives in health, education, and sustainable livelihoods.";
  const visionWords = visionText.split(" ");
  
  // Trigger animation on component mount
  useEffect(() => {
    // Small delay for vision text animation - appear after logo reveal
    const timer = setTimeout(() => {
      setIsVisionVisible(true);
    }, 1800);
    
    return () => clearTimeout(timer);
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
  
  const firstCardsY = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["100vh", "0vh"]
  );
  
  const secondCardsY = useTransform(
    scrollYProgress,
    [0.74, 0.95],
    ["100vh", "0vh"]
  );
  
  // Card data with logos
  const firstCardsData = [
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Educate", 
      description: "Unlock possibility. We champion education for every child—especially girls bridging the digital divide and building a future where knowledge creates new worlds." 
    },
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovate", 
      description: "Healthcare, reimagined. We bring breakthrough access and awareness to rural communities, making wellness a right, not a privilege." 
    },
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborate", 
      description: "Impact is connection. We empower communities with skills and training, turning potential into independence and resilience for generations." 
    }
  ];
  
  const secondCardsData = [
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M8 3.935l-6 5.997V15a2 2 0 002 2h3" />
        </svg>
      ),
      title: "Champion Equality", 
      description: "Empowerment isn't given it's unleashed. We create bold spaces for women to rise, unlocking half the world's true potential." 
    },
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Mental Strength", 
      description: "Mental health, made visible. We break barriers and build access, redefining wellness for every mind, everywhere." 
    },
    { 
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FF6309]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Bridge Worlds", 
      description: "Progress is shared. We unite business and community, forging connections where growth lifts everyone." 
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Vision Section - 100vh */}
        <section ref={visionRef} className="h-screen relative bg-gradient-to-b from-[#FF6309] to-[#FF8E16] flex items-center justify-center sticky top-0">
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
        <section className="h-screen flex bg-gradient-to-b from-[#FF6309] to-[#FF8E16] items-center justify-center sticky top-0">
        <div className="absolute inset-0 left-0 top-0 w-full h-full">
              <img src="https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="vision-bg" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          <motion.div 
            ref={missionTitleRef}
            style={{ y: missionTitleY }}
            className="text-center"
          >
            <motion.h2 className="text-5xl md:text-7xl z-[50]  absolute inset-0  top-80 font-title font-light text-[#fbfbfb] "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              >Our Mission</motion.h2>
          </motion.div>
        </section>

        {/* First Cards Section - floating cards sliding from bottom */}
        <section className="h-screen relative md:bg-transparent flex items-center justify-center sticky top-0">
        <div className="md:hidden absolute inset-0 left-0 top-0 w-full h-full">
              <img src="https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="vision-bg" className="w-full h-full object-cover" />
          </div>
          <div className="absolute md:hidden inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          <motion.div 
            ref={firstCardsRef}
            style={{ y: firstCardsY }}
            className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 z-10"
          >
            {firstCardsData.map((card, index) => (
              <motion.div 
                whileHover={{scale: 1.05, transition: {duration: 0.5}}}
                key={index}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.4, 0.6 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className={`bg-[#000000] md:min-w-[342px] p-4 rounded-xl shadow-xl relative overflow-hidden h-[380px] gap-[10px] flex flex-col justify-between`}
              >
                
                <div className="flex flex-col rounded-xl border-2 border-[#fbfbfb] px-4 py-2 justify-between h-full items-center justify-center gap-[10px]">
                <div className="flex flex-col  items-center mb-4">
                  {card.logo}
                </div>
                <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-4 text-center">{card.title}</h3>
                <p className="text-[#fbfbfb] font-paragraph min-w-[266px] text-center relative z-10 flex-grow overflow-y-auto">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Second Cards Section - centered cards sliding from bottom */}
        <section className="h-[100vh] bg-transparent flex items-center justify-center sticky top-0">
          <motion.div 
            ref={secondCardsRef}
            style={{ y: secondCardsY }}
            className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
          >
            {secondCardsData.map((card, index) => (
              <motion.div 
                key={index}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.75, 0.95 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className={`bg-[#000] md:min-w-[342px] p-4 rounded-xl shadow-xl relative overflow-hidden h-[380px] flex flex-col justify-between`}
              >
                
                <div className="flex flex-col rounded-xl border-2 border-[#fbfbfb] px-4 py-2 justify-between h-full items-center justify-center gap-[10px]">
                <div className="flex flex-col  items-center mb-4">
                  {card.logo}
                </div>
                <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-4 text-center">{card.title}</h3>
                <p className="text-[#fbfbfb] font-paragraph min-w-[266px] text-center relative z-10 flex-grow overflow-y-auto">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Extra height to ensure scrolling works properly */}
        <div className="h-screen">
        </div>
      </div>
    </LogoRevealWrapper>
  );
}