import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Image } from "lucide-react";

export default function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/gallery")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch gallery items", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
                <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden mb-6 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity">
                            <div className="aspect-[3/4] bg-gray-300 flex items-center justify-center relative">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                ) : (
                                    <Image size={48} className="text-gray-400" />
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <h3 className="text-white font-bold">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No photos found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
