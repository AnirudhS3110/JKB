'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Modal component for viewing images
const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  if (!image) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[85vh] bg-transparent rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-50 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Single row of images that moves infinitely
const InfiniteRow = ({ images, speed, direction = 'left', gap = 20, delay = 0, onImageClick }) => {
  const rowRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);
  const controls = useAnimation();
  
  // Duplicate images to create the infinite effect
  const duplicatedImages = [...images, ...images];
  
  // Calculate row width for animation
  useEffect(() => {
    if (rowRef.current) {
      const width = rowRef.current.scrollWidth / 2;
      setRowWidth(width);
    }
    
    const handleResize = () => {
      if (rowRef.current) {
        const width = rowRef.current.scrollWidth / 2;
        setRowWidth(width);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [duplicatedImages]);
  
  // Calculate animation duration based on width and speed
  const duration = rowWidth / speed;
  
  // Start animation
  useEffect(() => {
    if (rowWidth > 0) {
      controls.start({
        x: direction === 'left' 
          ? [`0px`, `-${rowWidth}px`] 
          : [`-${rowWidth}px`, `0px`],
        transition: {
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            delay: delay
          }
        }
      });
    }
  }, [controls, rowWidth, direction, duration, delay]);
  
  return (
    <div 
      className="overflow-hidden relative"
      ref={rowRef}
    >
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -rowWidth, right: rowWidth }}
        dragElastic={0.2}
        onDragStart={() => controls.stop()}
        onDragEnd={() => {
          controls.start({
            x: direction === 'left' 
              ? [`0px`, `-${rowWidth}px`] 
              : [`-${rowWidth}px`, `0px`],
            transition: {
              x: {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                delay: 0
              }
            }
          });
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`}
            className="flex-shrink-0 relative group cursor-pointer"
            style={{ 
              width: image.width, 
              height: image.height,
              aspectRatio: '1/1',
              borderRadius: '0px',
              overflow: 'hidden'
            }}
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt || `Media image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#F4720B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Main gallery grid component
export default function MediaGalleryGrid({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Group images into 3 rows
  const row1 = images.slice(0, 4);
  const row2 = images.slice(4, 8);
  const row3 = images.slice(8, 12);
  
  // Different sizes for variety
  const imageSize = {
    small: { width: 200, height: 200 },
    medium: { width: 250, height: 250 },
    large: { width: 300, height: 300 }
  };
  
  // Map images with sizes
  const mapImagesWithSizes = (rowImages, sizeType) => {
    return rowImages.map((image, index) => ({
      ...image,
      width: imageSize[sizeType].width,
      height: imageSize[sizeType].height
    }));
  };
  
  const row1Images = mapImagesWithSizes(row1, 'medium');
  const row2Images = mapImagesWithSizes(row2, 'medium');
  const row3Images = mapImagesWithSizes(row3, 'medium');
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div 
      ref={ref}
      className="py-12 space-y-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <InfiniteRow 
          images={row1Images} 
          speed={25} 
          direction="left" 
          gap={20}
          onImageClick={handleImageClick}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <InfiniteRow 
          images={row2Images} 
          speed={20} 
          direction="right" 
          gap={20}
          delay={0.5}
          onImageClick={handleImageClick}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <InfiniteRow 
          images={row3Images} 
          speed={30} 
          direction="left" 
          gap={20}
          delay={1}
          onImageClick={handleImageClick}
        />
      </motion.div>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        image={selectedImage} 
      />
    </div>
  );
} 