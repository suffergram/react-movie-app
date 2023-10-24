import { Movie } from './movie';

export type MoviesDTO = {
  data: Array<Movie>;
  totalAmount: number;
};
