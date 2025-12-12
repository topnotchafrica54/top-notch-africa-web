import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Lightbulb } from "lucide-react";

export default function Innovation() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/innovation")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch innovation items", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                        <Lightbulb size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">Innovation in Africa</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors cursor-pointer group">
                            <div className="mb-4">
                                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded">{item.category || "Tech"}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                {item.content}
                            </p>
                            <div className="flex items-center text-sm text-gray-400">
                                <span>{new Date(item.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No innovation posts found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
