'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import HomePage from './HomePage';

export default function LandingPage() {
  const [showTextSection, setShowTextSection] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [homePageScrollEnabled, setHomePageScrollEnabled] = useState(false);
  const containerRef = useRef(null);
  const animationSectionRef = useRef(null);
  const mainVideoRef = useRef(null);
  const secondORef = useRef(null);
  const innovationRef = useRef(null);
  const homePageRef = useRef(null);
  
  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
    
    // Ensure videos play when mounted
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(e => console.error("Main video play error:", e));
    }
  }, []);
  
  // Effect for ensuring videos play on browsers that restrict autoplay
  useEffect(() => {
    const handleInteraction = () => {
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
  
  // Main scroll progress for the animation section
  const { scrollYProgress } = useScroll({
    target: animationSectionRef,
    offset: ["start start", "end start"]
  });
  
  // Full page scroll progress
  const { scrollYProgress: fullPageScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Track scroll progress for fine-grained control
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollRatio(latest);
    console.log("Scroll progress:", latest); // For debugging
  });
  
  // Helper function for mapping scroll values
  const mapScrollToValue = (ratio, start, end) => 
    Math.min(1, Math.max(0, (ratio - start) / (end - start)));
  
  // COMPRESSED ANIMATION TIMELINE
  // Background image fade out as user scrolls
  const initialBackgroundOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  
  // First heading reveal and fade with 3D transforms
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35], [1, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.35], [0, -50]);
  const headingZ = useTransform(scrollYProgress, [0.2, 0.35], [0, 30]);
  const headingRotateX = useTransform(scrollYProgress, [0.2, 0.35], [0, -10]);
  
  // Individual letter reveal animations with perspective
  const letter1Opacity = useTransform(scrollYProgress, [0.05, 0.08], [0, 1]); // I
  const letter2Opacity = useTransform(scrollYProgress, [0.08, 0.11], [0, 1]); // N
  const letter3Opacity = useTransform(scrollYProgress, [0.11, 0.14], [0, 1]); // N
  const letter4Opacity = useTransform(scrollYProgress, [0.14, 0.17], [0, 1]); // O
  const letter5Opacity = useTransform(scrollYProgress, [0.17, 0.20], [0, 1]); // V
  const letter6Opacity = useTransform(scrollYProgress, [0.20, 0.23], [0, 1]); // A
  const letter7Opacity = useTransform(scrollYProgress, [0.23, 0.26], [0, 1]); // T
  const letter8Opacity = useTransform(scrollYProgress, [0.26, 0.29], [0, 1]); // I
  const letter9Opacity = useTransform(scrollYProgress, [0.29, 0.32], [0, 1]); // O - this is the second O
  const letter10Opacity = useTransform(scrollYProgress, [0.32, 0.35], [0, 1]); // N
  
  // 3D rotation effects for the letters - compressed
  const letterRotateY = useTransform(scrollYProgress, [0.32, 0.35], [0, -15]);
  const letterZ = useTransform(scrollYProgress, [0.32, 0.35], [0, 50]);
  
  // Word complete animation with 3D perspective - compressed
  const wordCompleteScale = useTransform(scrollYProgress, [0.32, 0.36], [1, 1.2]);
  const wordOpacity = useTransform(scrollYProgress, [0.36, 0.40], [1, 0]);
  
  // Video in the last O (second O)
  const secondOVideoOpacity = useTransform(scrollYProgress, [0.29, 0.32], [0, 1]);
  
  // Main video and expansion - compressed
  const mainVideoOpacity = useTransform(scrollYProgress, [0.40, 0.45], [0, 1]);
  
  // Expanding O animation - compressed
  const expandingOOpacity = useTransform(scrollYProgress, [0.35, 0.38, 0.42], [0, 1, 0]);
  const expandingOScale = useTransform(scrollYProgress, [0.35, 0.42], [1, 35]);
  const expandingORotateY = useTransform(scrollYProgress, [0.35, 0.40], [0, -15]);
  const expandingOZ = useTransform(scrollYProgress, [0.35, 0.40], [0, 100]);
  
  // Text section appears earlier and animations complete sooner
  const textSectionOpacity = useTransform(scrollYProgress, [0.42, 0.45], [0, 1]);
  
  // First text animation - compressed timeline
  const firstTextClipPath = useTransform(
    scrollYProgress, 
    [0.45, 0.55], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  
  const firstTextX = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["-50%", "0%"]
  );
  
  // Second text animation - compressed timeline
  const secondTextClipPath = useTransform(
    scrollYProgress, 
    [0.55, 0.65], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  
  const secondTextX = useTransform(
    scrollYProgress,
    [0.55, 0.65],
    ["-50%", "0%"]
  );
  
  // Pause after second text, before homepage - shorter gap
  const homePageY = useTransform(
    scrollYProgress, 
    [0.70, 0.85],
    ["100vh", "0vh"]
  );
  
  const homePageOpacity = useTransform(
    scrollYProgress,
    [0.70, 0.78],
    [0, 1]
  );
  
  // Track position of second O for centering the expanding O
  const [secondOPosition, setSecondOPosition] = useState({ top: 0, left: 0 });
  
  useEffect(() => {
    // Update second O position for the expanding O animation with continuous tracking
    if (secondORef.current && isMounted) {
      const updatePosition = () => {
        if (!secondORef.current) return;
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
  }, [isMounted]);
  
  // Updated trigger points for compressed timeline
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      // Text section appears after INNOVATION word fades
      if (v > 0.42) {
        setShowTextSection(true);
      } else {
        setShowTextSection(false);
      }
      
      // Homepage appears after second text completes
      if (v > 0.70) {
        setShowHomepage(true);
      } else {
        setShowHomepage(false);
      }
      
      // Animation completes sooner
      if (v > 0.80) {
        setAnimationComplete(true);
        setHomePageScrollEnabled(true);
      } else {
        setAnimationComplete(false);
        setHomePageScrollEnabled(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Handle the transition between main scroll and HomePage scroll
  useEffect(() => {
    const handleScroll = (e) => {
      // Prevent default scroll behavior when we want HomePage to take over
      if (animationComplete && !homePageScrollEnabled) {
        const scrollPos = window.scrollY;
        const threshold = animationSectionRef.current.offsetHeight;
        
        if (scrollPos >= threshold) {
          // Set fixed position at the transition point
          document.body.style.overflow = 'hidden';
          setHomePageScrollEnabled(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationComplete, homePageScrollEnabled]);
  
  // Unlock scrolling once animation is complete and user scrolls to HomePage
  useEffect(() => {
    if (homePageScrollEnabled) {
      document.body.style.overflow = '';
    }
  }, [homePageScrollEnabled]);
  
  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Animation section - REDUCED height for easier scrolling */}
      <div ref={animationSectionRef} className="relative h-[400vh]">
        {/* Fixed viewport elements */}
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-visible will-change-transform">
          {/* Initial background image that covers both navigation and hero */}
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-2"
            style={{ 
              opacity: initialBackgroundOpacity,
              backgroundImage: 'url(https://www.blueforest.org/wp-content/uploads/2024/02/hero-one.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text readability - made slightly less opaque */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>
          
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
              className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
              style={{ 
                opacity: headingOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              What if there was a way to empower lives through
            </motion.h2>
            
            {/* INNOVATION word with 3D perspective */}
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
              <div className="flex items-center tracking-normal relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-bold text-[#F4720B]">
                {/* Each letter with its own reveal animation and 3D transform */}
                <motion.span style={{ opacity: letter1Opacity, transformStyle: "preserve-3d" }}>I</motion.span>
                <motion.span style={{ opacity: letter2Opacity, transformStyle: "preserve-3d" }}>N</motion.span>
                <motion.span style={{ opacity: letter3Opacity, transformStyle: "preserve-3d" }}>N</motion.span>
                <motion.span style={{ opacity: letter4Opacity, transformStyle: "preserve-3d" }}>O</motion.span>
                <motion.span style={{ opacity: letter5Opacity, transformStyle: "preserve-3d" }}>V</motion.span>
                <motion.span style={{ opacity: letter6Opacity, transformStyle: "preserve-3d" }}>A</motion.span>
                <motion.span style={{ opacity: letter7Opacity, transformStyle: "preserve-3d" }}>T</motion.span>
                <motion.span style={{ opacity: letter8Opacity, transformStyle: "preserve-3d" }}>I</motion.span>
                
                {/* Second O with video - this one will expand */}
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
                        ref={mainVideoRef}
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
              className="font-montserrat text-xl md:text-2xl mt-6 text-[#F4720B]"
              style={{ 
                opacity: wordOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              Scroll to explore our mission
            </motion.p>
          </motion.div>
          
          {/* Expanding O - centered on the second O position */}
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
              ease: [0.33, 1, 0.68, 1]
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
                className="w-full h-full object-cover"
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
            
            {/* Overlay with improved animation - adjusted to avoid white background appearance */}
            <motion.div 
              className="absolute inset-0 bg-[#264653]"
              style={{
                opacity: useTransform(mainVideoOpacity, [0, 0.5], [0, 0.6]),
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
        
        {/* Text Section - Always rendered but controlled by opacity */}
        <motion.section 
          className="fixed top-0 left-0 w-full h-screen z-20 flex items-center justify-center"
          style={{ 
            opacity: textSectionOpacity,
            display: showTextSection ? "flex" : "none" 
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl px-6 md:px-0 text-center text-[#F8F9FA]">
            {/* First phrase with scroll-based left-to-right reveal */}
            <motion.div className="overflow-hidden mb-6">
              <motion.h2
                className="font-cormorant text-4xl md:text-6xl font-bold leading-tight relative inline-block"
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
                className="font-montserrat text-xl relative inline-block"
                style={{
                  clipPath: secondTextClipPath,
                  x: secondTextX
                }}
              >
                Honoring Jaskaran Bothra&apos;s legacy of compassion and innovation
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      {/* HomePage Content - Always rendered but controlled by opacity and transform */}
      <motion.div
        ref={homePageRef}
        className="relative w-full"
        style={{ 
          y: homePageY,
          opacity: homePageOpacity,
          zIndex: 100,
          pointerEvents: animationComplete ? "auto" : "none",
          display: showHomepage ? "block" : "none"
        }}
        transition={{
          y: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 1.8, ease: [0.33, 1, 0.68, 1] }
        }}
      >
        {/* HomePage container without scroll overflow */}
        <div className={`w-full bg-[#F8F9FA] ${homePageScrollEnabled ? "" : "h-screen overflow-hidden"}`}>
          {isMounted && <HomePage />}
        </div>
      </motion.div>
    </div>
  );
}