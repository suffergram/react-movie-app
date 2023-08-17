import useGetParams from '../../hooks/use-get-params';
import Tab from '../tab/tab';

interface Genre {
  id: number;
  name: string;
}

type GenreSectionProps = {
  genres: Genre[];
};

export default function GenreSection({ genres }: GenreSectionProps) {
  const { filter } = useGetParams();

  return (
    <div className="results filter">
      <Tab defaultChecked={filter === null || filter === 'all'}>all</Tab>

      {genres.slice(0, 4).map((item) => (
        <Tab key={item.id} defaultChecked={filter === item.name}>
          {item.name}
        </Tab>
      ))}
    </div>
  );
}
