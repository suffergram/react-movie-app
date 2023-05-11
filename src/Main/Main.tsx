import Card from '../Card/Card';
import TabSection from '../TabSection/TabSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';

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

export default function Main(
  {
    onMovieModalOpen,
    onDeleteModalOpen,
    onMovieInfoOpen,
  }:
  {
    onMovieModalOpen: (name: string) => void,
    onDeleteModalOpen: () => void,
    onMovieInfoOpen: (currentMovie: MovieObject) => void
  },
) {
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
          {info.movies.map((item: MovieObject) => (
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
