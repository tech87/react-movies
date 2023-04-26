import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion"


export default function MovieDetails() {
const {movieId} = useParams();
const [movie, setMovie] = useState({})
const [isOpen, setIsOpen] = useState(false)
const [movieReview, setMovieReview] = useState('')
const [reviews, setReviews] = useState([]) 


    useEffect(()=> {
        fetch(`http://localhost:3000/movies/${movieId}`)
          .then(res=> res.json())
          .then(data=> {
            setMovie(data);
            setReviews(data.reviews) 
          })
      }, [movieId]) 


      const openModal = () => {
         setIsOpen(true)
     }

     const closeModal = () => {
         setIsOpen(false)
     } 

     const handleChange = e => {
          setMovieReview(e.target.value)
     }

    const submitHandler = e => {
        e.preventDefault();
      fetch(`http://localhost:3000/movies/${movieId}`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviews: [movieReview, ...reviews]
          })
        })
          .then(() => setReviews(prevState => {
            return [movieReview, ...prevState]
          }))
          .then(() => setMovieReview(''))
    }

    const deleteReview = (review) => {
      const reviewToKeep = reviews.filter(text => text !== review)
      fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviews: reviewToKeep
        })
      })
      .then(()=> setReviews(() => reviewToKeep))
    }

      return (
        <motion.div className="details-page"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1  }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0}}
        >
          <div className="details">
            <div className="poster-container">
              <img src={movie.poster} className="detail-img" />
            </div>

            <div className="about">
              <h1>{movie.title}</h1>

              <div className="info">
                <p className="genre">{movie.genre}</p>
                <p className="genre">
                  <i className="ri-star-s-fill"></i> {movie.rating} / 10
                </p>
                <p className="genre">{movie.runTime}</p>
              </div>
              
              <div className="movieCast">
              <h4>Stars</h4>
              <ul className="actors">
                {movie.cast
                  ? movie.cast.map((actor) => {
                      return (
                        <li key={actor}>
                          {actor} 
                        </li>
                      );
                    })
                  : null}
              </ul>
              </div>
              <h4>Summary</h4>
              <p className="summary">{movie.summary}</p>
              <p onClick={() => openModal()} className="trailer">
                Trailer
              </p>
              <Modal open={isOpen} movie={movie} onClose={closeModal} />
            </div>
          </div>

          <hr className="hr-styled" />

          <div className="reviews">
            <div className="review-container">
              <form onSubmit={submitHandler}>
                <p><label className="comments-label">Comments:</label></p>
                <textarea
                  id="text"
                  value={movieReview}
                  onChange={handleChange}
                  name="movieReview"
                />
                <button type="submit" id="submit">
                  Submit
                </button>
              </form>
            </div>

          
            {reviews ? reviews.map((review) => {
              return (
                <div className="review-card" key={review}>
                   <p className="text-review">{review}</p>
                   <i className="ri-delete-bin-line trash" onClick={() => deleteReview(review)}></i>
                </div>
              )
            }
             )
                     : null} 
          </div>
        </motion.div>
      );
}