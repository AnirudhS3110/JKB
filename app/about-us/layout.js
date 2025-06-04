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
      
      <div className="min-h-[70vh] flex flex-col ">
       {children}
       <ExploreNav navItems={navItems}/>
        
        <Footer/>
      </div>
    </section>
  );
} 