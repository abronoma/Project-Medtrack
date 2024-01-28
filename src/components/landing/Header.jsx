import React from "react";
import style from './Header.module.css'
import logo from '../assets/images/medtrack.png'

export default function Header() {
  return (
    <nav className={style.nav}> 
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
      <div className={style.nav_items}>
        <p>Home</p>
        <p>Pharmacy</p>
        <p>Laboratory</p>
      </div>
    </nav>
  );
}
