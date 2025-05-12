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
  
  // Content for each section
  const content = {
    about: {
      title: "About Us",
      headline: "Not charity. Opportunity.",
      description: "The Jaskaran Bothra Foundation transforms underserved communities by creating pathways to independence—continuing the nationally recognized vision of a man who believed in empowerment over aid. We don't just give. We enable.",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jv1y1r4jf5m83n6brpt8pf01%2F1747043086_img_0.webp?st=2025-05-12T15%3A55%3A35Z&se=2025-05-18T16%3A55%3A35Z&sks=b&skt=2025-05-12T15%3A55%3A35Z&ske=2025-05-18T16%3A55%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=t91ASxYRuw6raf7GvC%2BnwFIHfB19YfaRVUlv33dtCHM%3D&az=oaivgprodscus",
      link: "/about"
    },
    vision: {
      title: "Our Vision",
      headline: "Building a socially inclusive tomorrow",
      description: "To build a socially inclusive India by supporting holistic human development, particularly for the underprivileged, through structured initiatives in health, education, and sustainable livelihoods.",
      image: "/images/vision-background.jpg",
      link: "/vision"
    },
    mission: {
      title: "Our Mission",
      headline: "Targeted action, measurable impact",
      description: "To promote education for the girl child. To strengthen rural healthcare access. To encourage sustainable livelihoods through skill development. To advocate for women empowerment. To promote mental health awareness. To bridge corporate growth and community development.",
      image: "/images/vision-background.jpg", // Fallback to a known working image
      link: "/mission"
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
                  onLoadingComplete={() => {
                    setImagesLoaded(prev => ({...prev, [key]: true}));
                  }}
                  onError={() => {
                    console.log(`Failed to load image for ${key}`);
                    setImageErrors(prev => ({...prev, [key]: true}));
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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
        {/* Main Header - Horizontal Layout */}
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-semibold mb-12 tracking-tight text-white inline-flex flex-wrap justify-center">
            <button 
              onClick={() => setActiveSection('about')}
              onMouseEnter={() => setActiveSection('about')}
              className={`transition-colors duration-300 ${activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              About Us
            </button>
            
            <span className="inline-block mx-4 relative">
              <span className="text-[#F4720B]">+</span>
              <span className="absolute top-0 left-0 w-full h-full border border-[#F4720B] rounded-full opacity-60" style={{ transform: 'scale(1.2)' }}></span>
            </span>
            
            <button 
              onClick={() => setActiveSection('vision')}
              onMouseEnter={() => setActiveSection('vision')}
              className={`transition-colors duration-300 ${activeSection === 'vision' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Our Vision
            </button>
            
            <span className="inline-block mx-4 relative">
              <span className="text-[#F4720B]">+</span>
              <span className="absolute top-0 left-0 w-full h-full border border-[#F4720B] rounded-full opacity-60" style={{ transform: 'scale(1.2)' }}></span>
            </span>
            
            <button 
              onClick={() => setActiveSection('mission')}
              onMouseEnter={() => setActiveSection('mission')}
              className={`transition-colors duration-300 ${activeSection === 'mission' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Our Mission
            </button>
          </h2>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-black bg-opacity-70 backdrop-blur-sm p-10 rounded-lg"
              >
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">{content[activeSection].headline}</h3>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-200 mb-6">
                    {content[activeSection].description}
                  </p>
                  
                  <Link 
                    href={content[activeSection].link} 
                    className="inline-flex items-center font-medium text-[#F4720B] hover:text-[#E05900] no-underline"
                  >
                    Read more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}