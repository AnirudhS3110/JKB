'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UpcomingCampaigns() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Sample campaign data - replace with real data later
  const campaigns = [
    {
      id: 1,
      title: "Upper Wenatchee | FRB",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jv2q20xye4zr3wqcq43pa4re%2F1747069331_img_2.webp?st=2025-05-12T15%3A55%3A18Z&se=2025-05-18T16%3A55%3A18Z&sks=b&skt=2025-05-12T15%3A55%3A18Z&ske=2025-05-18T16%3A55%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=eafHgk4DyxCBEYK1WhWNu69e1P9u%2FTnYP990ZzSgI%2FQ%3D&az=oaivgprodscus",
      status: "Project Underway",
      statusColor: "#4CAF50", // Green
      date: "October 2023 - March 2024",
      description: "Supporting sustainable agriculture practices in the Upper Wenatchee region to improve food security and community resilience."
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jv2qg197ej49zzway9yqgd09%2F1747069795_img_0.webp?st=2025-05-12T15%3A57%3A04Z&se=2025-05-18T16%3A57%3A04Z&sks=b&skt=2025-05-12T15%3A57%3A04Z&ske=2025-05-18T16%3A57%3A04Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=VmWhpQ5J%2FIqlWaH%2FCouR8MlZl9SYFNvH%2F%2B3CCn7HnFY%3D&az=oaivgprodscus",
      status: "Enrolling Now",
      statusColor: "#F4720B", // Brand orange
      date: "January - December 2024",
      description: "Bringing clean water to communities through innovative filtration systems and education on water conservation."
    },
    {
      id: 3,
      title: "Education Empowerment",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jv2skjbdeaqvs5krqhr85d18%2F1747072011_img_0.webp?st=2025-05-12T15%3A55%3A18Z&se=2025-05-18T16%3A55%3A18Z&sks=b&skt=2025-05-12T15%3A55%3A18Z&ske=2025-05-18T16%3A55%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DnJiVyHp6W4Qq3tiVRIj%2F342kvK0VyivlrdxP5ArktE%3D&az=oaivgprodscus",
      status: "Starting Soon",
      statusColor: "#2196F3", // Blue
      date: "March - September 2024",
      description: "Providing educational resources and technology to underserved schools to bridge the digital divide."
    }
  ];

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
  
  // Sparkle animation for buttons
  const sparkleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative bg-white" ref={sectionRef}>
      {/* Subtle pattern overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F4720B_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] -z-10"></div>

      <div className="container mx-auto py-24">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] mb-4 tracking-tight">Upcoming Campaigns</h2>
          <div className="h-1 w-24 bg-[#F4720B] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Join us in making a difference through our innovative and impactful campaigns.
            These initiatives are designed to create sustainable change in communities.
          </p>
        </motion.div>

        {/* Campaign cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border-t border-l border-gray-100"
              variants={cardVariants}
              initial="hidden"
              custom={index}
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative h-56">
                <div 
                  className="absolute top-0 left-0 z-10 py-2 px-4 rounded-br-lg"
                  style={{ backgroundColor: campaign.statusColor + "E6" }}
                >
                  <span className="text-xs font-medium text-white">{campaign.status}</span>
                </div>
                <Image 
                  src={campaign.image} 
                  alt={campaign.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#121212] mb-2 tracking-tight">{campaign.title}</h3>
                <p className="text-[#F4720B] text-sm mb-4 font-medium">{campaign.date}</p>
                <p className="text-gray-600 mb-8 font-normal leading-relaxed">{campaign.description}</p>
                <div className="relative inline-block group">
                  <a className="relative z-10 inline-block bg-[#F4720B] text-white font-normal px-6 py-3 rounded-md hover:bg-[#E05900] transition-all">
                    Enroll Now
                  </a>
                  {/* Sparkle effects */}
                  <motion.div 
                    className="absolute -top-1 -left-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -right-1 w-2 h-2 bg-[#F4720B]/30 rounded-full"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.8 }}
                  />
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#F4720B]/30 rounded-full"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative inline-block group">
            <Link 
              href="/campaigns" 
              className="relative z-10 inline-block bg-[#121212] text-white font-normal px-8 py-3 rounded-md hover:bg-[#2A2A2A] transition-all border border-[#F4720B]/20"
            >
              View All Campaigns
            </Link>
            {/* Sparkle effects */}
            <motion.div 
              className="absolute -top-1 -left-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
            />
            <motion.div 
              className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4720B]/30 rounded-full"
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
            />
            <motion.div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-[#F4720B]/30 rounded-full"
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.0 }}
            />
            <motion.div 
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#F4720B]/30 rounded-full"
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5 }}
            />
          </div>
        </motion.div>

        {/* Persuasive section */}
        
      </div>
    </div>
  );
} 