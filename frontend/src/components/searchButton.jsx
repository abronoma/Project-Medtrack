import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import style from './searchButton.module.css';





export default function SearchButton() {

  return (
    <div className={style.wrappercontainer}>
    <div className={ style.wrapper}>
  <div className={style.icon}> <FontAwesomeIcon icon={faSearch} /></div>
  <input
          type="text"
          className={ style.input }
          id=""
          name=""
          value=""
          placeholder='Search'
        />
</div>
</div>

     
  )
}