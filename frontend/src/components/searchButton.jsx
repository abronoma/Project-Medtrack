import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import axios from "axios"

import style from './searchButton.module.css';





export default function SearchButton() {
  const [searchDrug, setSearchDrug ] = useState("");
  const [filteredResults, setFilteredResults ]= useState([]);

  const data = [

  ]

  const handleSearch = (event) => { const
    setSearchText = event.target.value;
    setSearchDrug(searchDrug);

    console.log(event.target.value)


  };


  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      const searchValue = event.target.value
      console.log(searchValue)

    //   const request = await axios.post(
       
    // );
    }


  }




  // performing a wildcard search functionality
  

  return (
    <div className={style.wrappercontainer}>
    <div className={ style.wrapper}>
  <div className={style.icon}> <FontAwesomeIcon icon={faSearch} /></div>
  

<input 
 id="" 
  name="" 
    style={{zIndex:99, position:"sticky"}}
   placeholder='Search' 
   className={ style.input } 
   onKeyPress={ handleKeyPress }
    
    />
          
          
         
         
</div>
</div>

     
  )
}