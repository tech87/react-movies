import React from 'react';
import Movies from './Movies';

function MovieList({ movies }) {
  const movieItems = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <Movies movie={movie} />
      </div>
    );
  });

  return <div className="movie-elements">{movieItems}</div>;
}

export default MovieList;
