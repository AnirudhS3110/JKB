'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsResources() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('news');

  // Sample news data
  const news = [
    {
      id: 1,
      title: 'New Sustainable Agriculture Initiative Launches',
      date: 'March 15, 2023',
      category: 'Announcement',
      excerpt: 'Our foundation has partnered with local farmers to implement sustainable farming techniques that improve yield while protecting the environment.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jv2q20xye4zr3wqcq43pa4re%2F1747069331_img_2.webp?st=2025-05-12T15%3A55%3A18Z&se=2025-05-18T16%3A55%3A18Z&sks=b&skt=2025-05-12T15%3A55%3A18Z&ske=2025-05-18T16%3A55%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=eafHgk4DyxCBEYK1WhWNu69e1P9u%2FTnYP990ZzSgI%2FQ%3D&az=oaivgprodscus'
    },
    {
      id: 2,
      title: 'Annual Impact Report Shows Promising Results',
      date: 'February 2, 2023',
      category: 'Report',
      excerpt: 'Our 2022 Impact Report reveals a 40% increase in community engagement and significant improvements in local ecosystem health.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jv2t8afvfr9tq2gh7pc8v73y%2F1747072687_img_0.webp?st=2025-05-12T16%3A49%3A08Z&se=2025-05-18T17%3A49%3A08Z&sks=b&skt=2025-05-12T16%3A49%3A08Z&ske=2025-05-18T17%3A49%3A08Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=yF6%2Ff07vtSAcU4uKtNhekqLmi14INWvfY3I0jdtOm8Q%3D&az=oaivgprodscus'
    },
    {
      id: 3,
      title: 'Partnership with Global Conservation Fund Announced',
      date: 'January 10, 2023',
      category: 'Partnership',
      excerpt: 'A new strategic partnership will expand our reach and amplify our conservation efforts across three new regions.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jv2tfqb2ez7rjgt9wrr5ws0d%2F1747072918_img_1.webp?st=2025-05-12T16%3A51%3A26Z&se=2025-05-18T17%3A51%3A26Z&sks=b&skt=2025-05-12T16%3A51%3A26Z&ske=2025-05-18T17%3A51%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=rVjDK%2BRLBWbKq9bjk7x5nwKb1nKlG28egtwUpUjFHfQ%3D&az=oaivgprodscus'
    }
  ];

  // Sample resources data
  const resources = [
    {
      id: 1,
      title: 'Sustainable Farming Practices Guide',
      type: 'PDF Guide',
      excerpt: 'A comprehensive guide to implementing sustainable farming practices in diverse environments.',
      icon: (
        <svg className="w-10 h-10 text-[#F4720B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Watershed Restoration Methodology',
      type: 'Research Paper',
      excerpt: 'A detailed research paper on our proven methodology for watershed restoration and long-term maintenance.',
      icon: (
        <svg className="w-10 h-10 text-[#121212]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Community Engagement Toolkit',
      type: 'Interactive Guide',
      excerpt: 'Tools and strategies for effective community engagement and participatory decision-making processes.',
      icon: (
        <svg className="w-10 h-10 text-[#F4720B]/80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      id="news-resources"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#F4720B]/5 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F4720B]/5 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] mb-4 tracking-tight">News & Resources</h2>
          <div className="h-1 w-24 bg-[#F4720B] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            Stay informed with our latest updates and access valuable resources to deepen your understanding of sustainable initiatives.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md border border-gray-200 p-1 bg-gray-50">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'news' 
                  ? 'bg-[#121212] text-white shadow-sm' 
                  : 'text-gray-600 hover:text-[#F4720B]'
              }`}
              onClick={() => setActiveTab('news')}
            >
              Latest News
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'resources' 
                  ? 'bg-[#121212] text-white shadow-sm' 
                  : 'text-gray-600 hover:text-[#F4720B]'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
          </div>
        </div>
        
        {/* News Section */}
        {activeTab === 'news' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#F4720B] text-white text-xs font-medium px-2 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#F4720B] mb-2 font-medium">{item.date}</p>
                    <h3 className="text-xl font-semibold text-[#121212] mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                    <Link 
                      href="/news" 
                      className="inline-flex items-center text-[#F4720B] font-medium hover:text-[#E05900]"
                    >
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/news"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#121212] text-white font-medium rounded-md hover:bg-[#2A2A2A] transition-colors"
              >
                View All News
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
        
        {/* Resources Section */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <span className="text-sm text-[#F4720B] font-medium block mb-2">{item.type}</span>
                      <h3 className="text-xl font-semibold text-[#121212] mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <Link 
                        href="/resources" 
                        className="inline-flex items-center text-[#121212] font-medium hover:text-[#F4720B]"
                      >
                        Download
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#F4720B] text-[#F4720B] font-medium rounded-md hover:bg-[#F4720B] hover:text-white transition-colors"
              >
                View All Resources
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 