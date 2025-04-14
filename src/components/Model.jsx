import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Model = ({ isOpen, onClose, title, children, footer }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-gray-900 text-white p-6 rounded-xl max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full shadow-2xl relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-3 right-7 cursor-pointer text-white text-2xl font-bold">
                            &times;
                        </button>
                        {title && <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">{title}</h2>}
                        <div className="max-h-[60vh] overflow-y-scroll">{children}</div>
                        {footer && <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">{footer}</div>}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById("model-root")
    );
};

export default Model;
