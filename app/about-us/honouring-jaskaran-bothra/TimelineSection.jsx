'use client';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
  const timelineRef = useRef(null);
  
  // State to ensure animations run on load
  const [animationReady, setAnimationReady] = useState(false);
  
  // Ensure animations run even if InView doesn't trigger properly
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 1000); // Delay to allow page to load
    
    return () => clearTimeout(timer);
  }, []);
  
  // The timeline event data
  const timelineData = [
    {
      title: "May 15, 2003",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            To honor his contributions, the Ministry of Communications, Government of India, celebrated his 75th birth anniversary at the Darbar Hall, Lallgarh Palace, Bikaner, with the release of a Special Cover and Cancellation. The event was attended by many dignitaries, ministers, and national figures.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600093696242-31144e5bf156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Commemoration event"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1485282162962-60439c579019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1070&q=80" 
              alt="Special cover and cancellation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July 8, 2000",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Shri Bothra passed away like a saint through "Santhara" (voluntary fast unto death) after 8 days of spiritual preparation. Santhara is a Jain spiritual practice indicating that the person has renounced worldly desires and achieved deep self-control. His final rites were conducted with saintly honors, reinforcing the values he lived by.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80" 
              alt="Spiritual legacy"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <>
      {/* Timeline Section */}
      <section ref={timelineRef} className="relative bg-black text-white">
        {/* Use the existing Timeline component with custom styling */}
        <Timeline 
          data={timelineData}
          title="Commemorations & Final Journey"
          description="Significant moments in honoring Shri Jaskaran Bothra's contributions and spiritual passage"
          customStyles={{
            bg: "bg-black",
            yearColor: "text-[#FF8E16] drop-shadow-md",
          }}
        />
      </section>
      
      {/* Quote Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={animationReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="mb-8"
            >
              <svg className="w-12 h-12 text-[#F4720B] mx-auto mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p className="text-[#fbfbfb] text-xl md:text-2xl lg:text-3xl font-light font-paragraph leading-relaxed">
                His life exemplified the power of service, education, and spiritual values in transforming communities. Today, we honor his vision by continuing his work of empowering the underserved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 