import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './searchButton.module.css';

export default function SearchButton({ onInputChange }) {
  const handleInputChange = (event) => {
    const selectedDrug = event.target.value;
    onInputChange(selectedDrug);
  };

 return (
  <div className={style.wrapper}>
    <div className={style.container}>
    <div className={style.icon}>  <FontAwesomeIcon icon={faSearch} /></div>
  <input   onChange={handleInputChange} className={style.input}    placeholder='Search...'/>
    </div>
  
</div>
 )
}
