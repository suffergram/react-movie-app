import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import { MovieService } from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
} from './action-creators';
import { SearchParamsType } from '../hooks/use-get-params';

export const removeMovie =
  (
    id: number,
    params: SearchParamsType
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      await MovieService.deleteMovie(id);
      const movies = await MovieService.getMovies(params);
      dispatch(handleMoviesAction(movies));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
