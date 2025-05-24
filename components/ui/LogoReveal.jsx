"use client"
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const LogoRevealOverlay = () => {
  const [animationState, setAnimationState] = useState('initial'); // 'initial', 'shrinking', 'hidden'
  
  useEffect(() => {
    // Start shrinking animation after a short delay
    const shrinkTimer = setTimeout(() => {
      setAnimationState('shrinking');
    }, 800);
    
    // Hide the overlay after animation completes
    const hideTimer = setTimeout(() => {
      setAnimationState('hidden');
    }, 2500);
    
    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  if (animationState === 'hidden') return null;
  
  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FF7322]`}
      style={{
        opacity: animationState === 'shrinking' ? 0 : 1,
        transition: 'opacity 1.5s ease-out'
      }}
    >
      <div
        className={`bg-center bg-contain bg-no-repeat`}
        style={{
          backgroundImage: "url('/images/logo.png')",
          WebkitMask: "url('/images/logo.png') center/contain no-repeat",
          mask: "url('/images/logo.png') center/contain no-repeat",
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          width: animationState === 'initial' ? '100%' : '150px',
          height: animationState === 'initial' ? '100%' : '150px',
          transform: animationState === 'shrinking' ? 'scale(0.1)' : 'scale(1)',
          opacity: animationState === 'shrinking' ? 0 : 1,
          transition: 'all 1.5s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      />
    </div>
  );
};

// Pure wrapper component that doesn't modify the structure of children
const LogoRevealWrapper = ({ children }) => {
  // Client-side only code
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <>
      {children}
      {isMounted && createPortal(<LogoRevealOverlay />, document.body)}
    </>
  );
};

export default LogoRevealWrapper; 