import './style.css';
import React from 'react';
import Popover from '../Popover/Popover';

export default function Card({
  newModal, newDeleteModal, newMovieInfo, movie,
}) {
  const ref = React.useRef();

    const handleCardClick = () => {
        newMovieInfo(movie);
    }

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
        newDeleteModal={newDeleteModal}
        newModal={newModal}
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
