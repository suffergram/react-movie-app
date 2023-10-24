import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { SearchParam } from '../../types/search-param';

export type SearchParamsType = Partial<Record<SearchParam, string>>;

export function useGetParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = (newParams: URLSearchParams) => {
    const routerString = `?${newParams.toString()}`;
    router.replace(`${pathname}${routerString}`);
  };

  const params: SearchParamsType = {};

  if (
    searchParams.has(SearchParam.Search) &&
    searchParams.get(SearchParam.Search) !== ''
  ) {
    params[SearchParam.Search] = searchParams.get(SearchParam.Search) ?? '';
  }

  if (
    searchParams.has(SearchParam.Filter) &&
    searchParams.get(SearchParam.Filter) !== 'all'
  ) {
    params[SearchParam.Filter] = searchParams.get(SearchParam.Filter) ?? '';
  }

  if (
    searchParams.has(SearchParam.SortBy) &&
    searchParams.get(SearchParam.SortBy) !== 'release_date'
  ) {
    params[SearchParam.SortBy] = searchParams.get(SearchParam.SortBy) ?? '';
  }

  if (
    searchParams.has(SearchParam.Offset) &&
    searchParams.get(SearchParam.Offset) !== '0'
  ) {
    params[SearchParam.Offset] = searchParams.get(SearchParam.Offset) ?? '';
  }

  return [params, setSearchParams] as const;
}
