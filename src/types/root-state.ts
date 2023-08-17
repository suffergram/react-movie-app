import { Movie } from './movie';

type RootState = {
  movieState: {
    movies: Movie[];
    isLoading: boolean;
    error: string | undefined;
    totalAmount: number;
  };
};

export default RootState;
