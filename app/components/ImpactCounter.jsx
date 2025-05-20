import React, { useState, useEffect, useRef } from 'react';

const ImpactCounter = () => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  const [moneyCount, setMoneyCount] = useState(0);
  const [acresCount, setAcresCount] = useState(0);
  const [waterCount, setWaterCount] = useState(0);
  
  // Final values
  const moneyTarget = 32.3;
  const acresTarget = 28489;
  const waterTarget = 97391;
  
  // Reference to the component
  const componentRef = useRef(null);

  // Setup intersection observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When component becomes visible in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.25, // trigger when 25% visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Animation effect for the money counter
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const increment = moneyTarget / steps;
    let current = 0;
    let timer;

    const updateCounter = () => {
      current += increment;
      if (current >= moneyTarget) {
        setMoneyCount(moneyTarget);
        clearInterval(timer);
      } else {
        setMoneyCount(current);
      }
    };

    timer = setInterval(updateCounter, interval);
    return () => clearInterval(timer);
  }, [isVisible]);

  // Animation effect for the acres counter
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const increment = acresTarget / steps;
    let current = 0;
    let timer;

    const updateCounter = () => {
      current += increment;
      if (current >= acresTarget) {
        setAcresCount(acresTarget);
        clearInterval(timer);
      } else {
        setAcresCount(Math.floor(current));
      }
    };

    timer = setInterval(updateCounter, interval);
    return () => clearInterval(timer);
  }, [isVisible]);

  // Animation effect for the water counter
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const increment = waterTarget / steps;
    let current = 0;
    let timer;

    const updateCounter = () => {
      current += increment;
      if (current >= waterTarget) {
        setWaterCount(waterTarget);
        clearInterval(timer);
      } else {
        setWaterCount(Math.floor(current));
      }
    };

    timer = setInterval(updateCounter, interval);
    return () => clearInterval(timer);
  }, [isVisible]);

  // Formatter for the numbers
  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="py-12 px-4 max-w-screen-xl min-h-[70vh] mx-auto flex flex-col  justify-center">
      <h2 className="text-[36px] font-medium text-[#1b1a1f] md:text-[42px] mb-[20px] flex items-center">
        <span className="inline-block w-3 h-3  bg-brown-600 rounded-full mr-2"></span>
        Our Impact to Date
      </h2>
      
      <div 
        ref={componentRef}
        className="bg-[#F4720B] rounded-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
      >
        {/* Money Counter */}
        <div className="text-center md:text-left md:border-r md:border-white md:pr-8">
          <h3 className="text-5xl md:text-6xl font-light mb-2">
            ${moneyCount.toFixed(1)} M
          </h3>
          <p className="text-xl text-green-100 mb-6">Deployed for Ecosystem Resilience</p>
          <button suppressHydrationWarning className="bg-[#1b1a1f] hover:bg-[#262626] transition-colors px-6 py-2 rounded-md">
            Learn More
          </button>
        </div>
        
        {/* Acres Counter */}
        <div className="text-center md:border-r md:border-white md:px-8">
          <h3 className="text-5xl md:text-6xl font-light mb-2">
            {formatNumber(Math.floor(acresCount))}
          </h3>
          <p className="text-xl text-green-100">Acres Protected</p>
        </div>
        
        {/* Water Counter */}
        <div className="text-center md:text-left md:pl-8">
          <h3 className="text-5xl md:text-6xl font-light mb-2">
            {formatNumber(Math.floor(waterCount))}
          </h3>
          <p className="text-xl text-green-100">Acre-feet Water Supply Protected</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCounter;