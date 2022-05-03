const MovieCard = ({ _id, title, director, IMDBRating, removeMovie }) => {

    return (
        <div key={_id} className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            <button className="btn-delete" onClick={() => removeMovie(_id)}>Delete </button>
        </div>
    )
}

export default MovieCard