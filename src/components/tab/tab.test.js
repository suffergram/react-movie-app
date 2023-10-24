import { render, screen } from '@testing-library/react';
import { Tab } from './tab';

describe('Tab', () => {
  it('Has input element', () => {
    render(
      <Tab />
    );

    const input = screen.getByRole('radio');

    expect(input).toBeInTheDocument();
  });
});

