import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/news")
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((err) => console.error("Failed to fetch news", err));
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-green-700 mb-12">Latest News</h1>
                <div className="space-y-12">
                    {news.map((item) => (
                        <article key={item.id} className="flex flex-col md:flex-row gap-8 items-start p-4 rounded-xl transition-all border border-transparent hover:border-yellow-400 hover:bg-yellow-50/20 hover:shadow-lg">
                            <div className="w-full md:w-1/3 aspect-video relative african-pattern-shadow rounded-lg z-0">
                                <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden z-10 relative">
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">No Image</div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">{item.category || "General"}</span>
                                <h2 className="text-2xl font-bold mt-2 mb-4 hover:text-red-700 cursor-pointer transition-colors">
                                    <a href={`/news/${item.id}`}>{item.title}</a>
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {item.content}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                </div>
                                <a href={`/news/${item.id}`} className="text-red-600 font-medium hover:text-red-800 hover:underline inline-block">Read More</a>
                            </div>
                        </article>
                    ))}
                    {news.length === 0 && (
                        <p className="text-center text-gray-500">No news articles found.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
