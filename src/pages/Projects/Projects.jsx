import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import { PROJECTS } from "../../utils/constants";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Proyectos</h1>
      <div className="projects__list">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={crypto.randomUUID()}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            frontendCodeLink={project.frontendCodeLink}
            backendCodeLink={project.backendCodeLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};
