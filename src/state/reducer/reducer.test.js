import {
  handleErrorAction,
  handleLoadingAction,
  handleMoviesAction,
  handleUpdateAction,
} from '../action-creators';
import { reducer } from './reducer';

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

const mockState = {
  movieState: {
    movies: [],
    isLoading: false,
    error: undefined,
    totalAmount: 0,
  },
};

describe('Reducer', () => {
  it('Loads movies', () => {
    expect(
      reducer(
        {
          ...mockState,
        },
        handleMoviesAction({
          data: [mockMovie],
          totalAmount: 1,
        })
      )
    ).toStrictEqual({
      ...mockState,
      movieState: {
        ...mockState.movieState,
        movies: [mockMovie],
        totalAmount: 1,
      },
    });
  });

  it('Handles error', () => {
    expect(
      reducer(
        {
          ...mockState,
        },
        handleErrorAction('Not Found')
      )
    ).toStrictEqual({
      ...mockState,
      movieState: {
        ...mockState.movieState,
        error: 'Not Found',
      },
    });
  });

  it('Handles loading state', () => {
    expect(
      reducer(
        {
          ...mockState,
        },
        handleLoadingAction()
      )
    ).toStrictEqual({
      ...mockState,
      movieState: {
        ...mockState.movieState,
        isLoading: true,
      },
    });
  });

  it('Updates the movie', () => {
    expect(
      reducer(
        {
          ...mockState,
          movieState: {
            ...mockState.movieState,
            movies: [mockMovie, {
              ...mockMovie,
              id: 6,
            }],
          },
        },
        handleUpdateAction({
          ...mockMovie,
          title: 'new title',
        })
      )
    ).toEqual({
      ...mockState,
      movieState: {
        ...mockState.movieState,
        movies: [
          {
            ...mockMovie,
            title: 'new title',
          }, {
            ...mockMovie,
            id: 6,
          }
        ],
      },
    });
  });

  it('Handles missing type', () => {
    expect(
      reducer(mockState, () => ({
        type: 'mock type',
      }))
    ).toEqual(mockState);
  });

  it('Returns initial state', () => {
    expect(reducer(undefined, () => ({
      type: 'mock type',
    }))).toStrictEqual({
      movieState: {
        movies: [],
        isLoading: false,
        error: undefined,
        totalAmount: 0,
      },
    })
  });
});
