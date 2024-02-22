import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/medtrack.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={logo} alt="" />
        <p>MedTrack</p>
      </div>
      <div className={style.nav_items}>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/pharmacy">Pharmacy </NavLink>
        <NavLink to="/laboratory">Laboratory</NavLink>
      </div>
    </nav>
  );
}
