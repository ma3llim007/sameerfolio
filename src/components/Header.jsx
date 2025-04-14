import { MdKeyboardCommandKey } from "react-icons/md";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-xl">
            <div className="grid grid-cols-2 items-center px-6 md:px-12 h-14 max-w-full mx-auto">
                {/* Logo Section */}
                <div className="w-[160px] h-[40px] flex items-center">
                    <img className="w-full h-auto object-contain" src="logo.svg" alt="sameerfolio Logo" />
                </div>
                <nav className="flex items-center justify-end gap-6">
                    <ul className="hidden md:flex items-center gap-6 font-semibold text-lg">
                        <li className="hover:text-primary transition">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-primary transition">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hover:text-primary transition">
                            <a href="#projects">Project's</a>
                        </li>
                        <li className="hover:text-primary transition">Experience</li>
                        <li className="hover:text-primary transition">Contact</li>
                    </ul>
                    <div className="p-2 group hover:bg-gray-200 rounded-full transition-all cursor-pointer">
                        <MdKeyboardCommandKey size={24} className="group-hover:text-black" />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
