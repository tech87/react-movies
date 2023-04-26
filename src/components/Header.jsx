import React from 'react'
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

function Header() {
  return (
    <motion.header
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 1}}
    >
     <Link to="/" className='movieLogo'><i className="ri-movie-2-fill"></i></Link>
     <Link to="/favorites" className='movieList'><i className="ri-file-list-fill"></i></Link>
    </motion.header>
  )
}

export default Header
