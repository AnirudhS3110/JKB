'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'Upcoming Campaign',
      description: 'Learn about our current initiatives and how you can get involved to create meaningful change.',
      links: [
        { text: 'Upcoming Campaign', href: '/campaign' },
        { text: 'How to Participate', href: '/participate' },
        { text: 'Campaign Timeline', href: '/timeline' },
      ]
    },
    {
      title: 'Our Impact',
      description: 'Explore the measurable change we\'ve created through sustainable initiatives across communities.',
      links: [
        { text: 'Facts & Figures', href: '/impact' },
        { text: 'Success Stories', href: '/stories' },
        { text: 'Annual Reports', href: '/reports' },
      ]
    },
    {
      title: 'About Us',
      description: 'Discover our story, mission, and the legacy of Jaskaran Bothra that guides our foundation.',
      links: [
        { text: 'Our Vision and Mission', href: '/vision' },
        { text: 'Origin Story', href: '/origin' },
        { text: 'HONORING JASKARAN BOTHRA', href: '/jaskaran-bothra' },
      ]
    },
    {
      title: 'Partnership Opportunities',
      description: 'Join forces with us to amplify your impact through strategic collaborations and initiatives.',
      links: [
        { text: 'Corporate Partners', href: '/corporate' },
        { text: 'Individual Giving', href: '/donate' },
        { text: 'Volunteer Programs', href: '/volunteer' },
      ]
    },
    {
      title: 'News And Resources',
      description: 'Stay updated with our latest initiatives, media coverage, and educational resources.',
      links: [
        { text: 'Latest News', href: '/news' },
        { text: 'Publications', href: '/publications' },
        { text: 'Media Coverage', href: '/media' },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-200 transition-all duration-300 ${
        isScrolled || activeDropdown !== null ? 'bg-[#000000]' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-[#F4A261]">Jaskaran Bothra</span>
              <span className="ml-2 text-[#F8F9FA]">Foundation</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href="#" 
                  className="text-[#F8F9FA] hover:text-[#A8DADC] py-7 px-2 transition-colors relative text-sm font-medium flex items-center"
                >
                  {item.title}
                </a>

                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 w-screen bg-[#000000] text-[#F8F9FA] shadow-lg"
                      style={{ marginLeft: '-100vw', paddingLeft: '100vw', marginRight: '-100vw', paddingRight: '100vw' }}
                    >
                      <div className="w-full py-16">
                        <div className="w-full max-w-6xl mx-auto px-8 md:px-4 flex">
                          {/* Left side - Description text */}
                          <div className="w-1/3 pr-16">
                            <p className="text-sm text-[#F8F9FA]/80 font-light leading-relaxed max-w-xs">
                              {item.description}
                            </p>
                          </div>

                          {/* Right side - Title and links with arrows */}
                          <div className="w-2/3">
                            <div className="mb-10">
                              <h2 className="text-4xl font-medium text-[#F8F9FA]">{item.title}</h2>
                              <div className="h-1 w-24 bg-[#F4A261] rounded-full mt-2"></div>
                            </div>
                            <div className="space-y-6">
                              {item.links.map((link, linkIndex) => (
                                <div key={linkIndex} className="flex justify-between items-center border-b border-[#6C757D] pb-4 group">
                                  <a 
                                    href={link.href}
                                    className="text-[#F8F9FA] group-hover:text-[#A8DADC] transition-colors text-xl"
                                  >
                                    {link.text}
                                  </a>
                                  <div className="bg-transparent rounded-full p-1">
                                    <svg 
                                      className="w-6 h-6 text-[#F4A261] group-hover:text-[#A8DADC]" 
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
                </AnimatePresence>
              </div>
            ))}

            {/* Search Button */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('search')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="text-[#F8F9FA] hover:text-[#A8DADC] transition-colors w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center"
                suppressHydrationWarning={true}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <AnimatePresence>
                {activeDropdown === 'search' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 w-screen bg-[#000000] shadow-lg"
                    style={{ marginLeft: '-100vw', paddingLeft: '100vw', marginRight: '-100vw', paddingRight: '100vw' }}
                  >
                    <div className="w-full py-16">
                      <div className="w-full max-w-6xl mx-auto px-8 md:px-4 flex">
                        <div className="w-1/3 pr-16"></div>
                        <div className="w-2/3">
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
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {activeDropdown === 'mobile' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#000000] w-full"
          >
            <div className="w-full px-8 py-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-[#6C757D] pb-4">
                  <button 
                    className="flex justify-between items-center w-full text-[#F8F9FA] py-2"
                    onClick={() => setActiveDropdown(activeDropdown === `mobile-${index}` ? 'mobile' : `mobile-${index}`)}
                  >
                    <span>{item.title}</span>
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === `mobile-${index}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === `mobile-${index}` && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {item.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex}
                            href={link.href}
                            className="block text-[#A8DADC] hover:text-[#F8F9FA] py-1"
                          >
                            {link.text}
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
    </header>
  );
};

export default Navbar;