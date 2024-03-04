import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState,  useEffect } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'
import { useDispatch, useSelector } from 'react-redux';
import style from './searchButton.module.css';
import { fetchDrugs } from '../store/thunk.js'





export default function SearchButton({onInputChange}) {
  const [searchDrug, setSearchDrug ] = useState("");
  const [drugList, setDrugList ]= useState([]);

  const { drugs } = useSelector(state => state.drugs)


  const handleSearch = (event) => { const
    setSearchText = event.target.value;
    setSearchDrug(searchDrug);

    console.log(event.target.value)


  };

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchDrugs());
  }, [dispatch]);
  
  useEffect(() => {
    const drugNames = drugs.map(drug => drug.drugName)
    setDrugList(drugNames)
  }, [drugs]);


  const handleKeyPress = (event) => {
    const selectedDrug = event
    console.log(selectedDrug)
    // if(event.key === 'Enter'){
      
      // const searchValue = event.target.value
     
      onInputChange(selectedDrug)
    
    // }


  }




  // performing a wildcard search functionality
  

  return (
    <div className={style.wrappercontainer}>
    <div className={ style.wrapper}>
  <div className={style.icon}> <FontAwesomeIcon icon={faSearch} /></div>
  
  <Typeahead
  

  onInputChange={(text, e) => {
    handleKeyPress(text)
}}
  options={ 
drugList
  }

  style={{zIndex:99, position:"sticky"}}
  placeholder='Search' 
  
/>


          
       
         
         
</div>
</div>

     
  )
}