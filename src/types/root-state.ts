import { Movie } from './movie';

export type RootState = {
  movieState: {
    movies: Movie[];
    isLoading: boolean;
    error: string | undefined;
    totalAmount: number;
  };
};
