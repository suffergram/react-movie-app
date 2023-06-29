import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../state/reducer';

export default function useLoadMovies() {
  const dispatch = useDispatch();

  const movies = useSelector((state: StateType) => state.movies);

  const isLoading = useSelector((state: StateType) => state.isLoading);

  const error = useSelector((state: StateType) => state.error);

  // thunk
  useEffect(() => {
    dispatch({ type: 'handleLoading' });
    fetch('http://localhost:4000/movies?offset=150&limit=30')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'handleMovies', payload: data.data });
      })
      .catch((catchedError) => {
        dispatch({ type: 'handleError', payload: catchedError });
      });
  }, [dispatch]);

  return { isLoading, error, movies };
}
