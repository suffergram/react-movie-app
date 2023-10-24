import { MouseEvent } from 'react';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';
import { Tab } from '../tab/tab';
import { StyledFieldset } from './style';

interface Genre {
  id: number;
  name: string;
}

type GenreSectionProps = {
  genres: Genre[];
};

export function GenreSection({ genres }: GenreSectionProps) {
  const [params, setSearchParams] = useGetParams();

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Filter]: target.value,
    });
    if (params[SearchParam.Offset]) newParams.set(SearchParam.Offset, '0');
    setSearchParams(newParams);
  };

  return (
    <StyledFieldset>
      {genres.map((item) => (
        <Tab
          key={item.id}
          checked={
            (!params[SearchParam.Filter] && item.name === 'all') ||
            params[SearchParam.Filter] === item.name
          }
          name={SearchParam.Filter}
          onClick={handleClick}
          value={item.name}
        />
      ))}
    </StyledFieldset>
  );
}
