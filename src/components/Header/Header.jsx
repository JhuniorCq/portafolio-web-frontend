import { IoReorderThreeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import logo from "../../assets/image/my-logo.png";
import "./Header.css";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const openNavbar = () => {
    setShowNavbar(true);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <header className="header">
        <a className="header__logo" href="#home">
          <img src={logo} alt="Logo" />
        </a>
        <Navbar />
        <button className="header__options-button" onClick={openNavbar}>
          <IoReorderThreeOutline className="" />
        </button>
      </header>

      <div
        className={
          showNavbar
            ? "header__navbar-mobile header__navbar-mobile--show"
            : "header__navbar-mobile"
        }
      >
        <div className="header__navbar-header">
          <p className="header__navbar-title">¿A dónde deseas ir?</p>
          <button className="header__navbar-close-button" onClick={closeNavbar}>
            <MdClose className="header__navbar-close-icon" />
          </button>
        </div>
        <Navbar mobile={true} />
      </div>
    </>
  );
};
