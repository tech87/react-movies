import React, {useState} from "react";

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
                <img src={props.movie.poster} className="poster"/>
                <h2 className="movie-title">{props.movie.title}</h2>
                <p className="movie-rating">{props.movie.rating} / 10</p>
                <button className="btn">More</button>
        </div>
    )
}

export default Movies