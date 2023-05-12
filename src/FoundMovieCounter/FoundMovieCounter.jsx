import PropTypes from 'prop-types';

import './style.css';

function FoundMovieCounter({ number }) {
  return (
    <div className="results">
      <div className="movie-counter">
        <strong>
          {number}
        </strong>

        {' '}
        movies found
      </div>
    </div>
  );
}

FoundMovieCounter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default FoundMovieCounter;
