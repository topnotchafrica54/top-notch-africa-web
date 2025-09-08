import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestContent from "../components/LatestContent";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LatestContent />
      <Footer />
    </div>
  );
}