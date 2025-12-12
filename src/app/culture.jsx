import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Culture() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/culture")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch culture items", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">African Culture & Heritage</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl">Explore the rich tapestry of African traditions, art, history, and stories that define our heritage.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4">
                            <div className="aspect-[4/3] bg-amber-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-amber-200 flex items-center justify-center text-amber-800">
                                        Cultural Image
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className="text-amber-600 font-bold text-sm uppercase tracking-wide">{item.category || "Heritage"}</span>
                                <h3 className="text-2xl font-bold mt-1 mb-2">{item.title}</h3>
                                <p className="text-gray-600 line-clamp-3">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No culture posts found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
