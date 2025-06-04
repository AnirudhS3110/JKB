'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import LogoRevealWrapper from '@/components/ui/LogoReveal';

export default function HonoringJaskaranBothra() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const legacyTitleRef = useRef(null);
  const firstCardsRef = useRef(null);
  const secondCardsRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeroInView = useInView(heroRef, { once: true });
  
  // State to ensure animations run on load
  const [animationReady, setAnimationReady] = useState(false);
  
  // Ensure animations run even if InView doesn't trigger properly
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 1000); // Delay to allow page to load
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform values for sliding animations
  const firstCardsY = useTransform(
    scrollYProgress,
    [0.2, 0.4],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );
  
  const secondCardsY = useTransform(
    scrollYProgress,
    [0.6, 0.8],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );

  // First set of cards
  const firstCardsData = [
    {
      title: "Compassionate Leader",
      content: "Dedicated over 30 years to community service, touching countless lives through mentorship and charitable work that continues to inspire generations.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    },
    {
      title: "Education & Healthcare",
      content: "Shri Jaskaran Bothra has always advocated for girls' education and healthcare for the underprivileged. He consistently worked towards building institutions that today provide education to many in need.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      )
    }
  ];
  
  // Second set of cards
  const secondCardsData = [
    {
      title: "Freedom Fighter",
      content: "Shri Bothra participated actively in the Indian Independence Movement, especially in the boycott of imported clothes, a nationwide campaign. He was involved in the Swadeshi movement in Kolkata.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      )
    },
    {
      title: "Recognized Legacy",
      content: "In recognition of his extensive social service, the Akhil Bharatiya Sadhumargi Jain Sangh posthumously awarded him the 'Atulya Seva Puraskar' in Chennai.",
      icon: (
        <div className="bg-[#FF6309] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden sticky top-0">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="/images/BG-201.png" 
              alt="Jaskaran Bothra Ancestral Haveli"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>
          </div>
          
          <div className="relative z-10 h-full w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2 }}
                className="mb-3"
              >
                <span className="text-[#F4720B] text-xl uppercase tracking-widest font-light">Honoring</span>
              </motion.div>
              
              <motion.div
                initial={{ width: 0 }}
                animate={(isHeroInView || animationReady) ? { width: "70px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-[#F4720B] mb-8"
              ></motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2 }}
                className="text-5xl md:text-7xl lg:text-8xl text-[#F4720B] font-title font-light tracking-tight mb-6"
              >
                Jaskaran Bothra
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-xl md:text-2xl text-[#fbfbfb] max-w-2xl font-paragraph font-light"
              >
                A life dedicated to education, healthcare, freedom, and spiritual values
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Life & Legacy Title Section - similar to Mission Title Section in visonandmission.jsx */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-[#FF6309] to-[#FF8E16] sticky top-0">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            {/* <img
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80"
              alt="legacy-bg" 
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-[black] opacity-0"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <motion.h2 
              ref={legacyTitleRef}
              className="text-5xl md:text-7xl font-title font-light text-[#fbfbfb] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Life & Legacy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-[#fbfbfb] font-paragraph"
            >
              The extraordinary journey and contributions that shaped communities
            </motion.p>
          </div>
        </section>
        
        {/* First Cards Section - floating cards sliding from bottom */}
        <section className="h-screen relative md:bg-transparent flex items-center justify-center sticky top-0">
          {/* Mobile-only background for first cards */}
          <div className="md:hidden bg-gradient-to-r from-[#FF6309] to-[#FF8E16] absolute inset-0 left-0 top-0 w-full h-full">
            {/* <img
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80"
              alt="legacy-bg" 
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="absolute md:hidden inset-0 left-0 top-0 w-full h-full bg-black opacity-20"></div>
          
          {/* Mobile: First set of cards */}
          <div className="md:hidden max-w-6xl w-full mx-auto flex flex-col items-center justify-center gap-4 px-6 z-10">
            {firstCardsData.map((card, index) => (
              <motion.div 
                key={`mobile-first-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={(isInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                className="bg-white p-8 max-h-[450px] rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 transform -translate-y-2">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-gray-900 mb-2 text-center">{card.title}</h3>
                  <div className="w-16 h-1 bg-[#FF6309] mb-6"></div>
                  <p className="text-gray-700 font-paragraph text-center">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden h-[80vh] bg-gradient-to-r from-[#FF6309] to-[#FF8E16] relative"></div>
          
          {/* Desktop: First set sliding cards */}
          <motion.div 
            ref={firstCardsRef}
            style={{ y: firstCardsY }}
            className="hidden md:flex max-w-6xl w-full mx-auto justify-around gap-8 px-6 z-10"
          >
            {firstCardsData.map((card, index) => (
              <motion.div 
                whileHover={{scale: 1.02, transition: {duration: 0.3}}}
                key={`desktop-first-${index}`}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.2, 0.4 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className="bg-[#fbfbfb] min-w-[200px] max-w-[400px] p-8 rounded-lg shadow-lg relative overflow-hidden min-h-[380px]"
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
        
        {/* Second Cards Section - floating cards sliding from bottom */}
        <section className="h-screen relative  md:bg-transparent flex items-center justify-center sticky top-0">
          {/* Mobile-only background for second cards */}
          <div className="md:hidden absolute bg-gradient-to-r from-[#FF6309] to-[#FF8E16] inset-0 left-0 top-0 w-full h-full min-h-[120vh]">
            {/* <img
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80"
              alt="legacy-bg" 
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="absolute md:hidden inset-0 left-0 top-0 w-full h-full bg-black opacity-10"></div>
          
          {/* Mobile: Second set of cards */}
          <div className="md:hidden max-w-6xl w-full mx-auto grid grid-cols-1 gap-8 px-6 z-10">
            {secondCardsData.map((card, index) => (
              <motion.div 
                key={`mobile-second-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={(isInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 transform -translate-y-2">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-gray-900 mb-2 text-center">{card.title}</h3>
                  <div className="w-16 h-1 bg-[#FF6309] mb-6"></div>
                  <p className="text-gray-700 font-paragraph text-center">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop: Second set sliding cards */}
          <motion.div 
            ref={secondCardsRef}
            style={{ y: secondCardsY }}
            className="hidden md:flex justify-around max-w-6xl w-full mx-auto gap-8 px-6 z-10"
          >
            {secondCardsData.map((card, index) => (
              <motion.div 
                whileHover={{scale: 1.02, transition: {duration: 0.3}}}
                key={`desktop-second-${index}`}
                style={{ 
                  translateY: useTransform(
                    scrollYProgress,
                    [0.4, 0.6 + (index * 0.028)],
                    ["50vh", "0vh"]
                  )
                }}
                className="bg-white min-w-[200px] max-w-[400px] p-8 rounded-lg shadow-lg relative overflow-hidden min-h-[380px]"
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
        
        {/* Extra height to help unstick cards */}
        <div className="h-screen bg-transparent"></div>
      </div>
    </LogoRevealWrapper>
  );
}
