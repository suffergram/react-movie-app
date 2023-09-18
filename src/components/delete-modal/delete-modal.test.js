import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { DeleteModal } from './delete-modal';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../../hooks/use-get-params/use-get-params', () => ({
  useGetParams: jest.fn(() => [{}]),
}));

describe('Delete modal', () => {
  it('Has confirm button', () => {
    useContext.mockImplementationOnce(() => ({
      handleModalClose: jest.fn(),
    }));

    render(
      <DeleteModal isModalOpen />
    );

    const confirm = screen.getByText(/confirm/i);

    expect(confirm).toBeInTheDocument();
  });

  it('Calls dispatch on confirm button click', async () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    useContext.mockImplementationOnce(() => ({
      handleModalClose: jest.fn(),
      modal: {
        name: 'delete',
        data: {
          id: 1,
        }
      },
    }));

    render(
      <DeleteModal isModalOpen />
    );

    const confirm = screen.getByText(/confirm/i);
    await userEvent.click(confirm);

    expect(dispatch).toHaveBeenCalled();
  });

  it('Will not call dispatch with invalid modal data', async () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    useContext.mockImplementationOnce(() => ({
      handleModalClose: jest.fn(),
      modal: {
        name: 'edit',
      },
    }));

    render(
      <DeleteModal isModalOpen />
    );

    const confirm = screen.getByText(/confirm/i);
    await userEvent.click(confirm);

    expect(dispatch).not.toHaveBeenCalled();
  });
});
