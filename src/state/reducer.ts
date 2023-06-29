import { AnyAction, Reducer } from 'redux';
import { Movie } from '../Types/MovieTypes';

export type StateType = {
  movies: Movie[];
  isLoading: boolean;
  error: string | undefined;
  filter: string;
};

const initialState: StateType = {
  movies: [],
  isLoading: false,
  error: undefined,
  filter: 'all',
};

const reducer: Reducer<StateType, AnyAction> = (
  state: StateType = initialState,
  action: AnyAction
): StateType => {
  switch (action.type) {
    case 'handleMovies': {
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        isLoading: false,
      };
    }
    case 'handleError': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case 'handleLoading': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'handleFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
