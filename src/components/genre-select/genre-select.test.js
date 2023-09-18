import { render, screen } from '@testing-library/react';
import { GenreSelect } from './genre-select';

describe('Genre select', () => {
  it('Has input element', () => {
    render(
      <GenreSelect />
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});

