import { Movie } from '../Types/MovieTypes';

enum reducerActions {
  HANDLE_MOVIES = 'HANDLE_MOVIES',
  HANDLE_ERROR = 'HANDLE_ERROR',
  HANDLE_LOADING = 'HANDLE_LOADING',
  HANDLE_FILTER = 'HANDLE_FILTER',
  HANDLE_SORT = 'HANDLE_SORT',
  HANDLE_OFFSET = 'HANDLE_OFFSET',
}

type moviesJSON = {
  data: Array<Movie>;
  totalAmount: number;
};

export const handleMoviesAction = (data: moviesJSON) => ({
    type: reducerActions.HANDLE_MOVIES,
    payload: { movies: data.data, totalAmount: data.totalAmount },
  });

export const handleErrorAction = (error: string) => ({ type: reducerActions.HANDLE_ERROR, payload: error });

export const handleLoadingAction = () => ({ type: reducerActions.HANDLE_LOADING });

export const handleFilterAction = (filter: string) => ({ type: reducerActions.HANDLE_FILTER, payload: filter });

export const handleSortAction = (value: string) => ({ type: reducerActions.HANDLE_SORT, payload: value });

export const handleOffsetAction = (selected: number) => ({ type: reducerActions.HANDLE_OFFSET, payload: selected });

export default reducerActions;
