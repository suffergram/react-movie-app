import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './home-page';

jest.mock('../../hooks/use-load-movies/use-load-movies', () => ({
  useLoadMovies: jest.fn(() => ({
    movies: []
  })),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => (() => { })),
  useSelector: jest.fn(() => 0),
}));

jest.mock('../../hooks/use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(() => [{
    offset: '-1',
  }, jest.fn()]),
}));

describe('Home page', () => {
  it('Has header element', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  })

  it('Has main element', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  })
})
