import Header from "./components/Header";
import Hero from "./components/Hero";
import ViewPortViewer from "./components/ViewPortViewer";

const App = () => {
    return (
        <div className="w-full min-h-screen bg-slate-900 text-white font-roboto">
            <Header />
            <section className="pt-[59px]">
                <Hero />
            </section>
            <ViewPortViewer />
        </div>
    );
};

export default App;
