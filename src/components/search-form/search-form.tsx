import { FormEvent } from 'react';
import Button from '../button/button';
import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';

export default function SearchForm() {
  const { search, setSearchParams } = useGetParams();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const form = event.target as typeof event.target & {
      search: { value: string };
    };

    params.set(SearchParam.Search, form.search?.value);
    setSearchParams(params);
  };

  return (
    <form className="search-line" onSubmit={handleSubmit}>
      <input
        type={SearchParam.Search}
        name={SearchParam.Search}
        placeholder="What do you want to watch?"
        defaultValue={search ?? ''}
      />
      <Button type="submit" className="confirm">
        search
      </Button>
    </form>
  );
}
