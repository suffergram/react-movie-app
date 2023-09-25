import { ChangeEvent } from 'react';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';
import {
  Container,
  StyledParagraph,
  StyledSelect,
  StyledOption,
} from './style';

interface SortOption {
  id: number;
  name: string;
  displayLabel: string;
}

type SortSectionProps = {
  sort: SortOption[];
};

export function SortSection({ sort }: SortSectionProps) {
  const [params, setSearchParams] = useGetParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.SortBy]: event.target.value,
    });
    setSearchParams(newParams);
  };

  return (
    <Container>
      <StyledParagraph>SORT BY</StyledParagraph>
      <StyledSelect
        onChange={handleChange}
        value={params[SearchParam.SortBy] ?? 'release_date'}
      >
        {sort.map((item) => (
          <StyledOption key={item.id} value={item.name}>
            {item.displayLabel}
          </StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
}
