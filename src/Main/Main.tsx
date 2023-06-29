import { useSelector } from 'react-redux';
import { StateType } from '../state/reducer';
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
  const getFilteredMovies = (movies: Movie[], filter: string): Movie[] => {
    if (filter === 'all') return movies;
    return movies.filter((movie) =>
      movie.genres.map((genre) => genre.toLowerCase()).includes(filter)
    );
  };

  const filter = useSelector((state: StateType) => state.filter);

  const filteredMovies = getFilteredMovies(movies, filter);

  return (
    <main>
      <div className="content">
        <div className="row">
          <GenreSection genres={info.genres} />
          <SortSection sort={info.sortBy} />
        </div>
        <hr />
        <div className="row">
          <FoundMovieCounter amount={filteredMovies.length} />
        </div>
        <div className="found">
          {!isLoading &&
            !loadingError &&
            filteredMovies.map((item: Movie) => (
              <Card key={item.id} movie={item} />
            ))}
        </div>
      </div>
    </main>
  );
}
