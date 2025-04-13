import { motion } from "framer-motion";
import Container from "./Container";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import { FaCloudDownloadAlt, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white backdrop-blur-md" id="home">
            <div className="w-full bg-black/50">
                <Container>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center lg:text-start gap-12 py-5">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-4 grow">
                            <h2 className="text-2xl md:text-4xl font-semibold font-playfair flex items-center justify-center lg:justify-start gap-3">
                                <span>Hi there</span>
                                <span role="img" aria-label="wave" className="waving-hand text-4xl">
                                    👋
                                </span>
                                <span>I'm</span>
                            </h2>
                            <TypeAnimation
                                sequence={["Mohd Sameer", 2000, "Mern Stack Developer", 2000, "Full-Stack Web Developer", 2000, "React & Node.js Enthusiast", 2000]}
                                wrapper="h1"
                                speed={50}
                                repeat={Infinity}
                                className="text-4xl md:text-6xl font-bold font-playfair"
                            />
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                                A passionate developer building scalable, high-performance, and user-friendly web applications using the MERN stack. I focus on clean code and modern UI to deliver
                                polished digital experiences.
                            </p>
                            <div className="flex flex-wrap space-x-4 items-center justify-center lg:justify-start">
                                <a
                                    href="/Mohd-Sameer-Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200 shadow-md"
                                >
                                    Resume <FaCloudDownloadAlt className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mohdsameer-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] hover:scale-110 transition-transform duration-300 shadow-lg"
                                >
                                    <FaLinkedin className="w-6 h-6 text-white" />
                                </a>

                                <a
                                    href="https://github.com/ma3llim007/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:scale-110 transition-transform duration-300 shadow-lg"
                                >
                                    <FaGithub className="w-6 h-6 text-white" />
                                </a>

                                <a
                                    href="https://www.instagram.com/ma_3llim_007/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform duration-300 shadow-lg"
                                >
                                    <FaInstagram className="w-6 h-6 text-white" />
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: +50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-xs mx-auto md:mx-0 flex justify-center md:justify-end"
                        >
                            <img src={profile} alt="Portrait of Mohd Sameer" className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl" />
                        </motion.div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
