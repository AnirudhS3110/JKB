'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// Define constants for the SOLUTION animation
const VIDEO_SRC = "/videos/impact-video.mp4";

export default function DirectTransitionAnimation() {
  const [showTextSection, setShowTextSection] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [homePageScrollEnabled, setHomePageScrollEnabled] = useState(false);
  const containerRef = useRef(null);
  const animationSectionRef = useRef(null);
  const mainVideoRef = useRef(null);
  
  // Solution animation refs
  const solutionContainerRef = useRef(null);
  const oVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  
  // Solution animation dimensions state
  const [dimensions, setDimensions] = useState({
    requiredTranslationX: 0,
    requiredTranslationY: 0,
    originX: 75,
    originY: 50,
    initialPositionX: 0,
    initialPositionY: 0,
    finalPositionX: 0,
    finalPositionY: 0,
    scaleFactor: 1,
  });
  
  useEffect(() => {
    setIsMounted(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(e => console.error("Main video play error:", e));
    }
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch(e => console.error("Background video play error:", e));
    }
    if (oVideoRef.current) {
      oVideoRef.current.play().catch(e => console.error("O video play error:", e));
    }
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (mainVideoRef.current) {
        mainVideoRef.current.play().catch(e => {});
      }
      if (oVideoRef.current) {
        oVideoRef.current.play().catch(e => {});
      }
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play().catch(e => {});
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

  // Calculate positions and set transform-origin after mount (for SOLUTION animation)
  useEffect(() => {
    if (!isMounted) return;
    
    function calculatePositions() {
      const solutionContainer = solutionContainerRef.current;
      if (!solutionContainer) return;
      
      // Match exact values from HTML implementation
      const svgWidth = 498;
      const svgHeight = 104;
      const oPositionInSvgX = 378; // X coordinate of O in the SVG
      const oPositionInSvgY = 68;  // Y coordinate of O in the SVG
      
      // Get current dimensions and positions
      const rect = solutionContainer.getBoundingClientRect();
      
      // EXPLICITLY SET: Initial position of O relative to viewport (current position)
      // This matches the HTML implementation exactly
      const initialPositionX = rect.left + oPositionInSvgX * (rect.width / svgWidth);
      const initialPositionY = rect.top + oPositionInSvgY * (rect.height / svgHeight);
      
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewportCenterX = viewportWidth / 2;
      const viewportCenterY = viewportHeight / 2;
      
      // EXPLICITLY SET: Final position where O should be centered (center of viewport)
      const finalPositionX = viewportCenterX;
      const finalPositionY = viewportCenterY;
      
      // Calculate required translation to move from initial to final position
      const requiredTranslationX = finalPositionX - initialPositionX;
      const requiredTranslationY = finalPositionY - initialPositionY;
      
      // Set transform-origin to the "O" letter position
      const originX = (oPositionInSvgX / svgWidth) * 100; // Convert to percentage
      const originY = (oPositionInSvgY / svgHeight) * 100; // Convert to percentage
      
      // Set transform-origin directly on the element
      solutionContainer.style.transformOrigin = `${originX}% ${originY}%`;
      
      // Update state with all calculated values
      setDimensions({
        requiredTranslationX,
        requiredTranslationY,
        originX,
        originY,
        initialPositionX,
        initialPositionY,
        finalPositionX,
        finalPositionY,
        scaleFactor: 1,
      });
      
      // Log for debugging (can be removed in production)
      console.log(`Transform origin set to: ${originX}% ${originY}%`);
      console.log(`Initial position: ${initialPositionX}, ${initialPositionY}`);
      console.log(`Final position: ${finalPositionX}, ${finalPositionY}`);
      console.log(`Required translation: ${requiredTranslationX}, ${requiredTranslationY}`);
    }
    
    // Use a longer timeout to ensure all layout calculations are complete
    setTimeout(calculatePositions, 500);
    
    // Recalculate on resize
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, [isMounted]);

  const { scrollYProgress } = useScroll({
    target: animationSectionRef,
    offset: ["start start", "end start"]
  });
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // For debugging
    // console.log("Scroll progress:", latest);
  });

  // Animation timeline thresholds - adjusted to match HTML version precisely
  const timeline = {
    startZoom: 0,             
    oReachesCenter: 0.30,     
    videoFadeInStart: 0.15,   
    videoFadeInComplete: 0.40,
    wordGrowsSoLarge: 0.50,    // Adjusted to allow more growth
    videoFullscreen: 0.60,     // Direct transition to fullscreen
    textSectionStart: 0.60,    // Show text section after transition
    textSectionEnd: 0.63,
    firstTextIn: 0.63,       
    firstTextDone: 0.73,     
    secondTextIn: 0.73,      
    secondTextDone: 0.76,    
    homePageStart: 0.94,     
    homePageVisible: 0.98,   
    animationComplete: 1   
  };
  
  // Basic transforms
  const initialBackgroundOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35], [1, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.35], [0, -50]);
  const headingZ = useTransform(scrollYProgress, [0.2, 0.35], [0, 30]);
  const headingRotateX = useTransform(scrollYProgress, [0.2, 0.35], [0, -10]);
  
  // Solution word animation transforms - precisely adjusted for direct HTML-like transition
  const solutionScale = useTransform(
    scrollYProgress,
    [timeline.startZoom, timeline.wordGrowsSoLarge],
    [1, 35] // Increased to match HTML's 20x scale with some extra for full coverage
  );
  
  // Apply translation until the O is centered, then stop translating
  const translateX = useTransform(
    scrollYProgress,
    [0, timeline.oReachesCenter, timeline.oReachesCenter + 0.01, 1],
    [0, dimensions.requiredTranslationX, dimensions.requiredTranslationX, dimensions.requiredTranslationX]
  );
  
  const translateY = useTransform(
    scrollYProgress,
    [0, timeline.oReachesCenter, timeline.oReachesCenter + 0.01, 1],
    [0, dimensions.requiredTranslationY, dimensions.requiredTranslationY, dimensions.requiredTranslationY]
  );
  
  // Adjusted to create a smoother fade out matching HTML version
  const solutionOpacity = useTransform(
    scrollYProgress,
    [timeline.wordGrowsSoLarge - 0.1, timeline.videoFullscreen - 0.1],
    [1, 0]
  );
  
  // O video opacity fades in and stays visible longer
  const oVideoOpacity = useTransform(
    scrollYProgress,
    [timeline.videoFadeInStart, timeline.videoFadeInComplete],
    [0, 1]
  );
  
  // Fullscreen video fades in as solution word grows so large it fills screen
  // Adjusted to match the HTML timing
  const mainVideoOpacity = useTransform(
    scrollYProgress, 
    [timeline.wordGrowsSoLarge - 0.15, timeline.videoFullscreen - 0.15], 
    [0, 1]
  );
  
  // Text section fades in after video transition
  const textSectionOpacity = useTransform(
    scrollYProgress,
    [timeline.textSectionStart, timeline.textSectionEnd],
    [0, 1]
  );
  
  // Text animations
  const firstTextClipPath = useTransform(
    scrollYProgress, 
    [timeline.firstTextIn, timeline.firstTextDone], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  
  const firstTextX = useTransform(
    scrollYProgress,
    [timeline.firstTextIn, timeline.firstTextDone],
    ["-50%", "0%"]
  );
  
  const secondTextClipPath = useTransform(
    scrollYProgress, 
    [timeline.secondTextIn, timeline.secondTextDone], 
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  
  const secondTextX = useTransform(
    scrollYProgress,
    [timeline.secondTextIn, timeline.secondTextDone],
    ["-50%", "0%"]
  );
  
  const homePageY = useTransform(
    scrollYProgress, 
    [timeline.homePageStart, timeline.homePageVisible],
    ["100vh", "0vh"]
  );
  
  const homePageOpacity = useTransform(
    scrollYProgress,
    [timeline.homePageStart, timeline.homePageStart + 0.08],
    [0, 1]
  );
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      if (v > timeline.textSectionStart) {
        setShowTextSection(true);
      } else {
        setShowTextSection(false);
      }
      if (v > timeline.homePageStart) {
        setShowHomepage(true);
      } else {
        setShowHomepage(false);
      }
      if (v > timeline.animationComplete) {
        setAnimationComplete(true);
        setHomePageScrollEnabled(true);
      } else {
        setAnimationComplete(false);
        setHomePageScrollEnabled(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, timeline]);
  
  useEffect(() => {
    const handleScroll = (e) => {
      if (animationComplete && !homePageScrollEnabled) {
        const scrollPos = window.scrollY;
        const threshold = animationSectionRef.current.offsetHeight;
        if (scrollPos >= threshold) {
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
  
  useEffect(() => {
    if (homePageScrollEnabled) {
      document.body.style.overflow = '';
    }
  }, [homePageScrollEnabled]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div ref={animationSectionRef} className="relative h-[400vh]">
        {/* Fixed viewport elements */}
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-visible will-change-transform">
          {/* Initial background image that covers both navigation and hero */}
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-2"
            style={{ 
              opacity: initialBackgroundOpacity,
              backgroundImage: 'url(https://assets.lummi.ai/assets/QmYEhPnux1G3rqbVCHLPx1a8yMsKba2dzUasFZ79D8Sckz?auto=format&w=1500)',
              // Alternative high-quality background options:
              // Option 1 (diverse hands stacked together): 'url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
              // Option 2 (community volunteers stacking hands): 'url(https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80)'
              // Option 3 (hands forming heart shape): 'url(https://images.unsplash.com/photo-1469571486292-b53601020a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
              // Option 4 (silhouettes of people with raised arms): 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
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
              className="font-dm-serif-text font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight mb-2"
              style={{ 
                opacity: headingOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              Empowering communities with vision and compassion, because the right
            </motion.h2>
            
            {/* SOLUTION word animation replacing INNOVATION */}
            <motion.div
              className="flex justify-center items-center overflow-visible mb-4"
              style={{ 
                opacity: solutionOpacity,
                position: "relative",
                transformStyle: "preserve-3d",
                perspective: 1000,
                willChange: "transform, opacity",
                zIndex: 20 // Higher z-index during animation
              }}
            >
              <motion.span
                ref={solutionContainerRef}
                className="inline-block relative"
                style={{ 
                  scale: solutionScale,
                  x: translateX,
                  y: translateY,
                  transformOrigin: `${dimensions.originX}% ${dimensions.originY}%`,
                  willChange: "transform, opacity" 
                }}
              >
                {/* SVG with embedded video in the "O" */}
                <svg
                  className="w-full h-[32px] md:w-[345px] md:h-[72px] lg:w-[498px] lg:h-[104px] block"
                  
                  viewBox="0 0 498 104"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="o-hole-clip">
                      <path d="M380.559 96.1563C393.246 96.1563 401.126 85.8729 401.126 72.5179C401.126 55.6905 391.109 40.1987 376.552 40.1987C363.865 40.1987 355.986 50.3485 355.986 63.8371C355.986 80.5309 366.002 96.1563 380.559 96.1563Z" />
                    </clipPath>
                  </defs>
                  {/* SVG Letters */}
                  <path d="M11.7524 102.834C9.61558 102.834 8.54718 100.563 7.61233 98.5602L3.60586 90.013C1.20195 85.0716 0 83.2019 0 81.4657C0 79.596 1.06837 78.6612 2.67098 78.6612C4.00648 78.6612 5.47554 79.8631 6.81104 81.1986C15.3583 89.7459 24.7068 95.6221 34.5895 95.6221C43.4039 95.6221 48.8794 90.6807 48.8794 84.5374C48.8794 77.0586 41.5342 75.456 29.3811 72.6514C16.4267 69.4462 1.8697 65.3061 1.8697 52.0846C1.8697 41.9348 10.8176 33.9218 24.3062 33.9218C31.785 33.9218 37.5276 36.3257 39.6644 36.3257C41.9348 36.3257 41.9348 33.6547 44.4722 33.6547C46.7426 33.6547 47.9446 35.6579 49.4136 38.1954L53.8208 45.4071C55.2898 47.811 56.7589 50.6156 56.7589 52.0846C56.7589 53.6873 55.557 54.7557 54.2215 54.7557C52.886 54.7557 51.4169 53.4202 50.0814 52.2182C43.2703 45.9413 34.1889 40.7329 25.5081 40.7329C18.43 40.7329 14.0228 44.3387 14.0228 49.2801C14.0228 56.0912 20.2996 57.5602 33.5211 60.7654C47.4104 64.2377 61.0325 68.2442 61.0325 82.5341C61.0325 94.6872 50.2149 102.433 34.8566 102.433C25.7752 102.433 19.6319 99.495 17.4951 99.495C14.9576 99.495 14.6905 102.834 11.7524 102.834Z" fill="#F47E28" />
                  <path d="M101.707 103.368C81.2743 103.368 66.9844 88.9446 66.9844 68.6449C66.9844 48.0781 82.3427 32.8534 103.31 32.8534C123.743 32.8534 138.033 47.2768 138.033 67.8436C138.033 88.2768 122.541 103.368 101.707 103.368ZM104.512 96.1563C117.199 96.1563 125.079 85.8729 125.079 72.5179C125.079 55.6905 115.062 40.1987 100.506 40.1987C87.8182 40.1987 79.9387 50.3485 79.9387 63.8371C79.9387 80.5309 89.955 96.1563 104.512 96.1563Z" fill="#F47E28" />
                  <path d="M146.664 101.365C144.527 101.365 143.592 99.8957 143.592 98.6937C143.592 93.6188 152.006 97.4918 152.006 86.6742V19.6319C152.006 11.3518 142.523 15.8925 142.523 10.684C142.523 8.54722 144.794 6.94462 151.872 3.60586C158.683 0.400653 160.019 0 161.221 0C163.357 0 164.025 1.73616 164.025 4.67427V86.6742C164.025 97.4918 172.572 93.6188 172.572 98.6937C172.572 99.8957 171.771 101.365 169.768 101.365C166.83 101.365 162.823 100.964 158.015 100.964C153.341 100.964 149.602 101.365 146.664 101.365Z" fill="#F47E28" />
                  <path d="M242.881 83.7361C242.881 91.8827 253.832 89.8794 253.832 94.2866C253.832 96.824 251.428 98.1595 243.015 100.163C237.139 101.632 235.002 102.032 233.666 102.032C231.262 102.032 230.862 99.6286 230.862 97.4918V89.7458C226.588 96.6905 219.777 102.567 208.292 102.567C193.2 102.567 185.989 92.4169 185.989 76.6579V53.5537C185.989 45.5407 175.305 48.6123 175.305 43.8045C175.305 41.4006 177.575 40.0651 185.455 37.127C192.266 34.5895 194.002 34.3224 194.937 34.3224C197.741 34.3224 198.008 36.9935 198.008 39.1303V74.7882C198.008 85.4722 200.946 92.8175 212.298 92.8175C221.513 92.8175 230.862 86.0064 230.862 72.5179V53.5537C230.862 45.5407 219.109 48.8794 219.109 43.8045C219.109 41.5342 221.513 40.1987 230.327 36.9935C236.738 34.7231 239.008 34.3224 240.077 34.3224C242.481 34.3224 242.881 36.7264 242.881 39.1303V83.7361Z" fill="#F47E28" />
                  <path d="M302.595 86.8078C304.198 86.8078 305.266 88.1433 305.266 89.7459C305.266 91.3485 304.331 93.0846 302.595 94.9543C297.787 100.029 291.243 102.433 284.032 102.433C273.748 102.433 266.537 96.6905 266.537 89.8794C266.537 87.0749 266.804 76.7915 266.804 67.5765V42.469H258.123C255.719 42.469 254.25 41.4006 254.25 39.3974C254.25 37.6612 255.586 36.5928 257.722 35.658C265.735 32.3192 269.341 27.5114 272.413 15.3583C273.615 11.886 274.416 10.2834 276.419 10.2834C277.888 10.2834 278.823 11.3518 278.823 13.7557V35.3909H301.66C303.129 35.3909 303.931 36.0586 303.931 37.2606C303.931 38.1954 303.664 39.5309 303.53 40.3322C303.263 41.8013 302.462 42.469 301.126 42.469H278.823V81.1986C278.823 91.0814 282.696 94.0195 288.172 94.0195C293.647 94.0195 296.719 90.8143 299.39 88.5439C300.191 87.7426 301.393 86.8078 302.595 86.8078Z" fill="#F47E28" />
                  <path d="M319.229 20.0326C315.623 20.0326 312.151 17.6286 312.151 13.2215C312.151 8.14656 317.226 2.53745 323.903 2.53745C327.91 2.53745 331.382 5.0749 331.382 9.34851C331.382 14.4234 325.906 20.0326 319.229 20.0326ZM311.75 101.365C309.48 101.365 308.545 99.8957 308.545 98.6937C308.545 93.6188 316.959 97.4918 316.959 86.6742V53.9543C316.959 45.6742 307.477 50.2149 307.477 45.0065C307.477 42.8697 309.88 41.4006 316.825 38.0618C323.636 34.7231 325.105 34.3224 326.174 34.3224C328.31 34.3224 328.978 36.0586 328.978 38.9967V86.6742C328.978 97.4918 337.659 93.6188 337.659 98.6937C337.659 99.8957 336.724 101.365 334.721 101.365C331.783 101.365 327.776 100.964 322.968 100.964C318.294 100.964 314.555 101.365 311.75 101.365Z" fill="#F47E28" />
                  <path d="M377.754 103.368C357.321 103.368 343.031 88.9446 343.031 68.6449C343.031 48.0781 358.39 32.8534 379.357 32.8534C399.79 32.8534 414.08 47.2768 414.08 67.8436C414.08 88.2768 398.588 103.368 377.754 103.368ZM380.559 96.1563C393.246 96.1563 401.126 85.8729 401.126 72.5179C401.126 55.6905 391.109 40.1987 376.552 40.1987C363.865 40.1987 355.986 50.3485 355.986 63.8371C355.986 80.5309 366.002 96.1563 380.559 96.1563Z" fill="#F47E28" />
                  {/* Video inside the "O" hole */}
                  <foreignObject x="343" y="32" width="71" height="71" clipPath="url(#o-hole-clip)">
                    {isMounted && (
                      <video
                        ref={oVideoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ opacity: oVideoOpacity }}
                      >
                        <source src={VIDEO_SRC} type="video/mp4" />
                      </video>
                    )}
                  </foreignObject>
                  <path d="M487.616 85.3387C489.219 97.8924 497.365 93.4853 497.365 98.6938C497.365 100.563 495.763 101.365 493.626 101.365C490.154 101.365 487.349 100.964 482.007 100.964C476.532 100.964 474.128 101.365 470.522 101.365C468.118 101.365 466.782 100.163 466.782 98.5602C466.782 93.7524 475.73 96.9576 475.73 88.6775C475.73 87.6091 475.463 86.0065 475.33 84.671L472.124 62.1009C471.056 55.2899 468.652 44.0716 458.102 44.0716C450.089 44.0716 441.408 50.4821 441.408 64.1042V86.6742C441.408 97.4918 450.089 93.6188 450.089 98.6938C450.089 99.8957 449.154 101.365 447.15 101.365C444.212 101.365 440.206 100.964 435.398 100.964C430.724 100.964 426.984 101.365 424.18 101.365C421.909 101.365 420.975 99.8957 420.975 98.6938C420.975 93.6188 429.388 97.4918 429.388 86.6742V53.9544C429.388 45.6742 419.906 50.215 419.906 45.0065C419.906 42.8697 422.31 41.4006 429.255 38.0619C436.066 34.7231 437.535 34.3225 438.603 34.3225C440.74 34.3225 441.408 36.0586 441.408 38.9967V46.8762C445.681 39.9316 452.626 33.9218 462.909 33.9218C478.802 33.9218 482.675 49.4137 484.144 60.3648L487.616 85.3387Z" fill="#F47E28" />
                </svg>
              </motion.span>
            </motion.div>

            {/* "can change everything" text */}
            <motion.h2 
              className="font-dm-serif-text font-title text-4xl z-[5] sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight mb-2"
              style={{ 
                opacity: solutionOpacity,
                transformStyle: "preserve-3d" 
              }}
            >
              changes everything.
            </motion.h2>
          </motion.div>
          
          {/* Full screen video appears */}
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
                ref={backgroundVideoRef}
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
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            )}
            {/* Overlay with improved animation */}
            <motion.div 
              className="absolute inset-0 bg-[#264653] opacity-90 "
              style={{
                opacity: useTransform(mainVideoOpacity, [0, 0.5], [0, 0.6]),
                willChange: "opacity"
              }}
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
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
          className="fixed top-0 left-0 w-full h-screen z-8 flex items-center justify-center"
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
                className="font-dm-serif-text font-title text-4xl md:text-6xl font-normal tracking-wide leading-tight relative inline-block"
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
                className="font-merriweather font-paragraph text-xl italic relative inline-block"
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
      </div>
    </div>
  );
}