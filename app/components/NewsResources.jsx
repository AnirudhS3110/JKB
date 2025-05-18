'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function NewsFeed() {
  const sectionRef = useRef(null);
  
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Fish cookies: an unexpectedly tasty treat',
      excerpt: 'A revolutionary approach to sustainable fishing by-products is creating new business opportunities for youth in coastal communities.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/05/RS24334_IMG_1541-web-2100x1050.jpg.webp',
      location: 'Kenya',
      categories: ['Boost youth employment', 'Increase food security and nutrition', 'Increase incomes'],
      link: '/story/fish-cookies'
    },
    {
      id: 2,
      title: 'Farm Africa returns as charity partner at the London Coffee Festival',
      excerpt: 'Supporting coffee farmers across eastern Africa to improve their production techniques and access premium markets.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/05/2025-scaled-e1747306360537-2100x1243.jpg',
      location: 'Ethiopia',
      categories: ['Increase incomes', 'Building markets'],
      link: '/farm-africa-returns-as-charity-partner'
    },
    {
      id: 3,
      title: 'Empowering women through sustainable agriculture',
      excerpt: 'New program launches to support women-led farming initiatives, providing training, resources, and market access.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/01/Minette-Batters-and-Juliet-Muthoni-Farm-Africa-Kenya-2100x1127.jpg.webp',
      location: 'Tanzania',
      categories: ['Gender equality', 'Sustainable farming', 'Increase incomes'],
      link: '/story/empowering-women-farmers'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#F4720B] relative overflow-hidden py-16 md:py-20"
    >
      {/* Decorative leaf patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96">
        <Image 
          src="/images/leaf-pattern-top-right.png" 
          alt="" 
          width={400} 
          height={400}
          className="opacity-30"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96">
        <Image 
          src="/images/leaf-pattern-bottom-left.png" 
          alt="" 
          width={400} 
          height={400}
          className="opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10">
            Latest from Farm Africa
          </h2>
          <Link
            href="/news"
            className="inline-block bg-[#F49541] hover:bg-[#E68530] text-white font-medium px-8 py-4 rounded-md transition-colors"
          >
            Browse more articles
          </Link>
        </div>
        
        {/* Articles - Alternating right/left layout */}
        <div className="space-y-20 md:space-y-32">
          {/* Article 1 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Empty column for right-side layout */}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-lg">Stories from our work</span>
                    <div className="flex items-center">
                      <div className="bg-green-500 rounded-full p-1">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <span className="ml-2 text-white">{articles[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-8">{articles[0].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[0].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#262626]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Article 2 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative">
                <Image
                  src={articles[1].image}
                  alt={articles[1].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black/20 rounded-bl-md">
                  <span className="text-white text-sm font-medium">News</span>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-4">{articles[1].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[1].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#2D5E30]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Empty column for left-side layout */}
            </div>
          </div>
          
          {/* Article 3 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Empty column for right-side layout */}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src={articles[2].image}
                  alt={articles[2].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-lg">Stories from our work</span>
                    <div className="flex items-center">
                      <div className="bg-green-500 rounded-full p-1">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <span className="ml-2 text-white">{articles[2].location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-8">{articles[2].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[2].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#2D5E30]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}