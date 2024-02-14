import React from "react";
import style from '../pharmacy/Table.module.css'
import { labData } from "../../data/dummy.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


export default function labTable() {
  return (
    <div className={style.table_container}>
      <table>
        <thead>
          <tr>
            <th>Lab Item</th>
            <th>Lab Type</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Code</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {labData.map((item) => (
            <tr key={item.id}>
              <td>{item.labItem}</td>
              <td>{item.labType}</td>
              <td>{item.category}</td>
              <td>{item.subCategory}</td>
              <td>{item.Code}</td>
              <td>{item.Price}</td>
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
