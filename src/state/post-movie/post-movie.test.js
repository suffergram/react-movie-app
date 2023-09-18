import { postMovie } from "./post-movie";
import { MovieService } from "../../services/movie-service";
import * as actions from '../action-creators';

const mockMovie = { id: 10 };

const mockMovieData = {
  data: [mockMovie],
  totalAmount: 1,
};

describe('Fetch Movies', () => {
  it('Calls handleMoviesAction when the data is valid', async () => {
    const moviesAction = jest.spyOn(actions, 'handleMoviesAction');

    MovieService.createMovie = jest.fn();
    MovieService.getMovies = jest.fn().mockReturnValue(mockMovieData);

    await postMovie(mockMovie, { search: 'the' })(() => { }, () => ({}));

    expect(moviesAction).toHaveBeenCalled();
  });

  it('Calls handleErrorAction when the data is not valid', async () => {
    const errorAction = jest.spyOn(actions, 'handleErrorAction');

    MovieService.getMovies = jest.fn();

    await postMovie(mockMovie, { search: 'the' })(() => { }, () => ({}));

    expect(errorAction).toHaveBeenCalled();
  });
});
