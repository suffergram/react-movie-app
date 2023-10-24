import { ErrorBoundary } from '../components/error-boundary/error-boundary';
import { Layout } from '../components/layout/layout';
import StyledComponentsRegistry from '../lib/registry';
import '../style.css';

export const metadata = {
  title: 'Netflixroulette',
  description:
    'A web application for searching and managing movies, made for educational purposes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ErrorBoundary>
            <Layout>{children}</Layout>
          </ErrorBoundary>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
