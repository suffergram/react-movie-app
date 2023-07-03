import Card from '../Card/Card';
import GenreSection from '../GenreSection/GenreSection';
import SortSection from '../SortSection/SortSection';
import FoundMovieCounter from '../FoundMovieCounter/FoundMovieCounter';
import * as info from './info';
import useLoadMovies from '../Hooks/useLoadMovies';
import { Movie } from '../Types/MovieTypes';
import './style.css';
import Pagination from '../Pagination/Pagination';

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
