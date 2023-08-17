import { useSearchParams } from 'react-router-dom';

export default function useGetParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const sortBy = searchParams.get('sortBy') ?? 'release_date';
  const filter = searchParams.get('filter') ?? 'all';
  const offset = Number(searchParams.get('offset'));

  return { search, sortBy, filter, offset, setSearchParams };
}
