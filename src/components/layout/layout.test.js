import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Layout', () => {
  it('Has footer', () => {
    render(
      <Layout />
    );

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });
});