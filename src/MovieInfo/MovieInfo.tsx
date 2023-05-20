import Button from '../Button/Button';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type MovieInfoProps = {
  onMovieInfoClose: () => void,
  movie: Movie | null,
};

export default function MovieInfo(
  { onMovieInfoClose, movie }: MovieInfoProps,
) {
  return (
    <div className="movie-info-container">
      <div>
        <p className="logo">netflixroulette</p>
        <Button onClick={onMovieInfoClose} className="close-search">
          <div className="search-icon">
            <div className="line" />
            <div className="circle" />
          </div>
        </Button>
        <div className="movie-info">
          <img src={movie?.url} alt={movie?.name} />
          <div>
            <div className="movie-name-rating">
              <h2>{movie?.name}</h2>
              <p>{movie?.rating}</p>
            </div>
            <p className="movie-genre">{movie?.genre}</p>
            <div className="movie-year-duration">
              <p>{movie?.year}</p>
              <p>{movie?.duration}</p>
            </div>
            <p className="movie-description">{movie?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
