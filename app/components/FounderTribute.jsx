'use client';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FounderTribute() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.2,
    margin: "0px 0px -200px 0px"
  });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Text reveal animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const quoteVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "70px", 
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-[#000000] min-h-[110vh] flex flex-col-reverse md:flex-row overflow-hidden">
      {/* Left content section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
        <div className="max-w-xl">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-3"
          >
            <span className="text-[#F4720B] text-xl uppercase tracking-widest font-light">Our Founder</span>
          </motion.div>
          
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-px bg-[#F4720B] mb-8 "
          ></motion.div>
          
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-5xl md:text-7xl lg:text-8xl text-[#F4720B] font-title font-light tracking-tight mb-6"
          >
            Jaskaran Bothra
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#fbfbfb] max-w-2xl font-paragraph font-light mb-10"
          >
            Visionary conservationist and humanitarian who dedicated his life to creating sustainable pathways for rural communities and protecting our natural ecosystems.
          </motion.p>
          
          <motion.div
            variants={quoteVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl border-l-4 border-[#F4720B] pl-6 py-2"
          >
            <p className="text-[#fbfbfb] text-lg md:text-xl italic font-light font-paragraph leading-relaxed">
            "True philanthropy goes beyond money—it is the deep empathy to feel the struggles of others, the courage to empower them, and the commitment to give back what fortune has bestowed. As we look to the future, real leadership will be defined not by power or wealth, but by how we use our privilege to uplift  and build a more equitable, compassionate world."            </p>
            <p className="text-[#F4720B] mt-4">15th December 1928 - Forver</p>
          </motion.div>
        </div>
      </div>
      
      {/* Right image section with normal display */}
      <motion.div 
        className="relative w-full md:w-1/2 h-80 md:h-screen overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Normal image display */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/JaskaranBothra.jpg"
            alt="Jaskaran Bothra"
            fill
            quality={100}
            priority
            className="object-cover transition-all duration-1000"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 md:opacity-70"></div>
        
        {/* Accent details */}
        <div className="absolute hidden md:block top-16 right-16 w-20 h-20 border-t-2 border-r-2 border-[#F4720B] opacity-60 z-20"></div>
        <div className="absolute hidden md:block bottom-16 left-16 w-20 h-20 border-b-2 border-l-2 border-[#F4720B] opacity-60 z-20"></div>
      </motion.div>
    </section>
  );
}