import { useState } from "react";
import { updateMovie } from "../database/db";

function useFavoriteMovie(isFavorite = false) {
  const [favorite, setFavorite] = useState(isFavorite);

  async function updateFavorite(movieId) {
    await updateMovie(movieId, { isFavorite: !favorite });
    setFavorite(!favorite);
  }

  return [favorite, setFavorite, updateFavorite];
}

export default useFavoriteMovie;
