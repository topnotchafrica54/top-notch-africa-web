import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 pt-20 pb-16 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-400 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gray-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded">
              FEATURED ARTIST
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Artist Name
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Experience the electrifying performance that captivated audiences worldwide. Watch the exclusive behind-the-scenes content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors">
                <Play size={20} className="mr-2 fill-white" />
                Watch Performance
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors">
                View Gallery
              </button>
            </div>
          </div>

          {/* Right Content - Featured Image/Video */}
          <div className="relative">
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden relative group cursor-pointer">
              {/* Placeholder for video thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-gray-900 ml-1 fill-gray-900" />
                  </div>
                  <span className="text-gray-700 font-medium">Featured Performance</span>
                </div>
              </div>
              
              {/* Video duration overlay */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                3:24
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-600 rotate-45"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}