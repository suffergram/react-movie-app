import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import MovieService from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleSortAction,
  handleUpdateAction,
} from './action-creators';
import { FormInput } from '../types/form-input';

const putMovie =
  (data: FormInput): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ) => {
    try {
      const {
        movieState: { sort },
      } = getState();

      dispatch(handleLoadingAction());
      const movie = await MovieService.updateMovie(data);
      dispatch(handleUpdateAction(movie));
      dispatch(handleSortAction(sort));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };

export default putMovie;
