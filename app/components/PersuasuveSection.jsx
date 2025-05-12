'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';   
import { useRef } from 'react';


export default function PersuasuveSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    const sparkleVariants = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section className='bg-[#F4720B] w-full min-h-[100vh] flex items-center justify-center py-16'>        
            <motion.div
          ref={ref}
          className="grid bg-[#F4720B] grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://plus.unsplash.com/premium_photo-1681398551544-90fe796808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGFpZ258ZW58MHx8MHx8fDA%3D"
              alt="African businessman brainstorming with colleagues"
              
              className="object-cover"
            />
          </div>

          {/* Right side content */}
          <div className="bg-[#121212] p-8 rounded-xl border border-[#F4720B]/20 shadow-lg">
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Why Enroll in Our Campaigns?</h3>
            <p className="text-gray-300 mb-8 font-normal leading-relaxed">
              Our campaigns are designed to create lasting change through sustainable initiatives.
              By joining us, you become part of a global movement dedicated to making a real difference.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="text-center p-4">
                <span className="block text-4xl font-light text-[#F4720B] mb-1">95%</span>
                <span className="text-sm text-gray-400 font-normal">Success Rate</span>
              </div>
              <div className="text-center p-4">
                <span className="block text-4xl font-light text-[#F4720B] mb-1">10K+</span>
                <span className="text-sm text-gray-400 font-normal">Lives Impacted</span>
              </div>
              <div className="text-center p-4">
                <span className="block text-4xl font-light text-[#F4720B] mb-1">24</span>
                <span className="text-sm text-gray-400 font-normal">Countries Reached</span>
              </div>
              <div className="text-center p-4">
                <span className="block text-4xl font-light text-[#F4720B] mb-1">$2.5M</span>
                <span className="text-sm text-gray-400 font-normal">Funds Raised</span>
              </div>
            </div>
            
            <div className="relative inline-block group">
              <Link 
                href="/campaigns" 
                className="relative z-10 inline-block bg-[#F4720B] text-white font-normal px-8 py-3 rounded-md hover:bg-[#E05900] transition-all"
              >
                Explore All Campaigns
              </Link>
              {/* Sparkle effects */}
              <motion.div 
                className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div 
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
              />
              <motion.div 
                className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.2 }}
              />
            </div>
          </div>
        </motion.div>
        </section>

    )
}
