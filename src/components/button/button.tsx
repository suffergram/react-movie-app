import React from 'react';
import { StyledButton } from './style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'add';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = '╳', variant, ...delegatedProps }, ref) => (
    <StyledButton
      type="button"
      ref={ref}
      $variant={variant}
      {...delegatedProps}
    >
      {children}
    </StyledButton>
  )
);
