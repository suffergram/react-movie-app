import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { Tab } from './tab';

jest.mock('../../hooks/use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(() => [{}]),
}));

describe('Tab', () => {
  it('Has input element', () => {
    render(
      <MemoryRouter>
        <Tab />
      </MemoryRouter>
    );

    const input = screen.getByRole('radio');

    expect(input).toBeInTheDocument();
  });

  it('Handles click', async () => {
    const setUserSearchParamsMock = jest.fn();
    useGetParams.mockImplementation(() => [{}, setUserSearchParamsMock]);

    render(
      <MemoryRouter>
        <Tab>
          All
        </Tab>
      </MemoryRouter>
    );

    const input = screen.getByRole('radio');
    await userEvent.click(input);

    const expectedReturnValue = new URLSearchParams();
    expectedReturnValue.set('filter', 'All');

    expect(setUserSearchParamsMock).toHaveBeenCalledWith(expectedReturnValue);
  });

  it('Sets exsiting offset to 0', async () => {
    const setUserSearchParamsMock = jest.fn();
    useGetParams.mockImplementation(() => [{ offset: '10' }, setUserSearchParamsMock]);

    render(
      <MemoryRouter>
        <Tab>
          All
        </Tab>
      </MemoryRouter>
    );

    const input = screen.getByRole('radio');
    await userEvent.click(input);

    const expectedReturnValue = new URLSearchParams();
    expectedReturnValue.set('offset', '0');
    expectedReturnValue.set('filter', 'All');

    expect(setUserSearchParamsMock).toHaveBeenCalledWith(expectedReturnValue);
  });
});

