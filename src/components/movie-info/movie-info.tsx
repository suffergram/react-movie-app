import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import Logo from '../logo/logo';
import './style.css';

type MovieInfoProps = {
  movie: Movie | null;
};

export default function MovieInfo({ movie }: MovieInfoProps) {
  const navigate = useNavigate();

  const duration =
    movie &&
    `${Math.floor(movie.runtime / 60)}h 
      ${movie.runtime - Math.floor(movie.runtime / 60) * 60}min`;

  const handleClick = () => navigate(-1);

  return (
    <div className="movie-info-container">
      <div>
        <Logo />
        <button type="button" onClick={handleClick} className="close-search">
          <div className="search-icon">
            <div className="line" />
            <div className="circle" />
          </div>
        </button>
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
