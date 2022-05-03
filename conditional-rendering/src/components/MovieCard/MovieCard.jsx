const MovieCard = ({ _id, title, director, IMDBRating, hasOscars, removeMovie }) => {

    function generateScoreLabel(score) {
        if (score > 9) {
            return <span className="green">9+</span>;
        } else if (score < 7) {
            return <span className="red">{score}</span>;
        } else {
            return <span className="black">{score}</span>;
        }
    }

    return (
        <div key={_id} className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>IMDB Rating: {generateScoreLabel(IMDBRating)}</p>
            {hasOscars ? <p>Tuvo oscar ✅ </p> : <p>No tuvo oscar 🚫</p>}
            <button className="btn-delete" onClick={() => removeMovie(_id)}>Delete </button>
        </div>
    )
}

export default MovieCard