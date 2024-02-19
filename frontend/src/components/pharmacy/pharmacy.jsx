import React from "react";
import PharmacyForm from './Form'
import style from './pharmacy.module.css'

export default function Pharmacy() {
  return (
    <div className={style.container}>
      <PharmacyForm />
    </div>
  );
}
