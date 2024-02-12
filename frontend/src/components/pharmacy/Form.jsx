import React, { useState } from "react";
import style from "./Form.module.css";
import PharmStats from "../Piechart";
import SearchButton from "../searchButton";
import Table from "./Table";

function PharmacyForm() {
  const [drugName, setDrugName] = useState("");
  const [Description, setDescription] = useState("");
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

    // validation before submitting
    // if (drugName.trim() === '' || 
    // Description.trim() === '' || 
    // unitOfPricing.trim() === '' ||
    // drugCode.trim() === '' ||
    // price.trim()=== '') {
    //   alert('Please fill in all fields');
    //   return;
    // }

    const response = {
      drugName,
      Description,
      unitOfPricing,
      drugCode,
      price,
    };

    // setDrugsList([...drugsList, newDrug])

    console.log(JSON.stringify(response));
    // Form submission happens here

    // Display success message
    alert('Form submitted successfully!')

    //SETTING THE FORM TO IT'S INITIAL STATE
    setDrugName("");
    setDescription("");
    setUnitOfPricing("");
    setDrugCode("");
    setPrice("");
  };


  return (
    //THE FORM
    <>
      <div className={style.dflex}>
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
              value={Description}
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

        <div>
          <SearchButton />
        </div>

        <PharmStats/>
      </div>

      <Table />
    </>
  );
}

export default PharmacyForm;
