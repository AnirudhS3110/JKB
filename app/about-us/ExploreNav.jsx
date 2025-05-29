"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ExploreNav = ({navItems}) => {
  const pathname = usePathname();
  
 
  
  return (
    <div className="bg-[#FF7322] p-6 lg:p-10 h-full">
      <div className="mb-6">
        <h3 className="text-[#fbfbfb] font-title text-[22px] md:text-[32px] flex items-center">
          <span className="h-2 w-2 bg-[#fbfbfb] rounded-full mr-3"></span>
          Explore
        </h3>
      </div>
      
      {navItems.map((item, index) => {
        if(item.href !== pathname){
          return (
            <React.Fragment key={item.href}>
              <div className="border-t border-[#fbfbfb]/60 py-5">
                <Link 
                  href={item.href}
                  className={`text-[#fbfbfb] text-[20px] md:text-3xl font-heading hover:text-[#121212] transition-colors ${
                    pathname === item.href ? 'text-[#F4720B]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            </React.Fragment>
          )
        }
      })}
    </div>
  );
};

export default ExploreNav; 