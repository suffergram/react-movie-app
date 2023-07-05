import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../Types/RootState';
import { handleLoadingAction } from '../state/reducerActions';
import { useAppDispatch } from '../state/store';
import fetchMovies from '../asyncActions/fetchMovies';

export default function useLoadMovies() {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const { movies, isLoading, error, sort, filter, totalAmount, offset } =
    useSelector((state: RootState) => state.movieState);

  useEffect(() => {
    dispatch(handleLoadingAction());
    appDispatch(fetchMovies(filter, sort, offset));
  }, [dispatch, appDispatch, sort, filter, offset]);

  return { isLoading, error, movies, totalAmount };
}
