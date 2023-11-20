import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import FilterMovies from "./components/FilterMovies";
import { getMovies } from "./database/db";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovies();
      setMovies(data);
      setFilteredMovies(data);
    }
    fetchData();
  }, []);


  const onSearchChange = (value) => {
    setSearchField(value);
    setFilteredMovies(
      movies.filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const onSelectChange = (value) => {
    setFilteredMovies(
      movies.filter((movie) => {
        return value === "reset" ? true : movie.genre.includes(value);
      })
    );
  };

  return (
    <>
      <FilterMovies
        onSearchChange={onSearchChange}
        onSelectChange={onSelectChange}
        searchField={searchField}
      />
      <MovieList movies={filteredMovies} searchField={searchField} />
      {filteredMovies.length === 0 && <h2>Movie not found!</h2>}
    </>
  );
}

export default App;
