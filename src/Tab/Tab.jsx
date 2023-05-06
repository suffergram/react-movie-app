import PropTypes from 'prop-types';

function Tab({ children, defaultChecked }) {
  return (
    <div>
      <input
        className="radio"
        name="genre"
        type="radio"
        value={children}
        defaultChecked={defaultChecked}
      />

      {children}
    </div>
  );
}

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};

Tab.defaultProps = {
  defaultChecked: false,
};

export default Tab;
