'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

const VisionCard = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-36 bg-gradient-to-r from-[#F4720B] to-[#F4720B]/80">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden shadow-lg flex items-center justify-center bg-white">
            <div className="text-[#F4720B] w-full h-full flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8 pt-16 text-center flex-grow flex flex-col">
        <h3 className="text-2xl font-heading font-medium text-black mb-4">{title}</h3>
        <div className="w-12 h-0.5 bg-gray-200 mb-5 mx-auto"></div>
        <p className="text-gray-600 font-paragraph font-normal leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default function VisionMissionPage() {
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });
  
  // Transform values for sliding animations
  const contentY = useTransform(
    scrollYProgress,
    [0.05, 0.2],
    ["100vh", "0vh"]
  );
  
  const visionPoints = [
    {
      id: 1,
      title: "Inclusive Society",
      description: "To build an inclusive, compassionate, and empowered society where every individual—regardless of gender, ability, or geography—has the opportunity to thrive with dignity.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
    },
    {
      id: 2,
      title: "Sustainable Impact",
      description: "To create lasting, sustainable impact through evidence-based initiatives that address the root causes of social challenges rather than just their symptoms.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
    },
    {
      id: 3,
      title: "Collaborative Solutions",
      description: "To foster multi-stakeholder collaborations that leverage collective expertise, resources, and innovation to amplify social impact and reach.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
    },
    {
      id: 4,
      title: "Empowered Communities",
      description: "To empower communities to become agents of their own development, equipped with the knowledge, skills, and resources to sustain positive change.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
    }
  ];

  const missionPoints = [
    "To bridge corporate growth and community development.",
    "To promote education for the girl child.",
    "To strengthen rural healthcare access.",
    "To encourage sustainable livelihoods through skill development.",
    "To advocate for women empowerment.",
    "To promote mental health awareness."
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
                src="/images/vision-mission-hero.jpg" 
                alt="Vision and Mission" 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Vision & Mission</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                Our guiding principles and commitments to creating lasting change.
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
              document.getElementById('vision-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Discover Our Vision
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
            ref={sectionRef}
            id="vision-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Vision Section */}
              <div className="mb-24">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Vision
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                <div className="max-w-4xl mx-auto mb-16">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-xl text-center text-gray-700 mb-6 font-paragraph leading-relaxed"
                  >
                    To build an inclusive, compassionate, and empowered society where every individual—regardless of gender, ability, or geography—has the opportunity to thrive with dignity.
                  </motion.p>
                </div>
                
                {/* Vision Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {visionPoints.map((point, index) => (
                    <VisionCard 
                      key={point.id} 
                      {...point} 
                      index={index}
                    />
                  ))}
                </div>
              </div>
              
              {/* Mission Section */}
              <div className="mt-24">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Our Mission
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                {/* Mission Content */}
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-6"
                  >
                    <ul className="space-y-4">
                      {missionPoints.map((point, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-[#F4720B] mr-3 text-2xl">•</span>
                          <span className="text-lg text-gray-700 font-paragraph">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#F4720B]">
                      <p className="text-gray-700 italic font-paragraph">
                        "His vision emphasized not charity, but creating opportunities for people to become independent contributors to society."
                      </p>
                      <p className="text-right mt-2 text-gray-500 font-paragraph">— In memory of Late Shri Jaskaran Bothra</p>
                    </div>
                  </motion.div>
                </div>
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