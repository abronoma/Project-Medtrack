import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDrug } from '../store/thunk';
import style from './viewForm.module.css'


const ViewDrug = () => {
  const drug = useSelector((state) => state.drugs.drugs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    dispatch(fetchDrug())
  }, [dispatch]);

  const newDrug = drug.find((item) => {
    return item._id === id
  }) 
    
  return (
    <div className={style.viewContainer}>
      <h2>Drug Details</h2>
      <p>Drug Name: {newDrug.drugName}</p>
      <p>Description: {newDrug.description}</p>
      <p>Unit of Pricing: {newDrug.unitOfPricing}</p>
      <p>Drug Code: {newDrug.drugCode}</p>
      <p>Price: {newDrug.price}</p>
    </div>
  )
}

export default ViewDrug