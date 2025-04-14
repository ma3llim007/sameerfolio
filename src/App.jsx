import { lazy, Suspense } from "react";
import Header from "./components/Header";
import SkeletonHero from "./components/skeleton/Hero";
import Skills from "./components/Skills";
import ViewPortViewer from "./components/ViewPortViewer";
const Hero = lazy(() => import("./components/Hero"));

const App = () => {
    return (
        <div className="w-full min-h-screen bg-slate-950 text-white font-roboto">
            <Header />
            <section className="pt-[59px]">
                <Suspense fallback={<SkeletonHero />}>
                    <Hero />
                </Suspense>
            </section>
            <Skills />
            <ViewPortViewer />
        </div>
    );
};

export default App;
