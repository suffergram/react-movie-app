import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import MovieService from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
} from './action-creators';
import { FormInput } from '../types/form-input';

const postMovie =
  (data: FormInput): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      await MovieService.createMovie(data);
      const movies = await MovieService.getMovies();
      dispatch(handleMoviesAction(movies));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };

export default postMovie;
