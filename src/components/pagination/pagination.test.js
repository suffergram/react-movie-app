import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => new URLSearchParams()),
  useRouter: jest.fn().mockImplementation(() => ({})),
  usePathname: jest.fn().mockImplementation(() => ''),
}));

describe('Pagination', () => {
  it('Has ul element', () => {
    render(
      <Pagination />
    );

    const ul = screen.getByRole('navigation');

    expect(ul).toBeInTheDocument();
  });
});


