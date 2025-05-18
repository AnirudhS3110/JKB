'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PartnershipOpportunities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activePartner, setActivePartner] = useState(null);

  // Partnership types
  const partnershipTypes = [
    {
      id: 'corporate',
      title: 'Corporate Partners',
      tagline: 'Bridging profit with purpose.',
      description: 'Join a legacy of corporate social responsibility. Partner with us to create sustainable development initiatives that align with your brand values while making a measurable impact in education, healthcare, and rural development.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 3v18h18V3H3zm15 15H6V6h12v12z" />
          <path d="M14 8h1v1h-1zM14 11h1v1h-1zM14 14h1v1h-1zM10 8h1v1h-1zM10 11h1v1h-1zM10 14h1v1h-1zM7 8h1v1H7zM7 11h1v1H7zM7 14h1v1H7z" />
        </svg>
      )
    },
    {
      id: 'foundation',
      title: 'Foundation Collaborators',
      tagline: 'Multiplying impact through synergy.',
      description: 'Align with our structured initiatives in health, education, and livelihoods to create holistic interventions. Together, we can build a socially inclusive India that honors the vision of Late Shri Jaskaran Bothra.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2v20M2 12h20M2 7h20M2 17h20M7 2v20M17 2v20" />
        </svg>
      )
    },
    {
      id: 'individual',
      title: 'Individual Supporters',
      tagline: 'Not charity. Opportunity.',
      description: 'Continue Jaskaran Bothra\'s legacy of empowerment over aid. Your contribution supports initiatives for education, healthcare, rural infrastructure, and creating sustainable livelihoods for the underserved.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      id="partnership-opportunities"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-right opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-left opacity-5 transform rotate-180"></div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F4720B] mb-4 tracking-tight">Partnership Opportunities</h2>
          <div className="h-1 w-24 bg-[#F4720B] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Not just donors. <span className="font-semibold">Catalysts for change.</span> Join forces with a legacy initiative 
            committed to building a socially inclusive future through structured development.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left side image */}
          <motion.div
            className="relative h-[500px] lg:h-auto rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=1200&auto=format&fit=crop&q=80"
              alt="Partnership"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F4720B]/90 via-[#F4720B]/50 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <p className="text-white text-2xl font-light leading-tight">
                  &ldquo;His vision emphasized <span className="font-medium">not charity, but creating opportunities</span> for people to become independent contributors to society.&rdquo;
                </p>
                <p className="text-white/80 mt-4 italic">— In memory of Late Shri Jaskaran Bothra</p>
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col space-y-4"
          >
            {partnershipTypes.map((type) => (
              <motion.div
                key={type.id}
                variants={itemVariants}
                className={`bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 ${
                  activePartner === type.id 
                    ? 'border-l-[#F4720B] bg-orange-50' 
                    : 'border-l-orange-200 hover:border-l-[#F4720B] hover:bg-orange-50/50'
                } transition-all duration-300 relative overflow-hidden`}
                onMouseEnter={() => setActivePartner(type.id)}
                onMouseLeave={() => setActivePartner(null)}
              >
                {/* Decorative corner SVG */}
                <div className={`absolute top-0 right-0 w-16 h-16 transform translate-x-6 -translate-y-6 opacity-5 rotate-12 transition-all duration-300 ${
                  activePartner === type.id ? 'opacity-15' : 'opacity-5'
                }`}>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F4720B" d="M47.7,-57.2C59,-47.3,64.2,-29.7,67.2,-11.5C70.2,6.8,71.1,25.7,62.6,38.5C54.2,51.3,36.4,58.1,19.2,61.7C1.9,65.3,-14.8,65.7,-31.1,60.4C-47.4,55.1,-63.3,44,-69.5,29C-75.7,14,-72.2,-4.9,-65.1,-21.3C-57.9,-37.7,-47.2,-51.5,-34.2,-60.7C-21.2,-69.9,-6,-74.4,7.7,-72.8C21.3,-71.2,36.5,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                
                <div className="flex items-start">
                  <div className={`mr-5 bg-orange-100 p-3 rounded-lg transition-all duration-300 ${
                    activePartner === type.id ? 'bg-orange-200 shadow-sm' : 'bg-orange-100'
                  }`}>
                    <div className="w-8 h-8 text-[#F4720B]">
                      {type.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{type.title}</h3>
                    <p className="text-[#F4720B] font-medium text-sm mb-2">{type.tagline}</p>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <Link 
                      href="/partnership"
                      className="flex items-center text-[#F4720B] font-medium text-sm hover:text-orange-800 transition-colors group"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Mission</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with us to explore how you can contribute to our initiatives in education, healthcare, rural infrastructure, and sustainable livelihood development.
            </p>
            
            <Link 
              href="/partnership" 
              className="inline-flex items-center bg-white text-[#F4720B] font-medium px-8 py-3 rounded-md hover:bg-orange-50 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300"
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
  );
}