import React from "react";
import Header from './Header.jsx'
import { Outlet } from "react-router-dom";
import style from "./Header.module.css"
import Sidebar from "./Sidebar.jsx";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      {/* <Sidebar/> */}
      <Outlet />
    </div>
  );
}
