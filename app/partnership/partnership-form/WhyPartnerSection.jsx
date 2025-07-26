'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyPartnerSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const reasons = [
    {
      id: 1,
      title: "Amplified Social Impact",
      description: "By partnering with Jaskaran Bothra Foundation, your organization's social initiatives gain enhanced reach and impact. Our established networks and deep community connections ensure your contributions create meaningful, lasting change where it's needed most.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Innovation & Expertise",
      description: "Access our team's specialized knowledge in sustainable development, community engagement, and social innovation. We bring proven methodologies and creative problem-solving approaches to every collaboration, helping you pioneer solutions that truly make a difference.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Enhanced Brand Reputation",
      description: "Align your brand with authentic social responsibility. Our collaborations are built on transparency and measurable outcomes, helping you demonstrate genuine commitment to societal improvement while building trust with your stakeholders and customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Sustainable Ecosystem Building",
      description: "Join a growing network of like-minded organizations committed to long-term change. Our collaborative approach creates synergies between partners, fostering an ecosystem where collective efforts yield exponentially greater results than individual initiatives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#F4720B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 9.5l3 3m0 0l-3 3m3-3H9" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-partner" className="py-24 bg-[#fbfbfb]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-light text-black mb-6">Why Partner with Jaskaran Bothra Foundation</h2>
          <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-paragraph">
            Together, we can create transformative change that benefits communities while advancing your organization's vision and values.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="bg-orange-100 p-4 rounded-lg mr-6">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-medium mb-4">{reason.title}</h3>
                  <p className="text-gray-600 font-paragraph">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 