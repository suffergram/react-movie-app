import Button from '../Button/Button';
import MovieInfo from '../MovieInfo/MovieInfo';

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

export default function Header(
  {
    onMovieModalOpen,
    isMovieInfoOpen,
    onMovieInfoClose,
    movie,
  }:
  {
    onMovieModalOpen: (name: string) => void,
    isMovieInfoOpen: boolean,
    onMovieInfoClose: () => void,
    movie: MovieObject | null
  },
) {
  const handleClick = () => {
    onMovieModalOpen('add');
  };

  return (
    <header>
      <div className="header-content">
        <p className="logo logo-pos">
          <strong>
            netflix
          </strong>
          roulette
        </p>

        <Button
          className="add"
          onClick={handleClick}
        >
          + add movie
        </Button>

        <div>
          <h1>
            FIND YOUR MOVIE
          </h1>

          <div className="search-line">
            <input placeholder="What do you want to watch?" />

            <Button className="confirm">
              search
            </Button>
          </div>
        </div>
      </div>

      <div className="header-background">
        <div />
      </div>

      {isMovieInfoOpen
        ? (
          <MovieInfo
            movie={movie}
            onMovieInfoClose={onMovieInfoClose}
          />
        )
        : null}
    </header>
  );
}
