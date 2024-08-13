import "./Home.css";
import avatar from "../../assets/image/avatar.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";


export const Home = () => {
  return (
    <div className="home">
      <div className="home__presentation">
        <div className="home__data">
          <p className="home__greeting">Hola, soy</p>
          <h1 className="home__name">Jhunior Ccora</h1>
          <p className="home__occupation">Frontend Developer</p>
        </div>

        <div className="home__icons">
          <BsLinkedin className="home__icon home__icon--linkedin" />
          <FaGithub className="home__icon" />
          <button className="home__button">
            <MdOutlineFileDownload className="home__download" />
            <p>Descargar CV</p>
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
