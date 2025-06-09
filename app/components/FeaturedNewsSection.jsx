'use client';
import { motion } from 'framer-motion';
import FeaturedNewsCarousel from '../../components/ui/FeaturedNewsCarousel';

export default function FeaturedNewsSection() {
  // Sample news items (these could be fetched from an API)
  const newsItems = [
    {
      date: "13 May 2025",
      location: "Ethiopia",
      title: "Bharti Laavekar - MLA Versova(Mumbai)",
      description: "Supporting Named After Mom Campaign",
      video: "/videos/vid-1.mp4",
      image: "https://images.unsplash.com/photo-1612274777608-dbb81b9edfcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/news/forest-coffee-cultivation"
    },
    {
      date: "5 Apr 2025",
      location: "India",
      title: "Siddharth Bothra - Founder & Trustee - Jaskaran Bothra Foundation",
      description: "Explaining named after Mom campaign",
      video: "/videos/vid-2.mp4",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      href: "/news/water-conservation"
    },
    {
      date: "18 Mar 2025",
      location: "Rwanda",
      title: "Renowned Fasion Designer - Shaina NC",
      description: "Supporting Named After Mom Campaign",
      video: "/videos/vid-3.mp4",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      href: "/news/youth-tech-program"
    },
    {
      date: "22 Feb 2025",
      location: "Ghana",
      title: "Jagruti Bothra - Trustee - Jaskaran Bothra Foundation",
      description: "Walking for the cause to support Cancer Patients on behalf of The Foundation",
      video: "/videos/vid-4.mp4",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/news/sustainable-farming"
    },
    {
      date: "22 Feb 2025",
      location: "Ghana",
      title: "Jagruti Bothra - Trustee - Jaskaran Bothra Foundation",
      description: "Supporting Named After Mom Campaign",
      video: "/videos/vid-5.mp4",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/news/sustainable-farming"

    },
    {
      date: "22 Feb 2025",
      location: "Ghana",
      title: "Jagruti Bothra - Trustee - Jaskaran Bothra Foundation",
      description: "Supporting Named After Mom Campaign",
      video: "/videos/vid-6.mp4",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/news/sustainable-farming"

    }
  ];

  return (
    <section className="py-16 md:pb-24 bg-[#fbfbfb]">
      <div className="container mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 md:mb-0 px-6"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-900 mb-6">
            Featured Videos
          </h2>
          <div className="w-24 h-1 bg-[#F4720B]"></div>
        </motion.div>
        
        {/* News carousel */}
        <FeaturedNewsCarousel items={newsItems} />
        
        {/* View all news link */}
        {/* <div className="mt-12 text-center">
          <motion.a
            href="/news"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center text-[#F4720B] font-medium hover:text-orange-600 transition-colors"
          >
            View all news
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div> */}
      </div>
    </section>
  );
} 