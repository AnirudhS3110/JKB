import React from 'react';
import VisionAndMission from './VisonAndMission';
import VisionAndMissionPage from './vision-and-missiom/visonandmission';
import Footer from '@/app/components/Footer';
export const metadata = {
  title: 'About Us | Facts and Figures',
  description: 'Discover the key facts and figures behind our strategy.',
};

export default function AboutUsPage() {
  return (
    <main className="about-us-page">
      <VisionAndMissionPage />
      <div className="h-[4vh] bg-[#151419]"></div>
      <Footer />
    </main>
  );
} 