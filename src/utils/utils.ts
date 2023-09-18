import { SearchParamsType } from '../hooks/use-get-params/use-get-params';
import { LOAD_MOVIES_AMOUNT } from '../state/constants';
import { SearchParam } from '../types/search-param';

export function getUrlParams(params: SearchParamsType) {
  const searchParams = new URLSearchParams(params);

  if (!searchParams.has(SearchParam.SortBy)) {
    searchParams.set(SearchParam.SortBy, 'release_date');
  }

  if (searchParams.get(SearchParam.Filter) === 'all') {
    searchParams.set(SearchParam.Filter, '');
  }

  if (searchParams.has(SearchParam.Search)) {
    searchParams.append(SearchParam.SearchBy, 'title');
  }

  if (searchParams.has(SearchParam.Offset)) {
    searchParams.set(
      SearchParam.Offset,
      (
        Number(searchParams.get(SearchParam.Offset)) * LOAD_MOVIES_AMOUNT
      ).toString()
    );
  }

  searchParams.append(SearchParam.Limit, LOAD_MOVIES_AMOUNT.toString());
  searchParams.append(SearchParam.SortOrder, 'desc');

  return searchParams.toString();
}

export function calculateDuration(runtime: number) {
  if (runtime < 0) return 'unexpected runtime';
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  return `${hours}h ${minutes}min`;
}
