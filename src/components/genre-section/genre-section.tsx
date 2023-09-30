import { ChangeEvent } from 'react';
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

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Filter]: event.target.value,
    });
    if (params[SearchParam.Offset]) newParams.set(SearchParam.Offset, '0');
    setSearchParams(newParams);
  };

  return (
    <StyledFieldset>
      <Tab
        checked={
          !params[SearchParam.Filter] || params[SearchParam.Filter] === 'all'
        }
        name={SearchParam.Filter}
        onChange={handleClick}
      >
        all
      </Tab>

      {genres.slice(0, 4).map((item) => (
        <Tab
          key={item.id}
          checked={params[SearchParam.Filter] === item.name}
          name={SearchParam.Filter}
          onChange={handleClick}
        >
          {item.name}
        </Tab>
      ))}
    </StyledFieldset>
  );
}
