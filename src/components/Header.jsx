import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { getFavoriteMovies } from "../database/db";
import FavoriteMoviesLength from './FavoriteMoviesLength'

function Header() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getFavoriteMovies();
      setMovies(data);
    }
    fetchData();
  }, [movies]);

  return (
    <motion.header
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 1}}
    >
     {movies.length > 0 && <FavoriteMoviesLength favMovie={movies.length}/>}
     <Link to="/" className='movieLogo'><i className="ri-movie-2-fill"></i></Link>
     <Link to="/favorites" className='movieList'><i className="ri-heart-fill fav-fill-heart"></i></Link>
    </motion.header>
  )
}

export default Header
