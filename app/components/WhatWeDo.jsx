import React, { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile when the component mounts
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Set up listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const menuItems = [
    { 
      id: 1, 
      text: 'Empowering Inclusion for All Abilities' , 
      tagline: 'Accessible Futures' ,
      href: '/accessible-futures', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 2, 
      text: 'Championing Women in Sustainability', 
      tagline: 'SHE for Sustainability',
      href: '/she-for-sustainability', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 3, 
      text: 'Mental Health Through the Lens of Mindfulness', 
      tagline: 'You Are Not Alone',
      href: '/you-are-not-alone', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 4, 
      text: 'Advocating Girl Child Education', 
      tagline: 'She Leads, We Rise',
      href: '/she-leads-we-rise', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 5, 
      text: 'Bridging the Rural Health Divide', 
      tagline: 'Health Beyond Boundaries',
      href: '/health-beyond-boundaries', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 6, 
      text: 'Relief & Rehabilitation in Times of Calamity', 
      tagline: 'Hope in Crisis',
      href: '/hope-in-crisis', 
      color: 'bg-[#fbfbfb]' 
    },
    { 
      id: 7, 
      text: 'Honouring National Icons, Preserving Legacies', 
      tagline: 'Eternal Flame Campaign',
      href: '/eternal-flame-campaign', 
      color: 'bg-[#fbfbfb]' 
    },
  ];

  const handleItemClick = (e, id) => {
    // If on mobile, prevent navigation and toggle the active item
    if (isMobile) {
      e.preventDefault();
      setActiveItem(activeItem === id ? null : id);
    }
    // On desktop, let the link work normally
  };

  return (
    <section className="relative min-h-[100vh] md:min-h-[120vh] w-full py-[20px] md:py-[40px]">
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
          <div className="absolute inset-0 bg-[#F4720B] opacity-100"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-start md:justify-center z-10 overflow-y-auto">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 pt-16 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] px-[12px] md:px-[28px] lg:px-[32px] font-title text-[#fbfbfb] mb-6 md:mb-16 pt-[20px] md:pt-[50px]">
            What we do
          </h1>

          <div className="w-full font-paragraph">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className={`group relative w-full border-t border-[#E4DCCA]/25 overflow-hidden cursor-pointer ${activeItem === item.id ? 'active' : ''}`} 
                onClick={(e) => handleItemClick(e, item.id)}
                suppressHydrationWarning={true}
              >
                {/* Background that slides up on hover/touch */}
                <div 
                  className={`absolute inset-0 ${item.color === 'bg-orange-500' ? 'bg-[#F4720B]' : item.color} transition-transform duration-200 
                  ${activeItem === item.id ? 'translate-y-0' : 'translate-y-full'} 
                  md:translate-y-full md:group-hover:translate-y-0 z-10`}
                ></div>
                
                {/* Link - only active on desktop */}
                <a 
                  href={item.href} 
                  className="absolute inset-0 z-30 md:block" 
                  aria-label={item.text}
                  onClick={(e) => handleItemClick(e, item.id)}
                ></a>
                
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
                        className={`absolute font-paragraph max-w-[80%] text-xl sm:text-2xl md:text-3xl text-[#F4720B] z-20 
                        [transition:transform_0.3s_ease,opacity_0.3s_ease] md:[transition:transform_2s_cubic-bezier(0.22,1,0.36,1)]
                        ${activeItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'}
                        md:opacity-0 md:-translate-x-1/2 md:group-hover:opacity-100 md:group-hover:translate-x-0`}
                      >
                        {item.tagline}
                      </h3>
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