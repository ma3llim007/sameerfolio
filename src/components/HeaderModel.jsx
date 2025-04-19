import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CiFileOn } from "react-icons/ci";
import { FaBriefcase, FaEnvelope, FaGlobe, FaHome, FaTools } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../assets/mohd_sameer_resume.pdf";

const HeaderModel = ({ isOpen, onClose }) => {
    // Navigate items
    const navigationItems = [
        {
            Icon: FaHome,
            title: "Home",
            subtitle: "Start here — explore my personal portfolio!",
            path: "home",
        },
        {
            Icon: FaTools,
            title: "Skills",
            subtitle: "Technologies and tools I'm proficient with",
            path: "skills",
        },
        {
            Icon: FaGlobe,
            title: "Projects",
            subtitle: "A showcase of my best work and creations",
            path: "projects",
        },
        {
            Icon: FaBriefcase,
            title: "Experience",
            subtitle: "My professional journey and work history",
            path: "experience",
        },
        {
            Icon: FaEnvelope,
            title: "Contact Us",
            subtitle: "Get in touch — I'd love to hear from you!",
            path: "contact",
        },
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Closing Model on Escape
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
                    <motion.div
                        className="bg-slate-900 text-white mt-14 px-4 pt-4 rounded-xl max-w-sm sm:max-w-xl w-full shadow-2xl relative space-y-3"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-1 right-8 cursor-pointer text-white text-2xl font-bold z-20">
                            &times;
                        </button>
                        <div className="max-h-[55vh] overflow-y-scroll space-y-2">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Navigation</p>
                            <div className="flex flex-col">
                                {navigationItems?.map((item, index) => (
                                    <Link
                                        onClick={onClose}
                                        smooth={true}
                                        duration={500}
                                        to={item.path}
                                        key={item.title + index}
                                        tabIndex={-1}
                                        role="button"
                                        className="flex items-start gap-3 p-3 rounded-lg transition-colors"
                                    >
                                        <div className="w-11 h-11 flex items-center justify-center bg-gray-600/40 rounded-lg text-white">
                                            <item.Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-base font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-300">{item.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">General</p>
                            <a onClick={onClose} target="_blank" href={resume} aria-label="View Resume" className="flex items-start gap-3 p-3 rounded-lg transition-colors">
                                <div className="w-11 h-11 flex items-center justify-center bg-gray-600/40 rounded-lg text-white">
                                    <CiFileOn className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-medium">Resume</p>
                                    <p className="text-sm text-gray-300">View My Resume</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById("model-root")
    );
};

export default HeaderModel;
