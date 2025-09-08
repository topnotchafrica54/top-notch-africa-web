import { useState } from "react";
import { Play, Share2, ThumbsUp, Calendar, Eye, ChevronLeft } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function VideoDetailPage({ params }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample video data
  const videoData = {
    title: "Artist Performance Highlights 2024",
    description: "Experience the most electrifying moments from this year's MTV EMA performances. From stunning choreography to unexpected collaborations, this video captures the magic that made the night unforgettable.",
    views: "2.4M views",
    uploadDate: "3 days ago",
    duration: "4:32",
    likes: "45K",
    artist: "Featured Artist",
    category: "Performance"
  };

  const relatedVideos = [
    {
      id: 1,
      title: "Red Carpet Arrivals",
      duration: "6:22",
      views: "892K views",
      date: "1 week ago"
    },
    {
      id: 2,
      title: "Backstage Exclusive",
      duration: "3:45",
      views: "1.2M views", 
      date: "2 days ago"
    },
    {
      id: 3,
      title: "Winner Interviews",
      duration: "8:15",
      views: "756K views",
      date: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Latest
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="relative bg-gray-900 aspect-video rounded-lg overflow-hidden mb-6 group">
                {!isPlaying ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center cursor-pointer"
                       onClick={() => setIsPlaying(true)}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-gray-900 ml-1 fill-gray-900" />
                      </div>
                      <span className="text-white font-medium">Play Video</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">🎵</div>
                      <p>Video Playing...</p>
                    </div>
                  </div>
                )}
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {videoData.duration}
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {videoData.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {videoData.views}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {videoData.uploadDate}
                    </div>
                    <div className="px-3 py-1 bg-gray-200 rounded text-xs font-medium">
                      {videoData.category}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                    <ThumbsUp size={18} />
                    <span className="font-medium">{videoData.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                    <Share2 size={18} />
                    <span className="font-medium">Share</span>
                  </button>
                </div>

                {/* Video Description */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">About this video</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {videoData.description}
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Artist:</strong> {videoData.artist}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Related Videos</h3>
                <div className="space-y-4">
                  {relatedVideos.map((video) => (
                    <div key={video.id} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        {/* Thumbnail */}
                        <div className="relative w-32 h-20 bg-gray-300 rounded flex-shrink-0 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                            <Play size={16} className="text-white fill-white" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1 text-xs rounded">
                            {video.duration}
                          </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors text-sm leading-tight mb-1">
                            {video.title}
                          </h4>
                          <div className="text-xs text-gray-500 space-y-1">
                            <div>{video.views}</div>
                            <div>{video.date}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}