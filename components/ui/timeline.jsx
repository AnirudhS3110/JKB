"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

export const Timeline = ({ data, title, description, customStyles = {} }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Default styles that can be overridden
  const styles = {
    bg: customStyles.bg || "bg-[#0F172A]",
    yearColor: customStyles.yearColor || "text-orange-500",
  };

  // Use useLayoutEffect for accurate measurement
  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]); // Add data as dependency in case timeline changes

  // Call useScroll after ref is attached, add layoutEffect: false to avoid hydration warning
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
    layoutEffect: false,
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation variants for fade-in effect
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div
      className={`w-full ${styles.bg} text-white py-32 min-h-screen`}
      ref={containerRef}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
      >
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto font-cormorant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {title || "Our Journey"}
          </motion.h2>
          <motion.div 
            className="h-1 max-w-[250px] bg-[#FE871B] rounded-full mb-6 mx-auto"
            initial={{ opacity: 0, y: 20, width: "0px" }}
            whileInView={{ opacity: 1, y: 0, width: "250px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-white text-sm md:text-[24px] max-w-2xl mx-auto font-montserrat leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {description || "Tracking our progress and milestones in building a better future through sustainable initiatives."}
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto">
          {data.map((item, index) => {
            const itemRef = useRef(null);
            const isInView = useInView(itemRef, { once: true, amount: 0.3 });
            
            return (
              <motion.div
                key={index}
                ref={itemRef}
                className="flex justify-start pt-10 md:pt-40 md:gap-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-[#fbfbfb] flex items-center justify-center shadow-lg">
                    <div className="h-5 w-5 rounded-full bg-orange-500 dark:bg-orange-600 border border-orange-300 dark:border-orange-700 p-2 shadow-inner" />
                  </div>
                  <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${styles.yearColor} font-cormorant`}>
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold ${styles.yearColor} font-cormorant`}>
                    {item.title}
                  </h3>
                  {item.content}{" "}
                </div>
              </motion.div>
            );
          })}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute  md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 dark:via-gray-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-[#fbfbfb] to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};