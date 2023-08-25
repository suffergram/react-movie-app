import { useSearchParams } from 'react-router-dom';
import SearchParam from '../types/search-param';

export default function useGetParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  return {
    [SearchParam.Search]: searchParams.get(SearchParam.Search),
    [SearchParam.SortBy]: searchParams.get(SearchParam.SortBy),
    [SearchParam.Filter]: searchParams.get(SearchParam.Filter),
    [SearchParam.Offset]: searchParams.get(SearchParam.Offset),
    setSearchParams,
  };
}
