import React, { useState, useEffect } from "react";
import style from './Table.module.css'
import Ellipsis from "../ellipsis/ellipsis.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrugs } from '../../store/thunk.js'

function Table() {
  const drugs = useSelector(state => state.drugs)
 

  // dispatching actions
  const dispatch = useDispatch()
 

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [])

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
          {drugs.map((drug) => (
            <tr key={drug._id}>
              <td>{drug.drugName}</td>
              <td>{drug.description}</td>
              <td>{drug.unitOfPricing}</td>
              <td>{drug.drugCode}</td>
              <td>{drug.price}</td>
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