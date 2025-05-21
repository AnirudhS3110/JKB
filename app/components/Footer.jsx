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
          <div className="">
            <div className="flex flex-row gap-4 items-center">
              <Link href="/" className="inline-block">
                <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvsgk7s6ecbrajwvn17jvadf%2F1747834277_img_3.webp?st=2025-05-21T12%3A00%3A05Z&se=2025-05-27T13%3A00%3A05Z&sks=b&skt=2025-05-21T12%3A00%3A05Z&ske=2025-05-27T13%3A00%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jfXuY05qCaTRo4SrPZQpHMpHT7jKZjI%2BErED3cimSYI%3D&az=oaivgprodscus" alt="Jaskaran Bothra Foundation" className="h-[200px] md:h-[230px]" />
              </Link>
              <img src="/images/BelowLogoFooter.jpg" alt="Below Logo Footer" className="w-auto h-[100px]" />
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
          <div className="bg-[#F4720B] h-auto md:h-[200px] max-h-[450px] p-6 rounded-lg">
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