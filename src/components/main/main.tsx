import Card from '../card/card';
import GenreSection from '../genre-section/genre-section';
import SortSection from '../sort-section/sort-section';
import FoundMovieCounter from '../found-movie-counter/found-movie-counter';
import * as info from './info';
import useLoadMovies from '../../hooks/use-load-movies';
import { Movie } from '../../types/movie';
import Pagination from '../pagination/pagination';
import './style.css';

export default function Main() {
  const { isLoading, error, movies, totalAmount } = useLoadMovies();
  return (
    <main>
      <div className="content">
        <div className="row">
          <GenreSection genres={info.genres} />
          <SortSection sort={info.sortBy} />
        </div>
        <hr />
        <div className="row">
          <FoundMovieCounter amount={totalAmount} />
        </div>
        <div className="found">
          {!isLoading &&
            !error &&
            movies.map((item: Movie) => <Card key={item.id} movie={item} />)}
        </div>
        <Pagination />
      </div>
    </main>
  );
}
