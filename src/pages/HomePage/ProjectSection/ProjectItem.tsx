import type { projectType } from "./data/projects";

type ProjectItemProps = {
    project: projectType;
}

const ProjectItem = ({project}: ProjectItemProps) => {

    // TODO: Implement stackItems
    // const stackItems = project.stack.map((tech, idx) => <div key={idx}>{tech}</div>)

    return (
        <div className="m-3 w-[300px] rounded-lg">
            <img src={project.imgUrl} alt={`${project.name} logo`} className="h-[275px] w-full rounded-t-lg" />
            <div className="bg-slate-800 text-slate-50 rounded-b-lg px-3 py-2">
                <div className="mb-3 text-xl">{project.name}</div>
                <div className="text-wrap text-sm md:text-base">{project.description}</div>
                <div className="flex mt-3">
                    {project.deployedUrl && <a className="mr-2" href={project.deployedUrl} target="_blank"><i className="fa-solid fa-link text-lg"></i></a>}
                    <a href={project.githubUrl} target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;