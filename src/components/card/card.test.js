import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import userEvent from '@testing-library/user-event';
import { Card } from './card';

const mockMovie = {
  id: 5,
  title: 'title',
  tagline: 'tagline',
  vote_average: 5,
  vote_count: 5,
  release_date: '05.05.2020',
  poster_path: 'https://link.to',
  overview: 'overview',
  budget: 5,
  revenue: 5,
  genres: ['genre1', 'genre2'],
  runtime: 5,
};

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ children }) => children),
}));

jest.mock('../popover/popover', () => ({
  Popover: jest.fn(({ children }) => children),
}));

describe('Card', () => {
  it('Has an image', () => {
    useContext.mockImplementationOnce(() => ({
      handleModalOpen: jest.fn(),
    }));

    render(
      <Card movie={mockMovie} />
    );

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('Handles edit button click', async () => {
    const handler = jest.fn();
    useContext.mockImplementationOnce(() => ({
      handleModalOpen: handler,
    }));

    render(
      <Card movie={mockMovie} />
    );

    const editButton = screen.getByText(/edit/i);
    await userEvent.click(editButton);

    expect(handler).toHaveBeenCalled();
  });

  it('Handles delete button click', async () => {
    const handler = jest.fn();
    useContext.mockImplementationOnce(() => ({
      handleModalOpen: handler,
    }));

    render(
      <Card movie={mockMovie} />
    );

    const deleteButton = screen.getByText(/delete/i);
    await userEvent.click(deleteButton);

    expect(handler).toHaveBeenCalled();
  });
});


