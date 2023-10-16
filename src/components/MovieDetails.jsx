import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion"
import useFavoriteMovie from "./useFavoriteMovie";
import { getMovie, updateMovie } from "../database/db";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [movieReview, setMovieReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [favorite, setFavorite, updateFavorite] = useFavoriteMovie();

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovie(movieId);
      setMovie(data);
      setFavorite(data.isFavorite);
      setReviews(data.reviews);
    }

    fetchMovie();
  }, [movieId]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setMovieReview(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await updateMovie(movieId, { reviews: [movieReview, ...reviews] });
    setReviews((prevState) => {
      return [movieReview, ...prevState];
    });
    setMovieReview("");
  };

  const deleteReview = async (review) => {
    const reviewToKeep = reviews.filter((text) => text !== review);
    await updateMovie(movieId, { reviews: reviewToKeep });
    setReviews(() => reviewToKeep);
  };

  return (
    <motion.div
      className="details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
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
                    return <li key={actor}>{actor}</li>;
                  })
                : null}
            </ul>
          </div>
          <div className="summary-container"> 
             <h4>Summary</h4>
             {<i
                className={favorite ? "ri-heart-fill" : "ri-heart-line"}
                onClick={() => updateFavorite(movie.id)}
                /> }
          </div>
          <p className="summary">{movie.summary}</p>
          <button onClick={() => openModal()} className="trailer">
            Trailer
          </button>
          <Modal open={isOpen} movie={movie} onClose={closeModal} />
        </div>
      </div>

      <hr className="hr-styled" />

      <div className="reviews">
        <div className="review-container">
          <form onSubmit={submitHandler}>
            <p>
              <label className="comments-label">Comments:</label>
            </p>
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

        {reviews
          ? reviews.map((review) => {
              return (
                <div className="review-card" key={review}>
                  <p className="text-review">{review}</p>
                  <i
                    className="ri-delete-bin-line trash"
                    onClick={() => deleteReview(review)}
                  ></i>
                </div>
              );
            })
          : null}
      </div>
    </motion.div>
  );
}
