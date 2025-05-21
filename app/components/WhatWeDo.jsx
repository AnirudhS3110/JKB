import React from 'react';

const WhatWeDo = () => {
  const menuItems = [
    { id: 1, text: 'Girl Child Education', href: '/boost-productivity', color: 'bg-[#F4720B]' },
    { id: 2, text: 'Women Empowerment', href: '/increase-incomes', color: 'bg-[#F4720B]' },
    { id: 3, text: 'Digital Literacy', href: '/food-security', color: 'bg-[#F4720B]' },
    { id: 4, text: 'Healthcare Initiatives', href: '/climate-change', color: 'bg-[#F4720B]' },
    { id: 5, text: 'Skill Dvelopment', href: '/protect-ecosystems', color: 'bg-[#F4720B]' },
    { id: 6, text: 'Infrastructural Aids', href: '/connect-farmers', color: 'bg-[#F4720B]' },
  ];

  return (
    <section className="relative min-h-[150vh] md:min-h-[120vh] w-full py-[40px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/about-background.jpg')",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-[56px] px-[28px] md:px-[32px] md:text-7xl font-bold text-[#fbfbfb] mb-16 pt-[50px]">
            What we do
          </h1>

          <div className="w-full">
            {menuItems.map((item) => (
              <div key={item.id} className="group relative w-full border-t border-[#E4DCCA]/25 overflow-hidden" suppressHydrationWarning={true}>
                {/* Background that slides up on hover */}
                <div className={`absolute inset-0 ${item.color === 'bg-orange-500' ? 'bg-[#F4720B]' : item.color} transition-transform duration-200 translate-y-full group-hover:translate-y-0 z-10`}></div>
                
                {/* Full area clickable link */}
                <a href={item.href} className="absolute inset-0 z-30" aria-label={item.text}></a>
                
                <div className="relative w-full">
                  <div className="container">
                    <div className="flex justify-between items-center relative py-8">
                      {/* Initial visible text */}
                      <h3 className="relative text-Monserrat text-xl sm:text-2xl text-white z-0 [transition:transform_2s_cubic-bezier(0.22,1,0.36,1),opacity_0.3s_linear] group-hover:opacity-0 group-hover:translate-y-1/2">
                        {item.text}
                      </h3>
                      
                      {/* Text that appears on hover */}
                      <h3 className="absolute max-sm:max-w-[80%] max-md:max-w-[90%] text-2xl sm:text-3xl text-white z-20 [transition:transform_2s_cubic-bezier(0.22,1,0.36,1)] opacity-0 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-x-0">
                        {item.text}
                      </h3>
                      
                      {/* Arrow icon */}
                      <div className="flex relative origin-right z-20 [transition:transform_2s_cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.666] [&_circle]:fill-current [&_circle]:stroke-current [&_circle]:transition-colors [&_path]:fill-white [&_path]:transition-colors group-hover:[&_circle]:fill-white group-hover:[&_circle]:stroke-white group-hover:[&_path]:fill-[#F4720B]">
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
                      </div>
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