import React,{useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import MovieList from './components/MovieList'
import Favorites from './components/Favorites'
import MovieDetails from './components/MovieDetails'
import Header from './components/Header'
import FilterMovies from './components/FilterMovies'

function App() {
  const [movies, setMovies] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])  // ?????? why?
  /* const [isSearching, setIsSearching] = useState(false) */
  

  useEffect(()=> {
      fetch('http://localhost:3000/movies/')
        .then(res=> res.json())
        .then(data=> {
          setMovies(data)
          setFilteredMovies(data) // ?????? why?
        })

    }, [])

    const onSearchChange = (value) => {
      /* setIsSearching(true) */
      setSearchField(value)
      setFilteredMovies(movies.filter(movie => {
        return movie.title.toLowerCase().includes(value.toLowerCase())
      }))
    }
    
      const onSelectChange = (value) => {
        /* setIsSearching(true) */
         setFilteredMovies(movies.filter(movie => {
          return value === "reset" ? true : movie.genre.includes(value) 
         })) 
       }
      
  return (
   <>
      <FilterMovies onSearchChange={onSearchChange} onSelectChange={onSelectChange} searchField={searchField}/>
      <MovieList movies={filteredMovies} searchField={searchField}/>   
     {/* isSearching && */ filteredMovies.length === 0 && <h2>Movie not found!</h2>}
   </>  
  )
}

export default App
