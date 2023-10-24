'use client';

import React, { PropsWithChildren } from 'react';
import { ErrorMessage } from './style';

type ErrorBoundaryProps = PropsWithChildren;

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorMessage>Something went wrong ☹</ErrorMessage>;
    }

    return children;
  }
}
