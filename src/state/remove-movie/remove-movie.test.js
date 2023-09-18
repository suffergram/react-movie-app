import { removeMovie } from "./remove-movie";
import { MovieService } from "../../services/movie-service";
import * as actions from '../action-creators';

describe('Fetch Movies', () => {
  it('Calls handleMoviesAction when the data is valid', async () => {
    const moviesAction = jest.spyOn(actions, 'handleMoviesAction');

    MovieService.deleteMovie = jest.fn();
    MovieService.getMovies = jest.fn().mockReturnValue({});

    await removeMovie(1, { search: 'the' })(() => { }, () => ({}));

    expect(moviesAction).toHaveBeenCalled();
  });

  it('Calls handleErrorAction when the data is not valid', async () => {
    const errorAction = jest.spyOn(actions, 'handleErrorAction');

    MovieService.deleteMovie = jest.fn().mockRejectedValue('');
    MovieService.getMovies = jest.fn().mockReturnValue({});

    await removeMovie(1, { search: 'the' })(() => { }, () => ({}));

    expect(errorAction).toHaveBeenCalled();
  });
});
