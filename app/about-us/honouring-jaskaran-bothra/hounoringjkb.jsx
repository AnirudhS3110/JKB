'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import LogoRevealWrapper from '@/components/ui/LogoReveal';
import Image from 'next/image';

export default function HonoringJaskaranBothra() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const legacyTitleRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeroInView = useInView(heroRef, { once: true });
  
  // State to ensure animations run on load
  const [animationReady, setAnimationReady] = useState(false);
  
  // Ensure animations run even if InView doesn't trigger properly
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 1000); // Delay to allow page to load
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });

  // Legacy data with descriptions and images
  const legacyData = [
    {
      title: "Compassionate Leader",
      content: "Dedicated over 30 years to community service, touching countless lives through mentorship and charitable work that continues to inspire generations.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Elderly man mentoring youth"
    },
    {
      title: "Education & Healthcare",
      content: "Shri Jaskaran Bothra has always advocated for girls' education and healthcare for the underprivileged. He consistently worked towards building institutions that today provide education to many in need.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Students in a classroom"
    },
    {
      title: "Freedom Fighter",
      content: "Shri Bothra participated actively in the Indian Independence Movement, especially in the boycott of imported clothes, a nationwide campaign. He was involved in the Swadeshi movement in Kolkata.",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Indian flag"
    },
    {
      title: "Recognized Legacy",
      content: "In recognition of his extensive social service, the Akhil Bharatiya Sadhumargi Jain Sangh posthumously awarded him the 'Atulya Seva Puraskar' in Chennai.",
      image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Award ceremony"
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative bg-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen bg-white w-full overflow-hidden sticky top-0">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="/images/BG-201.png" 
              alt="Jaskaran Bothra Ancestral Haveli"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>
          </div>
          
          <div className="relative z-10 h-full w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2 }}
                className="mb-3"
              >
                <span className="text-[#F4720B] text-xl uppercase tracking-widest font-light">Honoring</span>
              </motion.div>
              
              <motion.div
                initial={{ width: 0 }}
                animate={(isHeroInView || animationReady) ? { width: "70px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-[#F4720B] mb-8"
              ></motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2 }}
                className="text-5xl md:text-7xl lg:text-8xl text-[#F4720B] font-title font-light tracking-tight mb-6"
              >
                Jaskaran Bothra
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={(isHeroInView || animationReady) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-xl md:text-2xl text-[#fbfbfb] max-w-2xl font-paragraph font-light"
              >
                A life dedicated to education, healthcare, freedom, and spiritual values
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Life & Legacy Title Section */}
        <section className="bg-white py-16 relative z-10">
          <div className="max-w-7xl bg-white mx-auto px-6">
            <motion.h2 
              ref={legacyTitleRef}
              className="text-5xl md:text-7xl font-title font-light text-black mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Life & Legacy
            </motion.h2>
            
            {/* Separator line */}
            <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-8"></div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-800 font-paragraph text-center max-w-4xl mx-auto"
            >
              The extraordinary journey and contributions that shaped communities
            </motion.p>
          </div>
        </section>
        
        {/* Legacy Content Section - Styled like Mission section */}
        <section className="bg-white relative z-10 pt-0 pb-16">
          <div className="max-w-7xl mx-auto px-6 bg-white">
            {/* Legacy Cards in Zig-Zag Layout */}
            <div className="space-y-16 mt-8 bg-white">
              {legacyData.map((legacy, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center relative py-8 md:py-12 bg-white`}
                >
                  {/* Background Shape */}
                  <div className={`absolute -z-10 rounded-3xl bg-gray-50 h-full w-[95%] ${index % 2 === 0 ? 'right-0' : 'left-0'} opacity-50`}></div>
                  
                  {/* Legacy Image */}
                  <div className="w-full md:w-2/5">
                    <div className={`relative overflow-hidden rounded-2xl shadow-xl mx-auto max-w-sm aspect-[3/4] group ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#F4720B]/20 to-[#F4720B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <Image 
                        src={legacy.image}
                        alt={legacy.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <p className="text-sm font-medium uppercase tracking-wider text-center">{legacy.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legacy Content */}
                  <div className="w-full md:w-3/5 space-y-6 px-4 md:px-6 bg-white">
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-3xl font-heading font-medium text-black">{legacy.title}</h3>
                      <div className="w-24 h-1 bg-[#F4720B]/70 my-4 mx-auto md:mx-0"></div>
                    </div>
                    
                    <p className="text-gray-800 font-paragraph text-lg md:text-xl leading-relaxed text-center md:text-left text-[20px] lg:text-[20px] xl:text-[26px]">{legacy.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LogoRevealWrapper>
  );
}
