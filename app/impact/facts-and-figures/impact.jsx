'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Impact() {
  const pathname = usePathname();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  // Check if current page is active
  const isFactsActive = pathname.includes('/impact/facts-and-figures');
  const isStoriesActive = pathname.includes('/impact/success-stories');

  return(
    <motion.section 
      className='min-h-[40vh] w-full bg-gradient-to-r from-[#FF7322] to-[#FF8E16]'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='flex flex-col md:flex-row items-center justify-between h-full w-full py-12 px-6 md:px-16 lg:px-[180px] gap-y-8'>
        <motion.div 
          className='flex flex-col justify-start'
          variants={itemVariants}
        >
          <h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-title font-light mb-4'>
            Impact
          </h2>
          <p className='text-white/90 text-lg max-w-md hidden md:block'>
            Explore our journey of change through data and stories that showcase real transformation.
          </p>
        </motion.div>
        
        <motion.div 
          className='flex flex-col lg:text-[28px] font-merriweather text-2xl gap-y-6 items-start md:items-end justify-start'
          variants={itemVariants}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
          >
            <Link 
              href='/impact/facts-and-figures' 
              className='group relative transition-all duration-300 ease-in-out'
            >
              <div className='flex items-center gap-x-3'>
                <div className={`w-3 h-3 rounded-full ${isFactsActive ? 'bg-white' : 'bg-black'} group-hover:bg-white transition-all duration-300`}></div>
                <h2 className={`${isFactsActive ? 'text-white font-medium' : 'text-black'} group-hover:text-white transition-all duration-300`}>
                  Facts and Figures
                </h2>
              </div>
              <span className={`absolute -bottom-1 left-5 right-0 h-[2px] ${isFactsActive ? 'w-full' : 'w-0'} group-hover:w-full bg-white transition-all duration-300 ease-in-out`}></span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
          >
            <Link 
              href='/impact/success-stories' 
              className='group relative transition-all duration-300 ease-in-out'
            >
              <div className='flex items-center gap-x-3'>
                <div className={`w-3 h-3 rounded-full ${isStoriesActive ? 'bg-white' : 'bg-black'} group-hover:bg-white transition-all duration-300`}></div>
                <h2 className={`${isStoriesActive ? 'text-white font-medium' : 'text-black'} group-hover:text-white transition-all duration-300`}>
                  Success Stories
                </h2>
              </div>
              <span className={`absolute -bottom-1 left-5 right-0 h-[2px] ${isStoriesActive ? 'w-full' : 'w-0'} group-hover:w-full bg-white transition-all duration-300 ease-in-out`}></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Visual divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </motion.section>
  );
}