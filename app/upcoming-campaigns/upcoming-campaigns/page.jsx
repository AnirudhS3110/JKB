'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

const ZigZagCampaign = ({ title, date, description, image, status, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24 items-center`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative overflow-hidden group">
        <div className="relative h-[350px] md:h-[480px] w-full">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        {/* Status indicator - only shown on mobile */}
        
      </div>
      
      {/* Content Section */}
      <div className={`w-full md:w-1/2 p-4 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
        {/* Status indicator with dot - desktop only */}
        
        
        {/* Date */}
        
        
        {/* Campaign title */}
        <h3 className="text-3xl font-heading font-light text-black mb-4">{title}</h3>
        
        {/* Description - now full length without clamp */}
        <p className="text-gray-600 mb-6 font-paragraph font-normal leading-relaxed md:text-[22px]">
          {description}
        </p>
        
        {/* Goals/Objectives */}
        {/* <div className="mb-6">
          <h4 className="text-lg font-title font-light mb-3">Our Objectives:</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#F4720B] mr-3"></div>
              <span className="font-paragraph">Create sustainable impact in underserved communities</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#F4720B] mr-3"></div>
              <span className="font-paragraph">Establish long-term partnerships with local organizations</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#F4720B] mr-3"></div>
              <span className="font-paragraph">Develop scalable solutions that address root causes</span>
            </li>
          </ul>
        </div> */}
        
        {/* Enroll button */}
        {/* <div className="mt-6">
          <button className="bg-[#F4720B] text-white font-paragraph px-8 py-3 hover:bg-[#E05900] transition-all">
            Enroll Now
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default function UpcomingCampaignsPage() {
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform values for sliding animations - similar to factsandfigures.js
  // This makes the second section slide up from below the viewport
  const campaignsY = useTransform(
    scrollYProgress,
    [0.05, 0.2],  // Start animation at 5% scroll, finish at 20%
    ["100vh", "0vh"]  // Start from 100vh below viewport to 0vh (normal position)
  );
  
  const campaigns = [
    {
      id: 1,
      title: "Accessible Futures",
      date: "Launching August 2024",
      description: "This campaign promotes a world without physical and societal barriers for persons with disabilities. Through awareness, accessibility initiatives, and inclusive infrastructure, JKBF envisions a future where everyone can thrive with dignity and opportunity.",
      image: "/images/Accessible.jpg",
      status: "Coming Soon"
    },
    // {
    //   id: 2,
    //   title: "SHE for Sustainability: Support Her Empowerment",
    //   date: "Launching September 2024",
    //   description: "This initiative celebrates and uplifts women at the forefront of sustainability—particularly those driving change through rural self-employment and community-based environmental solutions. SHE for Sustainability advances gender equity by empowering women to become agents of ecological and social transformation, fostering a more resilient and sustainable future for all.",
    //   image: "/images/SHEpic.jpg", 
    //   status: "Coming Soon"
    // },
    {
      id: 3,
      title: "You Are Not Alone",
      date: "Launching October 2024",
      description: "Rooted in Buddhist philosophy and compassion, this mental wellness campaign aims to break the stigma around mental health. It offers support, awareness, and resources to ensure no one walks the journey alone.",
      image: "/images/YouNot.jpg",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Health Beyond Boundaries",
      date: "Launching November 2024",
      description: "Focused on providing advanced medical technology and diagnostic services to rural India—free of cost. This campaign ensures that geography never becomes a barrier to health and well-being.",
      image: "/images/HealthBeyondBoundaries.jpg",
      status: "Planning Phase"
    },
    {
      id: 5,
      title: "Hope in Crisis",
      date: "Launching December 2024",
      description: "JKBF responds to natural and humanitarian crises with timely aid, shelter, healthcare, and emotional support. Hope in Crisis is our commitment to stand by those who need help the most—when they need it most.",
      image: "/images/HopeInCrisis.jpg",
      status: "Planning Phase"
    },
    // {
    //   id: 6,
    //   title: "Eternal Flame Campaign",
    //   date: "Launching January 2025",
    //   description: "This national recognition campaign seeks to immortalize great personalities through postal stamps, commemorative coins, public spaces, and published biographies—ensuring their contributions continue to inspire future generations.",
    //     image: "/images/EternalFlame.jpg",
    //   status: "Planning Phase"
    // },
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Upcoming Campaigns" 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Upcoming Campaigns</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                Discover our upcoming initiatives and how you can be part of creating lasting change through sustainable action.
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
              document.getElementById('campaigns').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Discover Our Campaigns
            </span>
            
            {/* Simple circular button with arrow - matching screenshot */}
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
  
        {/* Campaigns Zig-Zag Section - Sticky with higher z-index */}
        <section className="min-h-screen sticky top-0 z-10">
          {/* Using motion.div with y transform to create the sliding effect */}
          <motion.div
            style={{ y: campaignsY }}
            className="w-full h-full bg-[#fbfbfb] pt-24 pb-24"
            ref={sectionRef}
            id="campaigns"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Header section */}
              <div className="mb-16 text-center">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Campaigns on the Horizon
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-6"></div>
                
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-paragraph">
                  Explore our upcoming initiatives designed to create meaningful impact through sustainable solutions and community collaboration.
                </p>
              </div>
              
              {/* Zig-zag campaign layout */}
              <div className="mt-16">
                {campaigns.map((campaign, index) => (
                  <ZigZagCampaign 
                    key={campaign.id} 
                    {...campaign} 
                    index={index}
                  />
                ))}
              </div>
              
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-screen bg-[#fbfbfb]"></div>
      </div>
    </LogoRevealWrapper>
  );
} 