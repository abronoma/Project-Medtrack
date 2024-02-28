import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLab } from "../store/thunk";
import style from "./viewForm.module.css"

const ViewLab = () => {
  const lab = useSelector((state) => state.labs.labs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    dispatch(fetchLab())
  }, [dispatch]);

  const newLab = lab.find((item) => {
    return item._id === id
  });

  return (
    <div className={style.viewContainer}>
      <h2>Lab Details</h2>
      <p>Lab Item Name: {newLab.labItemName}</p>
      <p>Lab Type: {newLab.labType}</p>
      <p>Main Category: {newLab.mainCategory}</p>
      <p>Sub-category: {newLab.subCategory}</p>
      <p>Lab tem Code: {newLab.labItemCode}</p>
      <p>Price: {newLab.price}</p>
    </div>
  );
};

export default ViewLab;
