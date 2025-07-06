import pokeAPI from "../assets/image/projects/poke-api.png";
import miskito from "../assets/image/projects/miskito.png";
import policiaVsLadron from "../assets/image/projects/policia-vs-ladron.png";
import styleHub from "../assets/image/projects/style-hub.png";
import ticTacToe from "../assets/image/projects/tic-tac-toe.png";
import convertidorYoutubeMp3 from "../assets/image/projects/convertidor-youtube-mp3.png";
import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import javascript from "../assets/icon/javascript.svg";
import react from "../assets/icon/react.svg";
import nodejs from "../assets/icon/nodejs.svg";
import express from "../assets/icon/express.svg";
import mysql from "../assets/icon/mysql.svg";
import python from "../assets/icon/python.svg";
import fastapi from "../assets/icon/fastapi.svg";

export const URL_SERVER =
  "https://portafolio-web-backend-solitary-dawn-9347.fly.dev";

export const PROJECTS = [
  {
    name: "PokeAPI",
    image: pokeAPI,
    description:
      "Una web que permite a los usuarios explorar todos los Pokémon y ver sus estadísticas detalladas en tiempo real, obteniendo la información desde la API pública de Pokémon.",
    technologies: [
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
    ],
    frontendCodeLink: "https://github.com/JhuniorCq/proyecto-poke-api.git",
    projectLink: "https://pokeapi-zeta.vercel.app/",
  },
  {
    name: "Miskito",
    image: miskito,
    description:
      "Una web sobre los platos típicos del Perú, con un chatbot interactivo impulsado por la IA 'Gemini' para ayudar a los usuarios a descubrir recetas y aprender sobre la gastronomía peruana.",
    technologies: [
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
    ],
    frontendCodeLink: "https://github.com/JhuniorCq/platos-tipicos-peru.git",
    projectLink: "https://platos-tipicos-peru.vercel.app/",
  },
  {
    name: "Policía vs Ladrón",
    image: policiaVsLadron,
    description:
      "Un juego interactivo basado en IA donde los jugadores pueden elegir ser policía o ladrón, con movimientos determinados por algoritmos de inteligencia artificial para aumentar el desafío.",
    technologies: [
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
      {
        image: python,
        name: "Python",
      },
      {
        image: fastapi,
        name: "FastAPI",
      },
    ],
    frontendCodeLink:
      "https://github.com/JhuniorCq/policia_vs_ladron_vista.git",
    backendCodeLink:
      "https://github.com/JhuniorCq/policia_vs_ladron_servidor.git",
    projectLink: null,
  },
  {
    name: "StyleHub",
    image: styleHub,
    description:
      "Un e-commerce de ropa con todas las funciones esenciales, incluyendo pasarela de pagos con PayPal y una experiencia de usuario fluida para comprar moda en línea.",
    technologies: [
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
      {
        image: nodejs,
        name: "Node.js",
      },
      {
        image: express,
        name: "Express",
      },
      {
        image: mysql,
        name: "MySQL",
      },
    ],
    frontendCodeLink: "https://github.com/JhuniorCq/style-hub-frontend.git",
    backendCodeLink: "https://github.com/JhuniorCq/style-hub-backend.git",
    projectLink: null,
  },
  {
    name: "Convertidor de Música",
    image: convertidorYoutubeMp3,
    description:
      "Una página web que permite a los usuarios convertir videos de YouTube a formato MP3 y descargarlos, facilitando el acceso a música offline.",
    technologies: [
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
      {
        image: nodejs,
        name: "Node.js",
      },
      {
        image: express,
        name: "Express",
      },
    ],
    frontendCodeLink:
      "https://github.com/JhuniorCq/convertidor-musica-frontend.git",
    backendCodeLink:
      "https://github.com/JhuniorCq/convertidor-musica-backend.git",
    projectLink: null,
  },
  {
    name: "Tic Tac Toe",
    image: ticTacToe,
    description:
      "El clásico juego Tic Tac Toe en línea, donde los usuarios pueden jugar contra otra persona en tiempo real.",
    technologies: [
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
    ],
    frontendCodeLink: "https://github.com/JhuniorCq/proyecto-tic-tac-toe.git",
    projectLink: "https://proyecto-tic-tac-toe.vercel.app/",
  },
];
