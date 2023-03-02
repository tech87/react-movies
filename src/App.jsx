import React,{useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import MovieList from './components/MovieList'
import Favorites from './components/Favorites'
import MovieDetails from './components/MovieDetails'
import Header from './components/Header'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
      fetch('http://localhost:3000/movies/')
        .then(res=> res.json())
        .then(data=> setMovies(data))
    }, [])

  return (
   <>
      <MovieList movies={movies} />   
   </>  
  )
}

export default App
