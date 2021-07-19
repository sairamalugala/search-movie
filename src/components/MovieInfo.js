import React from 'react';
import poster from '../assets/images/not_available.jpg'

const Rating = (props) => {
    const { Ratings } = props;
    const newRatings = Ratings.map((rating) => {
        return <div key={`${rating.Source}_${rating.Value}`}><strong>{rating.Source}</strong> : {rating.Value}</div>
    })
    return (
        <div>Ratings: {newRatings}</div>
    )
}

const MovieInfo = (props) => {
    const { Title, Released, Runtime, Genre, Director, Actors, Plot, Poster, Ratings } = props.movieInfo;
    if (!Title) {
        return <div></div>;
    }
    return (
        <div className="movie-info">
            <div className="poster-column">
                <img src={Poster !== "N/A" ? Poster : poster} alt="image not found" />
            </div>
            <div className="info-column">
                <p><span className="movie-title">{Title}</span> <span className="movie-released">({Released})</span></p>
                <p><strong>Genre :</strong> {Genre}</p>
                <p><strong>Runtime :</strong> {Runtime}</p>
                <p><strong>Director(s) :</strong> {Director} </p>
                <p><strong>Actors(s) :</strong> {Actors}</p>
                <p><strong>Story :</strong> {Plot}</p>
                {Ratings.length > 0 ? <Rating Ratings={Ratings} /> : ""}
            </div>
        </div>
    )
}

export default MovieInfo;