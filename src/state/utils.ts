import { LOAD_MOVIES_AMOUNT } from './constants';

export function getUrlParams(filter: string, sort: string, offset: number) {
  const searchParams = new URLSearchParams();

  if (filter !== 'all') searchParams.append('filter', filter);
  searchParams.append('sortBy', sort);
  searchParams.append('offset', offset.toString());
  searchParams.append('limit', LOAD_MOVIES_AMOUNT.toString());
  searchParams.append('sortOrder', 'desc');

  return searchParams.toString();
}
