import React from 'react';
import './style.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
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

export default ErrorBoundary;
