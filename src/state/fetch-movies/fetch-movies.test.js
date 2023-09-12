import { fetchMovies } from "./fetch-movies";
import { MovieService } from "../../services/movie-service";

const mockMovieData = {
  data: [{ id: 10 }],
  totalAmount: 1,
}

describe('Fetch Movies', () => {
  it('Calls dispatch 2 times', async () => {
    const dispatch = jest.fn();

    MovieService.getMovies = jest.fn().mockReturnValue(mockMovieData);

    await fetchMovies({ search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })

  it('Catches and dispatches an error', async () => {
    const dispatch = jest.fn();

    MovieService.getMovies = jest.fn();

    await fetchMovies({ search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })
})
