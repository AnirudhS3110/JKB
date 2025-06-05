'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import InfiniteCarousel from '../../../components/ui/InfiniteCarousel';
import NewspaperModal from '../../../components/ui/NewspaperModal';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';

// Reusable NewspaperCard component
const NewspaperCard = ({ item, onClick }) => {
  return (
    <div 
      className="min-w-[280px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[450px] h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] mx-1 md:mx-2 overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
      onClick={() => onClick(item)}
      style={{ borderRadius: 0 }} // Explicitly ensure no rounded corners
    >
      <div className="relative bg-[#fbfbfb] shadow-lg w-full h-full">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill
          className="object-contain" 
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 450px"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

// Reusable Carousel component
const NewspaperCarousel = ({ title, items, onItemClick }) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Duplicate items to create true infinite effect
  const duplicatedItems = [...items, ...items, ...items]; // Triple the items for seamless looping
  
  const handleScroll = (direction) => {
    if (carouselRef.current) {
      // Adjust scroll amount based on screen size
      const scrollAmount = direction === 'left' 
        ? -(window.innerWidth < 768 ? carouselRef.current.offsetWidth * 0.85 : carouselRef.current.offsetWidth / 1.2)
        : (window.innerWidth < 768 ? carouselRef.current.offsetWidth * 0.85 : carouselRef.current.offsetWidth / 1.2);
      
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const difference = touchStartX - touchEndX;
    const threshold = 75; // Minimum swipe distance
    
    if (difference > threshold) {
      // Swiped left, go right
      handleScroll('right');
    } else if (difference < -threshold) {
      // Swiped right, go left
      handleScroll('left');
    }
    
    // Reset values
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Auto-scrolling effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;
    
    // Set initial scroll position to show the middle set of items
    if (carousel.scrollLeft === 0) {
      // Start from the middle set (skip the first set of duplicated items)
      carousel.scrollLeft = items.length * carousel.firstElementChild.children[0].offsetWidth;
    }
    
    const interval = setInterval(() => {
      // Check if we're near the end
      const nearEnd = carousel.scrollLeft + carousel.offsetWidth >= 
                      carousel.scrollWidth - carousel.offsetWidth / 2;
      
      // If near end, quickly jump back to the second set without animation
      if (nearEnd) {
        // Disable smooth scrolling temporarily
        carousel.style.scrollBehavior = 'auto';
        // Jump to the second set of items (effectively resetting position)
        carousel.scrollLeft = items.length * carousel.firstElementChild.children[0].offsetWidth;
        // Re-enable smooth scrolling
        setTimeout(() => {
          carousel.style.scrollBehavior = 'smooth';
        }, 50);
      } else {
        // Normal scroll behavior - adjust scrolling amount based on screen size
        const scrollAmount = window.innerWidth < 768 ? carousel.offsetWidth * 0.8 : carousel.offsetWidth / 3;
        carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, items.length]);
  
  return (
    <div className="mb-12 md:mb-24 relative py-2 md:py-4">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        {title && (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-light text-gray-800">{title}</h3>
        )}
      </div>
      
      {/* Left arrow - positioned on the left side outside the carousel */}
      <button 
        onClick={() => handleScroll('left')}
        className="absolute left-0 sm:left-[-15px] md:left-[-30px] lg:left-[-50px] top-1/2 z-10 h-10 w-10 md:h-16 md:w-16 lg:h-[70px] lg:w-[70px] flex items-center justify-center bg-[#fbfbfb] text-[#F4720B] border border-gray-100 transition-all duration-300 transform -translate-y-1/2 shadow-sm hover:bg-[#f5f5f5] hover:shadow-md hover:text-[#E35900] hover:scale-105 rounded-full"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div 
        ref={carouselRef} 
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory mx-0 sm:mx-1 md:mx-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex bg-[#fbfbfb]  gap-2 md:gap-4">
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="snap-start">
              <NewspaperCard item={item} onClick={onItemClick} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Right arrow - positioned on the right side outside the carousel */}
      <button 
        onClick={() => handleScroll('right')}
        className="absolute right-0 sm:right-[-15px] md:right-[-30px] lg:right-[-50px] top-1/2 z-10 h-10 w-10 md:h-16 md:w-16 lg:h-[70px] lg:w-[70px] flex items-center justify-center bg-[#fbfbfb] text-[#F4720B] border border-gray-100 transition-all duration-300 transform -translate-y-1/2 shadow-sm hover:bg-[#f5f5f5] hover:shadow-md hover:text-[#E35900] hover:scale-105 rounded-full"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Navigation buttons component for carousels
const CarouselNavButtons = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="flex justify-end gap-3 mb-4">
      <button 
        onClick={onPrevClick}
        className="h-10 w-10 flex items-center justify-center bg-[#F4720B]/10 text-[#F4720B] hover:bg-[#F4720B]/20 transition-colors"
        style={{ borderRadius: 0 }}
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={onNextClick}
        className="h-10 w-10 flex items-center justify-center bg-[#F4720B]/10 text-[#F4720B] hover:bg-[#F4720B]/20 transition-colors"
        style={{ borderRadius: 0 }}
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Newspaper modal component updated for responsiveness
// const NewspaperModal1 = ({ isOpen, onClose, newspaper }) => {
//   if (!isOpen) return null;
  
//   return (
//     <>
//       <div className="fixed inset-0 bg-black/70 z-50 animate-fade-in" onClick={onClose}></div>
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
//         <div 
//           className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scale-in"
//           onClick={(e) => e.stopPropagation()}
//           style={{ borderRadius: 0 }}
//         >
//           <div className="relative h-[80vh] w-full">
//             <button 
//               className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-[#F4720B]/90 hover:bg-[#F4720B] text-white flex items-center justify-center transition-colors"
//               onClick={onClose}
//               style={{ borderRadius: 0 }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             <div className="h-full">
//               <Image 
//                 src={newspaper.image} 
//                 alt={newspaper.title}
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
//               />
//             </div>
//           </div>
          
//           <div className="p-4 sm:p-6">
//             <h2 className="text-xl md:text-2xl font-heading font-light">{newspaper.title}</h2>
//             <p className="text-sm text-gray-600 mt-1">{newspaper.date}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default function NewspaperArchivesPage() {
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

  // Create 5 rows with 4 items each, with different starting points
  const row1Items = generateNewspaperItems(0, 4);
  const row2Items = generateNewspaperItems(4, 4);
  const row3Items = generateNewspaperItems(8, 4);
  const row4Items = generateNewspaperItems(12, 4);
  const row5Items = generateNewspaperItems(16, 4);
  
  const handleNewspaperClick = (newspaper) => {
    setSelectedNewspaper(newspaper);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Add animations to global style
  useEffect(() => {
    // Add keyframes for animations if they don't exist
    if (!document.querySelector('#newspaper-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'newspaper-animations';
      styleSheet.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease forwards;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);
  
  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1725075086636-b996a2d07782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3BhcGVyfGVufDB8fDB8fHww" 
                alt="Newspaper Archives" 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-4 sm:mb-6">Newspaper Archives</h1>
              <p className="text-base sm:text-lg md:text-xl font-paragraph text-gray-200 max-w-2xl">
                Explore our extensive collection of historical newspaper archives and publications documenting our journey and impact.
              </p>
            </motion.div>
          </div>
  
          {/* Scroll indicator positioned at bottom center */}
          <motion.div 
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
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
            <span className="text-white text-sm md:text-lg font-light mb-2 md:mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Browse Archives
            </span>
            
            {/* Simple circular button with arrow */}
            <div className="relative h-10 w-10 md:h-14 md:w-14 flex items-center justify-center">
              <div className="absolute h-full w-full rounded-full bg-[#F4720B] opacity-20 animate-ping"></div>
              <motion.div 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-[#F4720B] flex items-center justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                {/* Down arrow icon */}
                <svg 
                  className="h-4 w-4 md:h-6 md:w-6 text-white" 
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
            className="w-full h-full bg-[#fbfbfb] pt-12 md:pt-24 pb-12 md:pb-24"
            id="news-content"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
              {/* Section Title and Description */}
              <div className="mb-8 md:mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-gray-900 mb-4 md:mb-6"
                >
                  Historical Publications
                </motion.h2>
                <div className="w-16 md:w-24 h-1 bg-[#F4720B]"></div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-3xl"
                >
                  Our newspaper archives chronicle the Foundation's journey, milestones, and impact stories. Each publication represents a chapter in our ongoing commitment to social change and community empowerment.
                </motion.p>
              </div>
              
              {/* Newspaper Carousels - Using the reusable component */}
              <div className="space-y-8 md:space-y-16 mt-4 md:mt-8">
                <NewspaperCarousel 
                  title="Featured Publications"
                  items={row1Items}
                  onItemClick={handleNewspaperClick}
                />
                
                <NewspaperCarousel 
                  title=""
                  items={row2Items}
                  onItemClick={handleNewspaperClick}
                />
                
                <NewspaperCarousel 
                  title=""
                  items={row3Items}
                  onItemClick={handleNewspaperClick}
                />
                
                <NewspaperCarousel 
                  title=""
                  items={row4Items}
                  onItemClick={handleNewspaperClick}
                />
                
                <NewspaperCarousel 
                  title=""
                  items={row5Items}
                  onItemClick={handleNewspaperClick}
                />
              </div>
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-[50vh] sm:h-[60vh] md:h-[80vh] bg-[#fbfbfb]"></div>
      </div>
      
      {/* Modal for viewing selected newspaper */}
      {isModalOpen && selectedNewspaper && (
        <NewspaperModal
          isOpen={isModalOpen}
          onClose={closeModal}
          newspaper={selectedNewspaper}
        />
       
      )}
    </LogoRevealWrapper>
  );
} 