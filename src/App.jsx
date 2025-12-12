import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/page.jsx";
import AdminDashboard from "./app/admin/dashboard.jsx";
import Videos from "./app/videos.jsx";
import Gallery from "./app/gallery.jsx";
import News from "./app/news.jsx";
import Artists from "./app/artists.jsx";
import Awards from "./app/awards.jsx";
import Culture from "./app/culture.jsx";
import Innovation from "./app/innovation.jsx";
import Lifestyle from "./app/lifestyle.jsx";
import DetailsPage from "./app/details.jsx";
import NotFound from "./app/not-found.jsx";
import { Toaster } from "sonner";

export default function App() {
    return (
        <BrowserRouter>
            <Toaster position="bottom-right" />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/entertainment" element={<Artists />} /> {/* Reusing Artists for Entertainment for now */}
                <Route path="/artists" element={<Artists />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/innovation" element={<Innovation />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/:category/:id" element={<DetailsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
