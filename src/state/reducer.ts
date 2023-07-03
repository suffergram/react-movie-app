import { AnyAction, Reducer } from 'redux';
import StateType from '../Types/StateType';

const initialState: StateType = {
  movies: [],
  isLoading: false,
  error: undefined,
  filter: 'all',
  sort: 'release_date',
  totalAmount: 0,
  offset: 0,
};

const reducer: Reducer<StateType, AnyAction> = (
  state: StateType = initialState,
  action: AnyAction
): StateType => {
  switch (action.type) {
    case 'handleMovies': {
      return {
        ...state,
        movies: action.payload.movies,
        totalAmount: action.payload.totalAmount,
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
        offset: 0,
      };
    }
    case 'handleSort': {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case 'handleOffset': {
      return {
        ...state,
        offset: action.payload * 9,
      };
    }
    default:
      return state;
  }
};

export default reducer;
