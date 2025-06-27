'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import LogoRevealWrapper from '../../components/ui/LogoReveal';
import Footer from '../components/Footer';

export default function ContactPage() {
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
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

  // Google Maps URL for the address
  const mapsUrl = "https://maps.google.com/maps?q=714+Samartha+Aishwarya+Off+New+Link+Road+Lion+Sol+Marg+Andheri+W+Mumbai+400053&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Contact Us" 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Contact Us</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                Have a question or want to get involved? We'd love to hear from you.
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
              document.getElementById('contact-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              Reach Out to Us
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
            ref={sectionRef}
            id="contact-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Contact Information */}
              <div className="mb-20">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Get In Touch
                </motion.h2>
                
                {/* Separator line */}
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                {/* Office Address Card - Full Width Row */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden mb-12"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6309] to-transparent"></div>
                  
                  <h3 className="text-2xl font-title font-medium text-gray-900 mb-8 text-center">Office Address</h3>
                  
                  <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-8">
                    {/* Office Location */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#F4720B]/10 p-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1">Jaskaran Bothra Foundation</h4>
                        <a 
                          href="https://www.google.com/maps/place/Samartha+Aishwarya,+Highland+Park,+Andheri+West,+Mumbai,+Maharashtra+400053/@19.14557,72.8242423,17z/data=!4m15!1m8!3m7!1s0x3be7b63e396ce6b5:0x7806d4ff17e205de!2sSamartha+Aishwarya,+Highland+Park,+Andheri+West,+Mumbai,+Maharashtra+400053!3b1!8m2!3d19.1455565!4d72.8291151!16s%2Fg%2F11qs96zll3!3m5!1s0x3be7b63e396ce6b5:0x7806d4ff17e205de!8m2!3d19.1455565!4d72.8291151!16s%2Fg%2F11qs96zll3?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 font-paragraph hover:text-[#F4720B] transition-colors"
                        >
                          714 – Samartha Aishwarya<br />
                          Off. New Link Road, Lion Sol Marg,<br />
                          Andheri-W, Mumbai – 400053
                        </a>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#F4720B]/10 p-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1">Board Line</h4>
                        <ul className="space-y-1 font-paragraph">
                          <li>
                            <a href="tel:+919987998036" className="text-gray-600 hover:text-[#F4720B] transition-colors">+91-9987998036</a>
                          </li>
                          <li>
                            <a href="tel:+919987998037" className="text-gray-600 hover:text-[#F4720B] transition-colors">+91-9987998037</a>
                          </li>
                          <li>
                            <a href="tel:+912235112519" className="text-gray-600 hover:text-[#F4720B] transition-colors">+91-2235112519</a>
                          </li>
                          <li>
                            <a href="tel:+912235112520" className="text-gray-600 hover:text-[#F4720B] transition-colors">+91-2235112520</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start justify-center gap-4">
                      <div className="rounded-full bg-[#F4720B]/10 p-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                        <a href="mailto:csr@iqgroup.in" className="text-gray-600 hover:text-[#F4720B] transition-colors font-paragraph">csr@iqgroup.in</a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Map - Second Row Full Width */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-xl overflow-hidden shadow-lg h-[400px] relative"
                >
                  <iframe 
                    src={mapsUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </div>

              {/* Contact Form Section - Commented Out as Requested */}
              {/* <div className="mt-24">
                <motion.h2 
                  className="text-4xl font-heading font-light text-black mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Send Us a Message
                </motion.h2>
                
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-12"></div>
                
                <motion.div 
                  className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4720B]/50 focus:border-[#F4720B]" 
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4720B]/50 focus:border-[#F4720B]" 
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4720B]/50 focus:border-[#F4720B]" 
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="6" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4720B]/50 focus:border-[#F4720B]" 
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="w-full md:w-auto px-8 py-3 bg-[#F4720B] text-white font-medium rounded-md hover:bg-[#E36000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4720B]/50"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div> */}
            </div>
          </motion.div>
        </section>
  
        {/* Extra space for scroll */}
        <div className="h-[50vh] bg-[#fbfbfb]"></div>
      </div>
      <Footer />
    </LogoRevealWrapper>
  );
}
