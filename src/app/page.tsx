import { Main } from '../components/main/main';
import { Header } from '../components/header/header';
import { ModalProvider } from '../components/modal-provider/modal-provider';
import { SearchParamsType } from '../hooks/use-get-params/use-get-params';
import { MovieService } from '../services/movie-service';

async function getData(params: SearchParamsType) {
  return MovieService.getMovies(params);
}

type PageType = {
  searchParams: SearchParamsType;
};

export default async function Page({ searchParams }: PageType) {
  const data = await getData(searchParams);

  return (
    <ModalProvider>
      <Header />
      <Main {...data} />
    </ModalProvider>
  );
}
