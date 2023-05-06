import PropTypes from 'prop-types';
import React from 'react';
import Popover from '../Popover/Popover';

import './style.css';

function Card({
  onMovieModalOpen, onDeleteModalOpen, onMovieInfoOpen, movie,
}) {
  const ref = React.useRef();

  const handleCardClick = () => {
    onMovieInfoOpen(movie);
  };

  return (
    <div
      className="card"
      ref={ref}
    >
      <button
        id={movie.id}
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

Card.propTypes = {
  onMovieModalOpen: PropTypes.func.isRequired,
  onDeleteModalOpen: PropTypes.func.isRequired,
  onMovieInfoOpen: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Card;
