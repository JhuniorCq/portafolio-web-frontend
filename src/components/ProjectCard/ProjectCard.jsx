import "./ProjectCard.css";

export const ProjectCard = ({
  image,
  name,
  description,
  technologies,
  frontendCodeLink,
  backendCodeLink,
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

      <div className="project__box-buttons">
        <div className="project__buttons">
          {frontendCodeLink && (
            <a
              href={frontendCodeLink}
              target="_blank"
              className="project__button"
            >
              Ver código del frontend
            </a>
          )}
          {backendCodeLink && (
            <a
              href={backendCodeLink}
              target="_blank"
              className="project__button"
            >
              Ver código del backend
            </a>
          )}
          <a href={projectLink} target="_blank" className="project__button">
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
};
