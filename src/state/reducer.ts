import { AnyAction, Reducer } from 'redux';
import RootState from '../Types/RootState';
import reducerActions from './reducerActions';

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
  HANDLE_MOVIES,
  HANDLE_ERROR,
  HANDLE_LOADING,
  HANDLE_FILTER,
  HANDLE_SORT,
  HANDLE_OFFSET,
} = reducerActions;

const reducer: Reducer<RootState, AnyAction> = (
  state: RootState = initialState,
  action: AnyAction
): RootState => {
  switch (action.type) {
    case HANDLE_MOVIES: {
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
    case HANDLE_ERROR: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          error: action.payload,
          isLoading: false,
        },
      };
    }
    case HANDLE_LOADING: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          isLoading: true,
        },
      };
    }
    case HANDLE_FILTER: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          filter: action.payload,
          offset: 0,
        },
      };
    }
    case HANDLE_SORT: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          sort: action.payload,
        },
      };
    }
    case HANDLE_OFFSET: {
      return {
        ...state,
        movieState: {
          ...state.movieState,
          offset: action.payload * 9,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
