"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoRevealWrapper from '../../../components/ui/LogoReveal';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SuccessStories() {
  // State to control the animation trigger
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  // Main container ref for scroll calculations
  const containerRef = useRef(null);
  
  // Refs for each section
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Split hero text into words for animation
  const heroText = "At the heart of every initiative lies a human story — of struggle turned into strength. Of dignity reclaimed. These are not just testimonials. They are testaments to what is possible when purpose meets action.";
  const heroWords = heroText.split(" ");

  
  // Trigger animation on component mount
  useEffect(() => {
    // Small delay for text animation - appear after page load
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Optional: Add parallax effect for decorative SVGs
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax-speed')) || 0.5;
        const windowY = window.scrollY;
        const y = windowY * speed;
        element.style.transform = `translate3d(0px, ${y}px, 0px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"]
  });

  const lifelinesHeaderY = useTransform(
    scrollYProgress,
    [0.10, 0.25],  // When to start/complete animation
    ["100vh", "0vh"]  // Start position to end position
  );


  // Sample success stories data
  const stories = [
    {
      id: 1,
      title: "A Name That Matters",
      tagline: "Because Mom Deserves to Be Named.",
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvkkcztve2qsa8p8edqbdg6w%2F1747635877_img_3.webp?st=2025-05-19T05%3A25%3A19Z&se=2025-05-25T06%3A25%3A19Z&sks=b&skt=2025-05-19T05%3A25%3A19Z&ske=2025-05-25T06%3A25%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iMkkvEllRsJOIGK5MsjnzEXVYsOsQsJM0GICc%2FgcPNI%3D&az=oaivgprodscus",
      tags: [
        "Most forms asked only for the father's name.", 
        "Our Name After Mom campaign challenged that.", 
        "First rolled out in Maharashtra — now nationwide.",
        "Thousands of mothers now officially recognized."
      ],
      link: '/impact/success-stories/name-that-matters'
    },
    {
      id: 2,
      title: "The First Breath",
      tagline: "Born Premature. Born Ready.",
      image: "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: [
        "A baby born underweight. No time to lose.", 
        "Donated warmers and phototherapy units stepped in.", 
        "Life saved — quietly, powerfully.",
        "Hundreds more now have that same chance."
      ],
      link: '/impact/success-stories/first-breath'
    },
    {
      id: 3,
      title: "Beyond Sight, A New Vision",
      tagline: "A Stick That Guides. A Life That Leads.",
      image: "https://images.pexels.com/photos/7260394/pexels-photo-7260394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: [
        "Ravi couldn't see — but he wanted to learn.", 
        "A motion-sensor stick changed his path.", 
        "School is now just a safe walk away.",
        "One device. One future unlocked."
      ],
      link: '/impact/success-stories/beyond-sight'
    },
    {
      id: 4,
      title: "Care That Doesn't Cost",
      tagline: "Diagnosed in Time. Saved for Life.",
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: [
        "Ramesh walked miles with internal bleeding.", 
        "A free scan at our rural hospital caught it.", 
        "Immediate treatment. No cost. No delay.",
        "One life saved. One family whole."
      ],
      link: '/impact/success-stories/care-that-doesnt-cost'
    }
  ];

  return (
    <LogoRevealWrapper>
      <div ref={containerRef} className="relative">
        {/* Hero Section - 100vh */}
        <section ref={heroRef} className="h-screen relative flex items-center justify-center sticky top-0">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <Image 
              src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Success Stories" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 left-0 top-0 w-full h-full bg-black opacity-75"></div>
          
          <div className="max-w-7xl mx-auto z-10 px-6 relative z-20 text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span
                className="text-xl md:text-2xl font-paragraph text-[#F4720B] mb-4 block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                🔸 Real People. Real Change.
              </motion.span>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-heading font-light mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Success Stories
              </motion.h1>
              
              <p className="text-xl font-paragraph text-gray-200 max-w-2xl">
                {heroWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTextVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: "easeOut" 
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section - styled like NewsResources */}
        <section 
          ref={sectionRef}
          style={{y:lifelinesHeaderY}}
          className="bg-orange-500 opacity-100
         relative overflow-hidden py-20 md:py-30"
        >
          {/* Decorative leaf patterns */}
          <div className="hidden lg:block absolute -top-35 -left-20" data-parallax data-parallax-speed="1">
            <svg width="322" height="373" viewBox="0 0 322 373" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 275">
                <path id="Vector" d="M161.688 263.725L168.525 257.564L195.703 255.052L212.137 252.596L212.685 254.05L196.12 282.117L181.804 287.859L160.901 287.845L152 288.88L145.103 293.098L143.686 293.392L143.996 284.156L137.771 269.898C134.746 264.572 129.466 254.603 129.466 254.603L129.054 242.534L137.584 228.081L146.114 213.629L147.161 215.189L163.293 251.462L161.688 263.725Z" fill="#4CB9D1"></path>
                <path id="Vector_2" d="M78.3808 109.751L80.3173 118.435L69.5146 142.505L63.7717 157.505L62.2873 157.275L46.5356 129.993L48.5058 115.213L58.4524 97.6248L61.8111 89.6413L61.5391 81.8304L61.9649 80.498L69.5918 85.1491L84.5519 86.6856C90.473 86.6702 101.373 86.9644 101.373 86.9644L111.728 92.3537L119.839 106.403L127.95 120.451L126.14 120.591L87.9408 116.931L78.3808 109.751Z" fill="#F2EBD9"></path>
              </g>
            </svg>
          </div>
          
          <div className="hidden lg:block absolute top-50 xl:top-78 -right-10" data-parallax data-parallax-speed="1">
            <svg width="236" height="198" viewBox="0 0 236 198" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M125.301 92.383L119.938 97.2154L98.6215 99.1854L85.7322 101.112L85.3021 99.9714L98.295 77.9576L109.524 73.4534L125.919 73.4645L132.9 72.6527L138.31 69.3444L139.421 69.1137L139.178 76.3582L144.06 87.5413C146.433 91.7188 150.574 99.5378 150.574 99.5378L150.897 109.004L144.207 120.34L137.516 131.676L136.695 130.452L124.042 102.002L125.301 92.383Z" fill="#4CB9D1"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="col-span-12 md:col-span-6 mb-10 md:mb-0">
                <div className="relative md:pl-5 lg:pl-28 md:mt-20 mb-10 md:mb-20 z-10">
                  <h2 className="text-5xl md:text-6xl text-[#fbfbfb] mb-8 md:mb-12 2xl:max-w-[550px] font-title font-light">
                    Transformative <br/> Impact Stories
                  </h2>
                </div>
                
                <div className="relative md:pr-10 lg:pr-28">
                  <div className="group relative">
                    <Link href={stories[0].link} className="block">
                      <div className="flex flex-col h-full">
                        <div className="relative aspect-square w-full h-auto rounded-md mb-6 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={stories[0].image}
                              alt={stories[0].title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                              priority
                            />
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent"></div>
                          <div className="flex items-end absolute inset-0 text-white p-6">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base font-paragraph">{stories[0].tagline}</p>
                            </div>
                          </div>
                          <div className="absolute bottom-6 right-6 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-[#FF8000] rounded-full p-3">
                              <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7219 18.7027C23.7994 18.7863 23.8609 18.8855 23.9028 18.9947C23.9447 19.104 23.9663 19.2211 23.9663 19.3394C23.9663 19.4576 23.9447 19.5747 23.9028 19.684C23.8609 19.7932 23.7994 19.8925 23.7219 19.976L20.3888 23.5756C20.2324 23.7445 20.0204 23.8394 19.7993 23.8394C19.5781 23.8394 19.3661 23.7445 19.2097 23.5756C19.0534 23.4068 18.9655 23.1778 18.9655 22.939C18.9655 22.7002 19.0534 22.4711 19.2097 22.3023L21.121 20.2393H14.7996C14.5786 20.2393 14.3666 20.1444 14.2104 19.9757C14.0541 19.8069 13.9663 19.578 13.9663 19.3394C13.9663 19.1007 14.0541 18.8718 14.2104 18.703C14.3666 18.5343 14.5786 18.4395 14.7996 18.4395H21.121L19.2097 16.3764C19.0534 16.2076 18.9655 15.9786 18.9655 15.7398C18.9655 15.501 19.0534 15.2719 19.2097 15.1031C19.3661 14.9342 19.5781 14.8394 19.7993 14.8394C20.0204 14.8394 20.2324 14.9342 20.3888 15.1031L23.7219 18.7027Z" fill="white"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-4xl text-[#fbfbfb] mb-4 font-title font-light">{stories[0].title}</h3>
                          {stories[0].tags && (
                            <div className="flex flex-col gap-1.5 mt-6 ">
                              {stories[0].tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                  <div className="[&_path]:stroke-[#fbfbfb]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-base text-[#fbfbfb] text-[19px] font-paragraph">{tag}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="col-span-12 md:col-span-6">
                <div className="relative md:pr-10 lg:pr-28 mb-10 md:mb-16">
                  <div className="group relative">
                    <Link href={stories[1].link} className="block">
                      <div className="flex flex-col h-full">
                        <div className="relative aspect-square w-full h-auto rounded-md mb-6 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={stories[1].image}
                              alt={stories[1].title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent"></div>
                          <div className="flex items-end absolute inset-0 text-white p-6">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base font-paragraph">{stories[1].tagline}</p>
                            </div>
                          </div>
                          <div className="absolute bottom-6 right-6 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-[#4BAE44] rounded-full p-3">
                              <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7219 18.7027C23.7994 18.7863 23.8609 18.8855 23.9028 18.9947C23.9447 19.104 23.9663 19.2211 23.9663 19.3394C23.9663 19.4576 23.9447 19.5747 23.9028 19.684C23.8609 19.7932 23.7994 19.8925 23.7219 19.976L20.3888 23.5756C20.2324 23.7445 20.0204 23.8394 19.7993 23.8394C19.5781 23.8394 19.3661 23.7445 19.2097 23.5756C19.0534 23.4068 18.9655 23.1778 18.9655 22.939C18.9655 22.7002 19.0534 22.4711 19.2097 22.3023L21.121 20.2393H14.7996C14.5786 20.2393 14.3666 20.1444 14.2104 19.9757C14.0541 19.8069 13.9663 19.578 13.9663 19.3394C13.9663 19.1007 14.0541 18.8718 14.2104 18.703C14.3666 18.5343 14.5786 18.4395 14.7996 18.4395H21.121L19.2097 16.3764C19.0534 16.2076 18.9655 15.9786 18.9655 15.7398C18.9655 15.501 19.0534 15.2719 19.2097 15.1031C19.3661 14.9342 19.5781 14.8394 19.7993 14.8394C20.0204 14.8394 20.2324 14.9342 20.3888 15.1031L23.7219 18.7027Z" fill="white"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-4xl text-[#fbfbfb] mb-4 font-title font-light">{stories[1].title}</h3>
                          {stories[1].tags && (
                            <div className="flex flex-col gap-1.5 mt-6">
                              {stories[1].tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                  <div className="[&_path]:stroke-[#fbfbfb]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-base text-[#fbfbfb] text-[20px] font-paragraph">{tag}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second row for the third and fourth stories */}
            <div className="mt-16 grid grid-cols-12 gap-6">
              {/* Third story */}
              <div className="col-span-12 md:col-span-6 md:mt-[200px]">
                <div className="relative md:pr-10 lg:pr-28 ">
                  <div className="group relative">
                    <Link href={stories[2].link} className="block">
                      <div className="flex flex-col h-full">
                        <div className="relative aspect-square w-full h-auto rounded-md mb-6 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={stories[2].image}
                              alt={stories[2].title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent"></div>
                          <div className="flex items-end absolute inset-0 text-white p-6">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base font-paragraph">{stories[2].tagline}</p>
                            </div>
                          </div>
                          <div className="absolute bottom-6 right-6 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-[#121517] rounded-full p-3">
                              <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7219 18.7027C23.7994 18.7863 23.8609 18.8855 23.9028 18.9947C23.9447 19.104 23.9663 19.2211 23.9663 19.3394C23.9663 19.4576 23.9447 19.5747 23.9028 19.684C23.8609 19.7932 23.7994 19.8925 23.7219 19.976L20.3888 23.5756C20.2324 23.7445 20.0204 23.8394 19.7993 23.8394C19.5781 23.8394 19.3661 23.7445 19.2097 23.5756C19.0534 23.4068 18.9655 23.1778 18.9655 22.939C18.9655 22.7002 19.0534 22.4711 19.2097 22.3023L21.121 20.2393H14.7996C14.5786 20.2393 14.3666 20.1444 14.2104 19.9757C14.0541 19.8069 13.9663 19.578 13.9663 19.3394C13.9663 19.1007 14.0541 18.8718 14.2104 18.703C14.3666 18.5343 14.5786 18.4395 14.7996 18.4395H21.121L19.2097 16.3764C19.0534 16.2076 18.9655 15.9786 18.9655 15.7398C18.9655 15.501 19.0534 15.2719 19.2097 15.1031C19.3661 14.9342 19.5781 14.8394 19.7993 14.8394C20.0204 14.8394 20.2324 14.9342 20.3888 15.1031L23.7219 18.7027Z" fill="white"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-4xl text-[#fbfbfb] mb-4 font-title font-light">{stories[2].title}</h3>
                          {stories[2].tags && (
                            <div className="flex flex-col gap-1.5 mt-6">
                              {stories[2].tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                  <div className="[&_path]:stroke-[#fbfbfb]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-base text-[#fbfbfb] text-[20px] font-paragraph">{tag}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Fourth story */}
              <div className="col-span-12 md:col-span-6">
                <div className="relative md:pl-10 lg:pl-28">
                  <div className="group relative">
                    <Link href={stories[3].link} className="block">
                      <div className="flex flex-col h-full">
                        <div className="relative aspect-square w-full h-auto rounded-md mb-6 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={stories[3].image}
                              alt={stories[3].title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent"></div>
                          <div className="flex items-end absolute inset-0 text-white p-6">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base font-paragraph">{stories[3].tagline}</p>
                            </div>
                          </div>
                          <div className="absolute bottom-6 right-6 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-[#F4720B] rounded-full p-3">
                              <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7219 18.7027C23.7994 18.7863 23.8609 18.8855 23.9028 18.9947C23.9447 19.104 23.9663 19.2211 23.9663 19.3394C23.9663 19.4576 23.9447 19.5747 23.9028 19.684C23.8609 19.7932 23.7994 19.8925 23.7219 19.976L20.3888 23.5756C20.2324 23.7445 20.0204 23.8394 19.7993 23.8394C19.5781 23.8394 19.3661 23.7445 19.2097 23.5756C19.0534 23.4068 18.9655 23.1778 18.9655 22.939C18.9655 22.7002 19.0534 22.4711 19.2097 22.3023L21.121 20.2393H14.7996C14.5786 20.2393 14.3666 20.1444 14.2104 19.9757C14.0541 19.8069 13.9663 19.578 13.9663 19.3394C13.9663 19.1007 14.0541 18.8718 14.2104 18.703C14.3666 18.5343 14.5786 18.4395 14.7996 18.4395H21.121L19.2097 16.3764C19.0534 16.2076 18.9655 15.9786 18.9655 15.7398C18.9655 15.501 19.0534 15.2719 19.2097 15.1031C19.3661 14.9342 19.5781 14.8394 19.7993 14.8394C20.0204 14.8394 20.2324 14.9342 20.3888 15.1031L23.7219 18.7027Z" fill="white"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-4xl text-[#fbfbfb] mb-4 font-title font-light">{stories[3].title}</h3>
                          {stories[3].tags && (
                            <div className="flex flex-col gap-1.5 mt-6">
                              {stories[3].tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                  <div className="[&_path]:stroke-[#fbfbfb]">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-base text-[#fbfbfb] text-[20px] font-paragraph">{tag}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hidden leaf pattern at bottom */}
          <div className="hidden lg:block absolute bottom-0 left-0" data-parallax data-parallax-speed="1">
            <svg width="202" height="222" viewBox="0 0 202 222" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.4668 152.896L40.581 154.877L15.9488 143.823L0.599054 137.946L0.83392 136.427L28.7532 120.308L43.8777 122.324L61.8763 132.502L70.046 135.939L78.0392 135.661L79.4027 136.097L74.643 143.902L73.0707 159.211C73.0864 165.27 72.7854 176.424 72.7854 176.424L67.2703 187.021L52.8938 195.322L38.5172 203.622L38.374 201.769L42.1201 162.679L49.4668 152.896Z" fill="#F2EBD9"></path>
            </svg>
          </div>
        </section>
        
        {/* Spacer at the bottom */}
        {/* <div className="h-24 bg-white"></div> */}
      </div>
    </LogoRevealWrapper>
  );
} 