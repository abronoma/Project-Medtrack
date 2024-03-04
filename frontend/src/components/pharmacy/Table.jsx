import React, { useEffect, useState } from "react";
import style from './Table.module.css'
import Ellipsis from "../ellipsis/ellipsis.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrugs } from '../../store/thunk.js'

function Table({searchValue}) {
  const { drugs } = useSelector(state => state.drugs)
 
  const [searchedDrugs, setSearchDrugs] = useState([])

  // Function to filter objects based on keyword
  const filterObjectsByKeyword = (array, keyword) => {
    return array.filter(obj =>
      Object.values(obj).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // dispatching actions
  const dispatch = useDispatch()
 
  useEffect(() => {
    if (searchValue !== "") {
      console.log(searchValue)
      const filteredDrugs = filterObjectsByKeyword(drugs, searchValue);
      setSearchDrugs(filteredDrugs);
    } else {
      setSearchDrugs(drugs);
    }
  }, [searchValue, drugs]);

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);

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
          {searchedDrugs.map((drug) => (
            <tr key={drug._id}>
              <td>{drug.drugName}</td>
              <td>{drug.description}</td>
              <td>{drug.unitOfPricing}</td>
              <td>{drug.drugCode}</td>
              <td>{drug.price}</td>
              <td className={style.btns}>
                <Ellipsis drugId={drug._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
