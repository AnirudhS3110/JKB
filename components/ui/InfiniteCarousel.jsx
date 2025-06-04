'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function InfiniteCarousel({ 
  items, 
  direction = 'left', 
  speed = 25, 
  pauseOnHover = true,
  onItemClick = () => {},
  gap = 20,
  itemWidth = 250,
  itemHeight = 350,
}) {
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  const [hovering, setHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  // Duplicate items to create the infinite effect
  useEffect(() => {
    if (items && items.length > 0) {
      // Duplicate items to ensure smooth infinite scrolling
      setDuplicatedItems([...items, ...items]);
    }
  }, [items]);

  // Get container width for animation calculation
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [duplicatedItems]);

  // Calculate animation duration based on container width and speed
  const duration = containerWidth / speed;

  // Start the animation when component mounts
  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: direction === 'left' 
          ? [`0px`, `-${containerWidth}px`] 
          : [`-${containerWidth}px`, `0px`],
        transition: {
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }
        }
      });
    }
  }, [controls, containerWidth, direction, duration]);

  // Pause animation on hover
  useEffect(() => {
    if (hovering && pauseOnHover) {
      controls.stop();
    } else if (!isDragging) {
      controls.start({
        x: direction === 'left' 
          ? [`0px`, `-${containerWidth}px`] 
          : [`-${containerWidth}px`, `0px`],
        transition: {
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }
        }
      });
    }
  }, [hovering, controls, containerWidth, direction, duration, pauseOnHover, isDragging]);

  return (
    <div 
      className="overflow-hidden relative"
      onMouseEnter={() => pauseOnHover && setHovering(true)}
      onMouseLeave={() => pauseOnHover && setHovering(false)}
      ref={containerRef}
    >
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -containerWidth, right: containerWidth }}
        dragElastic={0.2}
        onDragStart={() => {
          controls.stop();
          setIsDragging(true);
        }}
        onDragEnd={() => {
          setIsDragging(false);
          if (!hovering || !pauseOnHover) {
            controls.start({
              x: direction === 'left' 
                ? [`0px`, `-${containerWidth}px`] 
                : [`-${containerWidth}px`, `0px`],
              transition: {
                x: {
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }
              }
            });
          }
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={`${item.id || index}-${index}`}
            className="flex-shrink-0 cursor-pointer relative group"
            style={{ width: itemWidth, height: itemHeight }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onItemClick(item)}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={item.image}
                alt={item.title || `Newspaper ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 250px"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 