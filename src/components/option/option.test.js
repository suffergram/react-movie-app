import { render, screen } from '@testing-library/react';
import { Option } from './option';

describe('Option', () => {
  it('Has checkbox', () => {
    render(
      <Option />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});


