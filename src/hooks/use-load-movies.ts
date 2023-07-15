import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import RootState from '../types/root-state';
import fetchMovies from '../state/fetch-movies';

export default function useLoadMovies() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { movies, isLoading, error, sort, filter, totalAmount, offset } =
    useSelector((state: RootState) => state.movieState);

  useEffect(() => {
    dispatch(fetchMovies(filter, sort, offset));
  }, [dispatch, sort, filter, offset]);

  return { isLoading, error, movies, totalAmount };
}
