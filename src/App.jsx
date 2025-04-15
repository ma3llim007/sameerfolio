import { lazy, Suspense } from "react";
import Header from "./components/Header";
import SkeletonHero from "./components/skeleton/Hero";
import ViewPortViewer from "./components/ViewPortViewer";
import SkeletonSkills from "./components/skeleton/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
    return (
        <div className="w-full min-h-screen bg-slate-950 text-white font-roboto scroll-smooth">
            <Header />
            <section className="pt-[57px]">
                <Suspense fallback={<SkeletonHero />}>
                    <Hero />
                </Suspense>
            </section>
            <Suspense fallback={<SkeletonSkills />}>
                <Skills />
            </Suspense>
            <Project />
            <Education />
            <ViewPortViewer />
        </div>
    );
};

export default App;
