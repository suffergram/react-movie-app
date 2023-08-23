import { Suspense } from 'react';
import { Await, Params, defer, useLoaderData } from 'react-router-dom';
import MovieInfo from '../../components/movie-info/movie-info';
import MovieService from '../../services/movies-service';
import { Movie } from '../../types/movie';
import Loading from '../../components/loading/loading';
import './style.css';

type MovieLoaderParams = {
  params: Params;
};

type LoaderData = {
  movie: Movie;
};

export default function MoviePage() {
  const { movie } = useLoaderData() as LoaderData;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={movie}>
        <MovieInfo />
      </Await>
    </Suspense>
  );
}

export const movieLoader = async ({ params }: MovieLoaderParams) => {
  const movie = MovieService.getMovie(params.movieId);

  // if (!movie) {  // how to check a promise?
  //   throw json({ message: 'Not Found', reason: 'Wrong URL' }, { status: 404 });
  // }

  return defer({ movie });
};
