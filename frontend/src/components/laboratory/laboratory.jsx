import React from "react";
import LabForm from './labForm'
import style from '../pharmacy/pharmacy.module.css'

export default function Laboratory() {
  return (
    <div className={style.container}>
      <LabForm />
    </div>
  );
}
