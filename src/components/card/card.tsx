import { useContext, memo } from 'react';
import Popover from '../popover/popover';
import AppContext from '../app-context/app-context';
import { Movie } from '../../types/movie';
import './style.css';

type CardProps = {
  movie: Movie;
};

const Card = memo(({ movie }: CardProps) => {
  const { handleMovieModalOpen, handleDeleteModalOpen, handleMovieInfoOpen } =
    useContext(AppContext);

  const handleCardClick = () => {
    handleMovieInfoOpen(movie);
  };

  return (
    <div className="card">
      <button
        id={movie.id.toString()}
        onClick={handleCardClick}
        onKeyDown={handleCardClick}
        className="card-image-container"
        type="button"
      >
        <img src={movie.poster_path} alt={movie.title} />
      </button>

      <Popover
        onDeleteModalOpen={handleDeleteModalOpen}
        onMovieModalOpen={handleMovieModalOpen}
      />

      <div className="description">
        <div className="year">{movie.release_date.slice(0, 4)}</div>
        <p className="title">{movie.title}</p>
        <p className="genre">{movie.genres.join(', ')}</p>
      </div>
    </div>
  );
});

export default Card;
