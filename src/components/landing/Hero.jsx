import React from "react";
import style from "./Hero.module.css";
import pharm from "../assets/images/pharm.jpg";
// import { ReactDOM } from "react-dom";
// import Router from 'react-router-dom'

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.maintext}>
        <div className={style.text}>
        <h1>Health Records For All</h1>
        </div>
      </div>
      
      <div className={style.pharm}>
        <img src={pharm} alt="pharmacist on duty" />
      </div>
    </div>
  );
}

<div ></div>;
