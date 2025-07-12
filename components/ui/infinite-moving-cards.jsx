"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  children,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
        isHovered && "after:content-[''] after:absolute after:inset-0 after:bg-black/5 after:rounded-lg after:z-10"
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {pauseOnHover && isHovered && (
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-30">
          Paused
        </div>
      )}
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && isHovered && "animation-play-state-paused"
        )}
        style={pauseOnHover && isHovered ? { animationPlayState: 'paused' } : {}}
      >
        {items.map((item, idx) => (
          <li
            className="shrink-0"
            key={idx}
          >
            {children ? children(item, idx) : (
              <div className="relative w-[350px] max-w-full rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}; 