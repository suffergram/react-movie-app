import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { ErrorContent } from './error-content';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({
    back: jest.fn(),
  }))
}));

describe('Error content component', () => {
  it('Renders error status', () => {
    const error = {
      message: 'Mock message',
      cause: {
        status: 400,
        statusText: 'Mock status text',
      },
    };

    render(
      <ErrorContent error={error} />
    );

    const errorStatus = screen.getByRole('heading', {
      level: 1,
    });

    expect(errorStatus).toBeInTheDocument();
  });

  it('Renders default status', () => {
    render(
      <ErrorContent />
    );

    const errorStatus = screen.getByRole('heading', {
      level: 1,
    });

    expect(errorStatus).toBeInTheDocument();
  });

  it('Handles button click', async () => {
    const mockBack = jest.fn();

    useRouter.mockImplementationOnce(() => ({ back: mockBack }));

    render(
      <ErrorContent />
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(mockBack).toHaveBeenCalled();
  });
});
