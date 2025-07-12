'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import UpcomingCampaigns from './UpcomingCampaigns';
import AboutUsSection from './AboutUs';
import PartnershipOpportunities from './PartnershipOpportunities';
import NewsResources from './NewsResources';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import ForestHero from './ForestHero';
import ImpactCounter from './ImpactCounter';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import HeroParallaxDemo from '@/components/ui/hero-parallax-demo';
import FounderTribute from './FounderTribute';
import TimelineDemo from '@/components/timeline-demo';
import ContactusSection from './Contactus';
import { gsap } from 'gsap';
import FeaturedNewsCard from '@/components/ui/FeaturedNewsCard';
import Link from 'next/link';
import FeaturedNewsSection from './FeaturedNewsSection';
import Image from 'next/image';

export default function HomePage() {
  const containerRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [animationReady, setAnimationReady] = useState(false);
  const isInView2 = useInView(ctaSectionRef, { once: false, amount: 0.2 });
  
  // Set animation ready immediately 
  useEffect(() => {
    // Short timeout to make sure everything is ready
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <style jsx global>{`
        .fixed.right-0.top-1\\/2.bg-gray-800, 
        .fixed.right-0.top-1\\/2 {
          display: none !important;
        }
      `}</style>
      
      <div ref={containerRef} style={{ position: 'relative'  }}>
        {/* Main Content */}
        <div className="bg-white">
          {/* Hero section */}
          <section className="min-h-screen bg-[#FF7322] flex flex-col justify-center">
            <div className="relative container mx-auto px-6 min-h-screen flex flex-col justify-center">
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

          <FounderTribute/>

          <section id="about" >
            <AboutUsSection/>
          </section>
          
          {/* Apple Cards Carousel Section */}
          <section id="impact" className="hidden md:block bg-white relative">
            <AppleCardsCarouselDemo />
          </section>
          
          <WhatWeDo/>
          <ImpactCounter/>
          
          {/* Timeline Section */}
          <section id="our-journey" className="relative w-full">
            <FeaturedNewsSection/>
          </section>
          
          {/* Partnership Opportunities Section */}
          <section id="partnership" className="relative">
            <PartnershipOpportunities />
            <div ref={ctaSectionRef} className="max-w-7xl hidden md:block mx-auto px-4 pb-12 sm:px-6 mt-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-[#F4720B] text-white p-10 md:p-12 rounded-lg relative overflow-hidden shadow-md"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
          </div>
          
          {/* Decorative SVG Elements */}
          <div className="absolute top-4 left-4 text-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 8H16L12 2Z" />
              <path d="M12 22L8 16H16L12 22Z" />
              <path d="M2 12L8 8V16L2 12Z" />
              <path d="M22 12L16 8V16L22 12Z" />
            </svg>
          </div>
          
          <div className="absolute bottom-4 right-4 text-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="mx-auto mb-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-title font-light mb-4">Join Our Mission</h3>
            <p className="text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
             JKBF welcomes forward-thinking collaborators who share our commitment to dignity, inclusion, and sustainable impact. Partner with us not just to support—but to shape—the future.
            </p>
            
              <Link 
                href="/partnership/partnership-form" 
              className="inline-flex items-center bg-white text-[#F4720B] font-paragraph px-8 py-3 rounded-md hover:bg-orange-50 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Become a Partner
              </Link>
            </div>
          </motion.div>
      </div>
          </section>

          {/* Hero Parallax Section */}
          <section className="hidden md:block bg-white relative">
            <HeroParallaxDemo />
          </section>
          
          {/* Contact Us Section */}
          <section id="contact" className="relative">
            <ContactusSection />
          </section>
          
          {/* News and Resources Section */}
          <section id="news" className="relative">
            <NewsResources />
          </section>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}