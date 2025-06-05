"use client";

import React, { useRef, useState, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, useInView } from "framer-motion";

export default function AppleCardsCarouselDemo() {
  const sectionRef = useRef(null);
  
  // More reliable inView detection with a larger margin
  // This ensures the animation triggers as the section approaches the viewport
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -300px 0px" // Trigger earlier (300px before entering viewport)
  });
  
  // Add a backup timeout to ensure visibility regardless of scroll position
  const [forceVisible, setForceVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Determine if the component should be visible based on either criteria
  const isComponentVisible = isInView || forceVisible;

  // Create cards from data array
  const allCards = [...data].map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  // Define animations with more reliable timing
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full h-full py-20 z-[230] md:z-[200] bg-[#fbfbfb]" ref={sectionRef}>
      <motion.div 
        className="max-w-7xl mx-[15px] md:mx-auto bg-[#fbfbfb] px-4 mb-0 rounded-lg pt-6"
        variants={containerVariants}
        initial="hidden"
        animate={isComponentVisible ? "visible" : "hidden"}
      >
        <h2 className="text-xl md:text-5xl text-[32px] md:text-[42px] font-title font-light text-[#000000]">
          Get to know our impact.
        </h2>
        <p className="text-[#000000] md:text-[20px] mt-2 font-paragraph">
          Discover how our initiatives are creating positive change in communities around the world.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate={isComponentVisible ? "visible" : "hidden"}
        className="w-full overflow-visible"
      >
        <Carousel items={allCards} />
      </motion.div>
    </div>
  );
}

const ContentDisplay = ({ title, bulletPoints }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="text-neutral-700 dark:text-neutral-200 text-base md:text-2xl font-montserrat max-w-3xl mx-auto">
        <h3 className="font-light font-title text-xl md:text-2xl mb-6">{title}</h3>
        <ul className="space-y-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#F4720B] mr-3 text-xl">●</span>
              <span className="text-neutral-600 dark:text-neutral-400 font-paragraph">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// View More card component
// const ViewMoreContent = () => {
//   const handleClick = (e) => {
//     e.preventDefault();
//     window.location.href = '/impact/success-stories';
//   };

//   return (
//     <div 
//       onClick={handleClick}
//       className="cursor-pointer w-full h-full"
//     >
//       <div className="bg-gradient-to-br from-[#FF6309] to-[#FF8E16] p-8 md:p-14 rounded-3xl mb-4 h-full flex flex-col items-center justify-center">
//         <div className="text-white text-center">
//           <h3 className="font-bold text-2xl font-title font-light md:text-4xl mb-6">View More Success Stories</h3>
//           <div className="mt-6 flex justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// View More card definition
// const viewMoreCard = {
//   category: "More Stories",
//   title: "View More",
//   src: "/images/ViewMore.jpg", // You can replace with an actual image or leave as is
//   content: <ViewMoreContent />,
// };

const data = [
  {
    category: "Emergency Relief & Rehabilitation",
    title: "Hope in Crisis",
    src: "/images/HopeInCrisis.jpg",
    content: (
      <ContentDisplay 
        title="Hope in Crisis"
        bulletPoints={[
          "Distributed monthly ration kits to over 500,000 individuals across Mumbai during the COVID-19 pandemic, in collaboration with the Mumbai Police.",
          "Provided critical on-ground support during public health emergencies and natural calamities, ensuring timely humanitarian relief."
        ]}
      />
    ),
  },
  {
    category: "Bridging the Rural Health Divide",
    title: "Health Beyond Boundaries",
    src: "/images/HealthBeyondBoundaries.jpg",
    content: (
      <ContentDisplay 
        title="Health Beyond Boundaries"
        bulletPoints={[
          "Equipped the neonatal ward at PBM Hospital, Bikaner, with infant warmers and phototherapy units, directly addressing neonatal mortality rates.",
          "Installed a high-tech sonography machine, digital X-ray, and standard X-ray unit at Ganga Shahar Satellite Hospital, offering completely free diagnostics to thousands of underserved patients."
        ]}
      />
    ),
  },
  {
    category: "Empowering Inclusion for All Abilities",
    title: "Accessible Futures",
    src: "/images/Accessible.jpg",
    content: (
      <ContentDisplay 
        title="Accessible Futures"
        bulletPoints={[
          "In collaboration with IIT Chennai and Rajasthan Patrika, extended technological support to 1,000 differently-abled individuals and 5,000 visually impaired persons across Rajasthan.",
          "Fostered long-term inclusion through access to assistive technology and community integration."
        ]}
      />
    ),
  },
  {
    category: "Support Her Empowerment",
    title: "SHE for Sustainability",
    src: "/images/SHEpic.jpg",
    content: (
      <ContentDisplay 
        title="SHE for Sustainability"
        bulletPoints={[
          "Launched the \"Named After Mom\" campaign, a first-of-its-kind initiative that successfully advocated for the mandatory inclusion of mothers' names in all government-issued documents.",
          "First adopted by the State of Maharashtra, this campaign is now being pushed for nationwide implementation to recognize and empower women through official identity."
        ]}
      />
    ),
  },
]; 