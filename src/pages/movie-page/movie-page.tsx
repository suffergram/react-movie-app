import { Suspense } from 'react';
import { Await, Params, defer, useLoaderData } from 'react-router-dom';
import MovieInfo from '../../components/movie-info/movie-info';
import MovieService from '../../services/movies-service';
import { Movie } from '../../types/movie';
import Loading from '../../components/loading/loading';
import './style.css';
import ErrorPage from '../error-page/error-page';

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
      <Await errorElement={<ErrorPage />} resolve={movie}>
        <MovieInfo />
      </Await>
    </Suspense>
  );
}

export const movieLoader = async ({ params }: MovieLoaderParams) => {
  const movie = MovieService.getMovie(params.movieId);

  return defer({ movie });
};
