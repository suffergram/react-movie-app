import { Movie } from './MovieTypes';

type StateType = {
  movies: Movie[]; // TODO: change to object
  isLoading: boolean;
  error: string | undefined;
  filter: string;
  sort: string;
  totalAmount: number;
  offset: number;
};

export default StateType;
