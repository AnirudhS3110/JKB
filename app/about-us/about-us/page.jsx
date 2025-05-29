'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

const TrusteeCard = ({ name, role, bio, index, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 bg-gradient-to-r from-[#F4720B] to-[#F4720B]/80">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <div className="h-28 w-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <Image 
              src={image || `/images/temp/profile-${index + 1}.jpg`} 
              alt={name}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <div className="p-8 pt-20 text-center flex-grow flex flex-col">
        <h3 className="text-2xl font-heading font-medium text-black mb-1">{name}</h3>
        <p className="text-[#F4720B] font-paragraph mb-5 text-sm font-medium uppercase tracking-wide">{role}</p>
        <div className="w-12 h-0.5 bg-gray-200 mb-5 mx-auto"></div>
        <p className="text-gray-600 font-paragraph font-normal leading-relaxed text-sm">{bio}</p>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-6 text-gray-500">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-[#F4720B]/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-[#F4720B]/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-[#F4720B]/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUsPage() {
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
  
  const trustees = [
    {
      id: 1,
      name: "Siddharth Bothra",
      role: "Founder & Convenor",
      bio: "A visionary entrepreneur and philanthropist, Siddharth Bothra founded the Jaskaran Bothra Foundation to carry forward his family's enduring legacy of social impact and community service. With a deep commitment to inclusive growth and nation-building, he leads the Foundation's initiatives with purpose, innovation, and compassion.",
      image: "/images/trustees/siddharth.jpg"
    },
    {
      id: 2,
      name: "Shakuntala Bothra",
      role: "Chairman",
      bio: "As Chairman of the Foundation, Shakuntala Bothra brings decades of wisdom, empathy, and grassroots understanding to every endeavour. Her steadfast dedication to education, healthcare, and women's empowerment continues to inspire transformative work across communities.",
      image: "/images/trustees/shakuntala.jpg"
    },
    {
      id: 3,
      name: "Jagruti Bothra",
      role: "Vice Chairman",
      bio: "A strong advocate for child welfare and women's rights, Jagruti Bothra plays a key role in shaping the Foundation's mission and outreach programs. As Vice Chairman, she champions initiatives that foster dignity, opportunity, and sustainable development—especially for the underserved.",
      image: "/images/trustees/jagruti.jpg"
    },
    {
      id: 4,
      name: "Shikhar Chand Bothra",
      role: "Trustee",
      bio: "Shikhar Chand Bothra upholds the values of integrity, service, and commitment as a Trustee of the Foundation. With his deep-rooted belief in ethical leadership and social responsibility, he helps guide the Foundation's vision towards meaningful and lasting impact.",
      image: "/images/trustees/shikhar.jpg"
    }
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
                src="/images/about-hero.jpg" 
                alt="About Us" 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">About Us</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                A philanthropic initiative rooted in compassion, equity, and nation-building.
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
              document.getElementById('about-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Learn More About Us
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
            id="about-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Foundation Overview */}
              <div className="mb-20">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Foundation
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <p className="text-lg text-gray-700 mb-6 font-paragraph leading-relaxed">
                      The Jaskaran Bothra Foundation (JKBF) is a philanthropic initiative rooted in compassion, equity, and nation-building. Inspired by the values of late Shri Jaskaran Bothra—a visionary social reformer and freedom movement participant—the Foundation is dedicated to uplifting marginalized communities, empowering women and youth, and building a more inclusive and compassionate India.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 font-paragraph leading-relaxed">
                      Through transformative campaigns such as Accessible Futures, SHE for Sustainability, You Are Not Alone, and Health Beyond Boundaries, JKBF addresses critical societal challenges spanning disability inclusion, women's empowerment, mental wellness, rural healthcare, girl child education, disaster relief, and national heritage.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 font-paragraph leading-relaxed">
                      With every initiative, JKBF works to break barriers, nurture dignity, and spark systemic change—bridging the gaps that hold back individuals and communities from their fullest potential.
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Board of Trustees */}
              <div className="mt-24">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Board of Trustees
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                {/* Trustees Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {trustees.map((trustee, index) => (
                    <TrusteeCard 
                      key={trustee.id} 
                      {...trustee} 
                      index={index}
                    />
                  ))}
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