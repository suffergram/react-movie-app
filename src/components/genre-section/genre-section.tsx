import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';
import { Tab } from '../tab/tab';

interface Genre {
  id: number;
  name: string;
}

type GenreSectionProps = {
  genres: Genre[];
};

export function GenreSection({ genres }: GenreSectionProps) {
  const [{ [SearchParam.Filter]: filter }] = useGetParams();

  return (
    <div className="results filter">
      <Tab checked={!filter || filter === 'all'}>all</Tab>

      {genres.slice(0, 4).map((item) => (
        <Tab key={item.id} checked={filter === item.name}>
          {item.name}
        </Tab>
      ))}
    </div>
  );
}
