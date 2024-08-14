import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__presentation">
        <h1 className="about__title">Sobre mí</h1>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          incidunt recusandae quos laborum magnam possimus reprehenderit
          perspiciatis debitis eaque voluptatum, asperiores dignissimos enim
          delectus sed, consectetur, saepe tempora corporis iste.
        </p>
        <br />
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          incidunt recusandae quos laborum magnam possimus reprehenderit
          perspiciatis debitis eaque voluptatum, asperiores dignissimos enim
          delectus sed, consectetur, saepe tempora corporis iste.
        </p>
      </div>
      <div className="about__photo">
        <img src="" alt="Jhunior" />
      </div>
    </div>
  );
};
