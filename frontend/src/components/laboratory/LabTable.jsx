import React, { useEffect, useState } from "react";
import style from "../pharmacy/Table.module.css";
import Ellipsis from "../laboratory/labEllipsis.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchLabs } from "../../store/thunk.js";


function LabTable({ searchValue }) {
  const { labs } = useSelector((state) => state.labs);

  const [searchedLabs, setSearchLabs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

   // Function to filter objects based on keyword
   const filterLabsBySearchTerm = (labs, searchTerm) => {
    const searchTermLower = searchTerm.toLowerCase()

    const filteredItems = labs.filter((lab) => lab.labItemName.toLowerCase().includes(searchTermLower) ||
    lab.labItemCode.toLowerCase().includes(searchTermLower))
    return filteredItems
  };
  
   // dispatching actions
   const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue !== "") {
      const filteredLabs = filterLabsBySearchTerm(labs, searchValue);
      setSearchLabs(filteredLabs);
    } else {
      setSearchLabs(labs);
    }
  }, [searchValue, labs]);

  useEffect(() => {
    dispatch(fetchLabs());
  }, [dispatch]);

  // calculate total pages
  const totalPages = Math.ceil(searchedLabs.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchedLabs.slice(indexOfFirstItem, indexOfLastItem)

  // to change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
            <th>Price(GH₵)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((lab) => (
            <tr key={lab._id}>
              <td>{lab.labItemName}</td>
              <td>{lab.labType}</td>
              <td>{lab.mainCategory}</td>
              <td>{lab.subCategory}</td>
              <td>{lab.labItemCode}</td>
              <td>{lab.price}</td>
              <td className={style.btns}>
                <Ellipsis labId={lab._id} />
              </td>
            </tr>
          ))
        ): (
          <tr>
            <td colSpan="10" >There are no items currently.</td>
          </tr>
        )}
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

export default LabTable;
