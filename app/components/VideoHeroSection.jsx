'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

// Define constants for the video animation
const VIDEO_SRC = "/videos/impact-video.mp4";

// Animation variants
const firstTextSlide = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", x: "-50%" },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)", 
    x: "0%",
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3
    } 
  }
};

const secondTextSlide = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", x: "-50%" },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)", 
    x: "0%",
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.6
    } 
  }
};

export default function VideoHeroSection() {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const videoInView = useInView(videoSectionRef, { once: false, amount: 0.3 });
  
  // Set animation ready immediately 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle autoplay on user interaction (for mobile)
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => {});
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [isMounted]);
  
  // Smooth scroll function
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Prevent default behavior
      event.preventDefault();
      
      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section 
      ref={videoSectionRef}
      className="h-full overflow-hidden flex items-center justify-start"
    >
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={videoInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {isMounted && (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{
              
              transformOrigin: 'center center'
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}
        {/* Overlay */}
        <div className="absolute h-full w-full inset-0 bg-[#000000] opacity-70"></div>
      </motion.div>
      
      {/* Text Overlay */}
      <div className="relative z-10 max-w-4xl px-6 md:px-10 text-left text-white ml-0 md:ml-4 lg:ml-8 lg:mt-[100px]">
        {/* Additional text from the original animation */}
        <motion.div 
          className="overflow-hidden"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-dm-serif-text font-title text-4xl md:text-6xl font-normal tracking-wide leading-[1.1] relative inline-block"
            variants={{
              ...firstTextSlide,
              visible: {
                ...firstTextSlide.visible,
                transition: {
                  ...firstTextSlide.visible.transition,
                  delay: 0.9
                }
              }
            }}
          >
            Creating lasting change through <span className="text-[#F4720B]">sustainable</span> initiatives
          </motion.h2>
        </motion.div>
        
        {/* Second phrase with reveal animation */}
        <motion.div 
          className="overflow-hidden lg:mt-12 mb-16"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
        >
          <motion.p
            className="font-merriweather font-paragraph text-xl italic relative inline-block"
            variants={{
              ...secondTextSlide,
              visible: {
                ...secondTextSlide.visible,
                transition: {
                  ...secondTextSlide.visible.transition,
                  delay: 1.2
                }
              }
            }}
          >
            Honoring Jaskaran Bothra's legacy of compassion and innovation
          </motion.p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 flex flex-col md:flex-row min-w-[251px] md:max-w-full gap-4"
        >
          <a href="#partnership" onClick={(e) => scrollToSection('upcoming-campaigns-ref')}>
            <button className="relative min-w-[251px] md:w-fit overflow-hidden cursor-pointer text-left w-fit bg-[#F4720B] border border-white text-[20px] text-white font-paragraph font-regular px-6 py-3 hover:bg-transparent transition-all duration-300 group">
              <span className="inline-block transition-transform duration-300 font-light group-hover:-translate-x-2">Explore Campaigns</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
          
          <a href="#partnership" onClick={(e) => scrollToSection('partnership')}>
            <button className="relative overflow-hidden cursor-pointer text-left w-fit bg-transparent border border-white text-[20px] text-white font-paragraph px-6 py-3 hover:bg-[#F4720B] transition-all duration-300 group">
              <span className="inline-block transition-transform duration-300 font-light group-hover:-translate-x-2">Explore Partnerships</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
} 