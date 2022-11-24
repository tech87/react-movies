import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Header from './components/Header'

function App() {
  
  return (
   <>
      <Header />
      <main>
        <MovieList />
      </main>
   </>  
  )
}

export default App
