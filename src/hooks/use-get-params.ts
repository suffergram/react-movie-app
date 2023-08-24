import { useSearchParams } from 'react-router-dom';
import SearchParam, { OFFSET } from '../types/search-param';

export default function useGetParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // return {
  //   [SearchParam.Search]: searchParams.get(SearchParam.Search),
  //   [SearchParam.SortBy]: searchParams.get(SearchParam.SortBy),
  //   [SearchParam.Filter]: searchParams.get(SearchParam.Filter),
  //   [SearchParam.Offset]: searchParams.get(SearchParam.Offset),
  //   setSearchParams,
  // };

  const search = searchParams.get(SearchParam.Search) ?? '';

  const sortBy = searchParams.get(SearchParam.SortBy) ?? 'release_date';

  const filter = searchParams.get(SearchParam.Filter) ?? 'all';

  const offset = searchParams.get(SearchParam.Offset) ?? '0';

  return { search, sortBy, filter, offset, setSearchParams };
}
