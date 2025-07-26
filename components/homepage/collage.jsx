"use client"
import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const PhotoCollage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Sample images from Unsplash with different categories
  const images = [
    {
      id: 1,
      src: "/images/NewsPaper/1.jpg",
      alt: "Portrait of a woman",
      size: "wide"
    },
    {
      id: 2,
      src: "/images/NewsPaper/2.jpg",
      alt: "Man portrait",
      size: "small"
    },
    {
      id: 3,
      src: "/images/NewsPaper/3.jpg",
      alt: "Family group",
      size: "large"
    },
    {
      id: 4,
      src: "/images/NewsPaper/4.jpg",
      alt: "Woman with sunglasses",
      size: "small"
    },
    {
      id: 5,
      src: "/images/NewsPaper/5.jpg",
      alt: "Man outdoors",
      size: "small"
    },
    {
      id: 6,
      src: "/images/NewsPaper/10.jpg",
      alt: "Woman portrait",
      size: "tall"
    },
    {
      id: 7,
      src: "/images/NewsPaper/7.jpg",
      alt: "Man smiling",
      size: "tall"
    },
    {
      id: 8,
        src: "/images/NewsPaper/8.jpg",
      alt: "Woman in nature",
      size: "wide"
    },
    {
      id: 9,
      src: "/images/NewsPaper/9.jpg",
      alt: "Man with beard",
      size: "small"
    },
    {
      id: 10,
      src: "/images/NewsPaper/6.jpg",
      alt: "Woman outdoors",
      size: "third"
    },
  ];

  // Reset zoom and position when image changes
  useEffect(() => {
    if (selectedImage) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [selectedImage]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const getImageClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-3';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2 row-span-2';
      case 'third':
        return 'col-span-2';
      default:
        return '';
    }
  };

  // Zoom functionality
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.min(Math.max(zoom + delta, 0.5), 5);
    setZoom(newZoom);
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen p-6 bg-orange-500" >
      <div className="max-w-7xl mx-auto">
        
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[200px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer group transition-transform duration-300  hover:z-10 shadow-lg ${getImageClass(image.size)}`}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Zoomable Modal */}
      {selectedImage && (
        <div className="fixed left-0 top-[11vh] right-0 bottom-0 z-200 flex pt-[10vh] justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-orange-500 opacity-80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[70vh] md:min-h-[50vh] w-full">
            {/* Close Button */}
            <div className="absolute top-0 right-0 cursor-pointer hover:scale-110 transition-all duration-300 z-200" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            </div>

            {/* Zoom Controls */}
            
            
            {/* Image Container */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-full">
              <div 
                className="w-full h-[60vh] overflow-hidden cursor-grab active:cursor-grabbing relative"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  ref={imageRef}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain transition-transform duration-200 select-none"
                  style={{
                    transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                  }}
                  draggable={false}
                />
              </div>

              {/* Instructions */}
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm text-center">
                  Scroll to zoom • Click and drag to pan
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoCollage;