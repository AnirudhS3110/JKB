import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ForestHero = () => {
  // State for tracking active slide and hover state
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  
  // Content data
  const slides = [
    {
      word: "About Us",
      image: "/images/about-background.jpg",
      index: 0
    },
    {
      word: "Our Vision",
      image: "/images/vision-background.jpg",
      index: 1
    },
    {
      word: "Our Mission",
      image: "/images/vision-background.jpg",
      index: 2
    }
  ];
  
  // Auto-cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Get current background image
  const currentImage = hoverIndex !== null 
    ? slides[hoverIndex].image 
    : slides[activeIndex].image;
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${currentImage})`,
          backgroundPosition: "center bottom" 
        }}
      >
        {/* Overlay to darken the image slightly */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute top-0 left-0 right-0 h-1 flex z-10">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`flex-grow h-full ${activeIndex === index ? 'bg-white' : 'bg-white bg-opacity-30'}`}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-8">
          {/* Main heading with interactive words - single line */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-white whitespace-nowrap overflow-x-auto hide-scrollbar pb-4">
            <span 
              className={`relative cursor-pointer inline-block ${activeIndex === 0 ? 'text-white font-normal' : 'text-gray-300'}`}
              onMouseEnter={() => setHoverIndex(0)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              About Us
              {(activeIndex === 0 || hoverIndex === 0) && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
              )}
            </span>
            
            <span className="inline-block mx-3 md:mx-6 text-gray-300">
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-300">+</span>
            </span>
            
            <span 
              className={`relative cursor-pointer inline-block ${activeIndex === 1 ? 'text-white font-normal' : 'text-gray-300'}`}
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              Vision
              {(activeIndex === 1 || hoverIndex === 1) && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
              )}
            </span>
            
            <span className="inline-block mx-3 md:mx-6 text-gray-300">
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-300">+</span>
            </span>
            
            <span 
              className={`relative cursor-pointer inline-block ${activeIndex === 2 ? 'text-white font-normal' : 'text-gray-300'}`}
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              Mission
              {(activeIndex === 2 || hoverIndex === 2) && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
              )}
            </span>
          </h1>
        </div>
      </div>
      
      {/* Bottom paragraph and link - positioned at bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-8">
          <div className="max-w-xl">
            <p className="text-sm md:text-base text-white leading-relaxed mb-8 opacity-90">
              We help our partners develop sustainable funding and 
              financing plans to increase the pace and scale of restoration 
              projects. Through the Forest Resilience Bonds, we attract 
              additional, long-term funding from project beneficiaries, which 
              allows restoration costs to be financed. And our Blue Forest 
              Asset Management arm provides capital and technical 
              assistance to support sustainable businesses and 
              infrastructure projects at the heart of the restoration economy.
            </p>
            
            <Link href="/read-more" className="inline-block text-white text-sm border-b border-white pb-1 hover:text-gray-200 transition-colors">
              Read more
            </Link>
            
            {/* Location icon in bottom right */}
            <div className="absolute bottom-0 right-8">
              <div className="text-white h-8 w-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* URL at bottom left */}
      <div className="absolute bottom-2 left-8 text-white text-xs opacity-70 z-10">
        https://www.blueforest.org/finance/
      </div>
    </section>
  );
};

export default ForestHero;

