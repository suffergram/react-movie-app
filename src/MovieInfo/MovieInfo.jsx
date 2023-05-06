import "./style.css";
import Button from "../Button/Button";

export default function MovieInfo({ onCloseMovieInfo, movie }) {
    return (
        <div className="movie-info-container">
            <div>
                <p className="logo">netflixroulette</p>
                <Button onClick={onCloseMovieInfo} className="close-search">
                    <div className="search-icon">
                        <div className="line" />
                        <div className="circle" />
                    </div>
                    </Button>
                <div className="movie-info">
                    <img src={movie.url} />
                    <div>
                        <div className="movie-name-rating">
                            <h2>{movie.name}</h2>
                            <p>{movie.rating}</p>
                        </div>
                        <p className="movie-genre">{movie.genre}</p>
                        <div className="movie-year-duration">
                            <p>{movie.year}</p>
                            <p>{movie.duration}</p>
                        </div>
                        <p className="movie-description">{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}