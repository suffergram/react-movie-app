import PropTypes from 'prop-types';
import Card from '../Card/Card';
import TabSection from '../TabSection/TabSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';

import './style.css';

function Main({ onMovieModalOpen, onDeleteModalOpen, onMovieInfoOpen }) {
  return (
    <main>
      <div className="content">
        <div className="row">
          <TabSection genres={info.genres} />

          <SortSection sort={info.sortBy} />
        </div>

        <hr />

        <div className="row">
          <FoundMovieCounter number={info.movies.length} />
        </div>

        <div className="found">
          {info.movies.map((item) => (
            <Card
              key={item.id}
              movie={item}
              onDeleteModalOpen={onDeleteModalOpen}
              onMovieModalOpen={onMovieModalOpen}
              onMovieInfoOpen={onMovieInfoOpen}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  onMovieModalOpen: PropTypes.func.isRequired,
  onDeleteModalOpen: PropTypes.func.isRequired,
  onMovieInfoOpen: PropTypes.func.isRequired,
};

export default Main;
