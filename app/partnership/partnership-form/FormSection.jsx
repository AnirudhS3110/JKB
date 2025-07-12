'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PartnershipForm from './partnership-form';

export default function FormSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section id="partnership-form" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-light text-black mb-6">Start Your Partnership Journey</h2>
          <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-paragraph">
            Ready to make a difference? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PartnershipForm />
        </motion.div>
      </div>
    </section>
  );
} 