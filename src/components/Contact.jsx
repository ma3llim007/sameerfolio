import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { useForm } from "react-hook-form";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import firebaseDb from "../services/firebase";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setError,
    } = useForm({ mode: "onTouched" });

    const onSubmit = async (data) => {
        setLoading(true);
        setSuccess(false);
        try {
            await addDoc(collection(firebaseDb, "contacts"), {
                ...data,
                createdAt: Timestamp.now(),
            });
            reset();
            setSuccess(true);
        } catch (error) {
            setError("root", { message: error?.message });
        } finally {
            setLoading(false);

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    };

    return (
        <section id="contact" className="w-full">
            <Container>
                <div className="max-w-7xl mx-auto bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur">
                    <motion.h2
                        className="text-3xl lg:text-4xl font-extrabold mb-5 underline underline-offset-4 font-playfair text-center md:text-start"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Contact Me
                    </motion.h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <AnimatePresence mode="wait">
                            {success && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full my-4 bg-green-500 text-center rounded-md border border-green-600 py-3 px-4"
                                >
                                    <h4 className="text-white font-bold text-sm">Your Message Has Been Sent!</h4>
                                </motion.div>
                            )}

                            {errors.root && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full my-4 bg-red-500 text-center rounded-md border border-red-600 py-3 px-4"
                                >
                                    <h4 className="text-white font-bold text-sm">{errors.root.message}</h4>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="flex flex-wrap md:flex-nowrap gap-4">
                            <div className="w-full md:flex-1">
                                <input
                                    {...register("name", { required: "Name Is Required" })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded bg-slate-900 border border-white/20 focus:outline-none"
                                />
                                {errors.name && <p className="text-red-500 font-bold mt-2 pl-1">{errors.name.message}</p>}
                            </div>
                            <div className="w-full md:flex-1">
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid Email Format",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded bg-slate-900 border border-white/20 focus:outline-none"
                                />
                                {errors.email && <p className="text-red-500 font-bold mt-2 pl-1">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="w-full">
                            <input
                                {...register("subject", { required: "Subject Is Required" })}
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 rounded bg-slate-900 border border-white/20 focus:outline-none"
                            />
                            {errors.subject && <p className="text-red-500 font-bold mt-2 pl-1">{errors.subject.message}</p>}
                        </div>
                        <div className="w-full">
                            <textarea
                                {...register("message", { required: "Message Cannot Be Empty" })}
                                placeholder="Your Message"
                                rows="5"
                                className="w-full p-3 rounded bg-slate-900 border border-white/20 focus:outline-none"
                            />
                            {errors.message && <p className="text-red-500 font-bold mt-2 pl-1">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="w-40 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
