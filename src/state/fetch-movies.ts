import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import MovieService from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
} from './action-creators';

const fetchMovies =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ) => {
    try {
      const {
        movieState: { filter, sort, offset },
      } = getState();

      dispatch(handleLoadingAction());
      const movies = await MovieService.getMovies(filter, sort, offset);
      dispatch(handleMoviesAction(movies));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };

export default fetchMovies;
