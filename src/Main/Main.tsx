import Card from '../Card/Card';
import TabSection from '../TabSection/TabSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';
import { Movie } from '../Types/MovieTypes';

import './style.css';

export default function Main(
  {
    onMovieModalOpen,
    onDeleteModalOpen,
    onMovieInfoOpen,
    movies,
  }:
  {
    onMovieModalOpen: (name: string) => void,
    onDeleteModalOpen: () => void,
    onMovieInfoOpen: (currentMovie: Movie) => void
    movies: Movie[],
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
          <FoundMovieCounter number={movies.length} />
        </div>

        <div className="found">
          {movies.map((item: Movie) => (
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
