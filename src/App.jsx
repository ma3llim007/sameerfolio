import Header from "./components/Header";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        ReactGA.initialize(import.meta.env.VITE_GOOGLEANALYTICS);
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.jsx" });
    }, []);
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
