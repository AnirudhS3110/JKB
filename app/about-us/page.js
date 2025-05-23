import React from 'react';
import VisionAndMissionPage from './vision-and-mission/visonandmission';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'About Us | Facts and Figures',
  description: 'Discover the key facts and figures behind our strategy.',
};

export default function AboutUsPage() {
  return (
    <main className="about-us-page">
      <VisionAndMissionPage />
    </main>
  );
} 