'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PartnershipOpportunities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activePartner, setActivePartner] = useState(null);

  // Partnership types based on the foundation's mission
  const partnershipTypes = [
    {
      id: 'corporate',
      title: 'Corporate Partners',
      tagline: 'Bridging profit with purpose.',
      description: 'Join a legacy of corporate social responsibility. Partner with us to create sustainable development initiatives that align with your brand values while making a measurable impact in education, healthcare, and rural development.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 13H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'foundation',
      title: 'Foundation Collaborators',
      tagline: 'Multiplying impact through synergy.',
      description: 'Align with our structured initiatives in health, education, and livelihoods to create holistic interventions. Together, we can build a socially inclusive India that honors the vision of Late Shri Jaskaran Bothra.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 21V7L12 3L19 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'individual',
      title: 'Individual Supporters',
      tagline: 'Not charity. Opportunity.',
      description: 'Continue Jaskaran Bothra\'s legacy of empowerment over aid. Your contribution supports initiatives for education, healthcare, rural infrastructure, and creating sustainable livelihoods for the underserved.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.90625 20.2491C3.82775 18.6531 5.1529 17.3279 6.74895 16.4064C8.34501 15.4849 10.1559 15 12.0001 15C13.8444 15 15.6553 15.4849 17.2513 16.4064C18.8474 17.3279 20.1725 18.6531 21.094 20.2491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Sparkle animation for buttons
  const sparkleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#F4720B] relative overflow-hidden"
      id="partnership-opportunities"
    >
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black/10 rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Partnership Opportunities</h2>
          <div className="h-1 w-24 bg-white rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white font-light leading-relaxed">
            Not just donors. <span className="font-semibold">Catalysts for change.</span> Join forces with a legacy initiative 
            committed to building a socially inclusive India through structured development.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left side image */}
          <motion.div
            className="relative h-[500px] lg:h-auto rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fHww"
              alt="Partnership"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-10">
                <p className="text-white text-2xl md:text-3xl font-light leading-tight">
                  "His vision emphasized <span className="font-medium">not charity, but creating opportunities</span> for people to become independent contributors to society."
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
            className="flex flex-col space-y-6"
          >
            {partnershipTypes.map((type) => (
              <motion.div
                key={type.id}
                variants={itemVariants}
                className={`bg-[#121212] p-8 rounded-xl shadow-lg border border-white/10 transition-all ${
                  activePartner === type.id ? 'ring-2 ring-white shadow-2xl' : ''
                }`}
                onMouseEnter={() => setActivePartner(type.id)}
                onMouseLeave={() => setActivePartner(null)}
              >
                <div className="flex items-start">
                  <div className="text-[#F4720B] mr-6">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-[#F4720B] font-medium mb-3">{type.tagline}</p>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="relative inline-block group">
                      <Link 
                        href="/partnership"
                        className="flex items-center text-white font-medium hover:text-[#F4720B] transition-colors"
                      >
                        Learn more
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4720B] group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-[#121212] text-white p-12 rounded-2xl relative overflow-hidden shadow-xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-20 h-20 absolute top-10 left-10 border-2 border-[#F4720B] rounded-full"></div>
              <div className="w-16 h-16 absolute bottom-20 right-20 border-2 border-[#F4720B] rounded-full"></div>
              <div className="w-12 h-12 absolute top-40 right-40 border-2 border-[#F4720B]"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Join Our Mission</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with us to explore how you can contribute to our initiatives in education, healthcare, rural infrastructure, and sustainable livelihood development.
            </p>
            
            <div className="relative inline-block group">
              <Link 
                href="/partnership" 
                className="relative z-10 inline-block bg-[#F4720B] text-white font-normal px-8 py-4 rounded-md hover:bg-[#E05900] transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Become a Partner
              </Link>
              {/* Sparkle effects */}
              <motion.div 
                className="absolute -top-1 -left-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div 
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute -top-1 -right-1 w-2 h-2 bg-[#F4720B]/30 rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.0 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 