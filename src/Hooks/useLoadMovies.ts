import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StateType from '../Types/StateType';

export default function useLoadMovies() {
  const dispatch = useDispatch();

  const { movies, isLoading, error, sort, filter, totalAmount, offset } =
    useSelector((state: StateType) => state);

  // TODO: thunk
  useEffect(() => {
    dispatch({ type: 'handleLoading' });
    fetch(
      `http://localhost:4000/movies?sortBy=${sort}&sortOrder=desc${
        filter !== 'all' ? `&filter=${filter}` : ''
      }&offset=${offset}&limit=9`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'handleMovies',
          payload: { movies: data.data, totalAmount: data.totalAmount },
        });
      })
      .catch((catchedError) => {
        dispatch({ type: 'handleError', payload: catchedError });
      });
  }, [dispatch, sort, filter, offset]);

  return { isLoading, error, movies, totalAmount };
}
