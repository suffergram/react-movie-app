import { logger } from './logger';

describe('Logger', () => {
  it('Calls console log', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => { });
    const mockStore = {
      getState: jest.fn(),
    }
    const mockNext = jest.fn();
    const mockAction = {};

    logger(mockStore)(mockNext)(mockAction);

    expect(log).toHaveBeenCalled();

    log.mockRestore()
  });
});

