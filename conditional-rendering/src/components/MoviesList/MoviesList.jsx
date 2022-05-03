import { movies as moviesFromAPI } from "../../fakeAPI"
import { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(moviesFromAPI)
    const [showMovies, setShowMovies] = useState(true)

    const removeMovie = movieID => {
        const newMovies = moviesList.filter(elm => elm._id != movieID)              // retorna nuevo array
        setMoviesList(newMovies)
    }

    const removeFirstMovie = () => {
        const moviesCopy = [...moviesList]
        moviesCopy.shift()                                                          // no retorna nuevo array
        setMoviesList(moviesCopy)
    }

    const toggleMovies = () => setShowMovies(!showMovies)

    return (
        <>
            <h1>Listado de pelis yay</h1>

            <button onClick={toggleMovies}>{showMovies ? 'Ocultar' : 'Mostrar'} películas</button>

            <button onClick={removeFirstMovie}>Quitar primera pelicula (ojo que muto)</button>

            {showMovies && moviesList.map(movie => <MovieCard {...movie} key={movie._id} removeMovie={removeMovie} />)}
        </>
    )
}

export default MoviesList 