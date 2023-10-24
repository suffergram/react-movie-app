import { render, screen } from '@testing-library/react';
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
});
