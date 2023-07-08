import { Movie } from '../Types/MovieTypes';
import { MovieListAction } from './constants';

type MoviesDTO = {
  data: Array<Movie>;
  totalAmount: number;
};

export const handleMoviesAction = (data: MoviesDTO) => ({
  type: MovieListAction.HandleMovies,
  payload: { movies: data.data, totalAmount: data.totalAmount },
});

export const handleErrorAction = (error: string) => ({
  type: MovieListAction.HandleError,
  payload: error,
});

export const handleLoadingAction = () => ({
  type: MovieListAction.HandleLoading,
});

export const handleFilterAction = (filter: string) => ({
  type: MovieListAction.HandleFilter,
  payload: filter,
});

export const handleSortAction = (value: string) => ({
  type: MovieListAction.HandleSort,
  payload: value,
});

export const handleOffsetAction = (selected: number) => ({
  type: MovieListAction.HandleOffset,
  payload: selected,
});

export default MovieListAction;
