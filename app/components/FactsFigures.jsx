'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function FactsFigures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Stats with their final values
  const stats = [
    {
      id: 1,
      value: 42,
      suffix: '+',
      label: 'Initiatives Launched',
      description: 'Diverse programs addressing critical sustainability challenges',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      value: 86,
      suffix: '%',
      label: 'Success Rate',
      description: 'Our initiatives meet or exceed their sustainability goals',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      value: 15000,
      suffix: '+',
      label: 'Lives Impacted',
      description: 'People whose lives improved through our community programs',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      value: 28,
      suffix: '',
      label: 'Partner Organizations',
      description: 'Global collaborators working with us toward sustainable goals',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  // Animating counter states
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  // Animation for the counters
  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const finalValue = stat.value;
        const step = Math.max(1, Math.floor(finalValue / 50)); // Adjust animation speed
        let currentValue = 0;
        
        return setInterval(() => {
          currentValue = Math.min(currentValue + step, finalValue);
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = currentValue;
            return newCounts;
          });
          
          if (currentValue >= finalValue) {
            clearInterval(intervals[index]);
          }
        }, 30); // Timer frequency
      });
      
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
      id="facts-figures"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Facts & Figures</h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Our impact in numbers. Behind each statistic is a story of transformation and hope.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8 text-center border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-white mb-6 mx-auto">
                {stat.icon}
              </div>
              <div className="text-5xl text-white font-light tracking-tight mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-green-400 font-medium mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Ready to be part of the impact?</h3>
              <p className="text-gray-300">
                Join our next campaign and help us create sustainable change together.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#upcoming-campaigns" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('upcoming-campaigns').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Campaigns
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 