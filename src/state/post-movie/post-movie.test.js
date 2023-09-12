import { postMovie } from "./post-movie";
import { MovieService } from "../../services/movie-service";

const mockMovie = { id: 10 }

const mockMovieData = {
  data: [mockMovie],
  totalAmount: 1,
}

describe('Fetch Movies', () => {
  it('Calls dispatch 2 times', async () => {
    const dispatch = jest.fn();

    MovieService.createMovie = jest.fn();
    MovieService.getMovies = jest.fn().mockReturnValue(mockMovieData);

    await postMovie(mockMovie, { search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })

  it('Catches and dispatches an error', async () => {
    const dispatch = jest.fn();

    MovieService.getMovies = jest.fn();

    await postMovie(mockMovie, { search: 'the' })(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })
})
