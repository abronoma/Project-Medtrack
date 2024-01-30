import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/medtrack.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.nav_items}>
        <Link to="/">Home </Link>
        <Link to="/pharmacy">Pharmacy </Link>
        <Link to="/laboratory">Laboratory</Link>
      </div>
    </nav>
  );
}
