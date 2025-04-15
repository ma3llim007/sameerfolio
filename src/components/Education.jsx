import Container from "./Container";

const data = {
    education: [
        {
            title: "BCA - Bachelor of Computer Applications",
            institution: "Osmania University",
            date: "2022 - 2025",
            description:
                "Maintained a strong academic record, consistently ranking among the top students. Developed a solid foundation in programming, data structures, and web technologies. Actively participated in technical workshops, coding events, and collaborative projects, fostering both theoretical knowledge and practical expertise.",
        },
        {
            title: "Intermediate",
            institution: "Visionary Junior College",
            date: "2020 - 2022",
            description:
                "Graduated with distinction, recognized as one of the top-performing students. Gained proficiency in Computer Science fundamentals, programming logic, and analytical reasoning. Engaged in peer study groups and project-based learning, consistently demonstrating dedication, discipline, and academic excellence.",
        },
    ],
    experience: [
        {
            title: "Junior Web Developer",
            company: "Jai Jinendra Solutions",
            date: "Sep 2024 - Nov 2024",
            description:
                "Contributed to building responsive web applications using HTML, CSS, and JavaScript. Developed backend features with PHP and CodeIgniter, integrated secure MySQL operations, and optimized performance. Gained practical experience in debugging and team collaboration within a fast-paced development environment.",
        },
        {
            title: "Web Developer Intern",
            company: "Wish Abroad",
            date: "Jan 2021 - May 2021",
            description:
                "Focused on front-end development with HTML, CSS, and JavaScript to create responsive web pages. Assisted with PHP-based backend tasks and enhanced site performance. Strengthened foundational web skills and gained insight into real-world project workflows and team collaboration.",
        },
    ],
};

const TimelineItem = ({ title, subtitle, date, description }) => (
    <div className="relative pl-4 border-l-2 border-blue-600 pb-10">
        <div className="absolute -left-[10px] top-5 w-3.5 h-3.5 bg-blue-600 rounded-full shadow-lg ring-4 dark:ring-gray-200"></div>
        <div className="bg-white/20 backdrop-blur-xl rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 hover:scale-[1.01] hover:shadow-indigo-500/30">
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm mb-1">{subtitle}</p>
            <p className="text-xs mb-2">{date}</p>
            <p className="text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const Education = () => {
    return (
        <section className="w-full py-10" id="education">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 underline underline-offset-8 decoration-blue-600 font-playfair text-gray-900 dark:text-white select-none">Education</h2>
                        <div>
                            {data.education.map((edu) => (
                                <TimelineItem key={edu.title} title={edu.title} subtitle={edu.institution} date={edu.date} description={edu.description} />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 underline underline-offset-4 font-playfair select-none">Experience</h2>
                        <div className="w-full">
                            {data?.experience?.map((exper) => (
                                <TimelineItem key={exper.title} title={exper.title} subtitle={exper.company} date={exper.date} description={exper.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Education;
