"use client"
// Import the new HeroLandingPage component instead
import HeroLandingPage from './HeroLandingPage';
// Keep the original import as a comment to preserve history
// import LandingAnimationHybrid from './LandingAnimation';
import HomePage from './HomePage';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoHeroSection from './VideoHeroSection';

export default function LandingPage() {
  // Refs for scroll tracking
  const containerRef = useRef(null);
  const heroContainerRef = useRef(null);
  // const homePageRef = useRef(null);
  
  // Set up scroll-based animation for HomePage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"]
  });
  
  // Transform values for sliding animations - similar to AboutUsPage.jsx
  // Start sliding HomePage from 100vh (off-screen) to 0vh (top of screen)
  // The values [0.4, 0.6] represent the scroll progress range during which the slide happens
  // const homePageY = useTransform(
  //   scrollYProgress,
  //   [0.7, 0.9], 
  //   ["100vh", "0vh"]
  // );
  
  // Handle hydration mismatch
  useEffect(() => {
    // This suppresses the hydration warning in development
    // It's a workaround for the user-select:"auto" issue that might be coming from a browser extension
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('Hydration failed because the initial UI does not match')) {
        return;
      }
      if (args[0]?.includes('There was an error while hydrating')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    return () => {
      console.error = originalError;
    };
  }, []);

  return(
    
      <div className=" w-full  " ref={containerRef}>
        {/* HeroLandingPage with sticky sections */}
        {/* <div ref={heroContainerRef}>
          
          
        </div> */}
        {/* <HeroLandingPage /> */}
  
        <section className='   w-screen  h-[100vh]  sticky top-0 z-[5]'>
          
        <VideoHeroSection />
        </section>
        <section className='w-screen   sticky top-0 z-10'>
        <HomePage />
        </section>
        {/* HomePage slides over the video section */}
        {/* <section className="min-h-screen sticky top-0 z-20">
          <motion.div
            ref={homePageRef}
            style={{ y: homePageY }}
            className="relative w-full h-full bg-white"
          >
            
          </motion.div>
        </section>
         */}
        {/* Extra space for scroll */}
        
      </div>
  );
}