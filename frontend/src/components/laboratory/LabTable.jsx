import React, { useEffect } from "react";
import style from '../pharmacy/Table.module.css'
import Ellipsis from "../ellipsis/ellipsis.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLabs } from "../../store/thunk.js";


function LabTable() {
  const labs = useSelector(state => state.labs)

  // dispatching actions
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLabs())
  }, [])

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
          {labs && labs.map((lab) => (
            <tr key={lab._id}>
              <td>{lab.labItem}</td>
              <td>{lab.labType}</td>
              <td>{lab.category}</td>
              <td>{lab.subCategory}</td>
              <td>{lab.Code}</td>
              <td>{lab.Price}</td>
              <td className={style.btns}>
                <Ellipsis labId={lab._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default LabTable