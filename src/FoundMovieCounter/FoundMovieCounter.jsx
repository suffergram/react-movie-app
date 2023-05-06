import './style';

export default function FoundMovieCounter({ number }) {
    return (
        <div className="results">
            <div className="movie-counter"><strong>{number}</strong> movies found</div>
        </div>
    );
}