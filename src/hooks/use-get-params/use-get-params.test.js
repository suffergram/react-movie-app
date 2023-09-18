import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import { SearchParam } from '../../types/search-param';
import { useGetParams } from './use-get-params';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

const mockParams = {
  [SearchParam.Search]: 'test',
  [SearchParam.Filter]: 'test',
  [SearchParam.SortBy]: 'test',
  [SearchParam.Offset]: 'test',
}

describe('useGetParams', () => {
  it('Returns an empty object if there are no search parameters', () => {
    useSearchParams.mockImplementation(() => [
      new URLSearchParams,
      jest.fn(),
    ]);

    const { result } = renderHook(() => useGetParams());

    expect(result.current[0]).toStrictEqual({});
  });

  it('Returns an object with existing search parameters', () => {
    const params = new URLSearchParams();
    params.set(SearchParam.Search, mockParams[SearchParam.Search]);
    params.set(SearchParam.Filter, mockParams[SearchParam.Filter]);
    params.set(SearchParam.SortBy, mockParams[SearchParam.SortBy]);
    params.set(SearchParam.Offset, mockParams[SearchParam.Offset]);

    useSearchParams.mockImplementation(() => [
      params,
      jest.fn(),
    ]);

    const { result } = renderHook(() => useGetParams());

    expect(result.current[0]).toStrictEqual(mockParams);
  });
});
