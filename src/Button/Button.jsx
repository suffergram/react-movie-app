import React from 'react';
import './style.css';

const Button = React.forwardRef(({ children = '╳', ...delegatedProps }, ref) => (
  <button type="button" {...delegatedProps} ref={ref}>
    {children}
  </button>
));

export default Button;
