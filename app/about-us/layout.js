"use client"

import React from 'react';
import Footer from '@/app/components/Footer';
import ExploreNav from './ExploreNav';

export default function AboutUsLayout({ children }) {
  const navItems = [
    { label: 'About Us', href: '/about-us/about-us' },
    { label: 'Our Vision and Mission', href: '/about-us/vision-and-mission' },
    { label: 'Honoring Jaskaran Bothra', href: '/about-us/honouring-jaskaran-bothra' },
  ];
  return (
    <section className="w-full min-h-screen">
      {/* <div className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">Learn more about our organization, mission, values and impact</p>
        </div>
      </div> */}
      
      <div className="min-h-[70vh] flex flex-col ">
       {children}
       <ExploreNav navItems={navItems}/>
        
        <Footer/>
      </div>
    </section>
  );
} 