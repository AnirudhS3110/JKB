'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import InfiniteCarousel from '../../../components/ui/InfiniteCarousel';
import NewspaperModal from '../../../components/ui/NewspaperModal';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

export default function LatestNewsPage() {
  const [selectedNewspaper, setSelectedNewspaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"]
  });
  
  // Transform values for sliding animations
  const contentY = useTransform(
    scrollYProgress,
    [0.05, 0.18],
    ["100vh", "0vh"]
  );
  
  // Generate newspaper items from the available images
  const generateNewspaperItems = (startIdx, count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const idx = ((startIdx + i) % 20) + 1; // Cycle through 1-20
      items.push({
        id: `newspaper-${idx}`,
        image: `/images/NewsPaper/${idx}.jpg`,
        title: `Newspaper Edition ${idx}`,
        date: `2023-${Math.floor(idx / 2) + 1}-${(idx % 28) + 1}`
      });
    }
    return items;
  };

  // Create 4 rows with 5 items each, with different starting points and directions
  const row1Items = generateNewspaperItems(0, 5);
  const row2Items = generateNewspaperItems(5, 5);
  const row3Items = generateNewspaperItems(10, 5);
  const row4Items = generateNewspaperItems(15, 5);
  
  const handleNewspaperClick = (newspaper) => {
    setSelectedNewspaper(newspaper);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="/images/NewsPaper/1.jpg" 
                alt="Latest News" 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-20 text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Latest News</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                Browse our collection of newspaper archives and latest publications.
              </p>
            </motion.div>
          </div>
  
          {/* Scroll indicator positioned at bottom center */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              duration: 0.8 
            }}
            onClick={() => {
              document.getElementById('news-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              View Newspapers
            </span>
            
            {/* Simple circular button with arrow */}
            <div className="relative h-14 w-14 flex items-center justify-center">
              <div className="absolute h-full w-full rounded-full bg-[#F4720B] opacity-20 animate-ping"></div>
              <motion.div 
                className="h-14 w-14 rounded-full bg-[#F4720B] flex items-center justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                {/* Down arrow icon */}
                <svg 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </section>
  
        {/* Main Content Section - Sticky with higher z-index */}
        <section className="min-h-screen sticky top-0 z-20">
          {/* Using motion.div with y transform to create the sliding effect */}
          <motion.div
            style={{ y: contentY }}
            className="w-full h-full bg-[#fbfbfb] pt-24 pb-24"
            id="news-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Newspaper Carousels */}
              <div className="space-y-24 mt-8">
                {/* Row 1 */}
                <div>
                  {/* <h2 className="text-2xl md:text-3xl font-heading font-light mb-8 text-gray-800">Featured Publications</h2> */}
                  <InfiniteCarousel 
                    items={row1Items} 
                    direction="left" 
                    speed={20} 
                    onItemClick={handleNewspaperClick}
                    itemWidth={220}
                    itemHeight={320}
                  />
                </div>
                
                {/* Row 2 */}
                <div>
                  {/* <h2 className="text-2xl md:text-3xl font-heading font-light mb-8 text-gray-800">Recent Editions</h2> */}
                  <InfiniteCarousel 
                    items={row2Items} 
                    direction="right" 
                    speed={25} 
                    onItemClick={handleNewspaperClick}
                    itemWidth={220}
                    itemHeight={320}
                  />
                </div>
                
                {/* Row 3 */}
                <div>
                  {/* <h2 className="text-2xl md:text-3xl font-heading font-light mb-8 text-gray-800">Special Reports</h2> */}
                  <InfiniteCarousel 
                    items={row3Items} 
                    direction="left" 
                    speed={15} 
                    onItemClick={handleNewspaperClick}
                    itemWidth={220}
                    itemHeight={320}
                  />
                </div>
                
                {/* Row 4 */}
                <div>
                  {/* <h2 className="text-2xl md:text-3xl font-heading font-light mb-8 text-gray-800">Archive Collection</h2> */}
                  <InfiniteCarousel 
                    items={row4Items} 
                    direction="right" 
                    speed={30} 
                    onItemClick={handleNewspaperClick}
                    itemWidth={220}
                    itemHeight={320}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-[50vh] bg-[#fbfbfb]"></div>
      </div>
      
      {/* Modal for viewing selected newspaper */}
      <NewspaperModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        newspaper={selectedNewspaper}
      />
    </LogoRevealWrapper>
  );
} 