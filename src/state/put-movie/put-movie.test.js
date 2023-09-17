import { putMovie } from "./put-movie";
import { MovieService } from "../../services/movie-service";
import * as actions from '../action-creators';

const mockMovie = { id: 10 };

describe('Fetch Movies', () => {
  it('Calls handleUpdateAction when the data is valid', async () => {
    const updateAction = jest.spyOn(actions, 'handleUpdateAction');

    MovieService.updateMovie = jest.fn();

    await putMovie(mockMovie)(() => { }, () => ({}));

    expect(updateAction).toHaveBeenCalled();
  });

  it('Calls handleErrorAction when the data is not valid', async () => {
    const errorAction = jest.spyOn(actions, 'handleErrorAction');

    MovieService.updateMovie = jest.fn().mockRejectedValue('');

    await putMovie(mockMovie)(() => { }, () => ({}));

    expect(errorAction).toHaveBeenCalled();
  });
});
