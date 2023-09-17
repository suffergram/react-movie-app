import { renderHook } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoadMovies } from './use-load-movies';
import { useGetParams } from './use-get-params/use-get-params';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('./use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(),
}));

const mockState = {
  movies: [],
  isLoading: false,
  error: undefined,
  totalAmount: 0,
}

describe('useLoadMovies', () => {
  it('Returns movie data', () => {
    useSelector.mockImplementation(() => mockState);
    useDispatch.mockImplementation(() => jest.fn());
    useGetParams.mockImplementation(() => [{}]);

    const { result } = renderHook(() => useLoadMovies());

    expect(result.current).toStrictEqual(mockState);
  });
});
