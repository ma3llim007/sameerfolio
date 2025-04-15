import { motion } from "framer-motion";
import Container from "./Container";

const skillsCard = [
    { title: "Front-End", skills: ["HTML", "CSS", "Bootstrap", "TailwindCss", "JavaScript", "ReactJs", "React Router", "State Management", "Responsive Design"] },
    { title: "Back-End", skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "API Versioning", "Authentication (JWT)", "SQL", "Middleware"] },
    { title: "Tools", skills: ["Git & GitHub", "VS Code", "Postman", "NPM / Yarn", "ESLint", "Prettier", "Chrome DevTools", "Figma", "Docker"] },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
    return (
        <section className="w-full py-12" id="skills">
            <Container>
                <motion.h2
                    className="text-3xl lg:text-4xl font-extrabold mb-10 underline underline-offset-4 font-playfair text-center md:text-start"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Tech Stack
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsCard?.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full space-y-4 p-5 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/10 shadow-lg"
                        >
                            <h4 className="text-2xl font-bold text-white border-b border-white/20 pb-1 font-playfair">{category.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gray-100/30 text-white text-sm px-3 py-1.5 font-medium rounded-md border border-indigo-700 hover:border-white backdrop-blur-sm shadow hover:bg-indigo-700 transition duration-200 select-none"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;
