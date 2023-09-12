import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MoviePage, movieLoader } from './movie-page';
import { MovieService } from '../../services/movie-service';

const mockMovie = {
  id: 0,
  title: 'the movie',
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({}))
}));

describe('Movie page', () => {
  it('Has button in the document', () => {
    render(
      <MemoryRouter>
        <MoviePage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  })
});

describe('Movie loader', () => {
  it('Loads the movie', async () => {
    MovieService.getMovie = jest.fn().mockReturnValue(mockMovie);

    const movie = await movieLoader({ params: { movieId: 0 } })

    expect(movie.data).toStrictEqual({ movie: mockMovie });
  });
});