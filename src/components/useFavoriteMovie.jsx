import { useState } from "react";

function useFavoriteMovie(isFavorite=false) {
    const [favorite, setFavorite] = useState(isFavorite)

   function updateFavorite(movieId) {
        fetch(`http://localhost:3000/movies/${movieId}`, {
         method: "PATCH",
         mode: "cors",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           isFavorite: !favorite
         })
       })
         .then(() => setFavorite(!favorite))
   } 
    return [favorite, setFavorite, updateFavorite]
}

export default useFavoriteMovie;