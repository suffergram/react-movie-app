import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from './search-form';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';

jest.mock('../../hooks/use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(() => [{}]),
}));

describe('Search input', () => {
  it('Matches the snapshot', () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const searchInputElement = screen.getByRole('searchbox');

    expect(searchInputElement).toMatchSnapshot();
  });

  it('Must contain the entered value', async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const inputValue = 'the';
    const searchInputElement = screen.getByRole('searchbox');

    await userEvent.type(searchInputElement, inputValue);

    await waitFor(() => expect(searchInputElement).toHaveValue(inputValue));
  });
})

describe('Search button', () => {
  it('Matches the snapshot', () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const searchButtonElement = screen.getByRole('button');

    expect(searchButtonElement).toMatchSnapshot();
  });
})

describe('Search Form', () => {
  it('Handles input value on search button click', async () => {
    const setUserSearchParamsMock = jest.fn();

    useGetParams.mockImplementation(() => [{}, setUserSearchParamsMock]);

    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const inputValue = 'the';
    const searchInputElement = screen.getByRole('searchbox');
    const searchButtonElement = screen.getByRole('button');
    const expectedReturnValue = new URLSearchParams();

    expectedReturnValue.set('search', inputValue);

    await userEvent.type(searchInputElement, inputValue);
    await userEvent.click(searchButtonElement);

    expect(setUserSearchParamsMock).toHaveBeenCalledWith(expectedReturnValue);
  });
});

