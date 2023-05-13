import Popover from '../Popover/Popover';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type CardProps = {
  movie: Movie,
  onMovieModalOpen: (name: string) => void,
  onDeleteModalOpen: () => void,
  onMovieInfoOpen: (currentMovie: Movie) => void,
};

export default function Card(
  {
    onMovieModalOpen,
    onDeleteModalOpen,
    onMovieInfoOpen,
    movie,
  }: CardProps,
) {
  const handleCardClick = () => {
    onMovieInfoOpen(movie);
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
        onDeleteModalOpen={onDeleteModalOpen}
        onMovieModalOpen={onMovieModalOpen}
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
