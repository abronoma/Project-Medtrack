import React, { useState } from 'react'

const ViewDrug = () => {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }
    
  return (
    <div>ViewDrug</div>
  )
}

export default ViewDrug