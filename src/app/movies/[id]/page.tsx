'use client';

import { MoviePage } from '../../../pages/movie-page/movie-page';
import { MovieService } from '../../../services/movie-service';
import { Layout } from '../../../components/layout/layout';

type PageParams = {
  params: {
    id: number;
  };
};

export default async function Page({ params }: PageParams) {
  const movie = await MovieService.getMovie(params.id);

  return (
    <Layout>
      <MoviePage movie={movie} />
    </Layout>
  );
}
