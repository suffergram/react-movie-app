import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('Renders button', () => {
    render(
      <Button />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});


