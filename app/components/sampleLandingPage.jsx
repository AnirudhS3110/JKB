"use client"
// Import the new HeroLandingPage component instead
import HeroLandingPage from './HeroLandingPage';
// Keep the original import as a comment to preserve history
// import LandingAnimationHybrid from './LandingAnimation';
import HomePage from './HomePage';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoHeroSection from './VideoHeroSection';

export default function SampleLandingPage() {
  return(
    <div className="relative">
      <HeroLandingPage />
     <div className='sticky min-h-[100vh] top-0 '>
     <VideoHeroSection />
     </div>
     <div    className='sticky top-0 z-10'>
      <HomePage />
      </div>
    </div>
  )
}