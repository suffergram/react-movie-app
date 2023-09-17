import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Popover } from './popover';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setState = jest.fn();

describe('Popover', () => {
  beforeEach(() => {
    useState.mockImplementation(init => [init, setState]);
  });

  it('Renders button', () => {
    render(
      <Popover />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Renders drop element with close button', async () => {
    useState.mockImplementationOnce(() => [true, setState]);

    render(
      <Popover />
    );

    const close = screen.getAllByRole('button')[1];

    expect(close).toBeInTheDocument();
  });

  it('Calls setState on button click', async () => {
    render(
      <Popover />
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(setState).toHaveBeenCalled();
  });
});
