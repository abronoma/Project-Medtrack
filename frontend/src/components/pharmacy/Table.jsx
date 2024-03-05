import React, { useEffect, useState } from "react";
import style from './Table.module.css'
import Ellipsis from "../ellipsis/ellipsis.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrugs } from '../../store/thunk.js'

function Table({searchValue}) {
  const { drugs } = useSelector(state => state.drugs)
 
  const [searchedDrugs, setSearchDrugs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Function to filter objects based on keyword
  const filterObjectsByKeyword = (array, keyword) => {
    return array.filter(obj =>
      Object.values(obj).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  function truncateDescription(description, maxWords=20) {
    if (description.length > maxWords) {
      return description.slice(0, maxWords) + "...";
    } else {
      return description;
    }
  }

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

  // calculate total pages
  const totalPages = Math.ceil(searchedDrugs.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchedDrugs.slice(indexOfFirstItem, indexOfLastItem)

  // to change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className={style.table_container}>
      <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Description</th>
            <th>Unit of Pricing</th>
            <th>Drug Code</th>
            <th>Price (GH₵)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((drug) => (
            <tr key={drug._id}>
              <td>{drug.drugName}</td>
              <td>{truncateDescription(drug.description)}
              </td>
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
      <div className={style.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
           <button key= {index} onClick={() => paginate(index + 1)}>
           {index + 1}
           </button>
        )
         
        )}
      </div>
    </div>
  );
}

export default Table;
