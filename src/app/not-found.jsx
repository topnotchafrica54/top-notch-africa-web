import { ArrowRight } from "lucide-react";
import logo from "../images/Top_Notch_Africa_Logo-removebg-preview.png";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Subtle geometric background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gray-900 rotate-12 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 -rotate-6 transform -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* Logo - Elegant and Static */}
                <div className="mb-12 flex justify-center">
                    <img
                        src={logo}
                        alt="Top Notch Africa"
                        className="w-16 h-16 object-contain opacity-90"
                    />
                </div>

                {/* Large, Thin, Elegant 404 */}
                <h1 className="text-[12rem] leading-none font-thin text-white tracking-tighter opacity-20 select-none">
                    404
                </h1>

                <div className="-mt-12 mb-12 relative z-20">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Lost Backstage?
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved to another location.
                    </p>
                </div>

                {/* Minimalist Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="/"
                        className="group relative px-8 py-3 bg-white text-black font-medium tracking-wide overflow-hidden transition-all hover:pr-12"
                    >
                        <span className="relative z-10">RETURN HOME</span>
                        <ArrowRight size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                    </a>
                </div>
            </div>

            {/* Footer minimal info */}
            <div className="absolute bottom-6 w-full text-center">
                <p className="text-gray-600 text-xs tracking-widest uppercase">
                    Top Notch Africa • Exclusive Content
                </p>
            </div>
        </div>
    );
}
