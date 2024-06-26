import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FavoriteMoviesLength from './FavoriteMoviesLength';

function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <FavoriteMoviesLength />
      <Link to="/" className="movieLogo">
        <i className="ri-movie-2-fill"></i>
      </Link>
      <Link to="/favorites" className="movieList">
        <i className="ri-heart-fill fav-fill-heart"></i>
      </Link>
    </motion.header>
  );
}

export default Header;
