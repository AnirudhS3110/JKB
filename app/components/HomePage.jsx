'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import UpcomingCampaigns from './UpcomingCampaigns';
import AboutUsSection from './AboutUs';
import PartnershipOpportunities from './PartnershipOpportunities';
import NewsResources from './NewsResources';
import FactsFigures from './FactsFigures';
import PersuasuveSection from './PersuasuveSection';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import ImpactCounter from './ImpactCounter';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import ForestHero from './ForestHero';
import HeroParallaxDemo from '@/components/ui/hero-parallax-demo';
import FounderTribute from './FounderTribute';
import TimelineDemo from '@/components/timeline-demo';

export default function HomePage() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const mainContentRef = useRef(null);
  const isInView = useInView(containerRef);
  
  // For main content scroll effects
  const { scrollYProgress: mainScrollProgress } = useScroll({
    target: mainContentRef,
    offset: ["start end", "end start"]
  });
  
  const mainTextOpacity = useTransform(mainScrollProgress, [0, 0.3], [0, 1]);
  const taglineY = useTransform(mainScrollProgress, [0, 1], ["30%", "0%"]);
  
  return (
    <div className="relative bg-white" ref={containerRef}>
      {/* Full screen background video from the O - styled to match ending of animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* <video 
          ref={videoRef}
          className="w-full h-full object-cover scale-110 grayscale" // Added grayscale filter
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: 'scale(1.05)',
            transformOrigin: 'center center'
          }}
        >
          <source src="/videos/impact-video.mp4" type="video/mp4" />
        </video> */}
        
        {/* Overlay to ensure text readability */}
        <motion.div 
          className="absolute inset-0 bg-white" 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero section */}
        <section 
          className="min-h-screen relative overflow-hidden bg-[#F4720B] flex flex-col justify-center"
        >
          <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="mb-20"
            >
              <h2 className="text-white text-6xl sm:text-7xl md:text-8xl font-cormorant font-semibold leading-tight tracking-tighter">
                Change isn&apos;t coming.
              </h2>
              <h2 className="text-black text-6xl sm:text-7xl md:text-8xl font-cormorant font-semibold mt-2 leading-tight tracking-tighter">
                <span className="text-balck">It&apos;s </span><span className='text-white'>here</span>  <span className="text-black">.</span>
              </h2>
              
              <p className="text-white text-xl md:text-3xl mt-8 max-w-3xl font-montserrat font-light leading-relaxed">
                Join the campaigns that don&apos;t just promise tomorrow.
                <br />They deliver it today.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute left-1/2 bottom-16 transform -translate-x-1/2"
              >
                <svg className="w-10 h-10 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

         {/* Upcoming Campaigns Section */}
         <section id="upcoming-campaigns" className="relative">
          <UpcomingCampaigns />
        </section>
        
        {/* Hero Parallax Section */}
        <section className="bg-white relative">
          <HeroParallaxDemo />
        </section>

        <FounderTribute/>
        <AboutUsSection/>

        
        {/* Apple Cards Carousel Section */}
        <section className="bg-white relative">
          <AppleCardsCarouselDemo />
        </section>
        
       
        {/* <PersuasuveSection /> */}
        
        {/* Facts and Figures Section */}
        {/* <section id="facts-figures" className="relative">
          <FactsFigures />
        </section> */}

        {/* <AboutUsSection /> */}
        <WhatWeDo/>
        <ImpactCounter/>
       
        
        {/* Timeline Section */}
        <section id="our-journey" className="relative w-full">
          <TimelineDemo 
            title="Our Journey"
            description="Tracking our progress and milestones in building a better future through sustainable initiatives."
          />
        </section>
        
        {/* Partnership Opportunities Section */}
        <section id="partnership" className="relative">
          <PartnershipOpportunities />
        </section>
        
        {/* News and Resources Section */}
        <section id="news-resources" className="relative">
          <NewsResources />
        </section>

         <Footer />
        
        {/*  */}
        
      </div>
     
    </div>
  );
} 