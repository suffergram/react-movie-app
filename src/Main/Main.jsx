import './style.css';
import * as info from './info';
import Card from '../Card/Card';
import TabSection from '../TabSection/TabSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';

export default function Main({ newModal, newDeleteModal, newMovieInfo }) {
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
              newDeleteModal={newDeleteModal}
              newModal={newModal}
              newMovieInfo={newMovieInfo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
