"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, title, description, customStyles = {} }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Default styles that can be overridden
  const styles = {
    bg: customStyles.bg || "bg-[#0F172A]",
    yearColor: customStyles.yearColor || "text-orange-500",
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full ${styles.bg} text-white py-32 min-h-screen`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-10">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto font-cormorant">
            {title || "Milestones in Our Journey"}
          </h2>
          <div className="h-1 w-24 bg-orange-500 rounded-full mb-6 mx-auto"></div>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto font-montserrat leading-relaxed">
            {description || "From humble beginnings to ambitious future plans - tracing the growth of the Jaskaran Bothra Foundation and its impact."}
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-[#1E293B] flex items-center justify-center shadow-lg">
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
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 dark:via-gray-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-green-600 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 