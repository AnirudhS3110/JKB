'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function PartnershipTypesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const partnershipTypes = [
    {
      name: "Knowledge & Research Collaboration",
      designation: "Academic & Research Collaboration",
      quote: "Collaborate with us to conduct groundbreaking research, develop evidence-based interventions, and create knowledge resources that drive sustainable social change. Our knowledge Collaboration bridge theory and practice to address complex challenges.",
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/partnership/k nowledge-research"
    },
    {
      name: "Technology & Innovation Collaboration",
      designation: "Tech-Driven Social Solutions",
      quote: "Leverage technology to amplify social impact. We collaborate with tech innovators to develop digital solutions, platforms, and tools that address critical needs and create scalable, sustainable change in underserved communities.",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/partnership/technology-innovation"
    },
    {
      name: "Media & Communication Support",
      designation: "Amplifying Impact Stories",
      quote: "Join forces with us to craft compelling narratives, raise awareness, and mobilize support for critical social causes. Our media collaborations create powerful storytelling that inspires action and drives meaningful engagement.",
      src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2670&auto=format&fit=crop",
      link: "/partnership/media-communication"
    },
    {
      name: "Volunteer & Capacity Building",
      designation: "People-Powered Change",
      quote: "Empower your team through meaningful volunteer opportunities and capacity building initiatives. Our collaborations create pathways for skill-based volunteering, leadership development, and community engagement that benefit all stakeholders.",
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/partnership/volunteer-capacity"
    },
    {
      name: "Government & Civic Engagement",
      designation: "Public-Private Collaboration",
      quote: "Work with us to bridge public and private sectors for systemic change. Our government collaborations facilitate policy advocacy, program implementation, and resource mobilization that address structural challenges at scale.",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/partnership/government-civic"
    },
    {
      name: "Institutional & Infrastructure Support",
      designation: "Building Sustainable Foundations",
      quote: "Collaborate with us to strengthen the physical and organizational infrastructure needed for lasting social impact. From facility development to systems strengthening, these collaborations create the foundation for sustainable community development.",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/partnership/institutional-infrastructure"
    }
  ];

  return (
    <section id="partnership-types" className="bg-[#fbfbfb] " ref={sectionRef}>
      <div className="max-w-7xl lg:max-w-[1000px] mx-auto px-6">
        <motion.div 
          className="text-center "
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-light text-black mb-6">Collaboration Types</h2>
          <div className="w-24 h-1 bg-[#F4720B] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-paragraph">
            Explore the different ways your organization can collaborate with us to create meaningful impact.
          </p>
        </motion.div>
        
        <AnimatedTestimonials testimonials={partnershipTypes} autoplay={true} showLearnMore={true} />
      </div>
    </section>
  );
} 