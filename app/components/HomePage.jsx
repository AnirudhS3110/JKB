'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import UpcomingCampaigns from './UpcomingCampaigns';
import AboutUsSection from './AboutUs';
import PartnershipOpportunities from './PartnershipOpportunities';
import NewsResources from './NewsResources';
import FactsFigures from './FactsFigures';
import PersuasuveSection from './PersuasuveSection';
import Footer from './Footer';

export default function HomePage() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const mainContentRef = useRef(null);
  const isInView = useInView(containerRef);
  
  // For main content scroll effects
  const { scrollYProgress: mainScrollProgress } = useScroll({
    target: mainContentRef,
    offset: ["start end", "end start"]
  });
  
  const mainTextOpacity = useTransform(mainScrollProgress, [0, 0.3], [0, 1]);
  const taglineY = useTransform(mainScrollProgress, [0, 1], ["30%", "0%"]);
  
  return (
    <div className="relative bg-white" ref={containerRef}>
      {/* Full screen background video from the O - styled to match ending of animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* <video 
          ref={videoRef}
          className="w-full h-full object-cover scale-110 grayscale" // Added grayscale filter
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: 'scale(1.05)',
            transformOrigin: 'center center'
          }}
        >
          <source src="/videos/impact-video.mp4" type="video/mp4" />
        </video> */}
        
        {/* Overlay to ensure text readability */}
        <motion.div 
          className="absolute inset-0 bg-white" 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero section */}
        <section 
          className="min-h-screen relative overflow-hidden bg-[#F4720B] flex flex-col justify-center"
        >
          <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="mb-20"
            >
              <h2 className="text-white text-6xl sm:text-7xl md:text-8xl font-semibold leading-tight tracking-tighter">
                Change isn't coming.
              </h2>
              <h2 className="text-black text-6xl sm:text-7xl md:text-8xl font-semibold mt-2 leading-tight tracking-tighter">
                <span className="text-balck">It's </span><span className='text-white'>here</span>  <span className="text-black">.</span>
              </h2>
              
              <p className="text-white text-xl md:text-3xl mt-8 max-w-3xl font-light leading-relaxed">
                Join the campaigns that don't just promise tomorrow.
                <br />They deliver it today.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute left-1/2 bottom-16 transform -translate-x-1/2"
              >
                <svg className="w-10 h-10 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Main content section - Based on second image */}
        {/* <section 
          ref={mainContentRef}
          className="min-h-screen bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-6 py-40">
            <motion.div
              className="max-w-5xl"
              style={{ 
                opacity: mainTextOpacity,
                y: taglineY 
              }}
            >
              <h2 className="text-gray-700 text-6xl sm:text-7xl md:text-8xl font-bold mb-10">
                sustainable initiatives
              </h2>
              
              <h2 className="text-black text-6xl sm:text-7xl md:text-8xl font-bold mb-20">
                is the answer
              </h2>
              
              <p className="text-gray-900 text-xl md:text-2xl max-w-3xl">
                What if there was a way to empower lives through sustainable initiatives?
              </p>
            </motion.div>
          </div>
        </section> */}
        
        {/* Upcoming Campaigns Section */}
        <section id="upcoming-campaigns" className="relative">
          <UpcomingCampaigns />
        </section>
        <PersuasuveSection />
        
        {/* Facts and Figures Section */}
        {/* <section id="facts-figures" className="relative">
          <FactsFigures />
        </section> */}

        <AboutUsSection />
        
        {/* Partnership Opportunities Section */}
        <section id="partnership" className="relative">
          <PartnershipOpportunities />
        </section>
        
        {/* News and Resources Section */}
        <section id="news-resources" className="relative">
          <NewsResources />
        </section>

         <Footer />
        
        {/*  */}
        
      </div>
     
    </div>
  );
} 