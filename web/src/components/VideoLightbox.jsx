import { useState, useEffect } from "react";
import { X, Play, Pause, Volume2, Maximize, ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoLightbox({ 
  isOpen, 
  onClose, 
  videoData, 
  playlist = [], 
  currentIndex = 0, 
  onNavigate 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(75);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsPlaying(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (isPlaying && showControls) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const handleClose = () => {
    setIsPlaying(false);
    onClose();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handlePrevious = () => {
    if (onNavigate && currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (onNavigate && playlist.length > 0 && currentIndex < playlist.length - 1) {
      onNavigate(currentIndex + 1);
      setIsPlaying(false);
    }
  };

  if (!isOpen || !videoData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className={`absolute top-6 right-6 text-white hover:text-gray-300 transition-all duration-300 z-10 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <X size={32} />
      </button>

      {/* Navigation Arrows - Only show if playlist exists */}
      {playlist.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-6 text-white hover:text-gray-300 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === playlist.length - 1}
            className={`absolute right-6 text-white hover:text-gray-300 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      {/* Video Container */}
      <div className="relative max-w-6xl max-h-[80vh] mx-auto px-16 w-full">
        {/* Main Video Display */}
        <div 
          className="relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
          style={{ aspectRatio: '16/9' }}
          onClick={togglePlayPause}
        >
          {/* Video Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎬</div>
              <div className="text-xl font-medium mb-2">{videoData.title}</div>
              {isPlaying ? (
                <div className="text-sm opacity-75">Playing...</div>
              ) : (
                <div className="text-sm opacity-75">Click to play</div>
              )}
            </div>
            
            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <Play size={32} className="text-white ml-1 fill-white" />
                </div>
              </div>
            )}
          </div>

          {/* Video Controls Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full h-1 bg-white bg-opacity-30 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: isPlaying ? '45%' : '0%' }}
                />
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Play/Pause */}
                <button 
                  onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="fill-white" />}
                </button>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <Volume2 size={20} className="text-white" />
                  <div className="w-20 h-1 bg-white bg-opacity-30 rounded-full">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{ width: `${volume}%` }}
                    />
                  </div>
                </div>

                {/* Time Display */}
                <div className="text-white text-sm">
                  {isPlaying ? '1:23' : '0:00'} / {videoData.duration || '4:32'}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Fullscreen */}
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className={`mt-6 text-white transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{videoData.title}</h2>
              {videoData.description && (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {videoData.description}
                </p>
              )}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                {videoData.views && <span>{videoData.views} views</span>}
                {videoData.uploadDate && <span>• {videoData.uploadDate}</span>}
                {videoData.category && (
                  <span className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs">
                    {videoData.category}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Playlist Counter */}
          {playlist.length > 1 && (
            <div className="text-center mt-4 text-gray-400 text-sm">
              Video {currentIndex + 1} of {playlist.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}