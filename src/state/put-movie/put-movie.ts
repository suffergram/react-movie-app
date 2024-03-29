import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../types/root-state';
import { MovieService } from '../../services/movie-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleUpdateAction,
} from '../action-creators';
import { FormInput } from '../../types/form-input';

export const putMovie =
  (data: FormInput): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      const movie = await MovieService.updateMovie(data);
      dispatch(handleUpdateAction(movie));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
