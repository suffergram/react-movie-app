import { useContext } from 'react';
import Popover from '../Popover/Popover';
import CardContext from '../Hooks/cardContext';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type CardProps = {
  movie: Movie,
};

export default function Card({ movie }: CardProps) {
  const {
    handleMovieModalOpen,
    handleDeleteModalOpen,
    handleMovieInfoOpen,
  } = useContext(CardContext);

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
}
