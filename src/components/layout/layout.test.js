import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './layout';

describe('Layout', () => {
  it('Has footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  })
})