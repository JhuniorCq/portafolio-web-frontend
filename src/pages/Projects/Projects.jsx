import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import html from "../../assets/icon/html.svg";
import css from "../../assets/icon/css.svg";
import javascript from "../../assets/icon/javascript.svg";
import react from "../../assets/icon/react.svg";
import nodejs from "../../assets/icon/nodejs.svg";
import git from "../../assets/icon/git.svg";
import github from "../../assets/icon/github.svg";
import mysql from "../../assets/icon/mysql.svg";
import postgresql from "../../assets/icon/postgresql.svg";
import pokeAPI from "../../assets/image/projects/poke-api.png";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Proyectos</h1>
      <div className="projects__list">
        <ProjectCard
          image={pokeAPI}
          name="PokeAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt rerum minima quaerat vel quibusdam est? Voluptatibus"
          technologies={[
            {
              image: html,
              name: "HTML",
            },
            {
              image: css,
              name: "CSS",
            },
            {
              image: javascript,
              name: "JavaScript",
            },
            {
              image: react,
              name: "React",
            },
          ]}
          codeLink="https://github.com/JhuniorCq/proyecto-poke-api.git"
          projectLink="https://pokeapi-zeta.vercel.app/"
        />
        <ProjectCard
          image={pokeAPI}
          name="PokeAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt rerum minima quaerat vel quibusdam est? Voluptatibus"
          technologies={[
            {
              image: html,
              name: "HTML",
            },
            {
              image: css,
              name: "CSS",
            },
            {
              image: javascript,
              name: "JavaScript",
            },
            {
              image: react,
              name: "React",
            },
          ]}
          codeLink="https://github.com/JhuniorCq/proyecto-poke-api.git"
          projectLink="https://pokeapi-zeta.vercel.app/"
        />
        <ProjectCard
          image={pokeAPI}
          name="PokeAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt rerum minima quaerat vel quibusdam est? Voluptatibus"
          technologies={[
            {
              image: html,
              name: "HTML",
            },
            {
              image: css,
              name: "CSS",
            },
            {
              image: javascript,
              name: "JavaScript",
            },
            {
              image: react,
              name: "React",
            },
          ]}
          codeLink="https://github.com/JhuniorCq/proyecto-poke-api.git"
          projectLink="https://pokeapi-zeta.vercel.app/"
        />
        <ProjectCard
          image={pokeAPI}
          name="PokeAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt rerum minima quaerat vel quibusdam est? Voluptatibus"
          technologies={[
            {
              image: html,
              name: "HTML",
            },
            {
              image: css,
              name: "CSS",
            },
            {
              image: javascript,
              name: "JavaScript",
            },
            {
              image: react,
              name: "React",
            },
          ]}
          codeLink="https://github.com/JhuniorCq/proyecto-poke-api.git"
          projectLink="https://pokeapi-zeta.vercel.app/"
        />
        <ProjectCard
          image={pokeAPI}
          name="PokeAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt rerum minima quaerat vel quibusdam est? Voluptatibus"
          technologies={[
            {
              image: html,
              name: "HTML",
            },
            {
              image: css,
              name: "CSS",
            },
            {
              image: javascript,
              name: "JavaScript",
            },
            {
              image: react,
              name: "React",
            },
          ]}
          codeLink="https://github.com/JhuniorCq/proyecto-poke-api.git"
          projectLink="https://pokeapi-zeta.vercel.app/"
        />
      </div>
    </div>
  );
};
