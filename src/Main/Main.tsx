import Card from '../Card/Card';
import GenreSection from '../GenreSection/GenreSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type MainProps = {
  onMovieModalOpen: (name: string) => void,
  onDeleteModalOpen: () => void,
  onMovieInfoOpen: (currentMovie: Movie) => void
  movies: Movie[],
};

export default function Main(
  {
    onMovieModalOpen,
    onDeleteModalOpen,
    onMovieInfoOpen,
    movies,
  }: MainProps,
) {
  return (
    <main>
      <div className="content">
        <div className="row">
          <GenreSection genres={info.genres} />

          <SortSection sort={info.sortBy} />
        </div>

        <hr />

        <div className="row">
          <FoundMovieCounter amount={movies.length} />
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
