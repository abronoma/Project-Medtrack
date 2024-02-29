import React from "react";
import Header from './Header.jsx'
import { Outlet } from "react-router-dom";
import style from "./Header.module.css"

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
    </div>
  );
}
