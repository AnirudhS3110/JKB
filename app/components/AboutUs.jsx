'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRef = useRef(null);
  
  // Reset to 'about' when component is first in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Add state to track loaded images and errors
  const [imagesLoaded, setImagesLoaded] = useState({
    about: false,
    vision: false,
    mission: false
  });
  
  const [imageErrors, setImageErrors] = useState({
    about: false,
    vision: false,
    mission: false
  });
  
  // Content for each section - UPDATED to match screenshot
  const content = {
    about: {
      title: "About Us",
      description: "The Jaskaran Bothra Foundation (JKBF) is a philanthropic initiative rooted in compassion, equity, and nation-building. Inspired by the values of late Shri Jaskaran Bothra—a visionary social reformer—we're dedicated to uplifting marginalized communities through transformative campaigns that address disability inclusion, women's empowerment, mental wellness, and rural healthcare.",
      image: "https://i.pinimg.com/736x/d3/71/33/d37133138623006569bfeba91cb0835e.jpg",
      link: "/about-us/about-us"
    },
    vision: {
      title: "Our Vision",
      description: "To build an inclusive, compassionate, and empowered society where every individual—regardless of gender, ability, or geography—has the opportunity to thrive with dignity.",
      image: "https://th-i.thgim.com/public/news/cities/chennai/wyoek1/article31192582.ece/alternates/FREE_1200/30MPYUVANGO1",
      link: "/about-us/vision-and-mission"
    },
    mission: {
      title: "Our Mission",
      description: "To bridge corporate growth and community development. To promote education for the girl child. To strengthen rural healthcare access. To encourage sustainable livelihoods through skill development. To advocate for women empowerment. To promote mental health awareness.",
      image: "/images/CarousalPic8.jpg",
      link: "/about-us/vision-and-mission"
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      id="about-us"
    >
      {/* Background Images with transitions */}
      <AnimatePresence>
        {Object.keys(content).map((key) => (
          activeSection === key && (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <div className="relative w-full h-full">
                {/* Fallback black background always visible */}
                <div className="absolute inset-0 bg-black"></div>
                
                <Image
                  src={content[key].image}
                  alt={content[key].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                  quality={85}
                  onLoad={() => {
                    setImagesLoaded(prev => ({...prev, [key]: true}));
                  }}
                  onError={() => {
                    console.log(`Failed to load image for ${key}`);
                    setImageErrors(prev => ({...prev, [key]: true}));
                  }}
                />
                <div className="absolute inset-0 opacity-75 bg-black"></div>
              </div>
              {!imagesLoaded[key] && !imageErrors[key] && (
                <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-t-[#F4720B] border-gray-200 rounded-full animate-spin"></div>
                </div>
              )}
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Main Header - Simplified for mobile */}
        <div className="container mx-auto pt-[20px] md:pt-0 px-6  text-left md:text-center">
          <h2 className="font-title mb-12 tracking-wide text-white flex flex-col md:flex-row md:justify-center md:items-center">
            {/* About Us */}
            <div className="mb-4 md:mb-0 relative">
              <span 
                className={`cursor-pointer transition-colors duration-300 text-5xl md:text-[70px] ${
                  activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveSection('about')}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setActiveSection('about')
                  }
                }}
              >
                About
              </span>
              {/* Desktop underline for About */}
              <div 
                className={`hidden md:block absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
                  activeSection === 'about' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
            
            {/* Plus sign - mobile only */}
            <motion.div 
              className="text-[#F4720B] text-5xl mb-4 md:hidden text-left"
              
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "center left" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              +
            </motion.div>
            
            
            {/* Plus sign - desktop only */}
            <div className="hidden md:block">
            <motion.span 
              className="mx-4 text-[#F4720B] hidden md:block  md:text-[100px] "
              key={`desktop-plus-1-${activeSection}`}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "center", display: "inline-block" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              +
            </motion.span>
            </div>
            
            {/* Vision */}
            <div className="mb-4 md:mb-0 relative">
              <span 
                className={`cursor-pointer transition-colors duration-300 text-5xl md:text-[70px] ${
                  activeSection === 'vision' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveSection('vision')}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setActiveSection('vision')
                  }
                }}
              >
                Vision
              </span>
              {/* Desktop underline for Vision */}
              <div 
                className={`hidden md:block absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
                  activeSection === 'vision' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
            
            {/* Plus sign - REMOVED for mobile, kept for desktop */}
            <motion.div 
              className="text-[#F4720B] text-5xl mb-4 md:hidden text-left"
             
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "center left" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              +
            </motion.div>
            <div className="hidden md:block">
            <motion.span 
              className="mx-4 text-[#F4720B] text-5xl md:text-[70px] hidden md:block"
              key={`desktop-plus-2-${activeSection}`}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "center", display: "inline-block" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              +
            </motion.span>
            </div>
            {/* Mission */}
            <div className="relative">
              <div className={`flex flex-col items-start group ${activeSection === 'mission' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
              <span 
                className={`cursor-pointer transition-colors duration-300 text-5xl md:text-[70px] ${
                  activeSection === 'mission' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveSection('mission')}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setActiveSection('mission')
                  }
                }}
              >
                Mission
              </span>
              </div>
              {/* Desktop underline for Mission */}
              <div 
                className={`hidden md:block absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
                  activeSection === 'mission' ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          </h2>
        </div>
        
        {/* Content Section - Adjusted for mobile */}
        <div className="container mx-auto px-4 md:px-6 font-paragraph font-light">
          <div className="mx-auto px-0 md:px-[15px] py-[15px] relative md:max-w-4xl md:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white w-fit ">
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                    {content[activeSection].description}
                  </p>

                  <div className="flex flex-col items-start group">
                    <Link 
                      href={content[activeSection].link} 
                      className="inline-flex items-center font-medium text-white group-hover:text-[#F4720B] no-underline transition-colors"
                    >
                      Read more
                    </Link>
                    <div className="mt-2 h-[2px] w-24 bg-white group-hover:bg-[#F4720B] transition-colors duration-300"></div>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      
    </section>
  );
}