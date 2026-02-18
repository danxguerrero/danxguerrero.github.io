const ProjectSection = () => {
  return (
    <div className="flex justify-center m-12">
      <div className="flex flex-col w-full max-w-5xl">
        <div className="flex flex-col">
          <p className="text-cyan-500">Featured Projects</p>
          <div className="text-slate-50 text-4xl my-3">Recent Projects</div>
          <div className="flex sm:justify-end">
            <button className="text-cyan-500 hover:text-cyan-400">Browse all projects <i className="fa-solid fa-arrow-right ml-1"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
