'use client';
import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';


import PhotoCollage from '@/components/homepage/collage';

// Newspaper Modal Component


// Infinite Moving Cards Component


export default function NewsFeed() {
  const sectionRef = useRef(null);
  
  // Generate newspaper image array
  
  
  // Optional: Add parallax effect for decorative SVGs
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax-speed')) || 0.5;
        const windowY = window.scrollY;
        const y = windowY * speed;
        element.style.transform = `translate3d(0px, ${y}px, 0px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
 

  return (
    <section 
      ref={sectionRef}
      className="bg-orange-500 opacity-88 relative overflow-hidden py-20 md:py-0"
    >
      {/* Decorative leaf patterns */}
     
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column with Heading and Button */}
          <div className="col-span-12 md:col-span-6 mb-10 md:mb-[-50px]">
            <div className="relative md:pl-5 lg:pl-28 md:mt-20 mb-10 md:mb-20 z-10">
              <h2 className="text-5xl md:text-6xl text-[#fbfbfb] mb-8 md:mb-12 2xl:max-w-[550px] font-title font-light" data-target="latest-news-title">
                Archives Of <br/> Jaskaran Bothra Foundation
              </h2>
              <Link href="/news/archives" className="inline-block bg-[#F47E28] hover:bg-[#E67020] text-white font-medium px-8 py-4 rounded-md transition-colors duration-300">
                Browse more articles
              </Link>
            </div>
          </div>
          
          {/* Right Column with Infinite Slider */}
          {/* <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="w-full">
              <InfiniteMovingCards
                items={newspaperImages}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                onItemClick={handleImageClick}
                className="py-4"
              />
            </div>
          </div> */}
        </div>
      </div>
      <PhotoCollage />

      
    </section>
  );
}