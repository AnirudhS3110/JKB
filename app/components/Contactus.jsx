'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactusSection() {
  return (
    <section className="w-full flex flex-col md:flex-row md:flex-between overflow-hidden">
      {/* Left Content Section */}
      <motion.div 
        className="flex-1 bg-[#fbfbfb] md:bg-[#000000] flex items-center px-[20px] py-8 sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[110px] md:py-16 lg:py-20 xl:py-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full max-w-xl mx-auto md:mx-0">
          {/* Header Label */}
          <motion.div 
            className="text-sm text-[#F4720B] md:text-base md:text-[#F4720B] font-paragraph font-medium tracking-wider mb-4 md:mb-5 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-title font-light text-[#121212] md:text-white leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            REACH OUT TO US
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg lg:text-xl font-paragraph font-light text-[#121212] md:text-[#fbfbfb] leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a question or want to get involved? We'd love to hear from you. Contact us to learn more about our initiatives, partnerships, and how you can contribute to our mission of creating meaningful change.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#F4720B] text-white hover:bg-[#E36000] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg font-paragraph font-medium transition-all duration-300 group">
              CONTACT US
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Right Image Section */}
      <motion.div 
        className="w-full md:w-5/12 lg:w-[45%] xl:w-[40%] h-[300px] sm:h-[350px] md:h-auto md:min-h-[50vh] relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image 
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Contact Jaskaran Bothra Foundation" 
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        {/* Floating Contact Info Box */}
        <motion.div 
          className="absolute bottom-8 hidden md:block left-8 right-8 md:bottom-10 md:right-auto md:left-10 md:max-w-[80%] bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col space-y-3">
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm font-paragraph">Andheri-W, Mumbai – 400053</p>
            </div>
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:csr@iqgroup.in" className="text-sm font-paragraph hover:text-[#F4720B] transition-colors">csr@iqgroup.in</a>
            </div>
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F4720B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919987998036" className="text-sm font-paragraph hover:text-[#F4720B] transition-colors">+91-9987998036</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
