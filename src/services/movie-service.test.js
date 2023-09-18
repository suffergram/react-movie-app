import fetchMock from 'jest-fetch-mock';
import { MovieService } from "./movie-service";

const mockMovie = {
  id: 5,
  title: 'title',
  tagline: 'tagline',
  vote_average: 5,
  vote_count: 5,
  release_date: '05.05.2020',
  poster_path: 'https://link.to',
  overview: 'overview',
  budget: 5,
  revenue: 5,
  genres: ['genre1', 'genre2'],
  runtime: 5,
};

const mockResponse = {
  totalAmount: 0,
  data: [],
  offset: 0,
  limit: 20,
};

describe('Host name', () => {
  it('Corresponds to localhost', () => {
    expect(MovieService.host).toBe('http://localhost:4000/movies');
  })
})

describe('Get movies', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('Returns response with movies data', async () => {
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
      ok: true,
    }
    );

    const response = await MovieService.getMovies();

    expect(response).toBe(mockResponse);
  })

  it('Throws an error if bad response', async () => {
    try {
      fetchMock.mockResolvedValueOnce({
        ok: false,
      }
      );

      await MovieService.getMovies();
    } catch (error) {
      expect(error).toStrictEqual(new Error('Bad Response'));
    }
  })
})

describe('Create movie', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('Returns response with movies data', async () => {
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({
        ...mockResponse,
        data: [mockMovie]
      }),
      ok: true,
    }
    );

    const response = await MovieService.createMovie(mockMovie);

    expect(response).toStrictEqual({
      ...mockResponse,
      data: [mockMovie]
    });
  })

  it('Throws an error if bad response', async () => {
    try {
      fetchMock.mockResolvedValueOnce({
        ok: false,
      }
      );

      await MovieService.createMovie(mockMovie);
    } catch (error) {
      expect(error).toStrictEqual(new Error('Bad Response'));
    }
  })
})

describe('Update movie', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('Returns response with movies data', async () => {
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({
        ...mockResponse,
        data: [mockMovie]
      }),
      ok: true,
    }
    );

    const response = await MovieService.updateMovie(mockMovie);

    expect(response).toStrictEqual({
      ...mockResponse,
      data: [mockMovie]
    });
  })

  it('Throws an error if bad response', async () => {
    try {
      fetchMock.mockResolvedValueOnce({
        ok: false,
      }
      );

      await MovieService.updateMovie(mockMovie);
    } catch (error) {
      expect(error).toStrictEqual(new Error('Bad Response'));
    }
  })
})

describe('Delete movie', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('Returns response with movies data', async () => {
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
      ok: true,
    }
    );

    const response = await MovieService.deleteMovie(5);

    expect(response).toBe(mockResponse);
  })

  it('Throws an error if bad response', async () => {
    try {
      fetchMock.mockResolvedValueOnce({
        ok: false,
      }
      );

      await MovieService.deleteMovie(5);
    } catch (error) {
      expect(error).toStrictEqual(new Error('Bad Response'));
    }
  })
})

describe('Get movie', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it('Returns response with movies data', async () => {
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({
        ...mockResponse,
        data: [mockMovie]
      }),
      ok: true,
    }
    );

    const response = await MovieService.getMovie(5);

    expect(response).toStrictEqual({
      ...mockResponse,
      data: [mockMovie]
    });
  })

  it('Throws an error if bad response', async () => {
    try {
      fetchMock.mockResolvedValueOnce({
        ok: false,
      }
      );

      await MovieService.deleteMovie(5);
    } catch (error) {
      expect(error).toStrictEqual(new Error(
        'Bad Response', {
        cause: mockResponse,
      }));
    }
  })
})
