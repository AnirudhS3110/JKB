'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'About',
      description: 'Learn about our foundation, mission, and the legacy of Jaskaran Bothra that guides our work.',
      links: [
        { text: 'Our Vision and Mission', href: '/vision' },
        { text: 'Origin Story', href: '/origin' },
        { text: 'Honoring Jaskaran Bothra', href: '/jaskaran-bothra' },
      ]
    },
    {
      title: 'Our Campaign',
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
      title: 'Partnership',
      description: 'Join forces with us to amplify your impact through strategic collaborations and initiatives.',
      links: [
        { text: 'Corporate Partners', href: '/corporate' },
        { text: 'Individual Giving', href: '/donate' },
        { text: 'Volunteer Programs', href: '/volunteer' },
      ]
    },
    {
      title: 'News & Resources',
      description: 'Stay updated with our latest initiatives, media coverage, and educational resources.',
      links: [
        { text: 'Latest News', href: '/news' },
        { text: 'Publications', href: '/publications' },
        { text: 'Media Coverage', href: '/media' },
      ]
    }
  ];

  // Animations
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || activeDropdown !== null || isMobileMenuOpen 
          ? 'bg-[#0F2A16]/95 backdrop-blur-md shadow-lg text-white' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 flex items-center">
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-white">Jaskaran Bothra</span>
              <span className="ml-1 font-light text-orange-400">Foundation</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
              >
                <button 
                  className={`py-2 group relative text-sm font-medium transition-all duration-300 flex items-center ${
                    activeDropdown === index 
                      ? 'text-orange-500' 
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full mr-2 bg-white opacity-60"></span>
                  {item.title}
                </button>
              </div>
            ))}

            {/* Search Button */}
            <div className="flex items-center">
              <button 
                className="p-2 rounded-full transition-colors duration-300 bg-[#1C3D25] hover:bg-[#254b2e] text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveDropdown(null);
            }}
          >
            <span className="sr-only">Open menu</span>
            <div className="relative w-6 h-5">
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-white ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              ></span>
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-white ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : ''
                }`}
                style={{marginTop: isMobileMenuOpen ? '0' : '8px'}}
              ></span>
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-white ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} 
                style={{marginTop: '16px'}}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Full Width Dropdown - Fixed Position */}
      <AnimatePresence>
        {activeDropdown !== null && typeof activeDropdown === 'number' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 w-full bg-[#0F2A16] shadow-xl overflow-hidden"
          >
            <div className="container mx-auto py-10 px-4 lg:px-8">
              <div className="flex">
                {/* Left side with image and description */}
                <div className="w-1/3 pr-8">
                  <h3 className="text-4xl font-medium text-white mb-2">{navItems[activeDropdown].title}</h3>
                  <div className="h-1 w-24 bg-orange-500 rounded-full mb-6"></div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {navItems[activeDropdown].description}
                  </p>
                  <div className="mt-6">
                    <img 
                      src="https://www.blueforest.org/wp-content/uploads/2024/01/about.jpg" 
                      alt="Nature image" 
                      className="w-full h-32 object-cover rounded-md opacity-90" 
                    />
                  </div>
                </div>
                
                {/* Right side with links */}
                <div className="w-1/3">
                  <div className="space-y-1">
                    {navItems[activeDropdown].links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-gray-700/50">
                        <Link 
                          href={link.href}
                          className="group flex justify-between items-center py-4 text-gray-100 hover:text-orange-400 transition-colors"
                        >
                          <span className="text-lg">{link.text}</span>
                          <div className="rounded-full">
                            <svg 
                              className="w-6 h-6 text-orange-500 group-hover:text-orange-400" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href={`/${navItems[activeDropdown].title.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm">
                      Explore all {navItems[activeDropdown].title.toLowerCase()} 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Additional content section */}
                <div className="w-1/3">
                  <div className="bg-[#1C3D25] p-6 h-full rounded-md">
                    <h4 className="text-xl font-medium text-orange-400 mb-4">Featured</h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-white font-medium mb-2">Get Involved</h5>
                        <p className="text-sm text-gray-300">Join us in making a difference through our sustainable initiatives.</p>
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-2">Latest Updates</h5>
                        <p className="text-sm text-gray-300">Stay informed about our most recent activities and achievements.</p>
                      </div>
                      <Link href="/contact" className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors mt-4">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-[#0F2A16] overflow-hidden border-t border-[#1C3D25]"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-[#1C3D25] pb-4">
                  <button 
                    className="flex justify-between items-center w-full text-white font-medium py-2"
                    onClick={() => setActiveDropdown(activeDropdown === `mobile-${index}` ? null : `mobile-${index}`)}
                  >
                    <span>{item.title}</span>
                    <svg 
                      className={`w-4 h-4 text-orange-500 transition-transform duration-300 ${
                        activeDropdown === `mobile-${index}` ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === `mobile-${index}` && (
                      <motion.div 
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2}}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#1C3D25] p-4 mt-2 rounded space-y-3">
                          <p className="text-sm text-gray-300 mb-3">{item.description}</p>
                          {item.links.map((link, linkIndex) => (
                            <Link 
                              key={linkIndex}
                              href={link.href}
                              className="block text-orange-400 hover:text-orange-300 py-2 px-2 border-l border-orange-700 hover:border-orange-500 transition-colors duration-200"
                            >
                              {link.text}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-2">
                <div className="relative rounded overflow-hidden">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-[#1C3D25] text-white border border-[#254b2e] px-4 py-3 pr-10 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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