import { FormEvent } from 'react';
import Button from '../button/button';
import useGetParams from '../../hooks/use-get-params';

export default function SearchForm() {
  const { search, setSearchParams } = useGetParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      search: { value: string };
    };

    const query = form.search?.value;

    setSearchParams((params) => {
      params.set('search', query);
      return params;
    });
  };

  return (
    <form className="search-line" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="What do you want to watch?"
        defaultValue={search ?? ''}
      />
      <Button type="submit" className="confirm">
        search
      </Button>
    </form>
  );
}
