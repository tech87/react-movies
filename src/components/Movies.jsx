import React, {useState} from "react";
import {Link} from "react-router-dom"


function Movies(props) {
    const [hovered, setHovered] = useState(false)
    const filledHeart = "ri-heart-fill"
    const emptyHeart = "ri-heart-line"
    return(
        <div className="movie-container">
                <i className={hovered ? filledHeart : emptyHeart}
                    onMouseEnter={()=> setHovered(true)}
                    onMouseLeave={()=> setHovered(false)}>
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
        </div>
    )
}

export default Movies