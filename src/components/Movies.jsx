import React, {useState} from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";


function Movies(props) {
    const [favorite, setFavorite] = useState(props.movie.isFavorite)
    const filledHeart = "ri-heart-fill"
    const emptyHeart = "ri-heart-line"

    function handleFavorite() {
         fetch(`http://localhost:3000/movies/${props.movie.id}`, {
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
    return(
        <motion.div className="movie-container" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1  }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0}}
        >
                <i className={favorite ? filledHeart : emptyHeart}
                    onClick={handleFavorite}
                >
                </i>
                <div className="img-container">
                        <img src={props.movie.poster} className="poster" loading="lazy"/>
                         <Link to={`/${props.movie.id}`} className="btn">Details</Link> 
                </div>
                        <h2 className="movie-title">{props.movie.title}</h2>
                <div className="rating-container">
                        <i className="ri-star-s-fill"></i>
                        <p className="movie-rating">{props.movie.rating} / 10</p>
                </div>
        </motion.div>
    )
}

export default Movies