import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

function TabSection({ genres }) {
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

TabSection.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default TabSection;
