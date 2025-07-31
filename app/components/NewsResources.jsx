'use client';
import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

// Newspaper Modal Component
const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 lg:right-[200px] text-white cursor-pointer z-[200] p-2"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Modal content */}
        <div className="bg-transparent p-2 rounded-lg">
          <div className="relative w-full h-[70vh]">
            <Image 
              src={imageSrc} 
              alt="NewsPaper" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NewsFeed() {
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('/images/MediaCoverage/1.jpg');
  
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
  
  // Handle image click to open modal
  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Handle modal close
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-orange-500 opacity-88 relative overflow-hidden py-20 md:py-0"
    >
      {/* Decorative leaf patterns */}
     
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column with Heading and Button */}
          <div className="col-span-12 md:col-span-12 mb-10 md:mb-[-50px]">
            <div className="relative md:pl-5 lg:pl-28 md:mt-20 mb-10 md:mb-20 z-10">
              <h2 className="text-5xl md:text-6xl text-[#fbfbfb] mb-8 md:mb-12 2xl:max-w-[550px] font-title font-light" data-target="latest-news-title">
                Archives  Of <br/> Jaskaran Bothra Foundation
              </h2>
              <Link href="/news/archives" className="inline-block bg-[#F47E28] hover:bg-[#E67020] text-white font-medium px-8 py-4 rounded-md transition-colors duration-300">
                Browse more articles
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className='w-full h-full flex items-center md:pb-20 justify-center'>
        <div 
          className="cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleImageClick('/images/NewsPaper/1.jpg')}
        >
          <Image 
            src="/images/NewsPaper/1.jpg" 
            alt="IMEC summit 2025" 
            width={800} 
            height={500} 
            className=" shadow-lg"
          />
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageSrc="/images/NewsPaper/1.jpg"
      />
    </section>
  );
}