import styles from './SearchInput.module.css'
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
function SearchInput({...rest}) {

  return (
    <div className={styles.wrapper}>
      <SearchIcon />
       <input  className={styles.input} {...rest} />
    </div>
  )
}

export default SearchInput