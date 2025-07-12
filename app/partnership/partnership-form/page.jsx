'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LogoRevealWrapper from '@/components/ui/LogoReveal';
import HeroSection from './HeroSection';
import WhyPartnerSection from './WhyPartnerSection';
import PartnershipTypesSection from './PartnershipTypesSection';
import FormSection from './FormSection';

export default function Page() {
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"]
  });
  
  // Transform values for sliding animations
  const contentY = useTransform(
    scrollYProgress,
    [0.05, 0.18],
    ["100vh", "0vh"]
  );

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        <HeroSection />
        
        {/* Main Content Section - Sticky with higher z-index */}
        <section className="min-h-screen sticky top-0 z-20">
          {/* Using motion.div with y transform to create the sliding effect */}
          <motion.div
            style={{ y: contentY }}
            className="w-full h-full bg-[#fbfbfb]"
            id="content"
          >
            <WhyPartnerSection />
            <PartnershipTypesSection />
            <FormSection />
          </motion.div>
        </section>
        
        {/* Extra space for scroll */}
        <div className="h-[20vh] bg-[#fbfbfb]"></div>
      </div>
    </LogoRevealWrapper>
  );
}
