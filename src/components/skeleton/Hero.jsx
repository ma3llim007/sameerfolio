const SkeletonHero = () => {
    return (
        <div class="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white backdrop-blur-md" id="home">
            <div class="w-full bg-black/50">
                <div className="container mx-auto">
                    <div class="flex flex-col-reverse md:flex-row items-center justify-center text-center lg:text-start gap-12 py-5">
                        <div class="space-y-4 animate-pulse grow">
                            <h2 class="h-6 bg-white rounded w-2/3"></h2>
                            <div class="h-10 bg-white rounded w-2/3"></div>
                            <p class="h-4 bg-white rounded w-2/3"></p>
                            <p class="h-4 bg-white rounded w-2/3"></p>
                            <p class="h-4 bg-white rounded w-60"></p>
                            <div class="flex flex-wrap space-x-4 items-center justify-center lg:justify-start">
                                <div class="h-10 bg-white rounded w-32"></div>
                                <div class="w-10 h-10 rounded-full bg-white"></div>
                                <div class="w-10 h-10 rounded-full bg-white"></div>
                                <div class="w-10 h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                        <div class="w-full max-w-xs mx-auto md:mx-0 flex justify-center md:justify-end">
                            <div class="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonHero;
