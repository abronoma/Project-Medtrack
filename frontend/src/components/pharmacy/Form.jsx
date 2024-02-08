import React, { useState } from 'react';
import style from './Form.module.css';
import PharmacyStatistics from '../stat';

function PharmacyForm() {
  const [form, setForm] = useState({
    drugName: '',
    description: '',
    unitOfPricing: '',
    drugCode: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  return (
    <>
    <div className={ style.dflex }>
    <form onSubmit={handleSubmit}>
    
      <div className={ style.marginBottom }>
       <label htmlFor="drugName" className={ style.label }>Drug Name:</label>
       <input
          type="text"
          className= { style.input }
          id="drugName"
          name="drugName"
          value={form.drugName}
          onChange={handleChange}
        />
      </div>
    
      <div className={ style.marginBottom }>
        <label htmlFor="description" className={ style.label }>Description:</label>
        <input
          type="text"
          className={ style.input }
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className={ style.marginBottom }>
        <label htmlFor="unitOfPricing" className={ style.label }>Unit of Pricing:</label>
        <input
          type="text"
          className={ style.input }
          id="unitOfPricing"
          name="unitOfPricing"
          value={form.unitOfPricing}
          onChange={handleChange}
        />
      </div>
      <div className={ style.marginBottom }>
        <label htmlFor="drugCode" className={ style.label }>Drug Code:</label>
        <input
          type="text"
          className={ style.input }
          id="drugCode"
          name="drugCode"
          value={form.drugCode}
          onChange={handleChange}
        />
      </div>
      <div className={ style.marginBottom }>
        <label htmlFor="price" className={ style.label }>Price:</label>
        <input
          type="text"
          className={ style.input }
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>
      
    </form>
    <div>
     <button>ADD</button>
    </div>
    <PharmacyStatistics/>
    </div>
    </>
  );
}

export default PharmacyForm;
