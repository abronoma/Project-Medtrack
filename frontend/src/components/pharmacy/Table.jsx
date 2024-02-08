import React, { useState } from "react";
import style from './Table.module.css'
import { pharmacyData } from "../../data/dummy.js";
import Ellipsis from "../ellipsis/ellipsis.jsx";


function Table() {

  return (
    <div className={style.table_container}>
      <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Description</th>
            <th>Unit of Pricing</th>
            <th>Drug Code</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pharmacyData.map((item) => (
            <tr key={item.id}>
              <td>{item.drugName}</td>
              <td>{item.description}</td>
              <td>{item.unitOfPricing}</td>
              <td>{item.drugCode}</td>
              <td>{item.price}</td>
              <td className={style.btns}>
                <Ellipsis />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table