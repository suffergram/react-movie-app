import Button from '../button/button';
import { Movie } from '../../types/movie';
import './style.css';

type MovieInfoProps = {
  onMovieInfoClose: () => void;
  movie: Movie | null;
};

export default function MovieInfo({ onMovieInfoClose, movie }: MovieInfoProps) {
  const duration = movie
    ? `${Math.floor(movie.runtime / 60)}h 
      ${movie.runtime - Math.floor(movie.runtime / 60) * 60}min`
    : null;

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
          <img src={movie?.poster_path} alt={movie?.title} />
          <div>
            <div className="movie-name-rating">
              <h2>{movie?.title}</h2>
              <p>{movie?.vote_average}</p>
            </div>
            <p className="movie-genre">{movie?.genres.join(', ')}</p>
            <div className="movie-year-duration">
              <p>{movie?.release_date.slice(0, 4)}</p>
              <p>{duration}</p>
            </div>
            <p className="movie-description">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
