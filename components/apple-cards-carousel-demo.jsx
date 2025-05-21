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
  
  const cards = data.map((card, index) => (
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
    <div className="w-full h-full py-20 z-[200] bg-[#fbfbfb]" ref={sectionRef}>
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
        className="w-full  overflow-visible"
      >
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7]  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-montserrat max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Creating sustainable change through innovative solutions.
              </span>{" "}
              The Jaskaran Bothra Foundation is dedicated to empowering communities and making a lasting impact through sustainable initiatives and compassionate action.
            </p>
            <img
              src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Foundation impact photo"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Environmental Impact",
    title: "Sustainable solutions for our planet.",
    src: "https://pbs.twimg.com/ext_tw_video_thumb/1767599852513345536/pu/img/8wf0Lew78qkDXEso?format=jpg&name=large",
    content: <DummyContent />,
  },
  {
    category: "Community Support",
    title: "Name Her Claim Her:Rewrite Identity with Equality.",
    src: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvkkcztve2qsa8p8edqbdg6w%2F1747635877_img_3.webp?st=2025-05-19T05%3A25%3A19Z&se=2025-05-25T06%3A25%3A19Z&sks=b&skt=2025-05-19T05%3A25%3A19Z&ske=2025-05-25T06%3A25%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iMkkvEllRsJOIGK5MsjnzEXVYsOsQsJM0GICc%2FgcPNI%3D&az=oaivgprodscus",
    content: <DummyContent />,
  },
  {
    category: "Community Support",
    title: "Name Her Claim Her:Rewrite Identity with Equality.",
    src: "https://pbs.twimg.com/ext_tw_video_thumb/1383099908266151939/pu/img/QqJqamTvQZgZhATL.jpg",
    content: <DummyContent />,
  },
  // {
  //   category: "Health Initiatives",
  //   title: "Improving access to healthcare for all.",
  //   src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "Innovation",
  //   title: "Creating new pathways for change.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  {
    category: "Partnerships",
    title: "Collaborating for greater impact.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
]; 