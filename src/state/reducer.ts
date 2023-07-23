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
    default:
      return state;
  }
};

export default reducer;
