import { movies as moviesFromAPI } from "../../fakeAPI"
import { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(moviesFromAPI)

    const removeMovie = movieID => {
        const newMovies = moviesList.filter(elm => elm._id != movieID)
        setMoviesList(newMovies)
    }

    return (
        moviesList.map(movie => <MovieCard {...movie} key={movie._id} removeMovie={removeMovie} />)
    )
}

export default MoviesList 