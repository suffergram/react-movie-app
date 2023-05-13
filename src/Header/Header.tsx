import Button from '../Button/Button';
import MovieInfo from '../MovieInfo/MovieInfo';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type HeaderProps = {
  onMovieModalOpen: (name: string) => void,
  isMovieInfoOpen: boolean,
  onMovieInfoClose: () => void,
  movie: Movie | null
};

export default function Header(
  {
    onMovieModalOpen,
    isMovieInfoOpen,
    onMovieInfoClose,
    movie,
  }: HeaderProps,
) {
  const handleClick = () => {
    onMovieModalOpen('add');
  };

  return (
    <header className="header-container">
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
