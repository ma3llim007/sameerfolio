const ViewPortViewer = () => {
    return (
        <div className="fixed bottom-4 left-4 flex size-8 items-center justify-center rounded-full bg-purple-950 font-extrabold font-mono text-xl text-white">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden sm:hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
        </div>
    );
};

export default ViewPortViewer;
