import React from 'react';
import './style.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = '╳', ...delegatedProps }, ref) => (
    <button type="button" ref={ref} {...delegatedProps}>
      {children}
    </button>
  )
);

export default Button;
