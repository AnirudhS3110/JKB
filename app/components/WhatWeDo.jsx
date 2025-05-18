import React, { useState } from 'react';
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
    <section className="relative min-h-screen w-full py-[40px] ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://videos.openai.com/vg-assets/assets%2Ftask_01jv1y1r4jf5m83n6brpt8pf01%2F1747043086_img_0.webp?st=2025-05-18T14%3A43%3A24Z&se=2025-05-24T15%3A43%3A24Z&sks=b&skt=2025-05-18T14%3A43%3A24Z&ske=2025-05-24T15%3A43%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=QXFptrtEQiOlG1pn7XQaNwEMe4dw4jMKkJaaMCjki%2B8%3D&az=oaivgprodscus')",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-[#F4720B] opacity-15"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-6xl px-[34px] md:text-7xl font-bold text-[#fbfbfb] mb-16 pt-[50px]">
            What we do
          </h1>

          <div className="w-full mb-[40px]">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative overflow-hidden"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Highlight background with smooth transition */}
                <div 
                  className={`absolute left-0 right-0 h-full bg-[#151419] opacity-0 transition-all duration-500 ease-in-out z-0 ${
                    activeItem === item.id ? 'opacity-100' : ''
                  }`}
                ></div>
                
                {/* Menu item with smooth content scaling */}
                <div className={`relative z-10 py-7 mx-[50px] mr-[80px] transition-transform duration-500 ease-in-out ${
                  activeItem === item.id ? 'scale-105 origin-left' : ''
                } ${index !== menuItems.length - 1 ? 'border-b border-gray-400 border-opacity-30' : ''}`}>
                  <a 
                    href={item.href}
                    className="flex items-center justify-between text-white text-2xl md:text-3xl font-medium group"
                  >
                    <span className={`transition-all duration-500 ease-in-out ${
                      activeItem === item.id ? 'font-semibold text-[#F4720B] transform scale-105' : ''
                    }`}>
                      {item.text}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                      activeItem === item.id ? 'bg-[#F4720B] transform scale-110' : item.color
                    }`}>
                      <FaArrowRight className={`text-xs transition-all duration-500 ease-in-out ${
                        activeItem === item.id ? 'text-[#fbfbfb]' : 'text-white'
                      }`} />
                    </div>
                  </a>
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