import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/medtrack.png";
import { NavLink } from "react-router-dom";
import { MdLocalPharmacy, MdHome } from "react-icons/md";
import { GiHypodermicTest } from "react-icons/gi";


export default function Header() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={logo} alt="Medtrack logo" />
        <p>MedTrack</p>
      </div>
      <div className={style.nav_items}>
        <NavLink to="/" className={style.nav_link} activeClassName={style.active}>
          <MdHome className={style.nav_icon} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/pharmacy" className={style.nav_link} activeClassName={style.active}>
          <MdLocalPharmacy className={style.nav_icon} />
          <span>Pharmacy</span>
        </NavLink>
        <NavLink to="/laboratory" className={style.nav_link} activeClassName={style.active}>
          <GiHypodermicTest className={style.nav_icon} />
          <span>Laboratory</span>
        </NavLink>
      </div>
    </nav>
  );
}

