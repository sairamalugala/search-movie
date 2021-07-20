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
    const [page, setPage] = useState({
        movieName: '',
        currentPage: 0,
        maxPageCount: 0
    })


    const onMovieSearch = (movieName, pg = 1) => {
        setMovieInfo(defaultMovieInfo);
        fetchMovies(movieName, pg);
    }

    function fetchMovies(movieName, pg) {
        fetch(`https://www.omdbapi.com/?s=${movieName}&page=${pg}&apikey=70d1e4a`).then((response) => {
            return response.json();
        }).then((Movies) => {
            console.log("movies", Movies);
            if (Movies.Response === "False") {
                setMovies([]);
            } else {
                let { Search, totalResults } = Movies;
                totalResults = +totalResults;
                setMovies(Search);
                setPage({
                    currentPage: pg,
                    maxPageCount: Math.ceil(totalResults / 10),
                    movieName
                })
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

    const onPaginationClick = (pageclicked) => {
        let { movieName, currentPage } = page;
        fetchMovies(movieName, pageclicked == "next" ? currentPage + 1 : currentPage - 1)
    }

    return (
        <div className="container">
            <Header onMovieSearch={onMovieSearch} />
            <MovieInfo movieInfo={movieInfo} />
            <MovieContainer movies={movies} onMovieClick={onMovieClick} />
            <Pagination {...page} onPaginationClick={onPaginationClick} />
        </div>
    )
}

export default App;