import React from "react";
import style from './Table.module.css'
import { pharmacyData } from "../../data/dummy.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


export default function Table() {
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
                <button><MdOutlineRemoveRedEye/></button>
                <button><FaRegEdit/></button>
                <button><RiDeleteBin6Line/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
