import { Menu, Search } from "lucide-react";
import { useState } from "react";
import logo from "../images/Top_Notch_Africa_Logo-removebg-preview.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "News", href: "/news" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Culture", href: "/culture" },
    { label: "Innovation", href: "/innovation" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Videos", href: "/videos" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Top Notch Africa"
              className="w-12 h-12 object-contain"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">
              Top Notch Africa
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Menu size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
