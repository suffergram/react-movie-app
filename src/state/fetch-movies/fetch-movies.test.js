import { fetchMovies } from "./fetch-movies";
import { MovieService } from "../../services/movie-service";
import * as actions from '../action-creators';

const mockMovieData = {
  data: [{ id: 10 }],
  totalAmount: 1,
};

describe('Fetch Movies', () => {
  it('Calls handleMoviesAction when the data is valid', async () => {
    const moviesAction = jest.spyOn(actions, 'handleMoviesAction');

    MovieService.getMovies = jest.fn().mockReturnValue(mockMovieData);

    await fetchMovies({ search: 'the' })(() => { }, () => ({}));

    expect(moviesAction).toHaveBeenCalled();
  });

  it('Calls handleErrorAction when the data is not valid', async () => {
    const errorAction = jest.spyOn(actions, 'handleErrorAction');

    MovieService.getMovies = jest.fn();

    await fetchMovies({ search: 'the' })(() => { }, () => ({}));

    expect(errorAction).toHaveBeenCalled();
  });
});
