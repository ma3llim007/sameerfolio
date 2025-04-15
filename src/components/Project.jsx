import Container from "./Container";
import sameerCartImage from "../assets/projects/sameerCart.webp";
import blogSphereImage from "../assets/projects/blogsphere.webp";
import msCutImage from "../assets/projects/msCut.webp";
import aiCodeReviewImage from "../assets/projects/aiCodeReview.webp";
import { FaBlogger, FaClock, FaCode, FaEye, FaLink, FaMoneyBillWave, FaProductHunt, FaRobot, FaTasks } from "react-icons/fa";
import Model from "./Model";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const minorProject = [
    {
        title: "Blog Platform",
        Icon: FaBlogger,
        desc: "A feature-rich blogging system with rich-text editing capabilities, built using React, Redux Toolkit, Redux Persist, and TinyMCE.",
        link: "https://github.com/ma3llim007/react_project/tree/master/06_blog_platform",
    },
    {
        title: "E-Commerce Product Page",
        Icon: FaProductHunt,
        desc: "A responsive and modern product showcase page designed with React, Tailwind CSS, and ShadCN UI components.",
        link: "https://github.com/ma3llim007/react_project/tree/master/07_ecommerce_product_page",
    },
    {
        title: "Expense Tracker",
        Icon: FaMoneyBillWave,
        desc: "A personal finance tracker built with React and Redux, leveraging Redux Persist for seamless state management and local storage support.",
        link: "https://github.com/ma3llim007/react_project/tree/master/05_expense_tracker",
    },
    {
        title: "Task Management",
        Icon: FaTasks,
        desc: "A drag-and-drop task manager application developed with React, Redux Persist, and React DnD for intuitive task organization.",
        link: "https://github.com/ma3llim007/react_project/tree/master/09_task_management_app",
    },
    {
        title: "Pomodoro Timer",
        Icon: FaClock,
        desc: "A productivity-focused timer app using React, Styled Components, Framer Motion for animations, and Formik for form handling.",
        link: "https://github.com/ma3llim007/react_project/tree/master/09_task_management_app",
    },
    {
        title: "AI Resume Builder",
        Icon: FaRobot,
        desc: " An intelligent backend API built with Node.js and Express.js that generates resumes using Gemini AI and environment configuration via dotenv.",
        link: "https://github.com/ma3llim007/react_project/tree/master/09_task_management_app",
    },
];
const Project = () => {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <>
            <section className="w-full py-5" id="projects">
                <Container>
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 underline underline-offset-4 font-playfair">Projects</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Major Projects */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="text-2xl font-semibold text-white border-b border-white/20 pb-2 font-playfair">Major Projects</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* sameerCart Project Card */}
                                <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg ring-1 ring-white/10 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] duration-300 hover:border-indigo-500 hover:shadow-indigo-500/30">
                                    <img src={sameerCartImage} alt="SameerCart Project Screenshot" className="w-full h-52 object-cover" />
                                    <div className="p-5 space-y-4">
                                        <h4 className="text-2xl font-bold">SameerCart</h4>
                                        <p className="text-sm md:text-base">
                                            SameerCart is a full-stack eCommerce app with secure authentication, Razorpay checkout, real-time tracking, and a responsive admin dashboard.
                                        </p>
                                        <div className="flex justify-center flex-wrap gap-2">
                                            <a
                                                href="https://sameercart.onrender.com/"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                                aria-label="Live Project Link"
                                                target="_blank"
                                            >
                                                <FaLink /> Live
                                            </a>
                                            <a
                                                href="https://github.com/ma3llim007/sameercart"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                                aria-label="Source Code On Github"
                                                target="_blank"
                                            >
                                                <FaCode /> Code
                                            </a>
                                            <button
                                                onClick={() => setIsOpen("sameerCart")}
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                                                aria-label="More Project Details"
                                            >
                                                <FaEye /> View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* blogSphere Project Card */}
                                <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg ring-1 ring-white/10 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] duration-300 hover:border-indigo-500 hover:shadow-indigo-500/30">
                                    <img src={blogSphereImage} alt="BlogSphere Project Screenshot" className="w-full h-52 object-cover" />
                                    <div className="p-5 space-y-4">
                                        <h4 className="text-2xl font-bold">BlogSphere</h4>
                                        <p className="text-sm md:text-base">
                                            BlogSphere is a full-stack platform enabling admins, moderators, and writers to collaborate with role-based permissions, dynamic workflows, and a responsive
                                            UI.
                                        </p>
                                        <div className="flex justify-center flex-wrap gap-2">
                                            <a
                                                href="https://blogspherree.netlify.app/"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                                aria-label="Live Project Link"
                                                target="_blank"
                                            >
                                                <FaLink /> Live
                                            </a>
                                            <a
                                                href="https://github.com/ma3llim007/blogsphere"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                                aria-label="Source Code On Github"
                                                target="_blank"
                                            >
                                                <FaCode /> Code
                                            </a>
                                            <button
                                                onClick={() => setIsOpen("blogSphere")}
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                                                aria-label="More Project Details"
                                            >
                                                <FaEye /> View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* msCut Project Card */}
                                <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg ring-1 ring-white/10 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] duration-300 hover:border-indigo-500 hover:shadow-indigo-500/30">
                                    <img src={msCutImage} alt="MsCut Project Screenshot" className="w-full h-52 object-cover" />
                                    <div className="p-5 space-y-4">
                                        <h4 className="text-2xl font-bold">MsCut</h4>
                                        <p className="text-sm md:text-base">
                                            MsCut is a full-stack URL shortener with QR generation, click analytics, authentication, and a responsive UI for seamless link management.
                                        </p>
                                        <div className="flex justify-center flex-wrap gap-2">
                                            <a
                                                href="https://mscut.onrender.com/"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                                aria-label="Live Project Link"
                                                target="_blank"
                                            >
                                                <FaLink /> Live
                                            </a>
                                            <a
                                                href="https://github.com/ma3llim007/mscut"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                                aria-label="Source Code On Github"
                                                target="_blank"
                                            >
                                                <FaCode /> Code
                                            </a>
                                            <button
                                                onClick={() => setIsOpen("msCut")}
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                                                aria-label="More Project Details"
                                            >
                                                <FaEye /> View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Ai Code Review Project Card */}
                                <div className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg ring-1 ring-white/10 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] duration-300 hover:border-indigo-500 hover:shadow-indigo-500/30">
                                    <img src={aiCodeReviewImage} alt="Ai Code Review Project Screenshot" className="w-full h-52 object-cover" />
                                    <div className="p-5 space-y-4">
                                        <h4 className="text-2xl font-bold">Ai Code Review</h4>
                                        <p className="text-sm md:text-base">
                                            AI Code Review helps developers improve code quality through AI-driven analysis, syntax checks, performance tips, and best practices.
                                        </p>
                                        <div className="flex justify-center flex-wrap gap-2">
                                            <a
                                                href="https://ai-code-review-snte.onrender.com/"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                                aria-label="Live Project Link"
                                                target="_blank"
                                            >
                                                <FaLink /> Live
                                            </a>
                                            <a
                                                href="https://github.com/ma3llim007/ai-code-review"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                                aria-label="Source Code On Github"
                                                target="_blank"
                                            >
                                                <FaCode /> Code
                                            </a>
                                            <button
                                                onClick={() => setIsOpen("aiCode")}
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                                                aria-label="More Project Details"
                                            >
                                                <FaEye /> View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Minor Projects */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white border-b border-white/20 pb-2 font-playfair">Minor Projects</h3>
                            <div className="flex flex-col gap-5">
                                {minorProject?.map((project) => (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} project - opens in a new tab`}
                                        role="button"
                                        key={project.title}
                                        className="flex items-start sm:items-center gap-4 border border-white/20 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer select-none"
                                    >
                                        <project.Icon size={40} className="shrink-0" />
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-semibold">{project.title}</h4>
                                            <p className="text-sm">{project.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* sameerCart Model */}
            <Model
                key={"sameerCartModel"}
                isOpen={isOpen === "sameerCart"}
                onClose={() => setIsOpen(null)}
                title={"SameerCart Project Details"}
                children={
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-semibold">SameerCart - Full-Stack E-Commerce Application</h4>
                            <p className="text-lg">
                                <a href="https://sameercart.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    SameerCart
                                </a>{" "}
                                is a robust, full-featured eCommerce platform designed to offer a seamless and secure shopping experience. The application allows users to browse products, make
                                purchases, track their orders in real time, and manage their accounts effortlessly. Admins have a comprehensive dashboard to manage users, products, orders, categories,
                                and more. With integration of secure payment gateways like Razorpay, SameerCart ensures smooth and safe transactions for all users.
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Key Features:</h5>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">User Authentication & Authorization (Login, Signup, Password Reset)</li>
                                <li className="mb-2">Product Browsing & Search functionality</li>
                                <li className="mb-2">Shopping Cart & Smooth Checkout</li>
                                <li className="mb-2">Order Management & Real-Time Order Tracking</li>
                                <li className="mb-2">Secure Payment Gateway Integration (Razorpay)</li>
                                <li className="mb-2">Admin Panel for Managing Users, Products, Orders, Categories, Blogs</li>
                                <li className="mb-2">Fully Responsive Design for Mobile and Desktop</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Admin Dashboard Features:</h5>
                            <p className="text-lg">The Admin Dashboard provides comprehensive control over the platform:</p>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">User Management: Handle user roles, authentication, and account statuses.</li>
                                <li className="mb-2">Category & Sub-Category Management: Organize product listings.</li>
                                <li className="mb-2">Content Inquiry Management: Track and respond to customer inquiries.</li>
                                <li className="mb-2">Product Management: Add, update, and manage products.</li>
                                <li className="mb-2">Order Management: Process orders, refunds, and generate invoices.</li>
                                <li className="mb-2">Blog Management: Manage blog posts and engage with customers.</li>
                            </ul>
                        </div>
                    </div>
                }
                footer={
                    <>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://sameercart.onrender.com/"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                aria-label="Live Project Link"
                                target="_blank"
                            >
                                <FaLink /> Live
                            </a>
                            <a
                                href="https://github.com/ma3llim007/sameercart"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                aria-label="Source Code On Github"
                                target="_blank"
                            >
                                <FaCode /> Code
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(null)}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                            aria-label="More Project Details"
                        >
                            <MdClose /> Close
                        </button>
                    </>
                }
            />
            {/* blogSphere Model */}
            <Model
                key={"blogSphereModel"}
                isOpen={isOpen === "blogSphere"}
                onClose={() => setIsOpen(null)}
                title={"BlogSphere Project Details"}
                children={
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-semibold">BlogSphere - Multi-Role Blogging Platform</h4>
                            <p className="text-lg">
                                <a href="https://blogspherree.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    BlogSphere
                                </a>{" "}
                                is a full-stack blogging platform built with React and Node.js, designed for seamless collaboration between writers, moderators, and admins. It enables a dynamic blog
                                lifecycle, including draft, review, revision, and publishing stages. The platform ensures smooth management of content, user roles, and categories, with tools for
                                feedback and approval.
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Key Features:</h5>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">User Roles: Admin, Moderator, Writer</li>
                                <li className="mb-2">Dynamic Blog Lifecycle: Draft, Review, Revision, Publish</li>
                                <li className="mb-2">Admin Control for Managing Users and Content</li>
                                <li className="mb-2">Moderator Tools for Content Review & Approval</li>
                                <li className="mb-2">Writer Panel for Creating and Managing Blogs</li>
                                <li className="mb-2">Responsive Design for Desktop and Mobile</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Admin Dashboard Features:</h5>
                            <p className="text-lg">The Admin Dashboard provides complete control over the platform:</p>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">User Management: Add, verify, and manage writers and moderators.</li>
                                <li className="mb-2">Blog Management: Monitor blog statuses and approve or reject content.</li>
                                <li className="mb-2">Category Management: Create, delete, and organize blog categories.</li>
                                <li className="mb-2">Enquiry Management: Track and respond to user inquiries.</li>
                                <li className="mb-2">Content Moderation: Ensure quality and compliance of blog submissions.</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Moderator Dashboard Features:</h5>
                            <p className="text-lg">The Moderator Dashboard allows content review and approval:</p>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">Review Submitted Blogs: Ensure quality and compliance with platform standards.</li>
                                <li className="mb-2">Approve or Reject Blogs: Approve blogs for publication or request revisions.</li>
                                <li className="mb-2">Request Revisions: Provide feedback for blogs that need improvements.</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Writer Dashboard Features:</h5>
                            <p className="text-lg">The Writer Dashboard helps authors manage their content:</p>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">Create & Submit Blogs: Draft and submit blogs for review.</li>
                                <li className="mb-2">Manage Blog Status: Track approval status, revisions, and feedback.</li>
                                <li className="mb-2">Edit or Delete Blogs: Modify drafts or delete rejected content.</li>
                            </ul>
                        </div>
                    </div>
                }
                footer={
                    <>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://blogspherree.netlify.app/"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                aria-label="Live Project Link"
                                target="_blank"
                            >
                                <FaLink /> Live
                            </a>
                            <a
                                href="https://github.com/ma3llim007/blogsphere"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                aria-label="Source Code On Github"
                                target="_blank"
                            >
                                <FaCode /> Code
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(null)}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                            aria-label="More Project Details"
                        >
                            <MdClose /> Close
                        </button>
                    </>
                }
            />
            {/* MsCut Model */}
            <Model
                key={"msCutModel"}
                isOpen={isOpen === "msCut"}
                onClose={() => setIsOpen(null)}
                title={"MsCut Project Details"}
                children={
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-semibold">MSCUT - Full-Stack URL Shortener</h4>
                            <p className="text-lg">
                                <a href="https://mscut.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    MSCUT
                                </a>{" "}
                                is a modern full-stack web application designed to simplify link sharing and tracking. Users can shorten URLs, create custom aliases, generate QR codes, and view
                                detailed analytics such as click count, location, and device data. The app includes a secure authentication system, a persistent user session using Redux Persist, and a
                                clean, responsive UI for both desktop and mobile devices. The admin-friendly dashboard enables easy link management including edit and delete functions.
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Key Features:</h5>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">JWT-Based Authentication: Secure signup and login system.</li>
                                <li className="mb-2">Custom URL Shortening: Generate short links with optional custom aliases.</li>
                                <li className="mb-2">QR Code Generator: Instantly produce scannable QR codes for each link.</li>
                                <li className="mb-2">Click Analytics: Track user clicks with data on devices and locations.</li>
                                <li className="mb-2">Responsive Dashboard: Manage all your links from one intuitive interface.</li>
                                <li className="mb-2">Redux Persist: Maintain user sessions across reloads.</li>
                                <li className="mb-2">Cross-Platform Support: Optimized for all screen sizes and devices.</li>
                            </ul>
                        </div>
                    </div>
                }
                footer={
                    <>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://mscut.onrender.com/"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                aria-label="Live Project Link"
                                target="_blank"
                            >
                                <FaLink /> Live
                            </a>
                            <a
                                href="https://github.com/ma3llim007/mscut"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                aria-label="Source Code On Github"
                                target="_blank"
                            >
                                <FaCode /> Code
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(null)}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                            aria-label="More Project Details"
                        >
                            <MdClose /> Close
                        </button>
                    </>
                }
            />
            {/* aiCode Model */}
            <Model
                key={"aiCodeReviewModel"}
                isOpen={isOpen === "aiCode"}
                onClose={() => setIsOpen(null)}
                title={"AI Code Review Project Details"}
                children={
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-semibold">AI Code Review – Full-Stack AI-Powered Code Analysis Platform</h4>
                            <p className="text-lg">
                                <a href="https://mscut.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    AI Code Review
                                </a>{" "}
                                is a full-stack web app that allows developers to submit JavaScript code for smart, automated analysis. Powered by Gemini AI, it delivers detailed feedback including
                                syntax issues, logical errors, performance improvement tips, and best practice recommendations. The user-friendly interface, built with React and TailwindCSS, enables
                                fast and intuitive code submissions, while the Express.js and MongoDB backend ensures smooth data handling and review processing.
                            </p>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <h5 className="text-2xl font-semibold">Key Features:</h5>
                            <ul className="list-disc list-inside text-lg">
                                <li className="mb-2">AI-Powered Code Reviews: Analyze code for issues, errors, and improvements.</li>
                                <li className="mb-2">Detailed Feedback: Suggestions include syntax fixes, logic correction, and best practices.</li>
                                <li className="mb-2">Performance Tips: AI-generated insights to enhance code efficiency and maintainability.</li>
                                <li className="mb-2">Clear Review Output: Organized into issues, fixes, and improvement suggestions.</li>
                                <li className="mb-2">Modern Stack: Built with React.js, Node.js, Express.js, and TailwindCSS.</li>
                                <li className="mb-2">Gemini AI Integration: For powerful, intelligent code analysis.</li>
                                <li className="mb-2">Developer-Friendly UX: Paste, review, and improve code in seconds.</li>
                            </ul>
                        </div>
                    </div>
                }
                footer={
                    <>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://ai-code-review-snte.onrender.com/"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
                                aria-label="Live Project Link"
                                target="_blank"
                            >
                                <FaLink /> Live
                            </a>
                            <a
                                href="https://github.com/ma3llim007/ai-code-review"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition"
                                aria-label="Source Code On Github"
                                target="_blank"
                            >
                                <FaCode /> Code
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(null)}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-md transition cursor-pointer"
                            aria-label="More Project Details"
                        >
                            <MdClose /> Close
                        </button>
                    </>
                }
            />
        </>
    );
};

export default Project;
