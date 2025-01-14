import { Technology } from "../../components/Technology/Technology";
import "./Technologies.css";
import html from "../../assets/icon/html.svg";
import css from "../../assets/icon/css.svg";
import javascript from "../../assets/icon/javascript.svg";
import react from "../../assets/icon/react.svg";
import nodejs from "../../assets/icon/nodejs.svg";
import express from "../../assets/icon/express.svg";
import git from "../../assets/icon/git.svg";
import github from "../../assets/icon/github.svg";
import python from "../../assets/icon/python.svg";
import mysql from "../../assets/icon/mysql.svg";
import postgresql from "../../assets/icon/postgresql.svg";

export const Technologies = () => {
  return (
    <div className="technologies" id="technologies">
      <h1 className="technologies__title">Tecnologías</h1>

      <ul className="technologies__list">
        <Technology image={html} name="HTML" />
        <Technology image={css} name="CSS" />
        <Technology image={javascript} name="JavaScript" />
        <Technology image={react} name="React" />
        <Technology image={nodejs} name="Node.js" />
        <Technology image={express} name="Express.js" />
        <Technology image={mysql} name="MySQL" />
        <Technology image={postgresql} name="PostgreSQL" />
        <Technology image={git} name="Git" />
        <Technology image={github} name="Github" />
        <Technology image={python} name="Python" />
      </ul>
    </div>
  );
};
