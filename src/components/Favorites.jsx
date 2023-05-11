import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { motion } from "framer-motion"

function Favorites() {
const [movies, setMovies] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/movies?isFavorite=true')
      .then(res=> res.json())
      .then(data=> {
        setMovies(data)
      })

  }, [])


  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1  }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0}}
    >
    <MovieList movies={movies}/>
    </motion.div>
  )
}

export default Favorites
 