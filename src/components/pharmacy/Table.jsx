import React from "react";
import { pharmacyData } from "../../data/dummy.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


export default function Table() {
  return (
    <div>
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
              <td>
                <button><MdOutlineRemoveRedEye/></button>
                <button><RiDeleteBin6Line/></button>
                <button><FaRegEdit/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
