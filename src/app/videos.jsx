import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Videos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/videos")
            .then((res) => res.json())
            .then((data) => setVideos(data))
            .catch((err) => console.error("Failed to fetch videos", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-green-700 mb-8">Videos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((item) => (
                        <div key={item.id} className="bg-gray-100 rounded-lg overflow-Visible group cursor-pointer hover:shadow-lg transition-all border border-transparent hover:border-yellow-400 hover:bg-yellow-50/20">
                            <div className="aspect-video relative african-pattern-shadow rounded-lg z-0">
                                <div className="w-full h-full bg-gray-300 relative flex items-center justify-center group-hover:bg-gray-400 transition-colors rounded-lg overflow-hidden z-10">
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-gray-500">Video Placeholder</span>
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gray-900 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <span className="text-xs text-green-600 font-bold uppercase">{item.category}</span>
                                <h3 className="font-semibold text-lg mb-2 mt-1 line-clamp-2">
                                    <a href={`/videos/${item.id}`} className="hover:text-red-700 transition-colors">{item.title}</a>
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{item.content}</p>
                            </div>
                        </div>
                    ))}
                    {videos.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No videos found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
