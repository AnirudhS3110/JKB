import React from 'react';
import { motion } from 'framer-motion';

const MobileSlideThree = ({ secondCardsData, animationReady, scrollY }) => {
  return (
    <section className="h-screen relative flex items-center justify-center sticky top-0">
      {/* Mobile-only background */}
      <div className="bg-gradient-to-r from-[#FF6309] to-[#FF8E16] absolute inset-0 left-0 top-0 w-full h-full">
      </div>
      
      {/* Mobile: Third slide with last 2 cards */}
      <motion.div 
        style={{ y: scrollY }}
        className="w-full mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-8 z-10 overflow-visible"
      >
        {/* Show remaining cards from second set */}
        {secondCardsData.slice(1, 3).map((card, index) => (
          <motion.div 
            key={`mobile-last-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
            className="bg-white p-6 rounded-lg shadow-lg w-[85%] mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 transform -translate-y-2">
                {card.icon}
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-2 text-center">{card.title}</h3>
              <div className="w-16 h-1 bg-[#FF6309] mb-4"></div>
              <p className="text-gray-700 font-paragraph text-center text-sm">
                {card.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MobileSlideThree; 