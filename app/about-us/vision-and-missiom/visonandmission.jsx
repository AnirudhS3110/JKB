"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '@/app/components/Footer';

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
    // Small delay to ensure animation starts after page load
    const timer = setTimeout(() => {
      setIsVisionVisible(true);
    }, 500);
    
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
  
  return (
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
          <motion.h2 className="text-5xl md:text-7xl z-[50] font-title font-light text-[#fbfbfb] "
            
            >Our Mission</motion.h2>
        </motion.div>
      </section>

      {/* First Cards Section - floating cards sliding from bottom */}
      <section className="h-screen relative bg-transparent flex items-center justify-center sticky top-0">
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-title font-light text-[#000000] opacity-20">Our Mission</h2>
        </div> */}
        
        <motion.div 
       
          ref={firstCardsRef}
          style={{ y: firstCardsY }}
          className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 z-10"
        >
          {[
            { title: "Educate", description: "Unlock possibility. We champion education for every child—especially girls bridging the digital divide and building a future where knowledge creates new worlds." },
            { title: "Innovate", description: "Healthcare, reimagined. We bring breakthrough access and awareness to rural communities, making wellness a right, not a privilege." },
            { title: "Collaborate", description: "Impact is connection. We empower communities with skills and training, turning potential into independence and resilience for generations." }
          ].map((card, index) => (
            <motion.div 
              key={index}
              style={{ 
                translateY: useTransform(
                  scrollYProgress,
                  [0.4, 0.6 + (index * 0.028)],
                  ["50vh", "0vh"]
                )
              }}
              className={`bg-[#000000] md:min-w-[342px] p-8 rounded-xl shadow-xl relative overflow-hidden h-[300px] flex flex-col justify-between`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FF6309]/10 -mr-8 -mt-8"></div>
              <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-5">{card.title}</h3>
              <p className="text-[#fbfbfb] font-paragraph min-w-[266px] relative z-10 flex-grow overflow-y-auto pr-1">{card.description}</p>
              <div className="h-1 w-16 bg-[#FF6309] mt-6 rounded-full"></div>
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
          {[
            { title: "Champion Equality", description: "Empowerment isn't given it's unleashed. We create bold spaces for women to rise, unlocking half the world's true potential." },
            { title: "Mental Strength", description: "Mental health, made visible. We break barriers and build access, redefining wellness for every mind, everywhere." },
            { title: "Bridge Worlds", description: "Progress is shared. We unite business and community, forging connections where growth lifts everyone." }
          ].map((card, index) => (
            <motion.div 
              key={index}
              style={{ 
                translateY: useTransform(
                  scrollYProgress,
                  [0.75, 0.95 + (index * 0.028)],
                  ["50vh", "0vh"]
                )
              }}
              className={`bg-[#000000] md:min-w-[342px] p-8 rounded-xl shadow-xl relative overflow-hidden h-[300px] flex flex-col justify-between`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FF6309]/10 -mr-8 -mt-8"></div>
              <h3 className="text-2xl font-title font-medium text-[#FF6309] mb-5">{card.title}</h3>
              <p className="text-[#fbfbfb] font-paragraph min-w-[266px] relative z-10 flex-grow overflow-y-auto pr-1">{card.description}</p>
              <div className="h-1 w-16 bg-[#FF6309] mt-6 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      
      {/* Extra height to ensure scrolling works properly */}
      <div className="h-screen">
      </div>
      
      
    </div>
  );
}