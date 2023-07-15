import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
} from './action-creators';
import { getUrlParams } from './utils';

const fetchMovies =
  (
    filter: string,
    sort: string,
    offset: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    const urlParams = getUrlParams(filter, sort, offset);
    const url = `http://localhost:4000/movies?${urlParams}`;
    dispatch(handleLoadingAction());
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(handleMoviesAction(data));
      })
      .catch((catchedError) => {
        dispatch(handleErrorAction(catchedError));
      });
  };

export default fetchMovies;
