import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Movie } from '../../types/movie';
import MovieInfo from '../../components/movie-info/movie-info';

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  fetch(`http://localhost:4000/movies/${movieId}`)
    .then((response) => response.json())
    .then((data) => setMovie(data));

  return <MovieInfo movie={movie} />;
}
