import React, { useState } from 'react';

const WhatWeDo = () => {
  const [activeItem, setActiveItem] = useState(null);
  
  const menuItems = [
    { 
      id: 1, 
      text: 'Accessible Futures', 
      tagline: 'Empowering Inclusion for All Abilities',
      href: '/accessible-futures', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 2, 
      text: 'SHE for Sustainability', 
      tagline: 'Championing Women in Sustainability',
      href: '/she-for-sustainability', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 3, 
      text: 'You Are Not Alone', 
      tagline: 'Mental Health Through the Lens of Mindfulness',
      href: '/you-are-not-alone', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 4, 
      text: 'She Leads, We Rise', 
      tagline: 'Advocating Girl Child Education',
      href: '/she-leads-we-rise', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 5, 
      text: 'Health Beyond Boundaries', 
      tagline: 'Bridging the Rural Health Divide',
      href: '/health-beyond-boundaries', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 6, 
      text: 'Hope in Crisis', 
      tagline: 'Relief & Rehabilitation in Times of Calamity',
      href: '/hope-in-crisis', 
      color: 'bg-[#F4720B]' 
    },
    { 
      id: 7, 
      text: 'Eternal Flame Campaign', 
      tagline: 'Honouring National Icons, Preserving Legacies',
      href: '/eternal-flame-campaign', 
      color: 'bg-[#F4720B]' 
    },
  ];

  const handleItemTouch = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[120vh] w-full py-[20px] md:py-[40px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/BG-201.png')",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-start md:justify-center z-10 overflow-y-auto">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 pt-16 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-[12px] md:px-[28px] lg:px-[32px] font-heading text-[#fbfbfb] mb-6 md:mb-16 pt-[20px] md:pt-[50px]">
            What we do
          </h1>

          <div className="w-full">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className={`group relative w-full border-t border-[#E4DCCA]/25 overflow-hidden ${activeItem === item.id ? 'active' : ''}`} 
                suppressHydrationWarning={true}
                
              >
                {/* Background that slides up on hover/touch */}
                <div 
                  className={`absolute inset-0 ${item.color === 'bg-orange-500' ? 'bg-[#F4720B]' : item.color} transition-transform duration-200 
                  ${activeItem === item.id ? 'translate-y-0' : 'translate-y-full'} 
                  md:translate-y-full md:group-hover:translate-y-0 z-10`}
                ></div>
                
                {/* Full area clickable link */}
                <a href={item.href} className="absolute inset-0 z-30" aria-label={item.text}></a>
                
                <div className="relative w-full">
                  <div className="container">
                    <div className="flex justify-between items-center relative py-4 md:py-8">
                      {/* Initial visible text */}
                      <h3 
                        className={`relative font-paragraph text-lg sm:text-xl md:text-2xl text-white z-0 
                        [transition:transform_0.3s_ease,opacity_0.3s_ease] md:[transition:transform_2s_cubic-bezier(0.22,1,0.36,1),opacity_0.3s_linear]
                        ${activeItem === item.id ? 'opacity-0 translate-y-1/2' : ''}
                        md:group-hover:opacity-0 md:group-hover:translate-y-1/2`}
                      >
                        {item.text}
                      </h3>
                      
                      {/* Tagline that appears on hover/touch */}
                      <h3 
                        className={`absolute font-paragraph max-w-[80%] text-xl sm:text-2xl md:text-3xl text-white z-20 
                        [transition:transform_0.3s_ease,opacity_0.3s_ease] md:[transition:transform_2s_cubic-bezier(0.22,1,0.36,1)]
                        ${activeItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'}
                        md:opacity-0 md:-translate-x-1/2 md:group-hover:opacity-100 md:group-hover:translate-x-0`}
                      >
                        {item.tagline}
                      </h3>
                      
                      {/* Arrow icon */}
                      {/* <div 
                        className={`flex relative origin-right z-20 
                        transition-transform duration-300 md:[transition:transform_2s_cubic-bezier(0.22,1,0.36,1)]
                        ${activeItem === item.id ? 'scale-[1.4] md:scale-[1.666]' : ''}
                        md:group-hover:scale-[1.666] [&_circle]:fill-current [&_circle]:stroke-current [&_circle]:transition-colors 
                        [&_path]:fill-white [&_path]:transition-colors 
                        ${activeItem === item.id ? '[&_circle]:fill-white [&_circle]:stroke-white [&_path]:fill-[#F4720B]' : ''}
                        md:group-hover:[&_circle]:fill-white md:group-hover:[&_circle]:stroke-white md:group-hover:[&_path]:fill-[#F4720B]`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
                          <g id="arrow">
                            <circle 
                              id="Ellipse 2" 
                              cx="12" 
                              cy="12" 
                              r="11.75" 
                              className={`${item.color === 'bg-orange-500' ? 'text-[#F4720B]' : item.color.replace('bg-', 'text-')}`}
                              strokeWidth="0.5"
                            ></circle>
                            <path 
                              id="Vector" 
                              d="M15.8045 12.0048C15.8665 12.0698 15.9156 12.147 15.9492 12.232C15.9827 12.3169 16 12.408 16 12.5C16 12.592 15.9827 12.6831 15.9492 12.768C15.9156 12.853 15.8665 12.9302 15.8045 12.9952L13.138 15.7949C13.0129 15.9262 12.8433 16 12.6664 16C12.4895 16 12.3198 15.9262 12.1947 15.7949C12.0696 15.6635 11.9994 15.4854 11.9994 15.2997C11.9994 15.114 12.0696 14.9358 12.1947 14.8045L13.7238 13.1999H8.66662C8.48982 13.1999 8.32027 13.1262 8.19525 12.9949C8.07023 12.8637 8 12.6856 8 12.5C8 12.3144 8.07023 12.1363 8.19525 12.0051C8.32027 11.8738 8.48982 11.8001 8.66662 11.8001H13.7238L12.1947 10.1955C12.0696 10.0642 11.9994 9.88605 11.9994 9.70031C11.9994 9.51458 12.0696 9.33645 12.1947 9.20512C12.3198 9.07378 12.4895 9 12.6664 9C12.8433 9 13.0129 9.07378 13.138 9.20512L15.8045 12.0048Z" 
                              fill="white"
                            ></path>
                          </g>
                        </svg>
                      </div> */}
                    </div>
                  </div>
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