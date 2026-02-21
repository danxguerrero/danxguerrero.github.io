import type { projectType } from "./data/projects";

type ProjectItemProps = {
    project: projectType;
}

const ProjectItem = ({project}: ProjectItemProps) => {

    return (
        <div className=" bg-slate-50">
            {project.name}
        </div>
    )
}

export default ProjectItem;