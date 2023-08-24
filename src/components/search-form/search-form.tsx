import { FormEvent } from 'react';
import Button from '../button/button';
import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';

export default function SearchForm() {
  const { setSearchParams, ...params } = useGetParams();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as typeof event.target & {
      search: { value: string };
    };

    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Search]: form.search.value,
    });
    setSearchParams(newParams);
  };

  return (
    <form className="search-line" onSubmit={handleSubmit}>
      <input
        type={SearchParam.SortBy}
        name="search"
        placeholder="What do you want to watch?"
        defaultValue={params.search ?? ''}
      />
      <Button type="submit" className="confirm">
        search
      </Button>
    </form>
  );
}
