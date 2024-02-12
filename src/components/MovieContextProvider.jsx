import { useState, useEffect, createContext } from 'react';
import { getFavoriteMovies } from '../database/db';

export const MoviesContext = createContext({
  favoritesCount: 0,
  setFavoritesCount: () => {}
});

export default function CustomMovieProvider({ children }) {
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    async function fetchFavorites() {
      const data = await getFavoriteMovies();
      setFavoritesCount(data.length);
    }

    fetchFavorites();
  }, []);

  return (
    <MoviesContext.Provider value={{ favoritesCount, setFavoritesCount }}>
      {children}
    </MoviesContext.Provider>
  );
}
