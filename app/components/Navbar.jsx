"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ImprovedNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [renderComplete, setRenderComplete] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Mark component as rendered on client side
    setRenderComplete(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if navbar exists
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        const isInNavbarRegion = navbarRect.top + navbarRect.height > 0;
        
        // Only close if in navbar region and scrolling up
        if (isInNavbarRegion && currentScrollY < lastScrollY - 5) {
          if (activeDropdown === 'mobile') {
            setActiveDropdown(null);
          }
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown, lastScrollY]);

  const navItems = [
    {
      title: 'Upcoming Campaigns',
      href:'/#upcoming-campaigns',
      description: 'Learn about our current initiatives and how you can get involved to create meaningful change.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      links: [
        { text: 'Upcoming Campaign', href: '/upcoming-campaigns/upcoming-campaigns' },
        // { text: 'How to Participate', href: '/participate' },
        // { text: 'Campaign Timeline', href: '/timeline' },
      ]
    },
    {
      title: 'Impact',
      href:'/#impact',
      description: 'Explore the measurable change we\'ve created through sustainable initiatives across communities.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      links: [
        { text: 'Facts & Figures', href: '/impact/facts-and-figures' },
        // { text: 'Success Stories', href: '/impact/success-stories' },
      ]
    },
    {
      title: 'About', 
      href:'/#about',
      description: 'Discover our story, mission, and the legacy of Jaskaran Bothra that guides our foundation.',
      image: '/images/about-background.jpg',
      
      links: [
        { text: 'About Us', href: '/about-us/about-us' },
        { text: 'Our Vision and Mission', href: '/about-us/vision-and-mission' },
        { text: 'HONORING JASKARAN BOTHRA', href: '/about-us/honouring-jaskaran-bothra' },
      ]
    },
    {
      title: 'Partnership',
      href:'/#partnership',
      description: 'Join forces with us to amplify your impact through strategic collaborations and initiatives.',
      image: 'https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcnRuZXJzaGlwfGVufDB8fDB8fHww',
      links: [
        { text: 'Knowledge & Research Partnerships', href: '/partnership/knowledge-research' },
        { text: 'Technology & Innovation Collaboration', href: '/partnership/technology-innovation' },
        { text: 'Media & Communication Partnerships', href: '/partnership/media-communication' },
        { text: 'Volunteer & Capacity-Building Engagements', href: '/partnership/volunteer-capacitys' },
        { text: 'Government & Civic Partnerships', href: '/partnership/government-civic' },
        { text: 'Institutional & Infrastructure Support', href: '/partnership/institutional-infrastructure' }
      ]
    },
    {
      title: 'News',
      href:'/#news',
      description: 'Stay updated with our latest initiatives, media coverage, and educational resources.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      links: [
        { text: 'Latest News', href: '/news/latest' },
        { text: 'Media Coverage', href: '/news/media-coverage' },
      ]
    }
  ];

  return (
    <header 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-220 transition-all duration-300 ${
        isScrolled || activeDropdown !== null ? 'bg-[#000000]' : 'bg-transparent'
      }`}
      suppressHydrationWarning
    >
      {/* Main Navigation Container */}
      <div className="container mx-auto pr-4 pl-0 pt-4 md:pt-0 md:px-4 md:px-8 lg:px-16 xl:px-24 font-paragraph" suppressHydrationWarning>
        <div className="flex items-center justify-between h-20 lg:h-[100px]" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/JKBLogo.png" alt="Jaskaran Bothra Foundation" className="h-[220px] md:pt-[30px] md:pb-[15px] md:h-[340px]" />
            
          </Link>

          {/* Desktop Navigation */}
          {renderComplete && (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <div 
                    key={index}
                    className="relative  group font-paragraph"
                    onMouseEnter={() => setActiveDropdown(index)}
                    /* We're removing onMouseLeave from here */
                  >
                    <div className="flex items-center text-[#F8F9FA] hover:text-[#F4720B]">
                    <div className="w-[10px] h-[10px] bg-[#F4720B] hover:bg-[#F4720B] rounded-full"></div>
                    <a 
                      href={item.href} 
                      className="text-[#F8F9FA] hover:text-[#F4720B] py-7 px-2 transition-colors relative text-sm font-medium flex items-center"
                    >
                      {item.title}
                    </a>
                    </div>
                  </div>
                ))}

                {/* Search Button */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('search')}
                  /* We're removing onMouseLeave from here */
                >
                  <button 
                    className="text-[#F8F9FA] hover:text-[#F4720B] transition-colors w-10 h-10 rounded-full bg-[#F4720B] hover:bg-[#F8F9FA] flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#F8F9FA]"
                onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dropdown Mega Menu */}
      {renderComplete && (
        <AnimatePresence>
          {activeDropdown !== null && typeof activeDropdown === 'number' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 w-full bg-[#000000] font-paragraph  text-[#F8F9FA] shadow-lg"
              onMouseEnter={() => setActiveDropdown(activeDropdown)} /* Keep dropdown open when mouse enters it */
              onMouseLeave={() => setActiveDropdown(null)}  /* Close dropdown when mouse leaves it */
            >
              <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Description text */}
                  <div className="w-full md:w-1/3 pr-0 md:pr-16 mb-8 md:mb-0 flex flex-col items-center md:items-start">
                    <img 
                      src={navItems[activeDropdown].image || '/images/navbar-default.jpg'} 
                      alt={navItems[activeDropdown].title + ' image'} 
                      className="mb-4 w-full h-[180px] md:h-[220px] object-cover rounded-md shadow-md bg-[#222]" 
                    />
                    
                  </div>

                  {/* Right side - Title and links with arrows */}
                  <div className="w-full md:w-2/3">
                    <div className="mb-10">
                      <h2 className="text-4xl font-title font-light text-[#F8F9FA]">{navItems[activeDropdown].title}</h2>
                      <div className="h-1 w-24 bg-[#F4A261] rounded-full mt-2"></div>
                    </div>
                    <div className="space-y-6">
                      {navItems[activeDropdown].links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex justify-between items-center border-b border-[#6C757D] pb-4 group">
                          <a 
                            href={link.href}
                            className="text-[#F8F9FA] group-hover:text-[#F4720B] transition-colors text-xl"
                          >
                            {link.text}
                          </a>
                          <div className="bg-transparent rounded-full p-1">
                            <svg 
                              className="w-6 h-6 text-[#F4A261] group-hover:text-[#F4720B]" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Search Dropdown */}
          {activeDropdown === 'search' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 w-full bg-[#000000] shadow-lg"
              onMouseEnter={() => setActiveDropdown('search')} /* Keep dropdown open when mouse enters it */
              onMouseLeave={() => setActiveDropdown(null)}  /* Close dropdown when mouse leaves it */
            >
              <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3"></div>
                  <div className="w-full md:w-2/3">
                    <div className="mb-10">
                      <h2 className="text-4xl font-medium text-[#F8F9FA]">Search</h2>
                      <div className="h-1 w-24 bg-[#F4A261] rounded-full mt-2"></div>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full px-5 py-4 bg-[#6C757D] text-[#F8F9FA] border border-[#A8DADC] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#F4A261] placeholder-[#F8F9FA]/70 text-lg"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F4A261] hover:text-[#F8F9FA]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Menu */}
      {renderComplete && (
        <AnimatePresence>
          {activeDropdown === 'mobile' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
now               className="md:hidden bg-[#000000] font-paragraph w-full max-h-[100vh] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-[#6C757D] pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-[#F8F9FA] py-2"
                      onClick={() => setMobileSubMenu(mobileSubMenu === index ? null : index)}
                    >
                      <span className="text-lg font-medium">{item.title}</span>
                      <svg className={`w-4 h-4 transition-transform ${mobileSubMenu === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <AnimatePresence>
                      {mobileSubMenu === index && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 space-y-4 pl-4 bg-[#111111] p-3 rounded"
                        >
                          {item.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex}
                              href={link.href}
                              className="block text-[#F4720B] hover:text-[#F8F9FA] py-2 border-b border-[#333333] flex items-center justify-between"
                            >
                              <span>{link.text}</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Mobile Search */}
                <div className="pt-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full bg-[#6C757D] text-[#F8F9FA] px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#F4A261] placeholder-[#F8F9FA]/70"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#F4A261] hover:text-[#F8F9FA]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default ImprovedNavbar;