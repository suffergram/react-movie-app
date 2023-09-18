import { render, screen } from '@testing-library/react';
import { GenreSection } from './genre-section';

jest.mock('../../hooks/use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(() => ([{ filter: 'all' }])),
}))

const mockGenres = [
  { id: 0, name: '0' },
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
]

describe('Genre section', () => {
  it('Checks the first tab by default', () => {
    render(
      <GenreSection genres={mockGenres} />
    );

    const tabs = screen.getAllByRole('radio');

    expect(tabs[0]).toBeChecked();
  })
})