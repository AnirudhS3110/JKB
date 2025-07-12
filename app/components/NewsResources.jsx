'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Newspaper Modal Component
const NewspaperModal = ({ isOpen, onClose, image }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!image) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-transparent rounded-lg max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-50 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Zoom button */}
            <button
              className="absolute top-4 left-4 z-50 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isZoomed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                )}
              </svg>
            </button>
            
            <div className={`overflow-auto flex-1 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
              <div 
                className={`bg-white rounded-lg ${isZoomed ? 'transform scale-150 origin-top-left min-w-max' : 'w-full'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              >
                <Image
                  src={image}
                  alt="Newspaper Article"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: isZoomed ? 'none' : '70vh' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Infinite Moving Cards Component
const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  onItemClick,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    addAnimation();
  }, []);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
        isHovered && "after:content-[''] after:absolute after:inset-0 after:bg-black/5 after:rounded-lg after:z-10"
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {pauseOnHover && isHovered && (
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-30">
          Paused
        </div>
      )}
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={pauseOnHover && isHovered ? { animationPlayState: 'paused' } : {}}
      >
        {items.map((item, idx) => (
          <li
            className="shrink-0 cursor-pointer transition-transform hover:scale-105"
            key={idx}
            onClick={() => onItemClick(item)}
          >
            <div className="relative w-[200px] h-[280px] md:w-[250px] md:h-[350px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item}
                alt={`Newspaper ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 200px, 250px"
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function NewsFeed() {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Generate newspaper image array
  const newspaperImages = Array.from({ length: 20 }, (_, i) => `/images/NewsPaper/${i + 1}.jpg`);
  
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
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-orange-500 opacity-88 relative overflow-hidden py-20 md:py-30"
    >
      {/* Decorative leaf patterns */}
      <div className="hidden lg:block absolute -top-35 -left-20" data-parallax data-parallax-speed="1">
        <svg width="322" height="373" viewBox="0 0 322 373" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 275">
            <path id="Vector" d="M161.688 263.725L168.525 257.564L195.703 255.052L212.137 252.596L212.685 254.05L196.12 282.117L181.804 287.859L160.901 287.845L152 288.88L145.103 293.098L143.686 293.392L143.996 284.156L137.771 269.898C134.746 264.572 129.466 254.603 129.466 254.603L129.054 242.534L137.584 228.081L146.114 213.629L147.161 215.189L163.293 251.462L161.688 263.725Z" fill="#4CB9D1"></path>
            <path id="Vector_2" d="M78.3808 109.751L80.3173 118.435L69.5146 142.505L63.7717 157.505L62.2873 157.275L46.5356 129.993L48.5058 115.213L58.4524 97.6248L61.8111 89.6413L61.5391 81.8304L61.9649 80.498L69.5918 85.1491L84.5519 86.6856C90.473 86.6702 101.373 86.9644 101.373 86.9644L111.728 92.3537L119.839 106.403L127.95 120.451L126.14 120.591L87.9408 116.931L78.3808 109.751Z" fill="#F2EBD9"></path>
          </g>
        </svg>
      </div>
      
      <div className="hidden lg:block absolute top-50 xl:top-78 -right-10" data-parallax data-parallax-speed="1">
        <svg width="236" height="198" viewBox="0 0 236 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125.301 92.383L119.938 97.2154L98.6215 99.1854L85.7322 101.112L85.3021 99.9714L98.295 77.9576L109.524 73.4534L125.919 73.4645L132.9 72.6527L138.31 69.3444L139.421 69.1137L139.178 76.3582L144.06 87.5413C146.433 91.7188 150.574 99.5378 150.574 99.5378L150.897 109.004L144.207 120.34L137.516 131.676L136.695 130.452L124.042 102.002L125.301 92.383Z" fill="#4CB9D1"></path>
        </svg>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0" data-parallax data-parallax-speed="1">
        <svg width="202" height="222" viewBox="0 0 202 222" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.4668 152.896L40.581 154.877L15.9488 143.823L0.599054 137.946L0.83392 136.427L28.7532 120.308L43.8777 122.324L61.8763 132.502L70.046 135.939L78.0392 135.661L79.4027 136.097L74.643 143.902L73.0707 159.211C73.0864 165.27 72.7854 176.424 72.7854 176.424L67.2703 187.021L52.8938 195.322L38.5172 203.622L38.374 201.769L42.1201 162.679L49.4668 152.896Z" fill="#F2EBD9"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column with Heading and Button */}
          <div className="col-span-12 md:col-span-6 mb-10 md:mb-0">
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
          <div className="col-span-12 md:col-span-6 flex items-center">
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
          </div>
        </div>
      </div>
      
      {/* Newspaper Modal */}
      <NewspaperModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </section>
  );
}