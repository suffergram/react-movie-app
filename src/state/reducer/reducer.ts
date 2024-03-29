import { AnyAction, Reducer } from 'redux';
import { RootState } from '../../types/root-state';
import { MovieListAction } from '../constants';

const initialState: RootState = {
  movieState: {
    movies: [],
    isLoading: false,
    error: undefined,
    totalAmount: 0,
  },
};

const { HandleMovies, HandleError, HandleLoading, HandleUpdate } =
  MovieListAction;

export const reducer: Reducer<RootState, AnyAction> = (
  state: RootState = initialState,
  action: AnyAction
): RootState => {
  switch (action.type) {
    case HandleMovies: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          movies: action.payload.movies,
          totalAmount: action.payload.totalAmount,
          isLoading: false,
        },
      };
    }
    case HandleError: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          error: action.payload,
          isLoading: false,
        },
      };
    }
    case HandleLoading: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          isLoading: true,
        },
      };
    }
    case HandleUpdate: {
      const {
        payload: {
          id,
          title,
          releaseDate,
          genres,
          runtime,
          posterPath,
          voteAverage,
          overview,
        },
      } = action;
      return {
        ...state,
        movieState: {
          ...state.movieState,
          movies: state.movieState.movies.map((movie) =>
            movie.id === id
              ? {
                  ...movie,
                  title,
                  releaseDate,
                  genres,
                  runtime,
                  posterPath,
                  voteAverage,
                  overview,
                }
              : movie
          ),
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
};
