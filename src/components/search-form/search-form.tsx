import { useForm } from 'react-hook-form';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';
import { StyledForm, StyledInput, StyledButton } from './style';

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
    <StyledForm className="search-line" onSubmit={handleSubmit(searchSubmit)}>
      <StyledInput
        type={SearchParam.Search}
        placeholder="What do you want to watch?"
        {...register(SearchParam.Search)}
      />
      <StyledButton type="submit" variant="primary">
        search
      </StyledButton>
    </StyledForm>
  );
}
