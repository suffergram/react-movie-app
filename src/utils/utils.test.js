import { getUrlParams, calculateDuration } from "./utils";
import { LOAD_MOVIES_AMOUNT } from '../state/constants';

const mockOffset = 1;

describe('Utility getUrlParams', () => {
  it('Should return a string with no input parameters', () => {
    expect(getUrlParams()).toBe('sortBy=release_date&limit=9&sortOrder=desc');
  });

  it('Should return a string with sortBy parameter', () => {
    expect(getUrlParams({ sortBy: 'title' })).toBe('sortBy=title&limit=9&sortOrder=desc');
  });

  it('Should return a string with filter parameter', () => {
    expect(getUrlParams({ filter: 'all' })).toBe('filter=&sortBy=release_date&limit=9&sortOrder=desc');
  });

  it('Should return a string with search and searchBy parameters', () => {
    expect(getUrlParams({ search: 'movie' })).toBe('search=movie&sortBy=release_date&searchBy=title&limit=9&sortOrder=desc');
  });

  it(`Should return a string with offset parameter multiplied by ${LOAD_MOVIES_AMOUNT}`, () => {
    expect(getUrlParams({ offset: mockOffset.toString() })).toBe(`offset=${mockOffset * LOAD_MOVIES_AMOUNT}&sortBy=release_date&limit=9&sortOrder=desc`);
  });
});

describe('Utility calculateDuration', () => {
  it('Should return a string "0h 0min" when the duration is 0', () => {
    expect(calculateDuration(0)).toBe('0h 0min');
  });

  it('Should return a string with \'unexpected runtime\' message when the deuration is lower than 0', () => {
    expect(calculateDuration(-1)).toBe('unexpected runtime');
  });
});
