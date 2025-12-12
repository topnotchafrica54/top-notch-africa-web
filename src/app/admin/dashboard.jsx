import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Plus, Trash2, LayoutDashboard, FileText, Video, Image, Trophy, Music, Lightbulb, User } from "lucide-react";
import { Toaster, toast } from "sonner";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("news");
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: "", description: "", category: "", content: "" });

    const resources = [
        { id: "news", label: "News", icon: <FileText size={18} /> },
        { id: "videos", label: "Videos", icon: <Video size={18} /> },
        { id: "gallery", label: "Gallery", icon: <Image size={18} /> },
        { id: "artists", label: "Artists", icon: <User size={18} /> },
        { id: "awards", label: "Awards", icon: <Trophy size={18} /> },
        { id: "culture", label: "Culture", icon: <LayoutDashboard size={18} /> },
        { id: "innovation", label: "Innovation", icon: <Lightbulb size={18} /> },
        { id: "lifestyle", label: "Lifestyle", icon: <Music size={18} /> },
    ];

    // Fetch data when tab changes
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/${activeTab}`);
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    // Initial load effect
    useState(() => {
        fetchData();
    }, [activeTab]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/api/${activeTab}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                toast.success("Post created successfully!");
                setShowForm(false);
                setFormData({ title: "", description: "", category: "", content: "" });
                fetchData();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create post: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure?")) return;
        try {
            await fetch(`http://localhost:5000/api/${activeTab}/${id}`, { method: 'DELETE' });
            toast.success("Deleted successfully");
            fetchData();
        } catch (error) {
            toast.error("Delete failed");
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex-1 flex pt-24 max-w-7xl mx-auto w-full px-6 gap-8">

                {/* Sidebar */}
                <aside className="w-64 bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-fit sticky top-24">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">Admin Panel</h2>
                    <nav className="space-y-1">
                        {resources.map((res) => (
                            <button
                                key={res.id}
                                onClick={() => { setActiveTab(res.id); setShowForm(false); fetchData(); }}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === res.id
                                    ? "bg-red-50 text-red-800 border-l-4 border-red-800"
                                    : "text-gray-600 hover:bg-red-50"
                                    }`}
                            >
                                {res.icon}
                                {res.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold capitalize">{activeTab} Management</h1>
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <Plus size={18} />
                            {showForm ? "Cancel" : "Create New"}
                        </button>
                    </div>

                    {showForm && (
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8 animate-in fade-in slide-in-from-top-4">
                            <h2 className="text-lg font-bold mb-4">New {activeTab.slice(0, -1)} Post</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title / Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description / Content</label>
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category (Optional)</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        />
                                    </div>
                                    {/* In a real app, this would be a file upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
                                        <input
                                            type="text"
                                            placeholder="https://..."
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button type="submit" className="w-full bg-red-800 text-white font-bold py-3 rounded-lg hover:bg-red-900 transition-colors">
                                        Publish Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="grid gap-4">
                        {items.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start hover:shadow-md hover:border-yellow-400 hover:bg-yellow-50/20 transition-all cursor-pointer">
                                <div>
                                    {item.category && (
                                        <span className="text-green-600 font-bold text-xs uppercase mb-1 block">
                                            {item.category}
                                        </span>
                                    )}
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">{item.content || item.description}</p>
                                    <span className="text-xs text-gray-400 mt-2 block">{new Date(item.date).toLocaleDateString()}</span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        {items.length === 0 && (
                            <div className="text-center py-12 text-gray-400">
                                No posts found. Create one to get started.
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
