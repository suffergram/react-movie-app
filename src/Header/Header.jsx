import PropTypes from 'prop-types';
import Button from '../Button/Button';
import MovieInfo from '../MovieInfo/MovieInfo';

import './style.css';

function Header({
  onMovieModalOpen, isMovieInfoOpen, onMovieInfoClose, movie,
}) {
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

Header.propTypes = {
  onMovieModalOpen: PropTypes.func.isRequired,
  isMovieInfoOpen: PropTypes.bool.isRequired,
  onMovieInfoClose: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  }),
};

Header.defaultProps = {
  movie: undefined,
};

export default Header;
