import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { motion } from "framer-motion"
import { getFavoriteMovies } from "../database/db";

function Favorites() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getFavoriteMovies();
      setMovies(data);
    }
    fetchData();
  }, [movies]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}s
    >
      {movies <= 0 ? <h2>Your list is empty!</h2> : <MovieList movies={movies}/>}
    </motion.div>
  );
}

export default Favorites;
