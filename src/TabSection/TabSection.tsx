import Tab from '../Tab/Tab';

interface Genre {
  id: number,
  name: string
}

export default function TabSection( // rename GenreSection
  { genres }:
  { genres: Genre[] },
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
