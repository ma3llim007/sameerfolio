import { lazy, Suspense } from "react";
import Header from "./components/Header";
import SkeletonHero from "./components/skeleton/Hero";
import ViewPortViewer from "./components/ViewPortViewer";
import SkeletonSkills from "./components/skeleton/Skills";
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
    return (
        <div className="w-full min-h-screen bg-slate-950 text-white font-roboto">
            <Header />
            <section className="pt-[59px]">
                <Suspense fallback={<SkeletonHero />}>
                    <Hero />
                </Suspense>
            </section>
            <Suspense fallback={<SkeletonSkills />}>
                <Skills />
            </Suspense>

            <ViewPortViewer />
        </div>
    );
};

export default App;
