import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__li navbar__li--logo" id="logo">
            <a href="#home">
              <img src="" alt="Logo" />
            </a>
          </li>
          <li className="navbar__li">
            <a href="#home">Inicio</a>
          </li>
          <li className="navbar__li">
            <a href="#about">Sobre mí</a>
          </li>
          <li className="navbar__li">
            <a href="#technologies">Tecnologías</a>
          </li>
          <li className="navbar__li">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="navbar__li">
            <a href="#contact">Contáctame</a>
          </li>
          <li className="navbar__li navbar__li--options">
            <button className="navbar__options-button">
              <IoReorderThreeOutline className="" />
            </button>
          </li>
        </ul>
      </nav>

      {/* <nav clas>

      </nav> */}
    </>
  );
};
