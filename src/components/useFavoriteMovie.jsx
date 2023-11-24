import { useState, useContext } from "react";
import { updateMovie } from "../database/db";
import { MoviesContext } from "./MovieContextProvider";


function useFavoriteMovie(isFavorite = false) {
  const [favorite, setFavorite] = useState(isFavorite);
  const {favoritesCount, setFavoritesCount} = useContext(MoviesContext)

  async function updateFavorite(movieId) {
    const newFavCount = isFavorite ? favoritesCount - 1 : favoritesCount + 1
    setFavoritesCount(newFavCount)
    await updateMovie(movieId, { isFavorite: !favorite });
    setFavorite(!favorite);
    console.log(favoritesCount)
  }

  return [favorite, setFavorite, updateFavorite];
}

export default useFavoriteMovie;
