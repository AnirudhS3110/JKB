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
      description: "The Jaskaran Bothra Foundation transforms underserved communities by creating pathways to independence—continuing the nationally recognized vision of a man who believed in empowerment over aid. We don't just give. We enable.",
      image: "https://pbs.twimg.com/profile_banners/1381848973963526145/1690267377/1080x360",
      link: "/about"
    },
    vision: {
      title: "Our Vision",
      description: "We visualise our business as an entity offering incredible support for the communities that enable us to thrive. With social and economic agendas, we aim at enhancing the state or country's weaker section and further develop the Human Development Index.",
      image: "https://th-i.thgim.com/public/news/cities/chennai/wyoek1/article31192582.ece/alternates/FREE_1200/30MPYUVANGO1",
      link: "/vision"
    },
    mission: {
      title: "Our Mission",
      description: "To bridge corporate growth and community development. To promote education for the girl child. To strengthen rural healthcare access. To encourage sustainable livelihoods through skill development. To advocate for women empowerment. To promote mental health awareness.",
      image: "/images/CarousalPic8.jpg",
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
                  onLoad={() => {
                    setImagesLoaded(prev => ({...prev, [key]: true}));
                  }}
                  onError={() => {
                    console.log(`Failed to load image for ${key}`);
                    setImageErrors(prev => ({...prev, [key]: true}));
                  }}
                />
                <div className="absolute inset-0 opacity-59 bg-black"></div>
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
        {/* Main Header - Updated to match screenshot with underlines */}
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-6xl font-heading font-light mb-12 tracking-wide text-white text-center">
            {/* About Us with underline effect */}
            <span className="relative inline-block">
              <span 
                className={`cursor-pointer transition-colors md:text-[100px] duration-300 ${
                  activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                } md:text-6xl mx-2`}
                onClick={() => setActiveSection('about')}
                onMouseEnter={() => setActiveSection('about')}
              >
                About Us
              </span>
              {/* Underline that shows on hover or when active */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transform ${
                  activeSection === 'about' ? 'scale-x-100' : 'scale-x-0'
                } transition-transform duration-300 origin-left group-hover:scale-x-100`}
              ></span>
            </span>
            
            <span className="inline-block mx-4 md:text-[100px] text-[#F4720B] text-4xl md:text-6xl">+</span>
            
            {/* Vision with underline effect */}
            <span className="relative inline-block">
              <span 
                className={`cursor-pointer transition-colors md:text-[100px] duration-300 ${
                  activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                } md:text-6xl mx-2`}
                onClick={() => setActiveSection('vision')}
                onMouseEnter={() => setActiveSection('vision')}
              >
                Vision
              </span>
              {/* Underline that shows on hover or when active */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transform ${
                  activeSection === 'vision' ? 'scale-x-100' : 'scale-x-0'
                } transition-transform duration-300 origin-left group-hover:scale-x-100`}
              ></span>
            </span>
            
            <span className="inline-block mx-4 text-[#F4720B] text-4xl md:text-[100px]">+</span>
            
            {/* Mission with underline effect */}
            <span className="relative inline-block">
              <span 
                className={`cursor-pointer transition-colors md:text-[100px] duration-300 ${
                  activeSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                } md:text-6xl mx-2`}
                onClick={() => setActiveSection('mission')}
                onMouseEnter={() => setActiveSection('mission')}
              >
                Mission
              </span>
              {/* Underline that shows on hover or when active */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transform ${
                  activeSection === 'mission' ? 'scale-x-100' : 'scale-x-0'
                } transition-transform duration-300 origin-left group-hover:scale-x-100`}
              ></span>
            </span>
          </h2>
        </div>
        
        {/* Content Section - MODIFIED to match screenshot */}
        <div className="container mx-auto px-6 font-paragraph font-light">
          <div className="max-w-4xl mx-auto px-[15px] py-[15px] relative md:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className=" text-white">
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                    {content[activeSection].description}
                  </p>
                  
                  <Link 
                    href={content[activeSection].link} 
                    className="inline-flex items-center font-medium text-white hover:text-[#F4720B] no-underline transition-colors"
                  >
                    Read more
                  </Link>
                 
                  
                </div>
              </motion.div>
            </AnimatePresence>
            <div className='bg-black absolute top-0 left-0 w-full h-full opacity-40'/>
          </div>
        </div>
      </div>

      {/* Location marker at bottom right */}
      <div className="absolute bottom-5 right-5 z-10">
        <div className="w-8 h-8 text-white rounded-full flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}