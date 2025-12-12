import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

export default function DetailsPage() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category || !id) return;

        let endpoint = category;
        // Map frontend route params to API endpoints if they differ
        // e.g., if you had 'entertainment' mapping to 'artists' or something similar

        fetch(`http://localhost:5000/api/${endpoint}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then((data) => {
                setItem(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch details", err);
                setLoading(false);
            });
    }, [category, id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Content not found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                    <ArrowLeft size={20} /> Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <article>
                    <span className="text-sm font-bold text-green-600 uppercase tracking-wide mb-2 block">
                        {item.category || category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {item.title}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 border-b border-gray-100 pb-8">
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                        {/* Add more metadata here if available, e.g., author */}
                    </div>

                    {(item.videoUrl || category === "videos") ? (
                        <div className="mb-10 rounded-xl overflow-hidden shadow-sm bg-gray-100 aspect-video relative">
                            {item.videoUrl || (item.content && item.content.includes("youtube.com")) ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.videoUrl ? item.videoUrl.replace("watch?v=", "embed/") : "https://www.youtube.com/embed/XbVLchkyACM"}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            ) : (
                                <div className="text-center flex flex-col items-center justify-center h-full text-gray-500">
                                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                                    <div className="bg-black/80 text-white px-4 py-2 rounded z-10">Video Player Placeholder</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        item.image && (
                            <div className="mb-10 rounded-xl overflow-hidden shadow-sm bg-gray-100">
                                <img src={item.image} alt={item.title} className="w-full h-auto object-cover max-h-[600px]" />
                            </div>
                        )
                    )}

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {item.content}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
