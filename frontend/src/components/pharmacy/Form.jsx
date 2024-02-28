import React, { useState } from "react";
import style from "./Form.module.css";
import PharmStats from "../Piechart";
import SearchButton from "../searchButton";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { addDrugs } from "../../store/thunk";
import { toast } from "react-toastify";


function PharmacyForm() {
  const drug = useSelector((state) => state.drugs);

  const dispatch = useDispatch();
  const [drugName, setDrugName] = useState("");
  const [description, setDescription] = useState("");
  const [drugCode, setDrugCode] = useState("");
  const [unitOfPricing, setUnitOfPricing] = useState("");
  const [price, setPrice] = useState("");


  // defining state for the piechart
  const [inputValue, setInputValue] = useState('');

  // handling changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const drug = {
      drugName,
      description,
      unitOfPricing,
      drugCode,
      price,
    };

    if (!drugName) {
      return toast.error('Drug name is required!')
    } else if ( !description) {
      return toast.error('Description is required!')
    } else if ( !unitOfPricing) {
      return toast.error('Unit of Pricing is required!')
    } else if ( !drugCode) {
      return toast.error('Drug code is required!')
    } else if ( !price) {
      return toast.error('Price is required!')
    } else {
  
    dispatch(addDrugs(drug))
    //SETTING THE FORM TO IT'S INITIAL STATE AFTER ADDING
    setDrugName("");
    setDescription("");
    setUnitOfPricing("");
    setDrugCode("");
    setPrice("");

    console.log(JSON.stringify(drug));
    // Form submission happens here

    // Display success message
    toast.success("Drug added successfully!")
  }
    
  };


  return (
    //THE FORM
    <>
      <div className={style.dflex}>
      <div>
          <SearchButton />
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={style.marginBottom}>
            <label htmlFor="drugName" className={style.label}>
              Drug Name
            </label>
            <input
              type="text"
              className={style.input}
              id="drugName"
              name="drugName"
              value={drugName}
              onChange={(e) => inputChangeHandler(setDrugName, e)}
              placeholder="Type drug name here"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="description" className={style.label}>
              Description
            </label>
            <input
              type="text"
              className={style.input}
              id="description"
              name="description"
              value={description}
              onChange={(e) => inputChangeHandler(setDescription, e)}
              placeholder="Lorem ipsum with little information"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="unitOfPricing" className={style.label}>
              Unit of Pricing
            </label>
            <input
              type="text"
              className={style.input}
              id="unitOfPricing"
              name="unitOfPricing"
              value={unitOfPricing}
              onChange={(e) => inputChangeHandler(setUnitOfPricing, e)}
              placeholder="Table"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="drugCode" className={style.label}>
              Drug Code
            </label>
            <input
              type="text"
              className={style.input}
              id="drugCode"
              name="drugCode"
              value={drugCode}
              onChange={(e) => inputChangeHandler(setDrugCode, e)}
              placeholder="Aoc123FH"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="price" className={style.label}>
              Price:
            </label>
            <input
              type="text"
              className={style.input}
              id="price"
              name="price"
              value={price}
              onChange={(e) => inputChangeHandler(setPrice, e)}
              placeholder="2.02"
            />

            <button className={style.addButton} type="Submit">
              ADD
            </button>
          </div>
        </form>

       

       <div> <PharmStats/>
       </div>
      </div>

      <Table />
    </>
  );
}

export default PharmacyForm;
