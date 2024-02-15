import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "../../src/components/pharmacy/Form.module.css";
import { useParams } from "react-router";

function UpdateDrugs() {
  const updatedDrug = useSelector((state) => state.drugs);
  console.log({ updatedDrug });

  const {id} = useParams()
  console.log("id", id);

  const findDrug = updatedDrug.find((item) => {
    return item._id === id
})
console.log("findDrug", findDrug);


  const dispatch = useDispatch();
  const [drugName, setDrugName] = useState(findDrug.drugName);
  const [description, setDescription] = useState(findDrug.description);
  const [drugCode, setDrugCode] = useState(findDrug.drugCode);
  const [unitOfPricing, setUnitOfPricing] = useState(findDrug.unitOfPricing);
  const [price, setPrice] = useState(findDrug.price);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addDrugs(drug));
    //SETTING THE FORM TO IT'S INITIAL STATE AFTER ADDING
    setDrugName(drugName);
    setDescription(description);
    setUnitOfPricing(unitOfPricing);
    setDrugCode(drugCode);
    setPrice(price);

    const drug = {
      drugName,
      description,
      unitOfPricing,
      drugCode,
      price,
    };
  };

  return (
    <>
      <div>
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
          </div>

          <button className={style.addButton} type="Submit">
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateDrugs;
