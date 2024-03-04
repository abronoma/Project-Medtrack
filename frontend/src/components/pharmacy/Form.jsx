import React, { useState } from "react";
import style from "./Form.module.css";
import PharmStats from "../Piechart";
import SearchButton from "../searchButton";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { addDrugs } from "../../store/thunk";
import { toast } from "react-toastify";
import Creatable from 'react-select/creatable';


function PharmacyForm() {
  const drug = useSelector((state) => state.drugs);

  const dispatch = useDispatch();
  const [drugName, setDrugName] = useState("");
  const [description, setDescription] = useState("");
  const [drugCode, setDrugCode] = useState("");
  const [unitOfPricing, setUnitOfPricing] = useState(null);
  const [price, setPrice] = useState("");

  const options = [
    { value: 'Ampoule', label: 'Ampoule' },
    { value: 'Tablet', label: 'Tablet' },
    { value: 'Capsule', label: 'Capsule' },
    { value: '1 ml', label: '1 ml' },
    { value: '20 ml', label: '20 ml' },
    { value: '5 G', label: '5G' },
    { value: '2 G', label: '2G' },
    { value: '50 G', label: '50 G' },
    { value: 'Vial', label: 'Vial' },
    { value: '200 ml', label: '200 ml' },
    { value: 'Sachet', label: 'Sachet' },
    { value: '1 Course', label: '1 Course' },
    { value: '70 ml', label: '70 ml' },
    { value: '100 ml', label: '100 ml' },
    { value: '100 G', label: '100 G' },
 ];

  // defining state for the piechart
  const [inputValue, setInputValue] = useState("");

  // handling changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

   // Handle input changes for unit of pricing
 const optionsInputChange = (setter, value) => {
  setter(value);
};

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
      return toast.error("Drug name is required!");
    } else if (!description) {
      return toast.error("Description is required!");
    } else if (!unitOfPricing) {
      return toast.error("Unit of Pricing is required!");
    } else if (!drugCode) {
      return toast.error("Drug code is required!");
    } else if (!price) {
      return toast.error("Price is required!");
    } else {
      dispatch(addDrugs(drug));
      //SETTING THE FORM TO IT'S INITIAL STATE AFTER ADDING
      setDrugName("");
      setDescription("");
      setUnitOfPricing("");
      setDrugCode("");
      setPrice("");

      console.log(JSON.stringify(drug));
      // Form submission happens here

      // Display success message
      toast.success("Drug added successfully!");
    }
  };

  return (
    <>
      <div className={style.header}>
        <h1>Pharmacy Inventory</h1>
        <SearchButton />
      </div>
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
              placeholder="Type drug name here..."
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
              placeholder="Type your description..."
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="unitOfPricing" className={style.label}>
              Unit of Pricing
            </label>
            <Creatable
              isClearable
              className={style.input}
              id="unitOfPricing"
              name="unitOfPricing"
              value={unitOfPricing}
              placeholder="Select..."
              options={options}
              onChange={(e) => optionsInputChange(setUnitOfPricing, e)}
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

            <div className={style.addButton}>
              <button type="Submit">ADD</button>
            </div>
          </div>
        </form>

        <div>
          {" "}
          <PharmStats />
        </div>
      </div>

      <Table />
    </>
  );
}

export default PharmacyForm;
