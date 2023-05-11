import React from 'react';

import './style.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  ...delegatedProps
}, ref) => (
  <button type="button" ref={ref} {...delegatedProps}>
    {children}
  </button>
));

Button.defaultProps = {
  children: '╳',
};

export default Button;
