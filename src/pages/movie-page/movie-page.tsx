import { Suspense } from 'react';
import { MovieInfo } from '../../components/movie-info/movie-info';
import { Movie } from '../../types/movie';
import { Loading } from '../../components/loading/loading';

export function MoviePage({ movie }: { movie: Movie }) {
  return (
    <Suspense fallback={<Loading />}>
      <MovieInfo movie={movie} />
    </Suspense>
  );
}
