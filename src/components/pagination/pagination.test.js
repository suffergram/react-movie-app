import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from './pagination';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 1),
}));

describe('Pagination', () => {
  it('Has ul element', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );

    const ul = screen.getByRole('navigation');

    expect(ul).toBeInTheDocument();
  });
});


