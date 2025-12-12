import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Lifestyle() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/lifestyle")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch lifestyle items", err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center italic font-serif">Lifestyle & Living</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="aspect-square bg-gray-200 overflow-hidden">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">No Image</div>
                                )}
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{item.category}</p>
                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{item.content}</p>
                                <button className="text-sm border-b border-black pb-1 hover:text-gray-600 transition-colors">Read Story</button>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No lifestyle posts found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
