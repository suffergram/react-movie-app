import { Metadata } from 'next';
import { MovieService } from '../../../services/movie-service';

type MetadataProps = {
  params: {
    id: number;
  };
};

async function getData(id: number) {
  return MovieService.getMovie(id);
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const movie = await getData(params.id);

  return {
    title: movie.title,
    description: movie.description,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
