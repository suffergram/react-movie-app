import { render, screen, waitFor } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { EditForm } from './edit-form';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockMovie = {
  id: 1,
  title: 'title',
  genres: ['genre1'],
  release_date: '2020-02-02',
  runtime: 1,
}

describe('Edit form', () => {
  it('Renders form', () => {
    useContext.mockImplementationOnce(() => ({
      handleModalClose: jest.fn(),
    }));

    render(
      <EditForm />
    );

    const form = screen.getByLabelText('movie-form');

    expect(form).toBeInTheDocument();
  });

  it('Calls dispatch on submit button click', async () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementationOnce(() => dispatch);
    useContext.mockImplementationOnce(() => ({
      handleModalClose: jest.fn(),
      modal: {
        name: 'edit',
        data: mockMovie,
      },
    }));

    render(
      <EditForm />
    );

    const submit = screen.getByText(/submit/i);
    await userEvent.click(submit);

    await waitFor(() => expect(dispatch).toHaveBeenCalledTimes(1));
  });
});
