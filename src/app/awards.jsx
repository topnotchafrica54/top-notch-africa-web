import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trophy } from "lucide-react";

export default function Awards() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/awards")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Failed to fetch awards", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-gray-900 mb-4">AWARDS</h1>
                    <p className="text-xl text-gray-600">Celebrating Excellence in African Entertainment</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-6">
                                <Trophy size={40} className="text-yellow-500" />
                                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">{new Date(item.date).getFullYear()}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                        {item.image && <img src={item.image} alt="Winner" className="w-full h-full object-cover" />}
                                    </div>
                                    <div>
                                        <p className="font-bold">{item.content}</p>
                                        <p className="text-xs text-gray-500">Winner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="col-span-full text-center text-gray-500">No awards found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
