import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Artists() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/artists")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch artists", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Artists</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="text-center group cursor-pointer">
                            <div className="w-full aspect-square bg-gray-200 rounded-full mb-4 overflow-hidden mx-auto max-w-[200px]">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                ) : (
                                    <div className="w-full h-full bg-gray-300 group-hover:scale-110 transition-transform duration-300"></div>
                                )}
                            </div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.category}</p>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No artists found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
