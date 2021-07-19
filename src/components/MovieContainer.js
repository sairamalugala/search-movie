import React from 'react'

import Movie from './Movie'

const MovieContainer = (props) => {

    let { movies, onMovieClick } = props;
    if (!movies) {
        return (
            <div className="card card-body bg-light text-center">Search Results Show Here!</div>
        )
    }
    if (!movies.length) {
        return (
            <div className="card card-body bg-light text-center">No Movie Found!</div>
        )
    }
    const moviesList = movies.map((movie) => {
        return <Movie movie={movie} key={movie.imdbID} onMovieClick={onMovieClick} />
    })
    return (
        <div className="row justify-content-center">
            {moviesList}
        </div>
    )
}

export default MovieContainer;