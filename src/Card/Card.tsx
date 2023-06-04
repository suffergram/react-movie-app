import { useContext, memo } from 'react';
import Popover from '../Popover/Popover';
import AppContext from '../AppContext/AppContext';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type CardProps = {
  movie: Movie,
};

const Card = memo(({ movie }: CardProps) => {
  const {
    handleMovieModalOpen,
    handleDeleteModalOpen,
    handleMovieInfoOpen,
  } = useContext(AppContext);

  const handleCardClick = () => {
    handleMovieInfoOpen(movie);
  };

  return (
    <div
      className="card"
    >
      <button
        id={movie.id.toString()}
        onClick={handleCardClick}
        onKeyDown={handleCardClick}
        className="card-image-container"
        type="button"
      >
        <img
          src={movie.url}
          alt={movie.name}
        />
      </button>

      <Popover
        onDeleteModalOpen={handleDeleteModalOpen}
        onMovieModalOpen={handleMovieModalOpen}
      />

      <div className="description">
        <div className="year">
          {movie.year}
        </div>

        <p className="title">
          {movie.name}
        </p>

        <p className="genre">
          {movie.genre}
        </p>
      </div>
    </div>
  );
});

export default Card;
