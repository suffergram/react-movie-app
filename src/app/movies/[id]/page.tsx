import { MovieInfo } from '../../../components/movie-info/movie-info';
import { MovieService } from '../../../services/movie-service';

type PageParams = {
  params: {
    id: number;
  };
};

async function getData(id: number) {
  return MovieService.getMovie(id);
}

export const revalidate = 1;

export default async function Page({ params }: PageParams) {
  const movie = await getData(params.id);
  return <MovieInfo movie={movie} />;
}
