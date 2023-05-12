import PropTypes from 'prop-types';

function SortSection({ sort }) {
  return (
    <div className="results sort">
      <p>
        SORT BY
      </p>

      <select>
        {sort.map((item) => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}

        {/* <div className="arrow">▼</div> */}
      </select>
    </div>
  );
}

SortSection.propTypes = {
  sort: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default SortSection;
