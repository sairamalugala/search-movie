import React from 'react'
import not_available from '../assets/images/not_available.jpg'
const Movie = (props) => {
    const { movie, onMovieClick } = props;
    let poster = movie.Poster;
    if (poster === 'N/A') {
        poster = not_available;
    }
    return (
        <div className="card movie_card" onClick={() => {
            onMovieClick(movie.imdbID);
        }}>
            <img src={poster} className="card-img-top " alt="... " />
            <div className="card-body ">
                <p className="card-title ">{movie.Title}</p>
                <span className="movie_info ">{movie.Year}</span>
            </div>
        </div>
    )
}

export default Movie;