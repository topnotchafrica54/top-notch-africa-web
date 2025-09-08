import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: "About Top Notch Africa", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
    Content: [
      { label: "Videos", href: "/videos" },
      { label: "Photos", href: "/gallery" },
      { label: "News", href: "/news" },
      { label: "Artists", href: "/artists" },
    ],
    Support: [
      { label: "Help Center", href: "/help" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/Gooo01.png"
                alt="Top Notch Africa"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-2 text-lg font-bold">Top Notch Africa</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The ultimate destination for African music, entertainment, and
              culture content from across the continent.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Top Notch Africa. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/privacy"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/accessibility"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Accessibility
              </a>
              <a
                href="/advertising"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Advertising
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
