import { AnyAction, Reducer } from 'redux';
import RootState from '../types/root-state';
import MovieListAction from './action-creators';

const initialState: RootState = {
  movieState: {
    movies: [],
    isLoading: false,
    error: undefined,
    filter: 'all',
    sort: 'release_date',
    totalAmount: 0,
    offset: 0,
  },
};

const { HandleMovies, HandleError, HandleLoading, HandleUpdate } =
  MovieListAction;

const reducer: Reducer<RootState, AnyAction> = (
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

export default reducer;
