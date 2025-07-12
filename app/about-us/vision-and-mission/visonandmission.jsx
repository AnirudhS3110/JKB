"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';
import Image from 'next/image';

export default function VisionAndMissionPage() {
  // State to control the animation trigger
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Refs for each section
  const visionRef = useRef(null);
  const missionTitleRef = useRef(null);
  
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
  
  // Mission data with descriptions and images
  const missionData = [
    { 
      title: "Accessibility",
      content: "To advance social equity through inclusive development and accessible infrastructure for persons with disabilities.",
      image: "https://plus.unsplash.com/premium_photo-1681490461418-7eb9f5675339?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjY2Vzc2liaWxpdHl8ZW58MHx8MHx8fDA%3D",
      alt: "Person using a wheelchair accessing a ramp"
    },
    { 
      title: "Empower",
      content: "To empower women and girls, especially in underserved areas, through education, sustainability, and leadership initiatives.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Professional woman in leadership position"
    },
    { 
      title: "Mental Wellness",
      content: "To foster mental well-being by breaking stigma and promoting mindful, community-based support.",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Person meditating in a peaceful setting"
    },
    { 
      title: "Healthcare Access",
      content: "To bridge healthcare disparities by delivering state-of-the-art medical diagnostics and services to rural regions, free of cost.",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Medical professional with diagnostic equipment"
    },
    { 
      title: "Crisis Relief",
      content: "To respond swiftly to crises with humanitarian aid and long-term rehabilitation support.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Volunteers distributing aid packages during crisis"
    },
    { 
      title: "Heritage",
      content: "To honour legacies of national importance by preserving and promoting the stories of exemplary individuals through commemorative stamps, coins, and publications.",
      image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Historic architecture and cultural heritage site"
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative bg-white">
        {/* Vision Section - 100vh */}
        <section ref={visionRef} className="h-screen relative bg-white flex items-center justify-center sticky top-0">
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

        {/* Mission Title Section - just a heading */}
        <section className="bg-white py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-5xl md:text-7xl font-title font-light text-black mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.h2>
            
            {/* Separator line */}
            <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
          </div>
        </section>

        {/* Mission Content Section - Styled like About Us page */}
        <section className="bg-white relative z-10 pb-24">
          <div className="max-w-7xl mx-auto px-6 bg-white">
            <motion.h2 
              className="text-4xl font-heading font-light text-black mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Key Focus Areas
            </motion.h2>
            
            {/* Separator line */}
            {/* <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div> */}
            
            {/* Mission Cards in Zig-Zag Layout */}
            <div className="space-y-24 mt-16 bg-white">
              {missionData.map((mission, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center relative py-8 md:py-12 bg-white`}
                >
                  {/* Background Shape */}
                  <div className={`absolute -z-10 rounded-3xl bg-gray-50 h-full w-[95%] ${index % 2 === 0 ? 'right-0' : 'left-0'} opacity-50`}></div>
                  
                  {/* Mission Image */}
                  <div className="w-full md:w-2/5">
                    <div className={`relative overflow-hidden rounded-2xl shadow-xl mx-auto max-w-sm aspect-[3/4] group ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#F4720B]/20 to-[#F4720B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <Image 
                        src={mission.image}
                        alt={mission.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <p className="text-sm font-medium uppercase tracking-wider text-center">{mission.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Content */}
                  <div className="w-full md:w-3/5 space-y-6 px-4 md:px-6 bg-white">
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-3xl font-heading font-medium text-black">{mission.title}</h3>
                      <div className="w-24 h-1 bg-[#F4720B]/70 my-4 mx-auto md:mx-0"></div>
                    </div>
                    
                    <p className="text-gray-800 font-paragraph text-lg md:text-xl leading-relaxed text-center md:text-left text-[20px] lg:text-[20px] xl:text-[26px]">{mission.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Extra height to ensure scrolling works properly */}
        
      </div>
    </LogoRevealWrapper>
  );
}