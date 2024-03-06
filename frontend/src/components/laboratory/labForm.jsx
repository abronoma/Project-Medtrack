import React, { useState } from "react";
import style from "./labForm.module.css";
import { useDispatch } from "react-redux";
import SearchButton from "../searchButton";
import { toast } from "react-toastify";
import LabTable from "./LabTable";
import { addLabs } from "../../store/thunk";
import Creatable from 'react-select/creatable';
import LabStats from "./LabStats";


function LabForm() {
  const dispatch = useDispatch();
  const [labItemName, setlabItemName] = useState("");
  const [labType, setLabType] = useState("");
  const [mainCategory, setmainCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [labItemCode, setlabItemCode] = useState("");
  const [price, setPrice] = useState("");
  const [inputValue, setInputValue] = useState("");
  console.log({inputValue});


  const labOptions = [
    { value: 'Laboratory', label: 'Laboratory' },
    { value: 'Radiology', label: 'Radiology' }
  ]

  const mainCatOptions = [
    { value: 'Radiography', label: 'Radiography' },
    { value: 'Magnetic Resonance Imaging(MRI)', label: 'Magnetic Resonance Imaging(MRI)' },
    { value: 'Computed Tomography(CT)', label: 'Computed Tomography(CT)' },
    { value: 'Ultrasound(Sonography)', label: 'Ultrasound(Sonography)' },
    { value: 'Interventional Radiology', label: 'Interventional Radiology' },
    { value: 'Nuclear Medicine Imaging', label: 'Nuclear Medicine Imaging' },
  ]

  // handling changes

  const handleInputChange = (event) => {
    console.log(event)
    setInputValue(event);
    console.log(inputValue)
   }


  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };

  const labOptionsInputChange = (setter, value) => {
    setter(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const lab = {
      labItemName,
      labType,
      mainCategory,
      subCategory,
      labItemCode,
      price,
    };

    if (!labItemName) {
      return toast.error("Lab item name is required!");
    } else if (!mainCategory) {
      return toast.error("Main Category is required!");
    } else if (!labType) {
      return toast.error("Lab Type is required!");
    } else if (!subCategory) {
      return toast.error("Sub Category  is required!");
    } else if (!labItemCode) {
      return toast.error("Lab Item code is required!");
    } else if (!price) {
      return toast.error("Price is required!");
    } else {
      dispatch(addLabs(lab));
      //SETTING THE FORM TO IT'S INITIAL STATE
      setlabItemName("");
      setLabType("");
      setmainCategory("");
      setsubCategory("");
      setlabItemCode("");
      setPrice("");

      console.log(JSON.stringify(lab));

      // Display success message
      toast.success("Lab entry added successfully!");
    }
  };

  return (
    <>
    <div className={style.header}>
        <h1>Laboratory Inventory</h1>
       
      </div>
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

            <Creatable
              isClearable
              className={style.labType}
              style={{ width: "135px" }}
              id="labType"
              name="labType"
              value={labType}
              options={labOptions}
              onChange={(e) => labOptionsInputChange(setLabType, e)}
              placeholder="Lab Type"
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="mainCategory" className={style.label}>
              Main Category
            </label>
            <Creatable
              className={style.input}
              id="mainCategory"
              name="mainCategory"
              value={mainCategory}
              options={mainCatOptions}
              onChange={(e) => labOptionsInputChange(setmainCategory, e)}
            />
          </div>

          <div className={style.marginBottom}>
            <label htmlFor="subCategory" className={style.label}>
              Sub Category
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
              Lab Item Code
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

        <LabStats />
      </div>
      <div>
        <SearchButton onInputChange={handleInputChange} />

      </div>

      <LabTable searchValue={inputValue}/>
    </>
  );
}

export default LabForm;
