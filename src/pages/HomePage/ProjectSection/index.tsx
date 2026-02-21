import { projectData } from "./data/projects";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const projectItems = projectData.map((project, idx) => (
    <ProjectItem project={project} key={idx} />
  ));
  return (
    <div className="m-12 flex justify-center">
      <div className="flex w-full max-w-5xl flex-col">
        <div className="flex flex-col">
          <p className="text-cyan-500">Featured Projects</p>
          <div className="my-3 text-4xl text-slate-50">Recent Projects</div>
          <div className="flex sm:justify-end">
            <button className="text-cyan-500 hover:text-cyan-400">
              Browse all projects{" "}
              <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-12">{projectItems}</div>
      </div>
    </div>
  );
};

export default ProjectSection;
