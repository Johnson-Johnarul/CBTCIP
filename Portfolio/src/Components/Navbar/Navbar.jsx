import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [color, setColor] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-240px";
  };

  const changeStyle = (str) => {
    setColor(str);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#home">
          <img className="logo" src={logo}></img>
        </a>
        <img
          src={menu_open}
          alt=""
          className="nav-mob-open"
          onClick={openMenu}
        />
        <ul ref={menuRef}>
          <img
            src={menu_close}
            alt=""
            className="nav-mob-close"
            onClick={closeMenu}
          />
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => changeStyle("home")}
              className={color === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => changeStyle("about")}
              className={color === "about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skill"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => changeStyle("skill")}
              className={color === "skill" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => changeStyle("project")}
              className={color === "project" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => changeStyle("contact")}
              className={color === "contact" ? "active" : ""}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
