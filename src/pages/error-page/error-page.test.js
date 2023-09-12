import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { ErrorPage } from './error-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useAsyncError: jest.fn().mockReturnValueOnce({
    message: 'Mock message',
    cause: {
      status: 400,
      statusText: 'Mock status text',
    },
  }),
  useNavigate: jest.fn(),
}));

describe('Error page', () => {
  it('Renders status', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const errorStatus = screen.getByRole('heading', {
      level: 1,
    })

    expect(errorStatus).toBeInTheDocument();
  });

  it('Renders default status', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const errorStatus = screen.getByRole('heading', {
      level: 1,
    })

    expect(errorStatus).toBeInTheDocument();
  });

  it('Handles button click', async () => {
    const navigate = jest.fn();

    useNavigate.mockImplementation(() => navigate);

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(navigate).toHaveBeenCalled();
  })
});
