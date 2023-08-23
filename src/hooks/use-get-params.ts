import { useSearchParams } from 'react-router-dom';
import SearchParam from '../types/search-param';

export default function useGetParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { Search, SortBy, Filter, Offset } = SearchParam;

  const search = searchParams.get(Search);
  const sortBy = searchParams.get(SortBy) ?? 'release_date';
  const filter = searchParams.get(Filter) ?? 'all';
  const offset = Number(searchParams.get(Offset));

  return { search, sortBy, filter, offset, setSearchParams };
}
