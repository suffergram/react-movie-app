import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import { SearchParam } from '../../types/search-param';
import { useGetParams } from './use-get-params';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => new URLSearchParams()),
  useRouter: jest.fn().mockImplementation(() => ({})),
  usePathname: jest.fn().mockImplementation(() => ''),
}));

const mockParams = {
  [SearchParam.Search]: 'test',
  [SearchParam.Filter]: 'test',
  [SearchParam.SortBy]: 'test',
  [SearchParam.Offset]: 'test',
};

describe('useGetParams', () => {
  it('Returns an empty object if there are no search parameters', () => {
    useSearchParams.mockImplementationOnce(() => new URLSearchParams());

    const { result } = renderHook(() => useGetParams());

    expect(result.current[0]).toStrictEqual({});
  });

  it('Returns an object with existing search parameters', () => {
    const params = new URLSearchParams();
    params.set(SearchParam.Search, mockParams[SearchParam.Search]);
    params.set(SearchParam.Filter, mockParams[SearchParam.Filter]);
    params.set(SearchParam.SortBy, mockParams[SearchParam.SortBy]);
    params.set(SearchParam.Offset, mockParams[SearchParam.Offset]);

    useSearchParams.mockImplementation(() => params);

    const { result } = renderHook(() => useGetParams());

    expect(result.current[0]).toStrictEqual(mockParams);
  });
});
