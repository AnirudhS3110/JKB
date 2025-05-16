import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const WhatWeDo = () => {
  const [activeItem, setActiveItem] = useState(null);
  
  const menuItems = [
    { id: 1, text: 'Boost productivity', href: '/boost-productivity', color: 'bg-orange-500' },
    { id: 2, text: 'Increase incomes', href: '/increase-incomes', color: 'bg-yellow-500' },
    { id: 3, text: 'Increase food security and nutrition', href: '/food-security', color: 'bg-sky-400' },
    { id: 4, text: 'Act on climate change', href: '/climate-change', color: 'bg-orange-500' },
    { id: 5, text: 'Protect ecosystems', href: '/protect-ecosystems', color: 'bg-green-500' },
    { id: 6, text: 'Connect farmers to markets', href: '/connect-farmers', color: 'bg-green-500' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://www.farmafrica.org/wp-content/uploads/2024/08/b0c28c6c321159613dd90fea4c698b92-scaled.jpeg.webp')",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>

      {/* Navigation & Donate Button */}
      <div className="absolute top-0 w-full flex justify-between items-center p-6 z-10">
        <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Link href="/donate" className="bg-yellow-300 text-gray-900 py-4 px-8 rounded-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Donate
        </Link>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-16 mt-10">
            What we do
          </h1>

          <div className="w-full max-w-3xl">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Highlight background that appears on hover */}
                {activeItem === item.id && (
                  <div className="absolute left-0 right-0 h-full bg-sky-400 bg-opacity-90 z-0"></div>
                )}
                
                {/* Menu item */}
                <div className={`relative z-10 py-7 ${index !== menuItems.length - 1 ? 'border-b border-gray-400 border-opacity-30' : ''}`}>
                  <Link 
                    href={item.href}
                    className="flex items-center justify-between text-white text-2xl md:text-3xl font-medium group"
                  >
                    <span className={activeItem === item.id ? 'font-semibold' : ''}>{item.text}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeItem === item.id ? 'bg-white' : item.color}`}>
                      <FaArrowRight className={`text-xs ${activeItem === item.id ? 'text-sky-400' : 'text-white'}`} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;