import Tab from '../Tab/Tab';

export default function TabSection({ genres }) {
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
