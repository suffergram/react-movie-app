import { LOAD_MOVIES_AMOUNT } from '../state/constants';
import SearchParam from '../types/search-param';

export function getUrlParams() {
  const searchParams = new URLSearchParams(window.location.search);

  const { Search, SearchBy, Filter, SortBy, SortOrder, Offset, Limit } =
    SearchParam;

  if (!searchParams.has(SortBy)) searchParams.set(SortBy, 'release_date');
  if (searchParams.get(Filter) === 'all') searchParams.set(Filter, '');
  if (searchParams.has(Search)) searchParams.append(SearchBy, 'title');
  if (searchParams.has(Offset))
    searchParams.set(
      Offset,
      (Number(searchParams.get(Offset)) * LOAD_MOVIES_AMOUNT).toString()
    );
  searchParams.append(Limit, LOAD_MOVIES_AMOUNT.toString());
  searchParams.append(SortOrder, 'desc');

  return searchParams.toString();
}

export function calculateDuration(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  return `${hours}h ${minutes}min`;
}
