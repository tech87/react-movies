import React from 'react'
import { motion } from 'framer-motion'

function FilterMovies(props) {

const updateSearch = (e) => {
  e.preventDefault();
  props.onSearchChange("")
}

  return (
    <motion.div className='filter'
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 1}}
    >
      <div className='searchContainer'>

      <input type='text' 
             placeholder=' Search movie'
             onChange={(e) => props.onSearchChange(e.target.value)}
             value={props.searchField}
             />
             {props.searchField.length > 0 && <button onClick={updateSearch}>&times;</button>}
      </div>
             
      <div>
        <select name="genre" id="genre" onChange={(e)=> props.onSelectChange(e.target.value)}>
            <option value="reset"> -- All genres -- </option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
        </select>
      </div>
    </motion.div>
  )
}

export default FilterMovies
