import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import RootState from '../types/root-state';
import fetchMovies from '../state/fetch-movies';
import useGetParams from './use-get-params';

export default function useLoadMovies() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { movies, isLoading, error, totalAmount } = useSelector(
    (state: RootState) => state.movieState
  );

  const { search, sortBy, filter, offset } = useGetParams();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, search, sortBy, filter, offset]);

  return { isLoading, error, movies, totalAmount };
}
