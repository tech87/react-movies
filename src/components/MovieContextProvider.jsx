import { useState, createContext } from "react";
export const MoviesContext = createContext(null);

export default function CustomMovieProvider({ children }) {
  const [favoritesCount, setFavoritesCount] = useState(0);

  return (
    <MoviesContext.Provider value={{ favoritesCount, setFavoritesCount }}>
      {children}
    </MoviesContext.Provider>
  )
  }