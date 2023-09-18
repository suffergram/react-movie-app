import { getUrlParams, calculateDuration } from "./utils";
import { LOAD_MOVIES_AMOUNT } from '../state/constants';

const caltulateParamsString = (params = {}) => {
  let expectedResultString = '';

  const paramsKeys = Object.keys(params);
  for (let i = 0; i < paramsKeys.length; i += 1) {
    const key = paramsKeys[i];
    let value = params[paramsKeys[i]];

    if (key === 'filter' && value === 'all') value = '';
    if (key === 'offset') value = (value * LOAD_MOVIES_AMOUNT).toString();
    expectedResultString += `${key}=${value}&`;
  }

  if (!params.sortBy) expectedResultString += 'sortBy=release_date&';
  if (params.filter) expectedResultString += 'searchBy=title&';

  expectedResultString += 'limit=9&sortOrder=desc';
  return expectedResultString;
};

describe('Utility getUrlParams', () => {
  it('Should return a string with no input parameters', () => {
    expect(getUrlParams()).toBe(caltulateParamsString());
  });

  it('Should return a string with url parameters', () => {
    const mockParams = {
      sortBy: 'title',
      filter: 'all',
      search: 'movie',
      offset: 1,
    };

    expect(getUrlParams(mockParams)).toBe(caltulateParamsString(mockParams));
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
