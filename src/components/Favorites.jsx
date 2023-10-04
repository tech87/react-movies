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
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      {movies && <MovieList movies={movies} />}
    </motion.div>
  );
}

export default Favorites;
