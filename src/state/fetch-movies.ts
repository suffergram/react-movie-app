import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import MovieService from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
  handleStopLoadingAction,
} from './action-creators';

const fetchMovies =
  (
    filter: string,
    sort: string,
    offset: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(handleLoadingAction());
    MovieService.getMovies(filter, sort, offset)
      .then((data) => {
        dispatch(handleMoviesAction(data));
        dispatch(handleStopLoadingAction());
      })
      .catch((catchedError) => {
        dispatch(handleErrorAction(catchedError));
      });
  };

export default fetchMovies;
