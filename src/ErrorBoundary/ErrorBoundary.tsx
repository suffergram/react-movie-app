import React, { ReactElement } from 'react';

import './style.css';

type ErrorBoundaryProps = {
  children: ReactElement
}

type ErrorBoundaryState = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
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
