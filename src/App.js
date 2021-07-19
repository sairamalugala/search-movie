import React, { useState } from 'react';

import { Header, MovieContainer, MovieInfo, Pagination } from './components'
function App() {
    const defaultMovieInfo = {
        "Title": "",
        "Released": "",
        "Runtime": "",
        "Genre": "",
        "Director": "",
        "Actors": "",
        "Plot": "",
        "Poster": "",
        "Ratings": []
    };
    const [movies, setMovies] = useState("");
    const [movieInfo, setMovieInfo] = useState(defaultMovieInfo);
    const [page, setPage] = useState(0)


    const onMovieSearch = (movieName) => {
        setMovieInfo(defaultMovieInfo);
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=70d1e4a`).then((response) => {
            return response.json();
        }).then((movies) => {
            console.log("movies", movies);
            if (movies.Response === "False") {
                setMovies([]);
            } else {
                setMovies(movies['Search']);
            }
        }).catch((e) => {
            setMovies([]);
        })
    }

    const onMovieClick = (imdbID) => {
        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=70d1e4a`).then((response) => {
            return response.json();
        }).then((response) => {
            setMovieInfo(response);
        })
    }

    return (
        <div className="container">
            <Header onMovieSearch={onMovieSearch} />
            <MovieInfo movieInfo={movieInfo} />
            <MovieContainer movies={movies} onMovieClick={onMovieClick} />
            <Pagination />
        </div>
    )
}

export default App;