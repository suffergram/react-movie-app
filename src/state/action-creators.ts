import { FormInput } from '../types/form-input';
import { Movie } from '../types/movie';
import { MovieListAction } from './constants';

export type MoviesDTO = {
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

export const handleStopLoadingAction = () => ({
  type: MovieListAction.HandleStopLoading,
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

export const handleUpdateAction = (data: FormInput) => ({
  type: MovieListAction.HandleUpdate,
  payload: data,
});

export default MovieListAction;
