import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = React.forwardRef(({ children = '╳', ...delegatedProps }, ref) => (
  <button type="button" {...delegatedProps} ref={ref}>
    {children}
  </button>
));

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: '╳',
};

export default Button;
