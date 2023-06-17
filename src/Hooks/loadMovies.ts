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
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data.data))
      .catch((catchedError) => setError(catchedError))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, error, movies };
}
