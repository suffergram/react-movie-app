import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../types/root-state';
import MovieService from '../services/movies-service';
import {
  handleErrorAction,
  handleLoadingAction,
  handleSortAction,
  handleStopLoadingAction,
  handleUpdateAction,
} from './action-creators';
import { FormInput } from '../types/form-input';

const putMovie =
  (
    data: FormInput,
    onModalClose: () => void,
    sort: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(handleLoadingAction());
    MovieService.updateMovie(data)
      .then(() => {
        dispatch(handleUpdateAction(data));
        onModalClose();
      })
      .then(() => dispatch(handleSortAction(sort)))
      .then(() => dispatch(handleStopLoadingAction()))
      .catch((catchedError) => {
        dispatch(handleErrorAction(catchedError));
      });
  };

export default putMovie;
