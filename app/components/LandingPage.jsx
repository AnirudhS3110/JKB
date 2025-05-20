"use client"
import LandingAnimationHybrid from './LandingAnimation';
import HomePage from './HomePage';


export default function LandingPage() {
  // Add a mounting state to handle client/server differences
  return(
    <>
    <LandingAnimationHybrid/>
    <HomePage/>
    </>
  )
}