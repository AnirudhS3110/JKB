"use client"
import LandingAnimationHybrid from './LandingAnimation';
import HomePage from './HomePage';
import { useEffect } from 'react';

export default function LandingPage() {
  // Add a useEffect to handle hydration mismatches
  useEffect(() => {
    // This suppresses the hydration warning in development
    // It's a workaround for the user-select:"auto" issue that might be coming from a browser extension
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('Hydration failed because the initial UI does not match')) {
        return;
      }
      if (args[0]?.includes('There was an error while hydrating')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    return () => {
      console.error = originalError;
    };
  }, []);

  return(
    <>
    <LandingAnimationHybrid/>
    <HomePage/>
    </>
  )
}