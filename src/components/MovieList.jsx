import React, {useState, useEffect} from "react";
import Movies from "./Movies";

function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/movies/')
          .then(res=> res.json())
          .then(data=> setMovies(data))
      }, [])
console.log(movies)
      const movieItems = movies.map(movie => {
        return (
          <div key={movie.id}>
            <Movies movie={movie} />
          </div>
        )
      })
      
    return (
        <div className="movie-elements">
            {movieItems}  
        </div>
    )
}

export default MovieList