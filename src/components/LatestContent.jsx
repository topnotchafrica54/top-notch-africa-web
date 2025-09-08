import { useState } from "react";
import { Play, Image, FileText, Calendar } from "lucide-react";
import VideoLightbox from "./VideoLightbox";

export default function LatestContent() {
  const [activeTab, setActiveTab] = useState("All");
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tabs = ["All", "Videos", "Playlists", "Photo Galleries", "Articles"];

  // Sample content data
  const content = [
    {
      type: "video",
      title: "Artist Performance Highlights",
      thumbnail: "video-thumb-1",
      duration: "4:32",
      category: "Performance",
      date: "2 hours ago",
      description:
        "Experience the most electrifying moments from this year's MTV EMA performances.",
      views: "2.4M views",
    },
    {
      type: "gallery",
      title: "Behind the Scenes Gallery",
      thumbnail: "gallery-thumb-1",
      imageCount: "24 photos",
      category: "Gallery",
      date: "5 hours ago",
    },
    {
      type: "article",
      title: "Exclusive Artist Interview",
      thumbnail: "article-thumb-1",
      category: "News",
      date: "1 day ago",
    },
    {
      type: "video",
      title: "Red Carpet Moments",
      thumbnail: "video-thumb-2",
      duration: "2:18",
      category: "Event",
      date: "2 days ago",
      description:
        "Catch all the stunning red carpet arrivals and fashion highlights.",
      views: "1.8M views",
    },
    {
      type: "playlist",
      title: "Top Performances Collection",
      thumbnail: "playlist-thumb-1",
      videoCount: "12 videos",
      category: "Playlist",
      date: "3 days ago",
    },
    {
      type: "gallery",
      title: "Award Show Photography",
      thumbnail: "gallery-thumb-2",
      imageCount: "36 photos",
      category: "Gallery",
      date: "4 days ago",
    },
  ];

  const getContentIcon = (type) => {
    switch (type) {
      case "video":
      case "playlist":
        return <Play size={20} className="fill-white" />;
      case "gallery":
        return <Image size={20} />;
      case "article":
        return <FileText size={20} />;
      default:
        return <Play size={20} className="fill-white" />;
    }
  };

  const getContentMeta = (item) => {
    if (item.duration) return item.duration;
    if (item.imageCount) return item.imageCount;
    if (item.videoCount) return item.videoCount;
    return "";
  };

  const filteredContent =
    activeTab === "All"
      ? content
      : content.filter((item) => {
          if (activeTab === "Videos") return item.type === "video";
          if (activeTab === "Playlists") return item.type === "playlist";
          if (activeTab === "Photo Galleries") return item.type === "gallery";
          if (activeTab === "Articles") return item.type === "article";
          return true;
        });

  const handleContentClick = (item, index) => {
    if (item.type === "video") {
      setSelectedVideo(item);
      setIsVideoLightboxOpen(true);
    } else if (item.type === "gallery") {
      window.location.href = `/gallery`;
    } else if (item.type === "article") {
      window.location.href = `/article/${index + 1}`;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest</h2>
          <p className="text-gray-600 text-lg">
            Discover the newest content from MTV EMA
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleContentClick(item, index)}
            >
              {/* Content Card */}
              <div className="relative bg-gray-200 aspect-video rounded-lg overflow-hidden mb-4 group-hover:bg-gray-300 transition-colors">
                {/* Thumbnail placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="mb-2">{getContentIcon(item.type)}</div>
                    <div className="text-xs uppercase tracking-wider">
                      {item.type}
                    </div>
                  </div>
                </div>

                {/* Content overlay */}
                {getContentMeta(item) && (
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {getContentMeta(item)}
                  </div>
                )}

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-gray-900 px-2 py-1 rounded text-xs font-medium">
                  {item.category}
                </div>
              </div>

              {/* Content Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors">
            Load More Content
          </button>
        </div>
      </div>

      {/* Video Lightbox */}
      <VideoLightbox
        isOpen={isVideoLightboxOpen}
        onClose={() => setIsVideoLightboxOpen(false)}
        videoData={selectedVideo}
      />
    </section>
  );
}
