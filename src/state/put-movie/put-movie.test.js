import { putMovie } from "./put-movie";
import { MovieService } from "../../services/movie-service";

const mockMovie = { id: 10 }

describe('Fetch Movies', () => {
  it('Calls dispatch 2 times', async () => {
    const dispatch = jest.fn();

    MovieService.updateMovie = jest.fn();

    await putMovie(mockMovie)(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })

  it('Catches and dispatches an error', async () => {
    const dispatch = jest.fn();

    MovieService.updateMovie = jest.fn().mockRejectedValue('');

    await putMovie(mockMovie)(dispatch, () => ({}));

    expect(dispatch).toHaveBeenCalledTimes(2);
  })
})
