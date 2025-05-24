import React from "react";
import Footer from "@/app/components/Footer";

export default function ImpactPage() {
  return (
    <>
      <div className="min-h-screen bg-[#151419] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Impact</h1>
          <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto">
            Transforming lives and creating positive change through our initiatives and programs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <a href="/impact/facts-and-figures" className="bg-[#1e1d24] p-8 rounded-lg hover:bg-[#252429] transition-all">
              <h2 className="text-2xl font-bold mb-4">Facts and Figures</h2>
              <p>Explore the data behind our work and the measurable impact we've made in communities.</p>
            </a>
            
            <a href="/impact/success-stories" className="bg-[#1e1d24] p-8 rounded-lg hover:bg-[#252429] transition-all">
              <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
              <p>Read inspiring stories of individuals and communities whose lives have been transformed.</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 