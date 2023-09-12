import { removeMovie } from "./remove-movie";
import { MovieService } from "../../services/movie-service";

describe('Fetch Movies', () => {
  it('Calls dispatch 2 times', async () => {
    const dispatch = jest.fn();

    MovieService.deleteMovie = jest.fn();
    MovieService.getMovies = jest.fn().mockReturnValue({});

    await removeMovie(1, { search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })

  it('Catches and dispatches an error', async () => {
    const dispatch = jest.fn();

    MovieService.deleteMovie = jest.fn().mockRejectedValue('');
    MovieService.getMovies = jest.fn().mockReturnValue({});

    await removeMovie(1, { search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })
})
