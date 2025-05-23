"use client"

import React, { useEffect, useState, useRef } from 'react';

// Animation helper for number counting effect
const AnimatedCounter = ({ value, duration = 2000, decimals = 0, suffix = "", prefix = "", color = "text-green-600" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    // Convert string values with different formats to numbers
    let finalValue = value;
    if (typeof value === 'string') {
      // Handle percentage
      if (value.endsWith('%')) {
        finalValue = parseFloat(value);
        suffix = '%';
      } 
      // Handle billion/trillion
      else if (value.includes('bt')) {
        finalValue = parseFloat(value);
        suffix = 'bt';
      } 
      // Handle million
      else if (value.includes('m')) {
        finalValue = parseFloat(value);
        suffix = 'm';
      }
      // Handle billion dollars
      else if (value.includes('$') && value.includes('b')) {
        finalValue = parseFloat(value.replace('$', ''));
        prefix = '$';
        suffix = 'b';
      }
      // Handle fractions like 1/4
      else if (value.includes('/')) {
        return <span className={`${color} text-6xl font-bold`}>{value}</span>;
      }
    }

    if (isNaN(finalValue)) {
      setCount(value);
      return;
    }

    if (!countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime;
          const startValue = 0;
          const endValue = finalValue;
          
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
            
            setCount(currentCount);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(countRef.current);
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, duration, color]);

  return (
    <span className={`${color} text-6xl font-bold`} ref={countRef}>
      {prefix}{typeof count === 'number' ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
};

// Card variants for different colors
const cardVariants = {
  orange: {
    border: "border-orange-400",
    number: "text-orange-500",
    icon: "text-orange-400"
  },
  green: {
    border: "border-green-500",
    number: "text-green-500",
    icon: "text-green-500"
  },
  blue: {
    border: "border-blue-400",
    number: "text-blue-400",
    icon: "text-blue-400"
  },
  default: {
    border: "border-green-600",
    number: "text-green-600",
    icon: "text-green-600"
  }
};

// Stat card component
const FactCard = ({ number, description, source, variant = "default", index, isVisible, batchIndex }) => {  
  const cardRef = useRef(null);
  
  // Select color variant
  const cardStyle = cardVariants[variant] || cardVariants.default;

  return (
    <div 
      ref={cardRef} 
      className={`relative bg-white p-8 rounded-lg border-2 ${cardStyle.border} shadow-md 
        transform transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} 
      `}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <div className="mb-4">
        <AnimatedCounter value={number} color={cardStyle.number} />
      </div>
      <div className="text-gray-800 text-lg mb-6">
        {description}
      </div>
      {source && (
        <div className="flex justify-between items-center">
          <div className="text-green-700 underline cursor-pointer">
            Source
          </div>
          <div className={`${cardStyle.icon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

// Cards batch component
const FactsBatch = ({ facts, variant, batchIndex, currentBatch, sectionId }) => {
  const isVisible = batchIndex === currentBatch;
  
  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 absolute w-full transition-opacity duration-500
        ${isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      id={`${sectionId}-batch-${batchIndex}`}
    >
      {facts.map((fact, index) => (
        <FactCard 
          key={index}
          number={fact.number}
          description={fact.description}
          source={fact.source}
          variant={variant === 'mixed' ? ['orange', 'green', 'blue'][index % 3] : variant}
          index={index}
          isVisible={isVisible}
          batchIndex={batchIndex}
        />
      ))}
    </div>
  );
};

// Section component
const FactsSection = ({ title, facts, bgImage = null, variant }) => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const sectionRef = useRef(null);
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  // Divide facts into batches of 3
  const batches = [];
  for (let i = 0; i < facts.length; i += 3) {
    batches.push(facts.slice(i, i + 3));
  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate which batch should be visible based on scroll position
      if (sectionTop <= windowHeight * 0.7 && sectionTop + sectionHeight >= windowHeight * 0.3) {
        // Section is in view
        const scrollPosition = (windowHeight * 0.7 - sectionTop) / sectionHeight;
        const newBatch = Math.min(
          batches.length - 1, 
          Math.floor(scrollPosition * batches.length)
        );
        setCurrentBatch(newBatch);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [batches.length]);
  
  // Section background style
  const bgStyle = bgImage ? 
    { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' } : {};
  
  return (
    <section 
      id={id}
      ref={sectionRef} 
      className={`mb-16 py-16 relative`}
      style={bgStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-green-800 border-b-2 border-green-800 inline-block pb-2">
          {title}
        </h2>
        
        <div className="relative min-h-[400px]">
          {batches.map((batchFacts, batchIndex) => (
            <FactsBatch 
              key={batchIndex}
              facts={batchFacts}
              variant={variant}
              batchIndex={batchIndex}
              currentBatch={currentBatch}
              sectionId={id}
            />
          ))}
        </div>
        
        {batches.length > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {batches.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentBatch(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentBatch ? 
                    'bg-green-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to facts batch ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Main component
const VisionAndMission = () => {
  // Agriculture facts
  const agricultureFacts = [
    { number: "65%", description: "of the population in eastern Africa is employed by agriculture", source: true },
    { number: "80%", description: "of the farmland in sub-Saharan Africa is managed by smallholders", source: true },
    { number: "828m", description: "people in 2021 were undernourished - almost one in 10 worldwide", source: true },
    { number: "1/4", description: "one quarter of the world's arable land is in sub-Saharan Africa", source: true },
    { number: "10%", description: "is all that it produces of the global agricultural output", source: true },
    { number: "1.3bt", description: "of food is wasted per year accounting for 30% of the world's farmed land", source: true }
  ];

  // Environment facts
  const environmentFacts = [
    { number: "3.6%", description: "of all global emissions are contributed by Africa, but the continent is disproportionately affected by the impacts of climate change", source: true },
    { number: "40-80%", description: "of cropland will be lost by farmers in the 2030s and 2040s as a result of a 1.5°c-2°c rise in temperatures", source: true },
    { number: "20.3m", description: "hectares of tree cover were lost between 2000 and 2020 in DR Congo, Tanzania, Uganda, Ethiopia and Kenya", source: true },
    { number: "12m", description: "hectares of productive land worldwide are lost every year", source: true },
    { number: "33%", description: "of the world soils are moderately to highly degraded", source: true },
    { number: "40%", description: "of these soils are located in Africa", source: true }
  ];

  // Market facts
  const marketFacts = [
    { number: "$35b", description: "per year net is spent by Africa on food imports, despite an abundance of uncultivated farmland", source: true },
    { number: "$180b", description: "is the estimated funding gap faced by smallholder farmers in Africa, Latin America and Asia", source: true },
    { number: "28%", description: "of the 318 micro, small and medium-sized enterprises surveyed by the Bank of Tanzania in 2019 received loans", source: true },
    { number: "20%", description: "or less of farmed land in Africa is cultivated with improved seed due to its lack of accessibility and affordability", source: true },
    { number: "7%", description: "of smallholder farmers worldwide have contracts with buyers; many smallholder farmers have no formal links with buyers", source: true },
    { number: "14.4%", description: "of the continent's total trade is currently accounted for by Intra-African trade", source: true }
  ];

  return (
    <div className="bg-neutral-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Facts and figures</h1>
          <p className="text-xl text-gray-600">Discover the key facts and figures behind our strategy.</p>
        </header>
        
        <main>
          <FactsSection 
            title="Agriculture" 
            facts={agricultureFacts} 
            variant="orange"
            bgImage="/images/temp/agriculture-bg.jpg"
          />
          
          <FactsSection 
            title="The environment" 
            facts={environmentFacts}
            variant="green" 
          />
          
          <FactsSection 
            title="Market engagement" 
            facts={marketFacts}
            variant="blue"
          />
          
          <div className="bg-green-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Support Farm Africa</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Help make real change to the lives of farming families by donating today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-800 text-white px-6 py-3 rounded font-medium hover:bg-green-700 transition-colors">
                Make a single donation
              </button>
              <button className="bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-600 transition-colors">
                Make a monthly donation
              </button>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-green-800 mb-8">Where next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                <strong className="block text-green-800 text-lg mb-2">Why Farm Africa?</strong>
                <p className="text-gray-600">We work with farmers to improve their produce, so they can support their families with more resilient livelihoods.</p>
              </a>
              <a href="#" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                <strong className="block text-green-800 text-lg mb-2">Our vision, mission and values</strong>
                <p className="text-gray-600">To promote sustainable agricultural practices, strengthen markets and protect the environment in rural Africa.</p>
              </a>
              <a href="#" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                <strong className="block text-green-800 text-lg mb-2">Facts and figures</strong>
                <p className="text-gray-600">Discover the facts and figures behind Farm Africa's strategy to reduce poverty in eastern Africa.</p>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VisionAndMission;
