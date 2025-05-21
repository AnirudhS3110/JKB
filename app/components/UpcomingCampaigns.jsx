'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UpcomingCampaigns() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Project data with descriptions
  const campaigns = [
    {
      id: 1,
      title: "Upper Wenatchee | FRB",
      image: "https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/Bollywood-Actor-Shradha-Kapoor-joined-Protesters-f_1708193327170.jpg",
      status: "Project Underway",
      statusColor: "#F4720B", // Orange
      description: "Supporting sustainable agriculture practices in the Upper Wenatchee region to improve food security and community resilience."
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/09/06/Pictures/assignment-name-in-brief_ef7f133a-b1e8-11e8-a206-120fd6da8a0d.jpg",
      status: "Enrolling Now",
      statusColor: "#F4720B", // Orange
      description: "Bringing clean water to communities through innovative filtration systems and education on water conservation."
    },
    {
      id: 3,
      title: "Education Empowerment",
      image: "https://images.firstpost.com/wp-content/uploads/2019/10/aarey-banner.jpg",
      status: "Starting Soon",
      statusColor: "#F4720B", // Orange
      description: "Providing educational resources and technology to underserved schools to bridge the digital divide."
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="relative bg-[#fbfbfb]" ref={sectionRef}>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Header section with title and view all button */}
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-5xl  font-heading font-light text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Campaigns
          </motion.h2>
          <button suppressHydrationWarning={true} className="bg-gray-100 md:block hidden text-gray-800 px-5 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors">
            View all
          </button>
        </div>
        
        {/* Separator line */}
        <div className="border-t border-[#F4720B] mb-12"></div>
        
        {/* Campaign cards - no card styling, just content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              variants={cardVariants}
              initial="hidden"
              custom={index}
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col"
            >
              {/* Image container with heart icon */}
              <div  className=" w-full h-64 md:h-72 mb-4">
                <motion.img 
                whileHover={{scale: 1.05}} transition={{duration: 0.5}}
                  src={campaign.image}
                  alt={campaign.title} 
                  style={{ objectFit: 'cover' }}
                  className='w-full h-full object-cover overflow-hidden'
                />
                
              </div>
              
              {/* Status indicator with dot - now below the image */}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: campaign.statusColor }}></div>
                <span className="text-[#F4720B] text-sm font-medium">{campaign.status}</span>
              </div>
              
              {/* Campaign title - left aligned */}
              <h3 className="text-2xl  font-heading font-light text-[#000000] mb-3">
                {campaign.title}
              </h3>
              
              {/* Description - left aligned with image */}
              <p className="text-gray-600 mb-5 font-normal font-paragraph leading-relaxed">
                {campaign.description}
              </p>
              
              {/* Enroll button - left aligned with image */}
              <button suppressHydrationWarning={true} className="text-left w-fit bg-[#F4720B] text-white font-paragraph px-6 py-3 hover:bg-[#E05900] transition-all">
                Enroll Now
              </button>
            </motion.div>
          ))}
          <button suppressHydrationWarning={true} className="bg-gray-100 text-gray-800 px-5 py-2 md:hidden font-paragraph rounded-md text-sm hover:bg-gray-200 transition-colors">
            View all
          </button>
        </div>
        
        {/* Separator line */}
        <div className="border-t border-[#F4720B] mb-8"></div>
      </section>
      {/* Control panel */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-l-md text-white p-2 flex flex-col gap-3">
        <button suppressHydrationWarning={true} className="p-1 hover:bg-gray-700 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button suppressHydrationWarning={true} className="p-1 hover:bg-gray-700 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button suppressHydrationWarning={true} className="p-1 hover:bg-gray-700 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
        <button suppressHydrationWarning={true} className="p-1 hover:bg-gray-700 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>*/}
    </div> 
  );
}