"use client"
import React, { useEffect, useState } from 'react';

const LogoRevealWrapper = ({child}) => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden font-sans relative bg-black text-black">
      {/* Logo Reveal Container */}
      {!showMain && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#FF7322] animate-fadeOut delay-600">
          <div
            className="w-[250px] h-[250px] bg-center bg-contain bg-no-repeat animate-zoomOut"
            style={{
              backgroundImage: "url('/images/logo.png')",
              WebkitMask: "url('/images/logo.png') center/contain no-repeat",
              mask: "url('/images/logo.png') center/contain no-repeat",
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat'
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center bg-white transition-opacity duration-500 ${
          showMain ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {child}
      </div>
    </div>
  );
};

export default LogoRevealWrapper;
