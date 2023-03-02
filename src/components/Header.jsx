import React from 'react'
import {Link, Outlet} from "react-router-dom"

function Header() {
  return (
    <header>
     <Link to="/" className='movieLogo'><i className="ri-movie-2-fill"></i></Link>
     <Link to="/favorites" className='movieList'><i className="ri-file-list-fill"></i></Link>
    </header>
  )
}

export default Header
