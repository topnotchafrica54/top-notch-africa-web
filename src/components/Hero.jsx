import { Play } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-green-100 via-white to-yellow-100 pt-20 pb-16 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-700 text-yellow-300 text-sm font-medium rounded shadow-sm">
              FEATURED ARTIST
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-yellow-500 leading-tight">
              CIC
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Check out the latest hit from Liberian superstar CIC. Experience the rhythm and vibes of "Congratulations".
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsPlaying(true)}
                className="flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Play size={20} className="mr-2 fill-white" />
                Watch Video
              </button>
              <a href="/gallery" className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 font-medium rounded hover:bg-yellow-500 hover:text-white transition-colors text-center shadow-sm hover:shadow-md">
                View Gallery
              </a>
            </div>
          </div>

          {/* Right Content - Featured Image/Video */}
          <div className="relative">
            <div className="relative african-pattern-shadow rounded-lg z-0">
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden relative shadow-xl z-10">
                {isPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/XbVLchkyACM?autoplay=1"
                    title="CIC - Congratulations"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full relative cursor-pointer group"
                  >
                    <img
                      src="https://i.ytimg.com/vi/XbVLchkyACM/maxresdefault.jpg"
                      alt="CIC Congratulations"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                        <Play size={32} className="text-white ml-2 fill-white" />
                      </div>
                      <span className="text-white font-bold tracking-wider text-sm uppercase">Watch Now</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                      Official Video
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rotate-45 -z-10 rounded-full blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-500 rounded-full -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );

}