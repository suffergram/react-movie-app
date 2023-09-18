import { useForm } from 'react-hook-form';
import { Button } from '../button/button';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';

type SearchFormType = {
  search: string;
};

export function SearchForm() {
  const [params, setSearchParams] = useGetParams();

  const { register, handleSubmit } = useForm<SearchFormType>({
    values: {
      search: params[SearchParam.Search] ?? '',
    },
  });

  const searchSubmit = (data: SearchFormType) => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Search]: data.search,
    });
    setSearchParams(newParams);
  };

  return (
    <form className="search-line" onSubmit={handleSubmit(searchSubmit)}>
      <input
        type={SearchParam.Search}
        placeholder="What do you want to watch?"
        {...register(SearchParam.Search)}
      />
      <Button type="submit" className="confirm">
        search
      </Button>
    </form>
  );
}
