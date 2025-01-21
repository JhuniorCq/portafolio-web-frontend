import "./ProjectCard.css";

export const ProjectCard = ({
  image,
  name,
  description,
  technologies,
  codeLink,
  projectLink,
}) => {
  return (
    <div className="project">
      <div className="project__box-image">
        <img src={image} alt={name} />
      </div>
      <div className="project__information">
        <h2 className="project__title">{name}</h2>
        <p className="project__description">{description}</p>
        <div className="project__technologies">
          {technologies &&
            technologies.map((technologie, i) => (
              <img
                key={i}
                src={technologie.image}
                alt={technologie.name}
                className="project__technologie"
              />
            ))}
        </div>
      </div>

      <div className="project__buttons">
        <a href={codeLink} target="_blank" className="project__button">
          Ver código
        </a>
        <a href={projectLink} target="_blank" className="project__button">
          Ver proyecto
        </a>
      </div>
    </div>
  );
};
