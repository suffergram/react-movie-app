import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../types/root-state';
import { fetchMovies } from '../state/fetch-movies/fetch-movies';
import { useGetParams } from './use-get-params/use-get-params';

export function useLoadMovies() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { movies, isLoading, error, totalAmount } = useSelector(
    (state: RootState) => state.movieState
  );

  const [params] = useGetParams();

  useEffect(() => {
    dispatch(fetchMovies(params));
  }, [dispatch, params.search, params.sortBy, params.filter, params.offset]);

  return { isLoading, error, movies, totalAmount };
}
