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
        "/images/CarousalPic6.jpg",
    },
  {
        title: "Healthcare programmes",
        link: "/farming",
        thumbnail:"/images/neoNatal.jpg",
      },
  
  
    
  
    {
      title: "Education Program",
      link: "/education",
      thumbnail:
        "https://videos.openai.com/vg-assets/assets%2Ftask_01jvrpmw6ve5abcrangs0qk2wm%2F1747807087_img_1.webp?st=2025-05-21T04%3A28%3A39Z&se=2025-05-27T05%3A28%3A39Z&sks=b&skt=2025-05-21T04%3A28%3A39Z&ske=2025-05-27T05%3A28%3A39Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=bHPLY79tJP0OfgVf%2FrzNmG2QVyntI%2FlVspEwGyJR6EI%3D&az=oaivgprodscus",
    },
  {
        title: "Digital Literacy",
        link: "/healthcare",
        thumbnail:
          "/images/CarousalPic9.jpg",
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
        "/images/CarousalPic8.jpg",
    },
  {
        title: "Clean Water Access",
        link: "/clean-water",
        thumbnail:
          "/images/CarousalPic4.png",
      },
    
    
  {
        title: "Women Empowerment",
        link: "/women-empowerment",
        thumbnail:
          "https://videos.openai.com/vg-assets/assets%2Ftask_01jvrpgh04f709ma4ndvwth5v1%2F1747806933_img_3.webp?st=2025-05-21T04%3A30%3A26Z&se=2025-05-27T05%3A30%3A26Z&sks=b&skt=2025-05-21T04%3A30%3A26Z&ske=2025-05-27T05%3A30%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kZn2oC1q7tib1%2BMX8NTBPvwl%2Fv6Kys%2FfehTxUHPU9Ns%3D&az=oaivgprodscus",
      },
    {
      title: "Girl Child Education",
      link: "/women-empowerment",
      thumbnail:
      "/images/CarousalPic5.png",
    }
  ];
  