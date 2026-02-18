const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 px-2 pt-12 text-slate-50">
      <div className="flex w-full flex-col items-center md:max-w-5xl">
        <div className="mb-6 text-center text-5xl md:text-7xl">
          Building{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
            scalable
          </span>{" "}
          software solutions for the modern web.
        </div>
        <div className="max-w-2xl text-center text-sm text-slate-300 sm:text-lg">
          I am a software engineer passionate about crafting high-performance
          interacitve digital experiences and solving complex problems with
          clean code.
        </div>
        <div className="m-12 flex w-full justify-center text-lg">
          <button className="mr-3 rounded-lg bg-cyan-500 px-3 py-2 text-slate-50 hover:border hover:border-slate-50">
            View My Work
          </button>
          <button className="rounded-lg border border-slate-50 px-3 py-2 hover:border-cyan-500 hover:text-cyan-500">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
