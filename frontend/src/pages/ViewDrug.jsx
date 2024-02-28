import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDrug } from '../store/thunk';


const ViewDrug = () => {
  const drug = useSelector((state) => state.labs.labs);
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
    <div>
      <h2>Drug Details</h2>
      <p>Drug Name: {}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

export default ViewDrug