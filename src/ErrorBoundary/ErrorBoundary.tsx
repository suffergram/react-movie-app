import React, { PropsWithChildren } from 'react';

import './style.css';

type ErrorBoundaryState = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
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
      return (
        <h1 className="error-message">
          Something went wrong ☹
        </h1>
      );
    }

    return children;
  }
}
