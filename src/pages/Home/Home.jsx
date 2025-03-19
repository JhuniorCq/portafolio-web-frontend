import "./Home.css";
import avatar from "../../assets/image/avatar.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";

export const Home = () => {
  const handleOpenCV = () => {
    const pdfPath = "/pdf/CV-Holiver-Jhunior-Ccora-Quispe.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="home" id="home">
      <div className="home__presentation">
        <div className="home__data">
          <p className="home__greeting">Hola, soy</p>
          <h1 className="home__name">Jhunior Ccora</h1>
          <p className="home__occupation">Desarrollador Frontend</p>
        </div>

        <div className="home__icons">
          <a
            href="https://www.linkedin.com/in/holiver-ccora-quispe-0a0642258"
            target="_blank"
          >
            <BsLinkedin className="home__icon home__icon--linkedin" />
          </a>
          <a href="https://github.com/JhuniorCq" target="_blank">
            <FaGithub className="home__icon home__icon--github" />
          </a>
          <button className="home__button" onClick={handleOpenCV}>
            <IoEyeSharp className="home__see" />
            <p>Ver CV</p>
          </button>
        </div>
      </div>

      <div className="home__avatar">
        <FaReact className="home__icon-tec home__icon-tec--react" />
        <FaHtml5 className="home__icon-tec home__icon-tec--html" />
        <FaCss3Alt className="home__icon-tec home__icon-tec--css" />
        <RiJavascriptFill className="home__icon-tec home__icon-tec--js" />
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
};
