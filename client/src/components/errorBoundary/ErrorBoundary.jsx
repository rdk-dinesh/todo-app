import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className= "error-boundary-container" >
                <h1>Something went wrong.</h1>
                    < p > { this.state.error?.toString() } </p>
                    < details style = {{ whiteSpace: 'pre-wrap' }
        }>
            { this.state.errorInfo?.componentStack }
            </details>
            </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
