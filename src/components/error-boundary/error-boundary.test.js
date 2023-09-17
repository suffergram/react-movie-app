import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './error-boundary';

describe('Error boundary', () => {
  it('Renders element', () => {
    render(
      <ErrorBoundary>
        <button type='button'>OK</button>
      </ErrorBoundary>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Renders error message', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => { })

    const ThrowError = () => {
      throw new Error('Test');
    };

    render(
      <ErrorBoundary fallback={<ErrorBoundary />}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByRole('heading')).toBeVisible();

    spy.mockRestore()
  });
});
