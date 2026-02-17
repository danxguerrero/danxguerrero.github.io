const HeroSection = () => {
    return <div className="bg-slate-900 text-slate-50 flex flex-col items-center justify-center pt-12 px-2">
        <div className="w-full md:max-w-5xl flex flex-col items-center ">
            <div className="text-center text-5xl md:text-7xl mb-6">Building <span className="text-cyan-400">scalable</span> software solutions for the modern web.</div>
            <div className="text-center text-slate-300 max-w-2xl text-sm sm:text-lg">I am a software engineer passionate about crafting high-performance interacitve digital experiences and solving complex problems with clean code.</div>
            <div className="flex justify-center m-12 text-lg w-full">
                <button className="bg-cyan-400 hover:border hover:border-slate-50 text-slate-50 rounded-lg px-3 py-2 mr-3">View My Work</button>
                <button className="border border-slate-50 hover:border-cyan-400 hover:text-cyan-400 px-3 py-2 rounded-lg">Get in Touch</button>
            </div>
        </div>
    </div>
}

export default HeroSection;