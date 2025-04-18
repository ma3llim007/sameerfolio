import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="w-full min-h-screen bg-[#020817] text-white font-roboto scroll-smooth">
            <Header />
            <section className="pt-[41px]">
                <Hero />
            </section>
            <Skills />
            <Project />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
