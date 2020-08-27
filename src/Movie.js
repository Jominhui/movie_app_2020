import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({year, title, summary, poster}) =>{
return (
    <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h3 class="movie_year">{year}</h3>
            <h3 class="movie_summary">{summary}</h3>
        </div>
    </div>
)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;