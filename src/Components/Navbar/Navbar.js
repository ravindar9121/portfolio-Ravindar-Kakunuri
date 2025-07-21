import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <h1 className="logo">RK</h1>
      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      ></img>
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
        ></img>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
          {menu === "education" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p onClick={() => setMenu("experience")}>Experience</p>
          </AnchorLink>
          {menu === "experience" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? (
            <img src={underline} alt="" className="underline"></img>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
