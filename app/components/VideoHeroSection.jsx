'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
  
  return (
    <section 
      ref={videoSectionRef}
      className="h-full overflow-hidden flex items-center justify-center  "
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
      <div className="relative z-10 max-w-4xl px-6 md:px-0 text-right text-white ml-auto mr-8">
        {/* First phrase with reveal animation */}
        <motion.div 
          className="overflow-hidden mb-6"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-dm-serif-text font-title text-4xl md:text-6xl font-normal tracking-wide leading-tight relative inline-block"
            variants={firstTextSlide}
          >
            Driving <span className="text-[#F47E28]">impactful</span> change
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden mb-8"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
        >
          <motion.p
            className="font-paragraph text-xl md:text-2xl relative inline-block"
            variants={secondTextSlide}
          >
            Through innovative solutions and collaborative partnerships
          </motion.p>
        </motion.div>
        
        {/* Additional text from the original animation */}
        <motion.div 
          className="overflow-hidden mt-16 mb-6"
          initial="hidden"
          animate={videoInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-dm-serif-text font-title text-4xl md:text-6xl font-normal tracking-wide leading-tight relative inline-block"
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
            Creating lasting change through sustainable initiatives
          </motion.h2>
        </motion.div>
        
        {/* Second phrase with reveal animation */}
        <motion.div 
          className="overflow-hidden"
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
      </div>
    </section>
  );
} 