'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

export default function GovernmentCivicPartnership() {
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
    [0.05, 0.2],  // Start animation at 5% scroll, finish at 20%
    ["100vh", "0vh"]  // Start from 100vh below viewport to 0vh (normal position)
  );

  // Partnership data
  const partnershipData = {
    title: "Government & Civic Partnerships",
    tagline: "Collaborative policy for systemic change",
    who: "Government bodies, local authorities, civic organizations, policy advocates",
    description: "Our Government & Civic partnerships leverage policy frameworks and public resources to create sustainable, systemic change. By collaborating with government agencies and civic organizations, we integrate grassroots insights with policy implementation to address social challenges at scale.",
    howToPartner: [
      "Co-develop policy frameworks and implementation models for social inclusion",
      "Create public-private partnership structures for healthcare or education",
      "Collaborate on community-based governance and civic participation initiatives"
    ],
    image: "/images/partnership/government-civic.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  };

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt={partnershipData.title} 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">{partnershipData.title}</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                {partnershipData.tagline}. Partner with us to create policy-driven solutions for social challenges.
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
              document.getElementById('partnership-details').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Explore Partnership Details
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
  
        {/* Content Section - Sticky with higher z-index */}
        <section className="min-h-screen sticky top-0 z-20">
          {/* Using motion.div with y transform to create the sliding effect */}
          <motion.div
            style={{ y: contentY }}
            className="w-full h-full bg-[#fbfbfb] pt-24 pb-24"
            ref={sectionRef}
            id="partnership-details"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Header section */}
              <div className="mb-16">
                <motion.div 
                  className="flex items-center mb-8 gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <div className="text-[#F4720B]">
                      {partnershipData.icon}
                    </div>
                  </div>
                  <h2 className="text-4xl font-heading font-light text-black">
                    {partnershipData.title}
                  </h2>
                </motion.div>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mb-8"></div>
                
                <p className="text-lg text-gray-700 max-w-3xl font-paragraph mb-12">
                  {partnershipData.description}
                </p>
              </div>
              
              {/* Partnership details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                {/* Who can partner */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-l-[#F4720B]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-light text-gray-800 mb-4">Who Can Partner With Us</h3>
                  <p className="text-gray-700 font-paragraph mb-6">{partnershipData.who}</p>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-paragraph">These partnerships are ideal for public sector bodies seeking to collaborate with grassroots insights and community organizations</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* How to partner */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-l-[#F4720B]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-light text-gray-800 mb-4">How You Can Partner</h3>
                  <ul className="space-y-4 mb-6">
                    {partnershipData.howToPartner.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#F4720B] mr-3 font-bold">●</span>
                        <span className="text-gray-700 font-paragraph">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-paragraph">Our civic partnerships focus on creating policy frameworks that enable sustainable community-driven change</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Partnership example or case study */}
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Government & civic collaboration" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-light text-gray-800 mb-3">Policy in Action</h3>
                    <p className="text-gray-700 font-paragraph mb-6">
                      Our civic partnerships have led to innovative policy frameworks that bridge community needs with government resources. By working closely with local authorities, we've developed inclusive approaches to healthcare access, education initiatives, and community development.
                    </p>
                    <p className="text-gray-700 font-paragraph">
                      These partnerships create sustainable change by embedding community voices within policy design and implementation processes.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* CTA section */}
              <motion.div 
                className="bg-[#F4720B] text-white p-12 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-heading font-light mb-4">Ready to Create Policy Change?</h3>
                <p className="text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
                  Join our network of civic partners and help us develop policy frameworks for lasting social impact.
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
              </motion.div>
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-screen bg-[#fbfbfb]"></div>
      </div>
    </LogoRevealWrapper>
  );
} 