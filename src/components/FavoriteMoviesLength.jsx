import React from 'react'
import { useContext } from 'react'
import { MoviesContext } from './MovieContextProvider'

export default function FavoriteMoviesLength() {
  const {favoritesCount} = useContext(MoviesContext)
  return (
    <div className='fav-movie-length'>
       <p>{favoritesCount}</p>
    </div>
  )
}
