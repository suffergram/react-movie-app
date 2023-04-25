import "./style.css";
import { movies } from "../Main/info";
import Button from "../Button/Button";

export default function MovieInfo({ movieId, onCloseMovieInfo }) {
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
                    <img src={movies[movieId].url} />
                    <div>
                        <div className="movie-name-rating">
                            <h2>{movies[movieId].name}</h2>
                            <p>{movies[movieId].rating}</p>
                        </div>
                        <p className="movie-genre">{movies[movieId].genre}</p>
                        <div className="movie-year-duration">
                            <p>{movies[movieId].year}</p>
                            <p>{movies[movieId].duration}</p>
                        </div>
                        <p className="movie-description">{movies[movieId].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}