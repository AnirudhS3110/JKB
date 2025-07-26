"use-client"
import { useState } from 'react';
import { X } from 'lucide-react';

const PhotoCollage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
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
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    Click to view
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Text Overlay - Center positioned */}
        {/* <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
          <div className="bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-1">SAMPLE GALLERY</h2>
            <p className="text-lg opacity-90">Click any image to view</p>
          </div>
        </div> */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed left-0 top-[11vh] right-0 bottom-0 z-200 flex pt-[3vh]  justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-orange-500 bg-opacity-80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[70vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-10 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src.replace('w=400', 'w=1200').replace('h=300', 'h=800').replace('h=600', 'h=1200')}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-4 bg-white">
                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedImage.alt}
                </h3> */}
                <p className="text-gray-600 lg:text-[20px]">
                  Click outside to close
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