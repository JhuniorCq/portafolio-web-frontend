import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__presentation">
        <h1 className="about__title">Sobre mí</h1>
        <p className="about__paragraph">
          Mi nombre es <strong>Holiver Jhunior Ccora Quispe</strong>,
          desarrollador web <strong>frontend</strong> con conocimientos en
          <strong>backend</strong>. Actualmente curso el noveno ciclo de
          <strong>Ingeniería de Software</strong> en la{" "}
          <strong>Universidad Nacional Mayor de San Marcos</strong>, donde he
          desarrollado una sólida <strong>formación técnica</strong> y pasión
          por resolver problemas con <strong>tecnología</strong>.
        </p>
        <p className="about__paragraph">
          Me especializo en el desarrollo <strong>frontend</strong>, empleando
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong> y <strong>React</strong>, creando
          interfaces atractivas y funcionales. En el <strong>backend</strong>,
          mis principales fortalezas son <strong>Node.js</strong>,{" "}
          <strong>Express</strong> y <strong>MySQL</strong>, lo que me permite
          colaborar en proyectos de manera completa.
        </p>
        <p className="about__paragraph">
          He trabajado en proyectos <strong>personales</strong> y para{" "}
          <strong>clientes</strong>, priorizando <strong>calidad</strong>,
          <strong>organización</strong> y <strong>aprendizaje continuo</strong>.
          Busco una oportunidad como desarrollador web <strong>frontend</strong>{" "}
          para asumir nuevos <strong>retos</strong>, aportar mis{" "}
          <strong>habilidades</strong> y transformar ideas en{" "}
          <strong>soluciones digitales impactantes</strong>.
        </p>
      </div>
      <div className="about__photo">
        <img src="" alt="Jhunior" />
      </div>
    </div>
  );
};
