import React from 'react';
import Popover from '../Popover/Popover';

import './style.css';

interface MovieObject {
  id: number,
  name: string,
  year: number,
  duration: string,
  rating: number,
  genre: string,
  url: string,
  description: string
}

export default function Card(
  {
    onMovieModalOpen,
    onDeleteModalOpen,
    onMovieInfoOpen,
    movie,
  }:
  {
    onMovieModalOpen: (name: string) => void,
    onDeleteModalOpen: () => void,
    onMovieInfoOpen: (currentMovie: MovieObject) => void,
    movie: MovieObject
  },
) {
  const ref = React.createRef<HTMLDivElement>();

  const handleCardClick = () => {
    onMovieInfoOpen(movie);
  };

  return (
    <div
      className="card"
      ref={ref}
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
