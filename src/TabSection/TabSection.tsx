import Tab from '../Tab/Tab';

interface itemObject {
  id: number,
  name: string
}

export default function TabSection(
  { genres }:
  { genres: itemObject[] },
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
