'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

export default function TechnologyInnovationPartnership() {
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
    title: "Technology & Innovation Partnerships",
    tagline: "Leveraging digital solutions for social good",
    who: "Tech companies, startups, innovation labs, digital solution providers",
    description: "Our Technology & Innovation partnerships harness digital tools and innovative approaches to scale social impact solutions. By collaborating with tech partners, we create accessible platforms, utilize data for insights, and develop technological solutions that address social challenges more effectively.",
    howToPartner: [
      "Develop digital platforms or mobile applications for social programs",
      "Provide technology expertise for improving access to education or healthcare",
      "Co-create innovative solutions leveraging emerging technologies"
    ],
    image: "/images/partnership/technology-innovation.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                {partnershipData.tagline}. Partner with us to build tech-driven solutions for social challenges.
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-paragraph">These partnerships are ideal for tech organizations looking to create social impact through digital innovation</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-paragraph">Our tech partnerships focus on accessible, scalable solutions that address social challenges effectively</p>
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
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Technology innovation collaboration" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-light text-gray-800 mb-3">Innovation in Action</h3>
                    <p className="text-gray-700 font-paragraph mb-6">
                      Our technology partnerships have created innovative digital solutions that amplify social impact. Through mobile apps, web platforms, and data-driven tools, we've expanded access to education, improved healthcare delivery, and created efficient systems for community engagement.
                    </p>
                    <p className="text-gray-700 font-paragraph">
                      By combining technical expertise with social impact knowledge, these partnerships bridge the digital divide and make technology work for everyone.
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
                <h3 className="text-3xl font-heading font-light mb-4">Ready to Innovate With Us?</h3>
                <p className="text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
                  Join our network of technology partners and help us develop digital solutions for social impact.
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