import PropTypes from "prop-types";
import "./Navbar.css";

export const Navbar = ({ mobile = false }) => {
  return (
    <nav className="navbar">
      <ul className={mobile ? "navbar__list--mobile" : "navbar__list"}>
        <li className={mobile ? "navbar__li--mobile" : "navbar__li"}>
          <a href="#home">Inicio</a>
        </li>
        <li className={mobile ? "navbar__li--mobile" : "navbar__li"}>
          <a href="#about">Sobre mí</a>
        </li>
        <li className={mobile ? "navbar__li--mobile" : "navbar__li"}>
          <a href="#technologies">Tecnologías</a>
        </li>
        <li className={mobile ? "navbar__li--mobile" : "navbar__li"}>
          <a href="#projects">Proyectos</a>
        </li>
        <li className={mobile ? "navbar__li--mobile" : "navbar__li"}>
          <a href="#contact">Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  mobile: PropTypes.bool,
};
