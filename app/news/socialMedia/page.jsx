'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';
import { FaXTwitter } from 'react-icons/fa6';
import Script from 'next/script';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function SocialMediaPage() {
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // State to track script loading
  const [isTwitterScriptLoaded, setIsTwitterScriptLoaded] = useState(false);

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

  // Twitter embed data for the infinite slider
  const twitterEmbeds = [
    {
      id: "1898334016509497548",
      name: "Siddharth Bothra",
      title: "Founder, Jaskaran Bothra Foundation",
    },
    {
      id: "1869326056211300477",
      name: "Jaskaran Bothra Foundation",
      title: "Official Foundation Account",
    },
    {
      id: "1826282579143827704",
      name: "Jaskaran Bothra Foundation",
      title: "Official Foundation Account",
    },
    {
      id: "1826173183852184001",
      name: "Shikhar Chand Bothra",
      title: "Trustee, Jaskaran Bothra Foundation",
    },
    {
      id: "1825484452891332864",
      name: "Siddharth Bothra",
      title: "Founder, Jaskaran Bothra Foundation",
    },
  ];

  // Loading state for tweet embeds
  const [loadedTweets, setLoadedTweets] = useState({});

  // Function to handle tweet load
  const handleTweetLoad = (id) => {
    setLoadedTweets(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - Sticky at top with lower z-index */}
        <section className="h-screen relative bg-black flex items-center justify-center sticky top-0 z-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2670&auto=format&fit=crop" 
                alt="Social Media" 
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
              <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Social Media</h1>
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                Stay connected with our latest updates and announcements through our social media channels.
              </p>

              <div className="mt-8 flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F4720B] mr-4">
                  <FaXTwitter className="text-white text-2xl" />
                </div>
                <span className="text-white text-xl">@hfbifoundation</span>
              </div>
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
              document.getElementById('tweets-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {/* Text label */}
            <span className="text-white text-lg font-light mb-4 font-paragraph group-hover:text-[#F4720B]/90 transition-colors">
              View Latest Tweets
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
            id="tweets-content"
          >
            <div className="max-w-7xl mx-auto px-6">
              
              {/* NEW: What People Are Saying Section with Infinite Moving Cards */}
              <div className="mt-8 mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-4xl font-heading font-light text-black mb-6 text-center"
                >
                  What People Are Saying
                </motion.h2>
                
                <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-8"></div>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center text-gray-600 max-w-2xl mx-auto font-paragraph mb-12"
                >
                  See what our supporters are sharing on X (formerly Twitter).
                </motion.p>
                
                {/* Infinite Moving Cards Component */}
                <div className="overflow-hidden w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="py-4"
                  >
                    <InfiniteMovingCards
                      items={twitterEmbeds}
                      direction="right"
                      speed="slow"
                      pauseOnHover={true}
                    >
                      {(item) => (
                        <div className="w-[350px] h-[400px] md:w-[450px] md:h-[450px] bg-white rounded-xl shadow-md p-4 flex flex-col mx-4">
                          <div className="flex-grow overflow-hidden relative">
                            {!loadedTweets[item.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#F4720B]"></div>
                              </div>
                            )}
                            <div className="w-full h-full">
                              <TwitterTweetEmbed
                                tweetId={item.id}
                                options={{ 
                                  cards: 'hidden',
                                  width: '100%',
                                  align: 'center',
                                  conversation: 'none',
                                  theme: 'light'
                                }}
                                onLoad={() => handleTweetLoad(item.id)}
                              />
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.title}</p>
                          </div>
                        </div>
                      )}
                    </InfiniteMovingCards>
                  </motion.div>
                </div>
              </div>
              
              {/* View More Link */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-12 text-center"
              >
                <a 
                  href="https://twitter.com/hfbifoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#F4720B] text-white px-6 py-3 rounded-md hover:bg-[#E36000] transition-colors"
                >
                  Follow Us on Twitter
                  <FaXTwitter className="text-lg" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
  
        {/* Extra height to ensure scrolling works properly */}
        <div className="h-[50vh] bg-transparent"></div>
      </div>

      {/* Twitter widgets script */}
      <Script 
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          setIsTwitterScriptLoaded(true);
          if (window.twttr) {
            window.twttr.widgets.load();
          }
        }}
      />
    </LogoRevealWrapper>
  );
}
