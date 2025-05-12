import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <section className="w-full pt-4 bg-slate-950">
            <Container>
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/10 via-white/50 to-white/10 rounded" />
                    <div className="py-8 lg:pt-8 lg:pb-0 space-y-6 text-center flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/mohdsameer-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                <FaLinkedin className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://github.com/ma3llim007/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333] hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                <FaGithub className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/ma_3llim_007/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                <FaInstagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://x.com/Ma_3llim_007"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (formerly Twitter)"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-black via-gray-800 to-black hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                <FaXTwitter className="w-4 h-4 text-white" />
                            </a>
                        </div>
                        <p className="text-sm md:text-base px-4">&copy; {new Date().getFullYear()} Mohd Sameer. All Rights Reserved.</p>
                    </div>
                </div>

                <Link
                    href="#home"
                    to="home"
                    smooth={true}
                    duration={500}
                    className="fixed bottom-5 right-5 w-10 h-10 bg-violet-600 rounded flex justify-center items-center text-white shadow-md transition duration-300 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-lg" />
                </Link>
            </Container>
        </section>
    );
};

export default Footer;
