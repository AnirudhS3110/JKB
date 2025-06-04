'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturedNewsCard({ 
  date = "13 May 2025", 
  location = "Ethiopia", 
  title = "Forest coffee cultivation: a win-win for conservation and livelihoods",
  description = "A new report published by the NGO Farm Africa outlines how a transformative forest conservation and sustainable agriculture initiative in south-eastern Ethiopia has concluded with striking success...",
  video = "/videos/vid-1.mp4",
  poster = "/images/temp/news-1.jpg", // Fallback poster image
  href = "#"
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-[70vw] h-[70vh] bg-[#f2efe5] overflow-hidden relative flex flex-col md:felx-row rounded-lg shadow-lg mx-4"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Media container (75% width) */}
      <div 
        className="w-full h-[75%] md:w-[75%] md:h-full relative overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted={false} // Enable sound
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              // Pause icon
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Play icon
              <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>
        </motion.div>

        {/* Sound indicator */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center gap-1">
            <svg className="h-3 w-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.768L4.946 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.946l3.437-3.768a1 1 0 011.617.768zM16 8a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-800">Sound</span>
          </div>
        </div>
      </div>
      
      {/* Text content (25% width) */}
      <div className="w-full h-[25%] md:w-[25%] md:h-full bg-[#F4720B] flex flex-col justify-center px-4 py-6 relative">
        <Link href={href} className="block h-full flex flex-col justify-center">
          {/* Date and Location */}
          <div className="space-y-2 mb-4">
            <span className="text-xs font-medium text-[#F4720B]">
              {date}
            </span>
            
            <div className="flex items-center gap-1">
              
              <span className="text-xs font-medium text-[#F4720B]">{location}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-serif text-[#121212] leading-tight mb-3 font-medium">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-[#fbfbfb] leading-relaxed line-clamp-4 mb-4">
            {description}
          </p>

          {/* Read more link */}
          <div className="mt-auto">
            <span className="text-xs text-[#F4720B] hover:text-[#F4720B] transition-colors">
              Read more →
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}