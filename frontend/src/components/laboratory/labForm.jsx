import React, { useState } from "react";
import style from "../pharmacy/Form.module.css";
import LabStatistics from "../stat";
import SearchButton from "../searchButton";

function LabForm() {
  const [labItemName, setlabItemName] = useState("");
  const [mainCategory, setmainCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [labItemCode, setlabItemCode] = useState("");
  const [Price, setPrice] = useState("");

  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = {
      labItemName,
      mainCategory,
      subCategory,
      labItemCode,
      Price,
    };
    console.log(JSON.stringify(response));
    // Form submission happens here

    //SETTING THE FORM TO IT'S INITIAL STATE
    setlabItemName("");
    setmainCategory("");
    setsubCategory("");
    setlabItemCode("");
    setPrice("");
  };

  return (
    //THE FORM
    <>
      <div className={style.dflex}>
        <form onSubmit={handleSubmit}>
          <div className={style.marginBottom}>
            <label htmlFor="labItemName" className={style.label}>
              Lab Item Name
            </label>
            <input
              type="text"
              className={style.input}
              id="labItemName"
              name="labItemName"
              value={labItemName}
              onChange={(e) => inputChangeHandler(setlabItemName, e)}
              placeholder="Type lab name here"
            />

            <select className={style.input} style={{width:'135px'}}>
              <option value="" disabled selected>
                Lab Type
              </option>
              <option value="MicroBiology">Micro Biology</option>
              <option value="ClinicalLab  ">Clinical Lab</option>
              <option value="ResearchLab">Research Lab</option>
              <option value="Hematology">Hematology</option>
            </select>
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="mainCategory" className={style.label}>
              Main Category
            </label>
            {/* <input
              type="text"
              className={style.input}
              id="mainCategory"
              name="mainCategory"
              value={mainCategory}
              onChange={(e) => inputChangeHandler(setmainCategory, e)}
              placeholder="X-ray"
            /> */}
            <select className={style.input}>
              <option value="" disabled selected>
                X-ray
              </option>
              <option value="computedTomographyC">computed tomography</option>
              <option value="fluoroscopy ">fluoroscopy</option>
              <option value="mammography">mammography</option>
              <option value="angiography">angiography</option>
            </select>
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="subCategory" className={style.label}>
              Unit of Pricing
            </label>
            <input
              type="text"
              className={style.input}
              id="subCategory"
              name="subCategory"
              value={subCategory}
              onChange={(e) => inputChangeHandler(setsubCategory, e)}
              placeholder="Head and Skull"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="labItemCode" className={style.label}>
              lab Item Code
            </label>
            <input
              type="text"
              className={style.input}
              id="labItemCode"
              name="labItemCode"
              value={labItemCode}
              onChange={(e) => inputChangeHandler(setlabItemCode, e)}
              placeholder="Aoc123FH"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="Price" className={style.label}>
              Price:
            </label>
            <input
              type="text"
              className={style.input}
              id="Price"
              name="price"
              value={Price}
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

        <LabStatistics />
      </div>
    </>
  );
}

export default LabForm;
