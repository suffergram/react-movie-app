import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { AddForm } from './add-form';

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

describe('Add form', () => {
  beforeEach(() => {
    useContext.mockImplementationOnce(() => ({
      handleModalOpen: jest.fn(),
      handleModalClose: jest.fn(),
    }));
  });

  it('Renders form', () => {
    render(
      <AddForm />
    );

    const form = screen.getByLabelText('movie-form');

    expect(form).toBeInTheDocument();
  });
});