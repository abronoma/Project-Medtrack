import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


const ViewDrug = () => {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleView = (id) => {
      navigate(`/viewdrugs/${id}`)
    }
    
  return (
    <div>
      <p></p>
    </div>
  )
}

export default ViewDrug