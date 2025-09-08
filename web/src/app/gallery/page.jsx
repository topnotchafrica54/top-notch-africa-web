import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PhotoGalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Sample photo gallery data
  const galleryData = {
    title: "MTV EMA 2024 - Behind the Scenes",
    description: "Exclusive backstage moments and candid shots from the most glamorous night in music.",
    totalPhotos: 48,
    date: "November 15, 2024",
    photographer: "MTV Photography Team"
  };

  const photos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Behind the Scenes Photo ${i + 1}`,
    caption: `Exclusive moment captured during MTV EMA 2024`,
    likes: Math.floor(Math.random() * 1000) + 100,
    aspectRatio: Math.random() > 0.5 ? "portrait" : "landscape"
  }));

  const openLightbox = (photo, index) => {
    setSelectedPhoto({ ...photo, index });
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction) => {
    if (!selectedPhoto) return;
    
    const currentIndex = selectedPhoto.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    }
    
    setSelectedPhoto({ ...photos[newIndex], index: newIndex });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Gallery Header */}
          <div className="mb-12">
            <div className="mb-6">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
              >
                <ChevronLeft size={20} className="mr-1" />
                Back to Latest
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {galleryData.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {galleryData.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>{galleryData.totalPhotos} photos</span>
                  <span>•</span>
                  <span>{galleryData.date}</span>
                  <span>•</span>
                  <span>By {galleryData.photographer}</span>
                </div>
              </div>

              <div className="flex justify-start lg:justify-end">
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                    <Heart size={18} />
                    <span className="font-medium">Save Gallery</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded transition-colors">
                    <Share2 size={18} />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid - Masonry Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  photo.aspectRatio === "portrait" ? "row-span-2" : ""
                }`}
                onClick={() => openLightbox(photo, index)}
              >
                <div className={`w-full bg-gray-300 ${
                  photo.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-gray-700">
                      <div className="text-xs font-medium">Photo {photo.id}</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <div className="text-sm font-medium mb-1">View Photo</div>
                    <div className="flex items-center justify-center space-x-1 text-xs">
                      <Heart size={12} />
                      <span>{photo.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors">
              Load More Photos
            </button>
          </div>
        </div>
      </main>

      {/* Photo Lightbox Modal */}
      {isLightboxOpen && selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Photo Display */}
          <div className="max-w-4xl max-h-[80vh] mx-auto px-16">
            <div className="relative bg-gray-600 rounded-lg overflow-hidden">
              <div className="w-full h-[70vh] bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <div className="text-xl font-medium">{selectedPhoto.title}</div>
                </div>
              </div>
            </div>
            
            {/* Photo Info Bar */}
            <div className="flex items-center justify-between mt-4 text-white">
              <div>
                <h3 className="font-medium">{selectedPhoto.title}</h3>
                <p className="text-gray-300 text-sm">{selectedPhoto.caption}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart size={16} />
                  <span className="text-sm">{selectedPhoto.likes}</span>
                </div>
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                  <Download size={16} />
                </button>
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
            
            {/* Photo Counter */}
            <div className="text-center mt-4 text-gray-400 text-sm">
              {selectedPhoto.index + 1} of {photos.length}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}