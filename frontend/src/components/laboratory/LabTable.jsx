import React, { useEffect, useState } from "react";
import style from '../pharmacy/Table.module.css'
import Ellipsis from "../laboratory/labEllipsis.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLabs } from "../../store/thunk.js";






  function LabTable({searchValue}) {
  const {labs} = useSelector(state => state.labs)
  console.log("labs", labs);


  const [searchedLabs, setSearchLabs] = useState([])

  // dispatching actions
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLabs())
  }, [])


  useEffect(() => {
    if (searchValue !== "") {
      console.log(searchValue)
      const filteredLabs = filterObjectsByKeyword(labs, searchValue);
      setSearchLabs(filteredLabs);
    } else {
      setSearchLabs(labs);
    }
  }, [searchValue, labs]);



   // Function to filter objects based on keyword
   
   const filterObjectsByKeyword = (array, keyword) => {
    if(keyword && array) return [];
    return array.filter(obj =>
      Object.values(obj).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };


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
          {searchedLabs.map((lab) => (
            <tr key={lab._id}>
              <td>{lab.labItemName}</td>
              <td>{lab.labType}</td>
              <td>{lab.mainCategory}</td>
              <td>{lab.subCategory}</td>
              <td>{lab.labItemCode}</td>
              <td>{lab.price}</td>
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