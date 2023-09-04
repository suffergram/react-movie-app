import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import { store } from './state/store';

import './style.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
