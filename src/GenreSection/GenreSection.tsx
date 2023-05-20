import Tab from '../Tab/Tab';

interface Genre {
  id: number,
  name: string
}

type GenreSectionProps = {
  genres: Genre[]
};

export default function GenreSection(
  { genres }: GenreSectionProps,
) {
  return (
    <div className="results filter">
      <Tab defaultChecked>
        all
      </Tab>

      {
        genres.slice(
          0,
          4,
        ).map((item) => (
          <Tab key={item.id}>
            {item.name}
          </Tab>
        ))
      }
    </div>
  );
}
