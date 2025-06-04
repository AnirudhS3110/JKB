'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import LogoRevealWrapper from './LogoReveal';

export default function CampaignPage({ 
  title, 
  subtitle, 
  description, 
  heroImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  campaignImage = "/images/temp/campaign-image.jpg",
  titleSize ="md:text-6xl"
}) {
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
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src={heroImage}
                alt={title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-20 text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">{title}</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                {subtitle}
              </p>
            </motion.div>
          </div>
  
          {/* Scroll indicator positioned at bottom center */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              duration: 0.8 
            }}
            onClick={() => {
              document.getElementById('campaign-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Learn More
            </span>
            
            {/* Simple circular button with arrow */}
            <div className="relative h-14 w-14 flex items-center justify-center">
              <div className="absolute h-full w-full rounded-full bg-[#F4720B] opacity-20 animate-ping"></div>
              <motion.div 
                className="h-14 w-14 rounded-full bg-[#F4720B] flex items-center justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                {/* Down arrow icon */}
                <svg 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </section>
  
        {/* Main Content Section - Sticky with higher z-index */}
        <section className="min-h-screen sticky top-0 z-20">
          {/* Using motion.div with y transform to create the sliding effect */}
          <motion.div
            style={{ y: contentY }}
            className="w-full h-full bg-[#fbfbfb] pt-24 pb-24"
            id="campaign-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Campaign Overview - Based on Figma Design */}
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                {/* Left side image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[1/1]">
                    {/* Gradient overlay as in Figma */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F9]/0 via-[#FCC793]/14 to-[#FF8103]/47 z-10"></div>
                    <Image 
                      src={campaignImage}
                      alt={title}
                      width={830}
                      height={844}
                      className="object-cover rounded-3xl"
                    />
                  </div>
                </div>
                
                {/* Right side content */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Subtitle */}
                    <h3 className="font-sans text-lg md:text-2xl font-light text-[#F4720B] uppercase tracking-wide">
                      {subtitle}
                    </h3>
                    
                    {/* Title Group */}
                    <div className="space-y-2">
                      <h2 className={`font-serif text-4xl md:text-6xl font-normal text-[#F4720B] ${titleSize}`}>
                        {title}
                      </h2>
                      <div className="w-full h-2 bg-[#F4720B] rounded-full"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg md:text-2xl text-[#000000] font-serif leading-relaxed mt-8">
                      {description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-[50vh] bg-[#fbfbfb]"></div>
      </div>
    </LogoRevealWrapper>
  );
} 