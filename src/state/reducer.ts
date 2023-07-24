import { AnyAction, Reducer } from 'redux';
import RootState from '../types/root-state';
import MovieListAction from './action-creators';
import { LOAD_MOVIES_AMOUNT } from './constants';

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

const {
  HandleMovies,
  HandleError,
  HandleLoading,
  HandleStopLoading,
  HandleFilter,
  HandleSort,
  HandleOffset,
  HandleUpdate,
} = MovieListAction;

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
    case HandleStopLoading: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          isLoading: false,
        },
      };
    }
    case HandleFilter: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          filter: action.payload,
          offset: 0,
        },
      };
    }
    case HandleSort: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          sort: action.payload,
        },
      };
    }
    case HandleOffset: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          offset: action.payload * LOAD_MOVIES_AMOUNT,
        },
      };
    }
    case HandleUpdate: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          movies: state.movieState.movies.map((movie) =>
            movie.id === action.payload.id
              ? {
                  ...movie,
                  title: action.payload.title,
                  release_date: action.payload.release_date,
                  genres: action.payload.genres,
                  runtime: action.payload.runtime,
                  poster_path: action.payload.poster_path,
                  vote_average: action.payload.vote_average,
                  overview: action.payload.overview,
                }
              : movie
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
