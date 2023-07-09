import { Movie } from './movie';

type RootState = {
  movieState: {
    movies: Movie[];
    isLoading: boolean;
    error: string | undefined;
    filter: string;
    sort: string;
    totalAmount: number;
    offset: number;
  };
};

export default RootState;
