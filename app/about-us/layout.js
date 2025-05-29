"use client"

import React from 'react';
import Footer from '@/app/components/Footer';
export default function AboutUsLayout({ children }) {
  return (
    <section className="w-full min-h-screen">
      {/* <div className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">Learn more about our organization, mission, values and impact</p>
        </div>
      </div> */}
      
      <div className="min-h-[70vh]">
        {children}
       <Footer/>
        
      </div>
    </section>
  );
} 