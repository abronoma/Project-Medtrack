import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./updateForm.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDrugs, updateDrug } from "../store/thunk";
import { toast } from 'react-toastify'
import { RiArrowGoBackFill } from "react-icons/ri";
import Creatable from 'react-select/creatable';


function UpdateDrugs() {
  const updatedDrug = useSelector((state) => state.drugs.drugs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
    { value: 'Other', label: 'Other' },
 ];

  const [drug, setDrug] = useState({
    drugName: "",
    description: "",
    drugCode: "",
    unitOfPricing: "",
    price: "",
  });

  const backRoute = () => {
    navigate("/pharmacy")
  }

  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);


  const findDrug = useSelector((state) => state.drugs.drugs.find(item => item._id === id)) 
    // return item._id === id;

    useEffect(() => {
      if (findDrug) {
        setUnitOfPricing(findOption(findDrug.unitOfPricing));
      }
    }, [findDrug])

  const findOption = (value) => {
    return options.find(option => option.value === value) || { value: 'Other', label: 'Other'}
  }

  const [drugName, setDrugName] = useState(findDrug?.drugName);
  const [description, setDescription] = useState(findDrug?.description);
  const [drugCode, setDrugCode] = useState(findDrug?.drugCode);
  const [unitOfPricing, setUnitOfPricing] = useState(findOption(findDrug?.unitOfPricing));
  const [price, setPrice] = useState(findDrug?.price);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const unitOfPricingValue = unitOfPricing ? unitOfPricing.value : '';

    const updatedDrug = {
      _id: id,
      drugName,
      description,
      unitOfPricing: unitOfPricingValue,
      drugCode,
      price,
    };

    dispatch(updateDrug(updatedDrug));
    toast.success("Updated successfully!")
    navigate("/pharmacy");
  };

  const optionsInputChange = (setter, value) => {
    setter(value);
  };

  const inputChangeHandler = (setter, e) => {
    setter(e.target.value);
  };

  return (
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
              value={description}
              onChange={(e) => inputChangeHandler(setDescription, e)}
              placeholder="Lorem ipsum with little information"
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
          </div>

          <div className={style.addButton}>
           <div className={style.back}>
           <button onClick={backRoute}><RiArrowGoBackFill/></button>
           </div>
            <button type="submit">UPDATE</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateDrugs;
