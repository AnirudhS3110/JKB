"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
    {
      title: "Green Energy Initiative",
      link: "/green-energy",
      thumbnail:
        "/images/neoNatal.jpg",
    },
  {
        title: "Healthcare programmes",
        link: "/farming",
        thumbnail:"/images/HeroParallax/6.png",
      },
  
  
    
  
    {
      title: "Education Program",
      link: "/education",
      thumbnail:
        "/images/HeroParallax/CarousalPic7.jpg",
    },
  {
        title: "Digital Literacy",
        link: "/healthcare",
        thumbnail:
          "/images/MediaCoverage/9.jpg",
  },
  
    {
      title: "Community Empowerment",
      link: "/community",
      thumbnail:
        "/images/CommunityEmpowerment.jpg",
    },
   
    {
      title: "Forest Conservation",
      link: "/conservation",
      thumbnail:
        "/images/MediaCoverage/5.jpg",
    },
  {
        title: "Clean Water Access",
        link: "/clean-water",
        thumbnail:
          "/images/MediaCoverage/7.jpg",
      },
    
    
  {
        title: "Women Empowerment",
        link: "/women-empowerment",
        thumbnail:
          "/images/HeroParallax/4.jpg",
      },
    {
      title: "Girl Child Education",
      link: "/women-empowerment",
      thumbnail:
      "/images/MediaCoverage/8.jpg",
    },
    
  ];
  