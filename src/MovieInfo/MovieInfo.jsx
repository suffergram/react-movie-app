import "./style.css";
import { movies } from "../Main/info";

export default function MovieInfo() {
    return (
        <div className="movie-info-container">
            <div className="movie-info">
                <img src={movies[0].url} />
                <div className="movie-description">
                    <p>{movies[0].name}</p>
                </div>
            </div>
        </div>
    );
}