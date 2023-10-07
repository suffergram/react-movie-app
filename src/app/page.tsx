'use client';

import { Provider } from 'react-redux';
import { ErrorBoundary } from '../components/error-boundary/error-boundary';
import { store } from '../state/store';
import { HomePage } from '../pages/home-page/home-page';
import { Layout } from '../components/layout/layout';

export default function Page() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <HomePage />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
}
