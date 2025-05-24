"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ImprovedNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [renderComplete, setRenderComplete] = useState(false);

  useEffect(() => {
    // Mark component as rendered on client side
    setRenderComplete(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'Upcoming Campaigns',
      description: 'Learn about our current initiatives and how you can get involved to create meaningful change.',
      image: 'https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/Bollywood-Actor-Shradha-Kapoor-joined-Protesters-f_1708193327170.jpg',
      links: [
        { text: 'Upcoming Campaign', href: '/upcoming-campaigns/upcoming-campaigns' },
        // { text: 'How to Participate', href: '/participate' },
        // { text: 'Campaign Timeline', href: '/timeline' },
      ]
    },
    {
      title: 'Impact',
      description: 'Explore the measurable change we\'ve created through sustainable initiatives across communities.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jvkjz8gpe9xtpvjwyp66m64r%2F1747635471_img_2.webp?st=2025-05-19T11%3A49%3A21Z&se=2025-05-25T12%3A49%3A21Z&sks=b&skt=2025-05-19T11%3A49%3A21Z&ske=2025-05-25T12%3A49%3A21Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=owy4sQ6m7lKv%2FIMlH10yT%2Be8UstHBSWYtQRmSP%2F8%2FQ8%3D&az=oaivgprodscus',
      links: [
        { text: 'Facts & Figures', href: '/impact' },
        { text: 'Success Stories', href: '/stories' },
        { text: 'Annual Reports', href: '/reports' },
      ]
    },
    {
      title: 'About',
      description: 'Discover our story, mission, and the legacy of Jaskaran Bothra that guides our foundation.',
      image: '/images/about-background.jpg',
      links: [
        { text: 'Our Vision and Mission', href: '/about-us/vision-and-mission' },
        { text: 'HONORING JASKARAN BOTHRA', href: '/about-us/honouring-jaskaran-bothra' },
      ]
    },
    {
      title: 'Partnership',
      description: 'Join forces with us to amplify your impact through strategic collaborations and initiatives.',
      image: 'https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcnRuZXJzaGlwfGVufDB8fDB8fHww',
      links: [
        { text: 'Corporate Partners', href: '/corporate' },
        { text: 'Individual Giving', href: '/donate' },
        { text: 'Volunteer Programs', href: '/volunteer' },
      ]
    },
    {
      title: 'News',
      description: 'Stay updated with our latest initiatives, media coverage, and educational resources.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jvkf63qvfhptpxx4h7c8bcp8%2F1747631469_img_0.webp?st=2025-05-19T03%3A26%3A06Z&se=2025-05-25T04%3A26%3A06Z&sks=b&skt=2025-05-19T03%3A26%3A06Z&ske=2025-05-25T04%3A26%3A06Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qgzxCqcVfa1GTAgA5MVhTNRsZ42hLQsHV82sEAWpe6c%3D&az=oaivgprodscus%27',
      links: [
        { text: 'Latest News', href: '/news' },
        { text: 'Publications', href: '/publications' },
        { text: 'Media Coverage', href: '/media' },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-220 transition-all duration-300 ${
        isScrolled || activeDropdown !== null ? 'bg-[#000000]' : 'bg-transparent'
      }`}
      suppressHydrationWarning
    >
      {/* Main Navigation Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 font-paragraph" suppressHydrationWarning>
        <div className="flex items-center justify-between h-20" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvsgk7s6ecbrajwvn17jvadf%2F1747834277_img_3.webp?st=2025-05-21T12%3A00%3A05Z&se=2025-05-27T13%3A00%3A05Z&sks=b&skt=2025-05-21T12%3A00%3A05Z&ske=2025-05-27T13%3A00%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jfXuY05qCaTRo4SrPZQpHMpHT7jKZjI%2BErED3cimSYI%3D&az=oaivgprodscus" alt="Jaskaran Bothra Foundation" className="h-[160px] md:pt-[23px] md:pb-[15px] md:h-[230px]" />
            
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
                      href="#" 
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
                      className="mb-4 w-[90%] h-[70%] object-cover  shadow-md  bg-[#222]" 
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
              className="md:hidden bg-[#000000] font-paragraph w-full"
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