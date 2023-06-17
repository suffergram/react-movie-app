import Card from '../Card/Card';
import GenreSection from '../GenreSection/GenreSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';
import { Movie } from '../Types/MovieTypes';
import './style.css';

type MainProps = {
  isLoading: boolean;
  movies: Movie[];
  loadingError: unknown;
};

export default function Main({ isLoading, movies, loadingError }: MainProps) {
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
          {!isLoading &&
            !loadingError &&
            movies.map((item: Movie) => <Card key={item.id} movie={item} />)}
        </div>
      </div>
    </main>
  );
}
