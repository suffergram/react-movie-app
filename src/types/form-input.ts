export interface FormInput {
  id?: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: Array<string>;
  runtime: number;
  overview: string;
}
