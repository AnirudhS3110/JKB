'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FounderTribute() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle parallax effect on scroll
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.4); // Adjust parallax intensity
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fbfbfb]">
      {/* Full-screen founder image with parallax effect */}
      <div 
        className="absolute inset-0 h-[110%] w-full"
        style={{ 
          transform: `translateY(-${scrollPosition}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <img
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv1y1r4jf5m83n6brpt8pf01%2F1747043086_img_0.webp?st=2025-05-18T10%3A01%3A02Z&se=2025-05-24T11%3A01%3A02Z&sks=b&skt=2025-05-18T10%3A01%3A02Z&ske=2025-05-24T11%3A01%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=F3tGYM7sorkTEiSq8jSeZPAo2qAdgr9JKyt%2FzqLZGHE%3D&az=oaivgprodscus" // Replace with actual founder image
          alt="Late Shri Jaskaran Bothra"  
          className={`object-cover object-top transition-opacity duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-0'}`} 
        />
        
        {/* Gradient overlays for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </div>
      
      {/* Fixed grain texture overlay for depth */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <div className="h-full w-full bg-[url('/images/noise.png')] bg-repeat"></div>
      </div>
      
      {/* Subtle green leaf pattern accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10 z-10">
        <div className="h-full w-full bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-right-bottom"></div>
      </div>

      {/* Content container */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-3"
          >
            <span className="text-[#F4720B] text-xl uppercase tracking-widest font-light">Our Founder</span>
          </motion.div>
          
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="h-px bg-[#F4720B] mb-8"
          ></motion.div>
          
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl text-[#F4720B] font-bold tracking-tight mb-6"
          >
            Jaskaran Bothra
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#1b1a1f] max-w-2xl font-light mb-10"
          >
            Visionary conservationist and humanitarian who dedicated his life to creating sustainable pathways for rural communities and protecting our natural ecosystems.
          </motion.p>
          
          <motion.div
            variants={quoteVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl border-l-4 border-[#F4720B] pl-6 py-2"
          >
            <p className="text-[#1b1a1f] text-lg md:text-xl italic font-light leading-relaxed">
              "True conservation isn't about saving nature from people, but empowering people to become stewards of nature. When communities thrive, the environment flourishes."
            </p>
            <p className="text-[#F4720B] mt-4">1962 - 2018</p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 1.5,
            duration: 1
          }
        }}
      >
        <span className="text-sm uppercase tracking-widest mb-2">Explore Legacy</span>
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          animate={{
            y: [0, 5, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}