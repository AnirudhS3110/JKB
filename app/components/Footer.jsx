import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#151419] pt-12 pb-6 relative">
      {/* Background leaf pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-left-bottom"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="inline-block">
                <svg 
                  width="230" 
                  height="70" 
                  viewBox="0 0 230 70" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  {/* Custom JKB Logo */}
                  <rect width="230" height="70" fill="none" />
                  
                  {/* Background shape */}
                  <path 
                    d="M20 10h190c5.523 0 10 4.477 10 10v30c0 5.523-4.477 10-10 10H20c-5.523 0-10-4.477-10-10V20c0-5.523 4.477-10 10-10z" 
                    fill="#0F172A" 
                    fillOpacity="0.95" 
                  />
                  
                  {/* J */}
                  <path 
                    d="M50 15V40c0 4.418-3.582 8-8 8h-4" 
                    stroke="#F4720B" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                  />
                  
                  {/* K */}
                  <path 
                    d="M70 15v32M70 30l20-15M70 30l20 17" 
                    stroke="#F4720B" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  
                  {/* B */}
                  <path 
                    d="M110 15v32M110 15h15c3.866 0 7 3.134 7 7v0c0 3.866-3.134 7-7 7h-15M110 29h18c3.866 0 7 3.134 7 7v0c0 3.866-3.134 7-7 7h-18" 
                    stroke="#F4720B" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  
                  {/* Foundation text */}
                  <text 
                    x="160" 
                    y="33" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="12" 
                    letterSpacing="1" 
                    fill="#FFFFFF"
                    fontWeight="bold"
                  >
                    FOUNDATION
                  </text>
                  
                  {/* Decorative leaf element */}
                  <path 
                    d="M180 42c0 0 9-5 13-12s3-12 0-14c-3-2-9 0-13 7s-4 12-4 12" 
                    stroke="#4CAF50" 
                    strokeWidth="1.5" 
                    fill="#4CAF50" 
                    fillOpacity="0.4"  
                  />
                  <path 
                    d="M185 42c0 0 7-8 8-15s-1-12-4-13c-3-1-8 3-10 10s-1 12-1 12" 
                    stroke="#4CAF50" 
                    strokeWidth="1.5" 
                    fill="#4CAF50" 
                    fillOpacity="0.6"  
                  />
                  
                  {/* Tagline */}
                  <text 
                    x="115" 
                    y="55" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="8" 
                    textAnchor="middle" 
                    fill="#FFFFFF"
                    letterSpacing="0.8"
                  >
                    SUSTAINABILITY • EDUCATION • IMPACT
                  </text>
                </svg>
              </Link>
              
              <Link href="/" className="inline-block">
                <Image 
                  src="https://www.farmafrica.org/wp-content/uploads/2024/06/fundraising.svg" 
                  alt="Fundraising Regulator" 
                  width={130} 
                  height={80} 
                />
              </Link>
            </div>
            
            {/* Search Box */}
            <div className="relative flex items-center  max-w-md">
              <input 
                suppressHydrationWarning
                type="text" 
                placeholder="Search..." 
                className="w-full rounded-full py-2 px-4 pr-12 bg-[#fbfbfb] text-[#000000] border border-gray-300 focus:outline-none"
              />
              <button suppressHydrationWarning className="absolute right-3">
                <svg className="w-6 h-6 text-[#F4720B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#fbfbfb]">Useful links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/media" className="block text-[#fbfbfb] hover:text-[#F4720B]">Media</Link>
                <Link href="/privacy-cookies" className="block text-[#fbfbfb] hover:text-[#F4720B]">Privacy & cookies</Link>
                <Link href="/modern-slavery" className="block text-[#fbfbfb] hover:text-[#F4720B]">Modern slavery statement</Link>
                <Link href="/tenders" className="block text-[#fbfbfb] hover:text-[#F4720B]">Tenders</Link>
                <Link href="/accessibility" className="block text-[#fbfbfb] hover:text-[#F4720B]">Accessibility</Link>
              </div>
              <div className="space-y-3 text-[#fbfbfb]">
                <Link href="/terms" className="block  hover:text-[#F4720B]">Terms & conditions</Link>
                <Link href="/faqs" className="block  hover:text-[#F4720B]">FAQs</Link>
                <Link href="/policies" className="block  hover:text-[#F4720B]">Policies</Link>
                <Link href="/contact" className="block  hover:text-[#F4720B]">Contact us</Link>
              </div>
            </div>
          </div>
          
          {/* Follow Us Section */}
          <div className="bg-[#F4720B] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#fbfbfb]">Follow us</h3>
            <p className="mb-6 text-[#fbfbfb]">
              Head over to our social media channels to stay up to date and join the conversation.
            </p>
            <div className="flex space-x-3 text-[#fbfbfb]">
              <Link href="https://facebook.com" className="w-10 h-10 rounded-full border-2 border-[#fbfbfb] flex items-center justify-center  hover:bg-gray-800 hover:text-yellow-300 transition-colors">
                <FaFacebookF />
              </Link>
              <Link href="https://twitter.com" className="w-10 h-10 rounded-full border-2 border-[#fbfbfb] flex items-center justify-center  hover:bg-gray-800 hover:text-yellow-300 transition-colors">
                <FaXTwitter />
              </Link>
              <Link href="https://instagram.com" className="w-10 h-10 rounded-full border-2 border-[#fbfbfb] flex items-center justify-center  hover:bg-gray-800 hover:text-yellow-300 transition-colors">
                <AiOutlineInstagram />
              </Link>
              <Link href="https://youtube.com" className="w-10 h-10 rounded-full border-2 border-[#fbfbfb] flex items-center justify-center  hover:bg-gray-800 hover:text-yellow-300 transition-colors">
                <FaYoutube />
              </Link>
              <Link href="https://linkedin.com" className="w-10 h-10 rounded-full border-2 border-[#fbfbfb] flex items-center justify-center  hover:bg-gray-800 hover:text-yellow-300 transition-colors">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600">
          <p>
            Jaskaran Bothra Foundation is registered as a charity organization. © 2024 All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Web design by JKB Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;