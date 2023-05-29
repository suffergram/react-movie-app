import { useState, useEffect } from 'react';
import * as info from '../Main/info';
import { Movie } from '../Types/MovieTypes';

function getInitialMovies() {
  return [];
}

export default function useLoadMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>(() => getInitialMovies());
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        setMovies(info.movies.slice());
      } catch (catchedError) {
        setError(catchedError);
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return { isLoading, error, movies };
}
