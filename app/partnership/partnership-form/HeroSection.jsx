'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="w-full h-full relative">
          <Image 
            src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNoYWtlfGVufDB8fDB8fHww" 
            alt="Partnership" 
            fill 
            className="object-cover"
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
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Partnership</h1>
          <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
            Join forces with us to create extraordinary impact. Together, we don't just change lives—we transform futures.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5,
          duration: 0.8 
        }}
        onClick={() => {
          document.getElementById('why-partner').scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        {/* Text label */}
        <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
          Explore Partnership Opportunities
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
  );
} 