'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import HomePage from './HomePage';

export default function LandingPage() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const mainVideoRef = useRef(null);
  const secondORef = useRef(null);
  const innovationRef = useRef(null);
  const overlayRef = useRef(null);
  
  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
    
    // Ensure videos play when mounted
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play error:", e));
    }
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(e => console.error("Main video play error:", e));
    }
  }, []);
  
  // Effect for ensuring videos play on browsers that restrict autoplay
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => {});
      }
      if (mainVideoRef.current) {
        mainVideoRef.current.play().catch(e => {});
      }
      
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [isMounted]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // For overlay effect
  const { scrollYProgress: overlayScrollProgress } = useScroll({
    target: overlayRef,
    offset: ["start end", "end start"]
  });
  
  // Track scroll progress for fine-grained control (Farm Africa style)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollRatio(latest);
  });
  
  // Helper function for mapping scroll values (similar to Farm Africa's approach)
  const mapScrollToValue = (ratio, start, end) => 
    Math.min(1, Math.max(0, (ratio - start) / (end - start)));
  
  // Farm Africa style animation transforms with 3D effects
  // First heading reveal and fade with 3D transforms
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.55], [1, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.45], [0, -50]);
  const headingZ = useTransform(scrollYProgress, [0.2, 0.45], [0, 30]);
  const headingRotateX = useTransform(scrollYProgress, [0.3, 0.45], [0, -10]);
  
  // Individual letter reveal animations with perspective
  // Each letter appears as we scroll, then the word completes
  const letter1Opacity = useTransform(scrollYProgress, [0.05, 0.09], [0, 1]); // I
  const letter2Opacity = useTransform(scrollYProgress, [0.08, 0.12], [0, 1]); // N
  const letter3Opacity = useTransform(scrollYProgress, [0.11, 0.15], [0, 1]); // N
  const letter4Opacity = useTransform(scrollYProgress, [0.14, 0.18], [0, 1]); // O
  const letter5Opacity = useTransform(scrollYProgress, [0.17, 0.21], [0, 1]); // V
  const letter6Opacity = useTransform(scrollYProgress, [0.20, 0.24], [0, 1]); // A
  const letter7Opacity = useTransform(scrollYProgress, [0.23, 0.27], [0, 1]); // T
  const letter8Opacity = useTransform(scrollYProgress, [0.26, 0.30], [0, 1]); // I
  const letter9Opacity = useTransform(scrollYProgress, [0.29, 0.33], [0, 1]); // O - this is the second O
  const letter10Opacity = useTransform(scrollYProgress, [0.32, 0.36], [0, 1]); // N
  
  // 3D rotation effects for the letters
  const letterRotateY = useTransform(scrollYProgress, [0.36, 0.42], [0, -15]);
  const letterZ = useTransform(scrollYProgress, [0.36, 0.42], [0, 50]);
  
  // Word complete animation with 3D perspective
  const wordCompleteScale = useTransform(scrollYProgress, [0.36, 0.42], [1, 1.2]);
  const wordOpacity = useTransform(scrollYProgress, [0.42, 0.55], [1, 0]);
  
  // The first O video reveal
  const firstOVideoOpacity = useTransform(scrollYProgress, [0.14, 0.19, 0.42, 0.55], [0, 1, 1, 0]);
  
  // The second O video reveal - this is the one that will expand
  const secondOVideoOpacity = useTransform(scrollYProgress, [0.29, 0.33, 0.42, 0.48], [0, 1, 1, 0]);
  
  // Main video and expansion - extended for smoother transition
  const mainVideoOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  
  // Expanding O animation - now from the second O with 3D transforms
  const expandingOOpacity = useTransform(scrollYProgress, [0.4, 0.48, 0.65], [0, 1, 0]);
  const expandingOScale = useTransform(scrollYProgress, [0.44, 0.7], [1, 35]);
  const expandingORotateY = useTransform(scrollYProgress, [0.44, 0.55], [0, -15]);
  const expandingOZ = useTransform(scrollYProgress, [0.44, 0.55], [0, 100]);
  
  // HomePage overlay effect - Blue Forest style
  const overlayY = useTransform(overlayScrollProgress, [0, 0.5], ["100%", "0%"]);
  const overlayOpacity = useTransform(overlayScrollProgress, [0, 0.3], [0, 1]);
  
  // After the overlay is fully visible, we want it to scroll normally
  const overlayFixed = useTransform(
    overlayScrollProgress,
    (value) => value <= 0.5
  );
  
  // Text reveal animations - defined at the top level
  const firstTextClipPath = useTransform(
    scrollYProgress, 
    [0.60, 0.80], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const firstTextX = useTransform(
    scrollYProgress,
    [0.60, 0.80],
    ["-50%", "0%"]
  );
  
  const secondTextClipPath = useTransform(
    scrollYProgress, 
    [0.80, 0.96], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const secondTextX = useTransform(
    scrollYProgress,
    [0.80, 0.96],
    ["-50%", "0%"]
  );
  
  // Track position of second O for centering the expanding O
  const [secondOPosition, setSecondOPosition] = useState({ top: 0, left: 0 });
  
  useEffect(() => {
    // Update second O position for the expanding O animation with continuous tracking
    if (secondORef.current && isMounted) {
      const updatePosition = () => {
        if (!secondORef.current) return; // Add null check here
        const rect = secondORef.current.getBoundingClientRect();
        // Use functional update to avoid dependency on previous state
        setSecondOPosition(() => ({
          top: rect.top + rect.height / 2,
          left: rect.left + rect.width / 2
        }));
      };
      
      // Initial position
      updatePosition();
      
      // Use a more efficient event handling with requestAnimationFrame
      let rafId;
      const handleScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updatePosition);
      };
      
      const handleResize = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updatePosition);
      };
      
      // Update on scroll and resize for more accurate positioning
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isMounted]); // Remove scrollRatio from dependencies
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      if (v > 0.75) {  // Adjusted timing to match slower video transition
        setShowHomepage(true);
      } else {
        setShowHomepage(false);
      }
      
      if (v > 0.9) {
        setAnimationComplete(true);
      } else {
        setAnimationComplete(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <>
      <div ref={containerRef} className="relative h-[400vh] bg-[#000000]">
        {/* Main container with Farm Africa style sticky viewport */}
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-visible will-change-transform">
          {/* Heading Text with 3D transforms */}
          <motion.div 
            className="text-center text-[#F8F9FA] max-w-6xl px-6 relative z-10"
            style={{ 
              y: headingY,
              z: headingZ,
              rotateX: headingRotateX,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            {/* First part of heading */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
              style={{ 
                opacity: headingOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              What if there was a way to empower lives through
            </motion.h2>
            
            {/* INNOVATION word with Farm Africa style 3D perspective */}
            <motion.div 
              ref={innovationRef}
              className="flex justify-center items-center overflow-visible" 
              style={{ 
                scale: wordCompleteScale,
                opacity: wordOpacity,
                rotateY: letterRotateY,
                z: letterZ,
                position: "relative",
                transformStyle: "preserve-3d",
                perspective: 1000,
                willChange: "transform, opacity"
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              <div className="flex items-center tracking-normal relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F4720B]">
                {/* Each letter with its own reveal animation and 3D transform */}
                <motion.span style={{ opacity: letter1Opacity, transformStyle: "preserve-3d" }}>I</motion.span>
                <motion.span style={{ opacity: letter2Opacity, transformStyle: "preserve-3d" }}>N</motion.span>
                <motion.span style={{ opacity: letter3Opacity, transformStyle: "preserve-3d" }}>N</motion.span>
                
                {/* O with video - regular sized */}
                <motion.div 
                  className="relative inline-flex items-center justify-center"
                  style={{ 
                    opacity: letter4Opacity,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.span className="relative inline-block">
                    O
                  </motion.span>
                  
                  <motion.div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{ 
                      opacity: firstOVideoOpacity,
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    {isMounted && (
                      <video
                        ref={videoRef}
                        className="absolute w-[300%] h-[300%] object-cover"
                        style={{
                          top: '-100%',
                          left: '-100%',
                          transform: 'scale(1.05)',
                          transformOrigin: 'center center'
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/videos/impact-video.mp4" type="video/mp4" />
                      </video>
                    )}
                  </motion.div>
                </motion.div>
                
                <motion.span style={{ opacity: letter5Opacity, transformStyle: "preserve-3d" }}>V</motion.span>
                <motion.span style={{ opacity: letter6Opacity, transformStyle: "preserve-3d" }}>A</motion.span>
                <motion.span style={{ opacity: letter7Opacity, transformStyle: "preserve-3d" }}>T</motion.span>
                <motion.span style={{ opacity: letter8Opacity, transformStyle: "preserve-3d" }}>I</motion.span>
                
                {/* Second O with video - this will expand */}
                <motion.div 
                  ref={secondORef}
                  className="relative inline-flex items-center justify-center"
                  style={{ 
                    opacity: letter9Opacity,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.span className="relative inline-block">
                    O
                  </motion.span>
                  
                  <motion.div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{ 
                      opacity: secondOVideoOpacity,
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    {isMounted && (
                      <video
                        className="absolute w-[300%] h-[300%] object-cover"
                        style={{
                          top: '-100%',
                          left: '-100%',
                          transform: 'scale(1.05)',
                          transformOrigin: 'center center'
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/videos/impact-video.mp4" type="video/mp4" />
                      </video>
                    )}
                  </motion.div>
                </motion.div>
                
                <motion.span style={{ opacity: letter10Opacity, transformStyle: "preserve-3d" }}>N</motion.span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl mt-6 text-[#F4720B]"
              style={{ 
                opacity: wordOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              Scroll to explore our mission
            </motion.p>
          </motion.div>
          
          {/* Expanding O - now with 3D transforms like Farm Africa */}
          <motion.div
            className="fixed z-5 flex items-center justify-center"
            style={{ 
              opacity: expandingOOpacity,
              scale: expandingOScale,
              rotateY: expandingORotateY,
              z: expandingOZ,
              top: `${secondOPosition.top}px`,
              left: `${secondOPosition.left}px`,
              transform: 'translate(-50%, -50%)',
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform, opacity"
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.33, 1, 0.68, 1]  // Custom cubic-bezier for film-like motion
            }}
          >
            <div className="relative rounded-full overflow-hidden" style={{ width: '130px', height: '130px' }}>
              {isMounted && (
                <video
                  className="absolute w-full h-full object-cover"
                  style={{
                    transform: 'scale(1.05)',
                    transformOrigin: 'center center',
                    willChange: "transform"
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/impact-video.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>
        
          {/* Full screen video appears with performance optimizations */}
          <motion.div 
            className="fixed top-0 left-0 w-full h-screen z-0"
            style={{ 
              opacity: mainVideoOpacity,
              willChange: "opacity" 
            }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {isMounted && (
              <video 
                ref={mainVideoRef}
                className="w-full h-full object-cover"
                style={{
                  transform: 'scale(1.05)', // Match HomePage video scale
                  transformOrigin: 'center center',
                  willChange: "transform"
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/videos/impact-video.mp4" type="video/mp4" />
              </video>
            )}
            
            {/* Overlay with improved animation */}
            <motion.div 
              className="absolute inset-0 bg-[#264653]"
              style={{
                opacity: useTransform(mainVideoOpacity, [0, 1], [0, 0.6]),
                willChange: "opacity"
              }}
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0.6, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        >
          <svg className="w-10 h-10 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        
        {/* Homepage Teaser - Appears when scrolled enough */}
        {showHomepage && (
          <motion.section 
            className="fixed top-0 left-0 w-full h-screen z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl px-6 md:px-0 text-center text-[#F8F9FA]">
              {/* First phrase with scroll-based left-to-right reveal */}
              <motion.div className="overflow-hidden mb-6">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold leading-tight relative inline-block"
                  style={{
                    clipPath: firstTextClipPath,
                    x: firstTextX
                  }}
                >
                  Creating lasting change through sustainable initiatives
                </motion.h2>
              </motion.div>
              
              {/* Second phrase with scroll-based left-to-right reveal */}
              <motion.div className="overflow-hidden">
                <motion.p
                  className="text-xl relative inline-block"
                  style={{
                    clipPath: secondTextClipPath,
                    x: secondTextX
                  }}
                >
                  Honoring Jaskaran Bothra's legacy of compassion and innovation
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </div>
      
      {/* Overlay section with HomePage content - Blue Forest style */}
      <div ref={overlayRef} className="min-h-[300vh]">
        <motion.div
          className="fixed top-0 left-0 w-full h-screen z-40 bg-[#F8F9FA] overflow-y-auto"
          style={{ 
            y: overlayY,
            opacity: overlayOpacity,
            position: "fixed" // Keep it fixed to prevent it from scrolling away
          }}
          transition={{ 
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {isMounted && <HomePage />}
        </motion.div>
        
        {/* Additional scrollable space after the HomePage is shown */}
        <div className="pt-[100vh]">
          {/* This empty space allows scrolling to continue after HomePage is shown */}
        </div>
      </div>
    </>
  );
}