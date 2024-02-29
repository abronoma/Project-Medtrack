import React, { useState } from "react";
import style from "./Form.module.css";
import PharmStats from "../Piechart";
import SearchButton from "../searchButton";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { addDrugs } from "../../store/thunk";
import { toast } from "react-toastify";
import { IoMdAdd } from "react-icons/io";

function PharmacyForm() {
  const drug = useSelector((state) => state.drugs);

  const dispatch = useDispatch();
  const [drugName, setDrugName] = useState("");
  const [description, setDescription] = useState("");
  const [drugCode, setDrugCode] = useState("");
  const [unitOfPricing, setUnitOfPricing] = useState("");
  const [price, setPrice] = useState("");

  // defining state for the piechart
  const [inputValue, setInputValue] = useState("");

  // handling changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
            <select
              className={style.input}
              id="unitOfPricing"
              name="unitOfPricing"
              value={unitOfPricing}
              placeholder="Tablet"
              onChange={(e) => inputChangeHandler(setUnitOfPricing, e)}
            >
              <option value="Ampoule">Ampoule</option>
              <option value="Tablet">Tablet</option>
              <option value="Capsule">Capsule</option>
              <option value="1 ml">1 ml</option>
              <option value="20 ml">20 ml</option>
              <option value="5 ">5G</option>
              <option value="2 G">2G</option>
              <option value="50 G">50 G</option>
              <option value="Vial">Vial</option>
              <option value="200 ml">200 ml</option>
              <option value="Sachet">Sachet</option>
              <option value="1 Course">1 Course</option>
              <option value="70 ml">70 ml</option>
              <option value="100 ml">100 ml</option>
              <option value="100 G">100 G</option>
              <option value="Other">Other</option>
              <input type="text" id="Other" placeholder="Type here..." />
            </select>
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
              <IoMdAdd className={style.icon} />
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
