import { LOAD_MOVIES_AMOUNT } from './constants';

export function getUrlParams() {
  const searchParams = new URLSearchParams(window.location.search);

  if (!searchParams.has('sortBy')) searchParams.set('sortBy', 'release_date');
  if (searchParams.get('filter') === 'all') searchParams.set('filter', '');
  if (searchParams.has('search')) searchParams.append('searchBy', 'title');
  if (searchParams.has('offset'))
    searchParams.set(
      'offset',
      (Number(searchParams.get('offset')) * LOAD_MOVIES_AMOUNT).toString()
    );
  searchParams.append('limit', LOAD_MOVIES_AMOUNT.toString());
  searchParams.append('sortOrder', 'desc');

  return searchParams.toString();
}
