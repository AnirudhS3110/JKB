'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import UpcomingCampaigns from './UpcomingCampaigns';
import AboutUsSection from './AboutUs';
import PartnershipOpportunities from './PartnershipOpportunities';
import NewsResources from './NewsResources';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import ImpactCounter from './ImpactCounter';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import HeroParallaxDemo from '@/components/ui/hero-parallax-demo';
import FounderTribute from './FounderTribute';
import TimelineDemo from '@/components/timeline-demo';
import { gsap } from 'gsap';

export default function HomePage() {
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const mainContentRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [animationReady, setAnimationReady] = useState(false);
  
  // Set animation ready immediately 
  useEffect(() => {
    // Short timeout to make sure everything is ready
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Removed ScrollSmoother effect that was causing errors
  
  return (
    <div>
      <style jsx global>{`
        .fixed.right-0.top-1\\/2.bg-gray-800, 
        .fixed.right-0.top-1\\/2 {
          display: none !important;
        }
      `}</style>
      
      <div className="relative bg-white" ref={containerRef} style={{ position: 'relative', overflowX: 'hidden' }}>
        {/* Content */}
        <motion.div 
          className="relative z-10" 
          style={{ position: 'relative' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero section */}
          <section 
            className="min-h-screen relative overflow-hidden bg-[#FF7322] flex flex-col justify-center"
          >
            <div className="relative container mx-auto px-6 min-h-screen flex flex-col justify-center" style={{ position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: animationReady ? 1 : 0, 
                  y: animationReady ? 0 : 50 
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-20"
              >
                <h2 className="text-white text-6xl sm:text-7xl md:text-8xl font-title font-light leading-tight tracking-tighter">
                  Change isn&apos;t coming.
                </h2>
                <h2 className="text-black text-6xl sm:text-7xl md:text-8xl font-heading font-light mt-2 leading-tight tracking-tighter">
                  <span className="text-black">It&apos;s </span><span className='text-white'>here</span>  <span className="text-black">.</span>
                </h2>
                
                <p className="text-white text-xl md:text-3xl mt-8 max-w-3xl font-paragraph leading-relaxed">
                  Join the campaigns that don&apos;t just promise tomorrow.
                  <br />They deliver it today.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Upcoming Campaigns Section */}
          <section id="upcoming-campaigns" className="relative">
            <UpcomingCampaigns />
          </section>

          <section id="our-impact" className="relative md:hidden">
            <AppleCardsCarouselDemo/>
          </section>

          
{/* 
          <section className='md:hidden'>
            <AboutUsSection/>
          </section> */}
          
          

          <FounderTribute/>

          <section >
            <AboutUsSection/>
          </section>
          
          {/* Apple Cards Carousel Section */}
          <section className="hidden md:block bg-white relative">
            <AppleCardsCarouselDemo />
          </section>
          
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

          {/* Hero Parallax Section */}
          <section className="hidden md:block bg-white relative">
            <HeroParallaxDemo />
          </section>
          
          {/* News and Resources Section */}
          <section id="news-resources" className="relative">
            <NewsResources />
          </section>

          <Footer />
        </motion.div>
      </div>
    </div>
  
  );
}