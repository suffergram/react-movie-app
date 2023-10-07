'use client';

import { ErrorPage } from '../pages/error-page/error-page';

type ErrorProps = {
  error?: Error & {
    cause?: Response;
  };
};

export default function Error({ error }: ErrorProps) {
  return <ErrorPage error={error} />;
}
