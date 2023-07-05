import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import RootState from '../Types/RootState';
import { handleErrorAction, handleMoviesAction } from '../state/reducerActions';

const fetchMovies = (
  filter: string,
  sort: string,
  offset: number
): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => fetch(
      `http://localhost:4000/movies?sortBy=${sort}&sortOrder=desc${
        filter !== 'all' ? `&filter=${filter}` : ''
      }&offset=${offset}&limit=9`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(handleMoviesAction(data));
      })
      .catch((catchedError) => {
        dispatch(handleErrorAction(catchedError));
      });

export default fetchMovies;
