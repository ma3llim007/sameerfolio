import { Command } from "lucide-react";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 shadow-md shadow-gray-700 transition-all duration-300">
            <div className="grid grid-cols-2 px-6 md:px-12 h-20 max-w-full mx-auto">
                {/* Logo Section */}
                <div className="w-[200px] h-[55px]">
                    <img className="w-full h-auto object-contain" src="logo.svg" alt="Sameerfolio Logo" />
                </div>
                <nav className="flex items-center justify-end gap-6">
                    <ul className="hidden md:flex items-center gap-6 font-semibold text-lg text-dark-text">
                        <li className="hover:text-primary transition">Home</li>
                        <li className="hover:text-primary transition">Skills</li>
                        <li className="hover:text-primary transition">Project's</li>
                        <li className="hover:text-primary transition">Experience</li>
                        <li className="hover:text-primary transition">Contact</li>
                    </ul>
                    <div className="p-2 group hover:bg-gray-200 rounded-full transition-all cursor-pointer">
                        <Command size={24} className="group-hover:text-black" />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
