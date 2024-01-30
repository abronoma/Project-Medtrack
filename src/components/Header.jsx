import React from "react";
import style from './Header.module.css'
import logo from '../assets/images/medtrack.png'
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
    <nav className={style.nav}> 
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
      <div className={style.nav_items}>
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/'>Pharmacy</Link></p>
        <p><Link to='/lab'>Laboratory</Link></p>
      </div>
    </nav>

    <Outlet/>
    </>
  );
}
